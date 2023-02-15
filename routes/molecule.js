var express = require('express');
var router = express.Router();
var fs = require('fs'); 

let data = JSON.parse(fs.readFileSync('./public/catalog/catalog.json', "utf8"));


router.get('/', function(req, res, next) {
  res.render('molecule', { title: 'Molecule Viewer Test', testJSON: {name: 'test'}});
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
    res.render('molecule', { 
      title: 'ChemAR Viewer - Molecule: ' +data[req.params.id].name + " - Chemspider ID:" + req.params.id, 
      itemNum: req.params.id, 
      molfile: molfile, 
      name: data[req.params.id].name,
      formula: data[req.params.id].formula
    });
  }else{
    res.render('error', {title: 'Error', message: 'Molecule not found', error: {status: 404, stack: ''}});
  }
});

module.exports = router;
