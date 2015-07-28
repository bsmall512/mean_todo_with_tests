var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http){
	console.log('hello world from controller');
}])