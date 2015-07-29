var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http){
	console.log('hello world from controller');

var refresh = function(){
  $http.get('/todoList').success(function(res){
    console.log(res);
    $scope.tasks = res;
    $scope.task = "";
  });
}

refresh();

$scope.addToDo = function(){
  console.log($scope.task);
  $http.post('/todoList', $scope.task).success(function(res){
    console.log(res);
    refresh();
  });
}

$scope.removeToDo = function(id){
  console.log(id);  

  $http.delete('/todoList/' + id).success(function(res){
    refresh();
  });

}

}])