
todo.filter('filterCompleted', function(){

  return function( collection, filterBool ) {
    if (filterBool) {
      var filteredCollection = [];
      angular.forEach( collection, function(ele) {
        if (!ele.completed) {
          filteredCollection.push(ele);
        }
      });
      return filteredCollection;
    } else {
      return collection;
    }
  }
})