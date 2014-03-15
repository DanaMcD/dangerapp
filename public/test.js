var myApp = angular.module('myApp', []);



function homePageCtrl($scope, $window, $http) {
    $scope.greeting = 'Hola!';

	
	$scope.hellos = [
		{language: 'choctaw', greetings: 'Halito'},
		{language: 'corsican', greetings: 'Salute'},
		{language: 'german', greetings: 'Servas'}
	];


	$scope.sayHello = function () {
    	$window.alert('HELLO!');
	};

	$scope.favoriteCat= 'Vivian';
	
	$scope.setFavoriteCatToPurrie = function () {
		favoriteCat = 'Purrie';
	};

    $scope.sayHello = function () {
    	$window.alert('HELLO!');
	};

	$scope.favoriteCat = 'Vivian';

	$http.get('/shirts').success(function (data) {
        $scope.shirts = data.shirts;
    });
	
}





