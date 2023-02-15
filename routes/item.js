var express = require('express');
var router = express.Router();
var fs = require('fs'); 

let data = JSON.parse(fs.readFileSync('./public/catalog/catalog.json', "utf8"));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});

router.get('/:id', function(req , res){
  var molfiles = fs.readdirSync('./public/molfiles/')

  for(let i = 0; i < molfiles.length; i++){
    molfiles[i] = molfiles[i].replace('.mol', '');
  }
  if(molfiles.includes(req.params.id)){
    if(!data[req.params.id].hasOwnProperty('name')){
      data[req.params.id].name = 'No name in catalog';
      data[req.params.id].formula = 'No formula in catalog';
    }
    var molfile = fs.readFileSync('./public/molfiles/'+req.params.id+'.mol', 'utf8');
    res.render('item', {
      title: 'Molecule Viewer: '+ req.params.id, 
      item: req.params.id, 
      molfile: molfile,
      name: data[req.params.id].name,
      formula: data[req.params.id].formula,
    });
  }else{
    res.render('error', {title: 'Error', message: 'Molecule not found', error: {status: 404, stack: ''}});
  }
});

module.exports = router;
