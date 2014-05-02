var myApp = angular.module('myApp', []);

function mainPageCtrl($scope, $http) {

	//$http.put('/cats/Samson');
	
	function getCats () {
		$http.get('/cats').success(function (data) {
		$scope.kitties = data.cats;
		});
	}

	getCats();

	$scope.addCat = function () {
		$scope.isAddingCat = true; 
		$scope.newCat = {name:'', age:'', size:'small'};
		$scope.formTask = 'new';
	};

	$scope.modifyCat = function () {
		$scope.isModifyingCat = true;
        $scope.editCat = {name: '', age:'', size:'small'};
        //not sure how to save old cat name to new cat name
		$scope.formTask = 'edit';
		};

	$scope.saveCat = function () {
		if ($scope.formTask === 'new') {
			$scope.isAddingCat = false;
			$scope.newCat.age = parseInt($scope.newCat.age);
			$http.post('/cats', {cat: $scope.newCat}).success(function () {
				alert("New cat was posted successfully!");
			});
		} else if($scope.formTask === 'edit') {
			$scope.isModifyingCatForm = false;
				alert("Cat was updated successfully!");
		}
		getCats();
	};
	
}