var express = require('express');
var router = express.Router();
var fs = require('fs'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('molecule', { title: 'Molecule Viewer Test', testJSON: {name: 'test'}});
});

router.get('/:id', function(req , res){
  var molfiles = fs.readdirSync('./public/molfiles/')
  for(let i = 0; i < molfiles.length; i++){
    molfiles[i] = molfiles[i].replace('.mol', '');
  }
  if(molfiles.includes(req.params.id)){
    var molfile = fs.readFileSync('./public/molfiles/'+req.params.id+'.mol', 'utf8');
    res.render('molecule', {title: 'Molecule Viewer: '+ req.params.id, itemNum:req.params.id, molfile: molfile, testJSON: {name: 'test'}});
  }else{
    res.render('error', {title: 'Error', message: 'Molecule not found', error: {status: 404, stack: ''}});
  }
});

module.exports = router;
