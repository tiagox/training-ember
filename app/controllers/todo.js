import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editTodo: function () {
      this.get('model').set('isEditing', true);
    },
    acceptChanges: function () {
      this.get('model').set('isEditing', false);

      if (Ember.isEmpty(this.model.get('title'))) {
        this.send('removeTodo');
      } else {
        this.get('model').save();
      }
    },
    removeTodo: function () {
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  }
});
