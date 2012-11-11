define([
  "app",
  "backbone",
  "modules/todo/view",
  "../../vendor/js/libs/backbone-localstorage"
  ],

  function(app, Backbone, Views) {

    var Todo = app.module();

// Todo model
 
    Todo.Model = Backbone.Model.extend({
      defaults: {
        done: false
      },

      toggle: function() {
        this.save({
          done: !this.get("done")
        });
      },

      clear: function() {
        this.destroy();
      },
      validate: function(attrs) {
        if (!attrs.content) {
          return "Missing content for todo item.";
        }
      }
    });

// Todo collection

  Todo.List = Backbone.Collection.extend({

    Model: Todo.Model,

    localStorage: new Store("tdos-backbone"),

    done: function() {
      return this.filter(function(todo) {
        return todo.get('done'); 
      });
    }
  })

    console.log(Todo)

    return Todo;
  });