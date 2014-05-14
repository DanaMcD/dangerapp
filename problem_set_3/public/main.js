var myApp = angular.module('myApp', []);

function mainPageCtrl($scope, $http) {

    //$http.put('/cats/Samson');

    function getCats() {
        $http.get('/cats').success(function (data) {
            $scope.kitties = data.cats;
        });
    }

    getCats();

    $scope.addCat = function () {
        $scope.catFormIsVisible = true;
        $scope.catFormData = {name: '', age: '', size: 'small'};
        $scope.formTask = 'new';
    };

    $scope.modifyCat = function (idx) {
        console.log("This is cat " + JSON.stringify($scope.kitties[idx]));
        $scope.catFormIsVisible = true;
        $scope.catFormData = angular.copy($scope.kitties[idx]);
        $scope.selectedCat = idx;
        $scope.formTask = 'edit';
    };

    $scope.saveCat = function () {
        switch ($scope.formTask) {
            //change to a switch statement to increase future functionality
            case 'new':
                $scope.catFormData.age = parseInt($scope.catFormData.age);
                $http.post('/cats/', {cat: $scope.catFormData}).success(function () {
                    alert("New cat was posted successfully!");
                    getCats();
                });
                break;
            case 'edit':
                $scope.catFormIsVisible = false;
                $scope.catFormData.age = parseInt($scope.catFormData.age);
                $http.put('/cats/' + $scope.kitties[$scope.selectedCat].name, {cat: $scope.catFormData}).success(function () {
                    alert("Cat was updated successfully!");
                    getCats();
                });
                break;
        }
    }
}
