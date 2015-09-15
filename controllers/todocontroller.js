todo.controller('TodoCtrl', [
  '$scope',
  '$window',
  function($scope, $window){
    $scope.text = "";
    $scope.dueDate = new Date();

    $scope.item = { text: "Get groceries from the store",
                    dueDate: new Date(),
                    completed: false };
    $scope.items = [
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

    $scope.completedMsg = function(completed) {
      if(completed) {
        return "Completed."
      } else {
        return "Not Completed. One day this will be a checkbox."
      }
    };

    $scope.popAlert = function() {
      console.log($scope.text);
      console.log($scope.dueDate);
      $window.alert("Created a ToDo");
    }
  }
])