todo.factory('todoService', function(){

  var obj = {};

  _items = [
      { text: "Get groceries from the store",
                    dueDate: new Date(),
                    completed: false },
      { text: "Learn Angular",
                    dueDate: new Date(),
                    completed: false },
      { text: "Build app",
                    dueDate: new Date(),
                    completed: false },
      { text: "Walk dog",
                    dueDate: new Date(),
                    completed: false }
  ];

  obj.allItems = function(){
    return _items;
  };

  obj.get = function(i){
        return _items[i];
  };

  obj.createItem = function(text, date){
    var newItem = {
                    text: text,
                    dueDate: date,
                    completed: false
                  };
    
    _items.push(newItem);
  };

  obj.deleteItem = function(index) {
      _items.splice(index, 1);
  };

  obj.clearCompleted = function(){
    var counter = 0;
    
    while( counter < _items.length ){
      if( _items[counter].completed ){
        _items.splice(counter, 1);
      }
      else {
        counter++;
      }
    }
  };

  return obj;
});

















