define([
  // Application.
  "app",
  "modules/todo"
],

function(app) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      link = document.createElement('a')
      $('body').append($(link).attr('href','http://google.com').text('Go to google'));
    }
  });

  return Router;

});
