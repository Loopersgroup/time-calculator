var app=angular.module('app', ['services']);
app.controller('calcController',function($scope,timeCapsoleFactory)
{
    $scope.m;
    $scope.input1 = new timeCapsoleFactory(0,0,40,4535335);

    $scope.res = new timeCapsoleFactory(0,0,0,0);
    $scope.num = new timeCapsoleFactory(0,0,0,0);
    $scope.input1.printResult();

    $scope.number=0;
    $scope.pre_operator='';
    $scope.flag=1;

    $scope.num_button= function($val){
        if($scope.flag == 0)
            $scope.number=0;
        else if($scope.flag==2)
        {
            console.log('hello');
            $scope.number=0;
            $scope.res.capsole.day = 0;
            $scope.res.capsole.hour = 0;
            $scope.res.capsole.minute = 0;
            $scope.res.capsole.second = 0;
            $scope.num.capsole.day = 0;
            $scope.num.capsole.hour = 0;
            $scope.num.capsole.minute = 0;
            $scope.num.capsole.second = 0;
            console.log($scope.res.capsole.day + ':' + $scope.res.capsole.hour + ':' + $scope.res.capsole.minute + ':' + $scope.res.capsole.second + ':');
        }
        console.log($val);
        $scope.number *=10;
        $scope.number+=$val;
        $scope.flag = 1;
    }

    $scope.op_button = function($time)
    {
        if($time=='d')
        {
            $scope.num.capsole.day = $scope.number;
            console.log('day :' + $scope.num.capsole.day );
            $scope.number=0;
        }
        else if($time=='h')
        {

            $scope.num.capsole.hour = $scope.number;
            console.log('hour :' + $scope.num.capsole.hour );
            $scope.number=0;
        }
        else if($time=='m')
        {
            $scope.num.capsole.minute = $scope.number;
            console.log('min :' + $scope.num.capsole.minute );
            $scope.number=0;
        }
        else if($time=='s')
        {
            $scope.num.capsole.second = $scope.number;
            console.log('sec :' + $scope.num.capsole.second );
            $scope.number=0;
        }
    }



    $scope.operator = function($op)
    {
        $scope.equal();
        $scope.pre_operator=$op;
        console.log($scope.res.capsole.day + ':' + $scope.res.capsole.hour + ':' + $scope.res.capsole.minute + ':' + $scope.res.capsole.second + ':' + $op);
        $scope.num.capsole.day = 0;
        $scope.num.capsole.hour = 0;
        $scope.num.capsole.minute = 0;
        $scope.num.capsole.second = 0;
    }
    $scope.equal = function()
    {
        $scope.flag=0;
        if($scope.pre_operator=='+')
        {
            $scope.res.capsole.day += $scope.num.capsole.day;
            $scope.res.capsole.hour += $scope.num.capsole.hour;
            $scope.res.capsole.minute += $scope.num.capsole.minute;
            $scope.res.capsole.second += $scope.num.capsole.second;

        }
        else if($scope.pre_operator=='-')
        {
            $scope.res.capsole.day -= $scope.num.capsole.day;
            $scope.res.capsole.hour -= $scope.num.capsole.hour;
            $scope.res.capsole.minute -= $scope.num.capsole.minute;
            $scope.res.capsole.second -= $scope.num.capsole.second;
        }
        else
        {
            $scope.res.capsole.day = $scope.num.capsole.day ;
            $scope.res.capsole.hour = $scope.num.capsole.hour;
            $scope.res.capsole.minute =$scope.num.capsole.minute;
            $scope.res.capsole.second = $scope.num.capsole.second;
        }
        $scope.calculate();
        console.log($scope.res.capsole.day + ':' + $scope.res.capsole.hour + ':' + $scope.res.capsole.minute + ':' + $scope.res.capsole.second + ':' );

        $scope.number= "DAY :" + $scope.res.capsole.day +"  "+ "HOUR :" + $scope.res.capsole.hour  +"  "+ "MINUTE :" + $scope.res.capsole.minute  +"  "+ "SECONDS :" +$scope.res.capsole.second ;
    };

    $scope.equalButton = function()
    {
        $scope.equal();
        $scope.flag = 2;
    };

    $scope.calculate=function() {
        if ($scope.res.capsole.second >=0) {
            $scope.m = $scope.res.capsole.second;
            $scope.res.capsole.second = $scope.m % 60;
            //console.log(($scope.m / 60));
            $scope.res.capsole.minute += ( $scope.m - $scope.res.capsole.second) / 60;
        }
        else {
            $scope.m=$scope.res.capsole.second;
            $scope.res.capsole.second=60+$scope.res.capsole.second%60;
            $scope.res.capsole.minute += ( $scope.m-($scope.m)%60) / 60;
            if($scope.m % 60 !=0)
            {
                $scope.res.capsole.minute -=1;
            }
        }
        if ($scope.res.capsole.minute >= 0) {
            $scope.m = $scope.res.capsole.minute;
            $scope.res.capsole.minute = $scope.m % 60;
            $scope.res.capsole.hour += ( $scope.m - $scope.res.capsole.minute) / 60;
        }
        else {
            $scope.m=$scope.res.capsole.minute;
            $scope.res.capsole.minute=60+(($scope.res.capsole.minute)%60);
            $scope.res.capsole.hour += ( $scope.m-($scope.m)%60) / 60;
            if($scope.m % 60 !=0)
            {
                $scope.res.capsole.hour -=1;
            }
        }
        if($scope.res.capsole.hour>=0) {
            $scope.m = $scope.res.capsole.hour;
            $scope.res.capsole.hour = $scope.m % 24;
            $scope.res.capsole.day += ( $scope.m - $scope.res.capsole.hour) / 24;
        }

        else {
            $scope.m=$scope.res.capsole.hour;
            $scope.res.capsole.hour=24+$scope.res.capsole.hour%24;
            $scope.res.capsole.day += ( $scope.m-($scope.m)%24) / 24;
            if($scope.m % 24 !=0)
            {
                $scope.res.capsole.day -=1;
            }
        }

    }


});