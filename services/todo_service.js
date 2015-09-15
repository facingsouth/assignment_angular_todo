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

});