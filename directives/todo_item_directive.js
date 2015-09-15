todo.directive("todoItemDirective", function(){
  
  return {
    templateUrl: "directives/todo_item.html",
    restrict: "A",
    scope: {
      item: "=",
      completedMsg: "&",
      deleteItem: "&"
    }
  };
});