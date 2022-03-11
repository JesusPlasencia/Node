const sass = require('node-sass'),
  glob = require('glob'),
  path = require('path'),
  fs = require('fs');

let src = 'sass/*.scss',
  dest = 'css/';

glob(src, (err, files) => {
    if(err) console.log(`Error ${error}`);
    files.forEach((file) => {
    sass.render({ file: file }, (error, result) => {
      if(error) console.log(`Error ${error}`);
      let outFile = (path.basename(file)).replace('.scss', '.css');
      fs.writeFile(dest + outFile, result.css, catchError);
      console.log('Compiled: ' + outFile);
      
    });
  });
});