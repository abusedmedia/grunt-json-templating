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

  grunt.registerMultiTask('json_templating', 'Create multiple static files based on json array', function() {
    
    var options = this.options({data: null, field_for_filename:'filename', extension:'html'});

    var data = options.data;

    this.files.forEach(function(f) {

      for(var i=0; i<data.length; ++i){

        var ob = data[i];
        
        var src = f.src[0];

        var filename = ob[options.field_for_filename]
        
        var dest = path.join(f.dest, filename + '.' + options.extension);
        
        grunt.file.copy(src, dest);
        
        var file = grunt.file.read(dest);

        file = grunt.template.process(file, {data: ob});
        
        grunt.file.write(dest, file);

        grunt.log.writeln('File "' + dest + '" created.');

      }

    });
  });

};
