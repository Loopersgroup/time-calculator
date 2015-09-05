var app=angular.module('app', ['services']);
app.controller('calcController',function($scope,timeCapsoleFactory)
{

    $scope.input1 = new timeCapsoleFactory(0,0,40,4535335);



    $scope.input1.printResult();

    $scope.number=0;
    $scope;
    var time =
    {
        day : 0 ,
        hour : 0 ,
        min : 0 ,
        sec : 0 ,
        con : function($t,$num){
           if(t=='d')
                day=num;
            else if(t=='m')
                min=num;

        }
    };
    function time2($t,$num)
    {
        if($t=='d')
            this.day=$num;
        else if($t=='m')
            this.min=$num;
        else if($t=='h')
            this.hour=$num;
        else if($t=='s')
            this.sec=$num;
    }
    $scope.num_button= function($val){
        console.log($val);
        $scope.number *=10;
        $scope.number+=$val;
    }
    $scope.time_button = function($time,$num)
    {
        var ob= time2($time,$num);
        $scope.a=ob.day;
        console.log(a);
    }

});