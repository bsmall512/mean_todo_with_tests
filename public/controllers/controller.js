var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http){
	console.log('hello world from controller');

	todo1 = {
		task : "Go to grocery store"
	};
	todo2 = {
		task : "Get haircut"
	};

	var tasks = [todo1, todo2];
  $scope.tasks = tasks;
}])