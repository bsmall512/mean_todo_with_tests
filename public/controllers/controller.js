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

$scope.add = function(){
  console.log($scope.task);
  $http.post('/todoList', $scope.task).success(function(res){
    console.log(res);
    refresh();
  });
}

$scope.remove = function(id){
  console.log(id + 'yep');  

  $http.delete('/todoList/' + id).success(function(res){
    refresh();
  });
}

$scope.edit = function(id){
  console.log(id);
  $http.get('/todoList/' + id).success(function(res){
    $scope.task = res;
  });
}

$scope.update = function(){
  console.log($scope.task._id);
  $http.put('/todoList/' + $scope.task._id, $scope.task).success(function(res){
    refresh();
  })
}



}])