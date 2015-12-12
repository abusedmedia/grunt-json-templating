/*
 * grunt-json-templating
 * https://github.com/abused/grunt-json-templating
 *
 * Copyright (c) 2015 abusedmedia
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    json_templating: {

      test_1: {

        options: {
          data: [{filename:'John'}, {filename:'Hey'}],
          field_for_filename: 'filename',
          extension: 'html'
        },

        files: {
          'dest': 'test/template_1.html'
        }
      },

      test_2: {

        options: {
          data: [
                  {name:'John_Doe', title:'President', text:'some fake text'}, 
                  {name:'John_Other', title:'CEO', text:'some other fake text'}
                ],
          field_for_filename: 'name',
          extension: 'html'
        },

        files: {
          'dest': 'test/template_2.html'
        }
      }


    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['json_templating:test_1', 'json_templating:test_2']);

};
