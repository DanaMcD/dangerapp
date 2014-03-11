var myApp = angular.module('myApp', []);

function GreetingCtrl($scope) {
	$scope.greeting = 'Hola!';
	$scope.hellos = [
		{language: 'choctaw', greetings: 'Halito'},
		{language: 'corsican', greetings: 'Salute'},
		{language: 'german', greetings: 'Servas'}
	];
}

	
function HelloCtrl($scope, $window) {	
	$scope.sayHello = function () {
    	$window.alert('HELLO!');
	};

}

function FavoriteCatCtrl($scope){
	$scope.favoriteCat='Vivian';
	}


