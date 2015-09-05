var app=angular.module('app', ['services']);
app.controller('calcController',function($scope,timeCapsoleFactory)
{

    $scope.input1 = new timeCapsoleFactory(0,0,40,4535335);



    $scope.input1.printResult();

    $scope.number=0;
    $scope;

    $scope.num_button= function($val){
        console.log($val);
        $scope.number *=10;
        $scope.number+=$val;
    }
    $scope.time_button = function($time,$num)
    {
        var ob=new timeCapsoleFactory()
        $scope.a=ob.day;
        console.log(a);
    }
    $scope.op_button = function($time)
    {

    }
});