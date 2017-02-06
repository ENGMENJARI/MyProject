var app = angular.module('myApp',['ngRoute']) 
.config(function ($routeProvider, $httpProvider){
  $routeProvider
    // .when('/', {
    //   templateUrl: 'app.html',
    //   controller: 'ctr'
    // })
});
app.controller('ctr', function($scope) {
    $scope.studentlist = [{studentname:'', done:false}];

    $scope.Add = function() {
        $scope.studentlist.push({studentname:$scope.Input, done:false});
        $scope.Input = "";
    };

    $scope.remove = function() {
        var oldList = $scope.studentlist;
        $scope.studentlist = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.studentlist.push(x);
        });
    };

});