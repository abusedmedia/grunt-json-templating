/*
 * grunt-json-templating
 * https://github.com/abused/grunt-json-templating
 *
 * Copyright (c) 2015 abusedmedia
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var path = require('path');
  var fs = require('fs');
  var _ = require('lodash');

  grunt.registerMultiTask('json_templating', 'The best Grunt plugin ever.', function() {
    
    var options = this.options({data: null, ext:'html'});
    var data = options.data;

    this.files.forEach(function(f) {

      for(var i=0; i<data.length; ++i){
        var ob = data[i];
        var src = f.src[0];
        var dest = path.join(f.dest, ob.filename +'.'+ options.ext);
        grunt.file.copy(src, dest);
        var file = grunt.file.read(dest);
        file = grunt.template.process(file, {data: ob});
        grunt.file.write(dest, file);
        grunt.log.writeln('File "' + dest + '" created.');
      }

    });
  });

};
