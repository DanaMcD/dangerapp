var myApp = angular.module('myApp', []);

function mainPageCtrl($scope) {
	
	$scope.kitties = [
		{name: 'KitKat', age: 1, likes_other_cats: false, size: 'small'},
		{name: 'Purrito', age: 2, likes_other_cats: true, size: 'small'},
		{name: 'Gotcha', age: 1, likes_other_cats: true, size: 'large'},
		{name: 'Fancy', age: 10, likes_other_cats: true, size: 'medium'},
		{name: 'Boob', age: 8, likes_other_cats: false, size: 'large'}
	];


	$scope.initializeForm = function () {
		$scope.isAddingCat = true; 
		$scope.newCat = {name:'', age:'', likes_other_cats: true, size:'small'};
	};

	$scope.saveCat = function () {
		$scope.isAddingCat = false;
		$scope.newCat.age = parseInt($scope.newCat.age);
		$scope.kitties.push($scope.newCat);
	};
}