var myApp = angular.module('myApp', []);

function mainPageCtrl($scope) {
	
	$scope.kitties = [
		{name: 'KitKat', age: '1', likes_other_cats: false, size: 'small'},
		{name: 'Purrito', age: '2', likes_other_cats: true, size: 'small'},
		{name: 'Gotcha', age: '6 mo.', likes_other_cats: true, size: 'large'},
		{name: 'Fancy', age: '10', likes_other_cats: true, size: 'medium'},
		{name: 'Boob', age: '5', likes_other_cats: false, size: 'large'}
	];

	$scope.isAddingCat = false; 

	$scope.saveCat = function () {
		$scope.isAddingCat = false;
	};
}