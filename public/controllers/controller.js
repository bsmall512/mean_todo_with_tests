var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http){
	console.log('hello world from controller');

var refresh = function(){
  $http.get('/todoList').success(function(res){
    $scope.tasks = res;
    $scope.task = "";
  });
}

refresh();

$scope.add = function(){
  $http.post('/todoList', $scope.task).success(function(res){
    refresh();
  });
}

$scope.remove = function(id){
  $http.delete('/todoList/' + id).success(function(res){
    refresh();
  });
}

$scope.edit = function(id){
  $http.get('/todoList/' + id).success(function(res){
    $scope.task = res;
  });
}

$scope.update = function(){
  $http.put('/todoList/' + $scope.task._id, $scope.task).success(function(res){
    refresh();
  })
}



}])