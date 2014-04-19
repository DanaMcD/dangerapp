var myApp = angular.module('myApp', []);

function mainPageCtrl($scope, $http, $index) {

	//$http.update('/cats/Samson');
	
	function getCats () {
		$http.get('/cats').success(function (data) {
		$scope.kitties = data.cats;
		});
	}

	getCats();

	$scope.initializeForm = function () {
		$scope.isAddingCat = true; 
		$scope.newCat = {name:'', age:'', size:'small'};
	};

	$scope.saveCat = function () {
		$scope.isAddingCat = false;
		$scope.newCat.age = parseInt($scope.newCat.age);
		$http.post('/cats', {cat: $scope.newCat}).success(function () {
			alert("New cat was posted successfully!");
		});
		getCats();
	};

	//$scope.intitializeEdit = function () {
	//	"hello, world"
	//};
}