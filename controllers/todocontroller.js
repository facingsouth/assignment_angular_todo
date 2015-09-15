todo.controller('TodoCtrl', [
  '$scope',
  '$window',
  'todoService',
  function($scope, $window, todoService){
    $scope.text = "";
    $scope.dueDate = new Date();
    $scope.hideCompleted = false;

    // $scope.items = [
    //   { text: "Get groceries from the store",
    //                 dueDate: new Date(),
    //                 completed: false },
    //   { text: "Learn Angular",
    //                 dueDate: new Date(),
    //                 completed: false },
    //   { text: "Build app",
    //                 dueDate: new Date(),
    //                 completed: false },
    //   { text: "Walk dog",
    //                 dueDate: new Date(),
    //                 completed: false }
    // ];

    $scope.completedMsg = function(completed) {
      if(completed) {
        return "Completed.";
      } else {
        return "Not Completed. One day this will be a checkbox.";
      }
    };

    $scope.popAlert = function() {
      todoService.createItem($scope.text, $scope.dueDate);
      $scope.text = "";
      $scope.dueDate = new Date();
    };

    // $scope.deleteItem = function(index) {
    //   $scope.items.splice(index, 1);
    // };

    // $scope.clearCompleted = function(){
    //   var counter = 0;
      
    //   while( counter < $scope.items.length ){
    //     if( $scope.items[counter].completed ){
    //       $scope.items.splice(counter, 1);
    //     }
    //     else {
    //       counter++;
    //     }
    //   }
    // };

    // $scope.filterButtonText = function() {
    //   if ($scope.hideCompleted) {
    //     return "Show Completed";
    //   } else {
    //     return "Hide Completed";
    //   }
    // };

    // $scope.toggleHide = function() {
    //   // if ($scope.hideCompleted) {
    //   //   $scope.hideCompleted = false;
    //   // } else {
    //   //   $scope.hideCompleted = true;
    //   // }
    //   $scope.hideCompleted = !$scope.hideCompleted;
    // };

  }
]);












