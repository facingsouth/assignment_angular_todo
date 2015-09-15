todo.controller('TodoCtrl', [
  '$scope',
  '$window',
  'todoService',
  function($scope, $window, todoService){
    $scope.text = "";
    $scope.dueDate = new Date();
    $scope.hideCompleted = false;
    $scope.items = todoService.allItems();
    $scope.order = "";
    $scope.field = $scope.order.split("-")[0];
    $scope.reverse = $scope.order.split("-")[1] === "true";

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

    $scope.deleteItem = function(index) {
      todoService.deleteItem(index);
    };

    $scope.clearCompleted = function(){
      todoService.clearCompleted();
    };

    $scope.filterButtonText = function() {
      if ($scope.hideCompleted) {
        return "Show Completed";
      } else {
        return "Hide Completed";
      }
    };

    $scope.toggleHide = function() {
      $scope.hideCompleted = !$scope.hideCompleted;
    };

  }
]);












