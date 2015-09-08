 var app=angular.module('app', ['services']);
app.controller('calcController',function($scope,timeCapsoleFactory)

{

    console.log(3*0.1);
    $scope.m;
    $scope.input1 = new timeCapsoleFactory(0,0,40,4535335);
    $scope.sign=0;
    $scope.res = new timeCapsoleFactory(0,0,0,0);
    $scope.num = new timeCapsoleFactory(0,0,0,0);
    $scope.input1.printResult();
    $scope.number='';
    $scope.pre_operator='';
    $scope.flag=1;
    $scope.dot_flag=1;
    $scope.k=0;
    $scope.num_button= function($val){
        if($scope.flag == 0) {
            $scope.number = '';
            console.log("h");
        }
        else if($scope.flag==2)
        {
            console.log('hello');
            $scope.number='';
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
        $scope.number += $val;
        $scope.flag = 1;
    };

    $scope.op_button = function($time)
    {
        if($scope.sign == 0) {
            $scope.number = parseFloat($scope.number);
            console.log("f : " +$scope.number);

            if ($time == 'd') {
                $scope.num.capsole.day = $scope.number;
                console.log('day :' + $scope.num.capsole.day);
                $scope.number=$scope.num.capsole.day + " Days ";
                //$scope.number = '';
            }
            else if ($time == 'h') {

                $scope.num.capsole.hour = $scope.number;
                console.log('hour :' + $scope.num.capsole.hour);
                $scope.number=$scope.num.capsole.hour + " Hours ";
                //$scope.number = '';
            }
            else if ($time == 'm') {
                $scope.num.capsole.minute = $scope.number;
                console.log('min :' + $scope.num.capsole.minute);
                $scope.number=$scope.num.capsole.minute + " Mins ";
               // $scope.number = '';
            }
            else if ($time == 's') {
                $scope.num.capsole.second = $scope.number;
                console.log('sec :' + $scope.num.capsole.second);
                $scope.number=$scope.num.capsole.second + " Secs ";
                //$scope.number = '';
            }

        }
        $scope.sign=1;
    }



    $scope.operator = function($op)
    {
        if($scope.sign == 1) {
            $scope.equal();
            $scope.pre_operator = $op;
            console.log($scope.res.capsole.day + ':' + $scope.res.capsole.hour + ':' + $scope.res.capsole.minute + ':' + $scope.res.capsole.second + ':' + $op);
            $scope.num.capsole.day = 0;
            $scope.num.capsole.hour = 0;
            $scope.num.capsole.minute = 0;
            $scope.num.capsole.second = 0;
            $scope.sign=0;
        }
    }
    $scope.equal = function()
    {

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
        else if($scope.flag!=2)
        {
            $scope.res.capsole.day = $scope.num.capsole.day ;
            $scope.res.capsole.hour = $scope.num.capsole.hour;
            $scope.res.capsole.minute =$scope.num.capsole.minute;
            $scope.res.capsole.second = $scope.num.capsole.second;
        }
        $scope.num.capsole.day = 0;
        $scope.num.capsole.hour = 0;
        $scope.num.capsole.minute = 0;
        $scope.num.capsole.second = 0;
        $scope.calculate();
        console.log($scope.res.capsole.day + ':' + $scope.res.capsole.hour + ':' + $scope.res.capsole.minute + ':' + $scope.res.capsole.second + ':' );
        if($scope.res.capsole.day == 1)
            $scope.number= $scope.res.capsole.day + " Day ";
        else
            $scope.number= $scope.res.capsole.day + " Days ";
        if($scope.res.capsole.hour == 1)
            $scope.number += " , " +$scope.res.capsole.hour +"  "+ "Hour ";
        else
            $scope.number += " , " +$scope.res.capsole.hour +"  "+ "Hours ";
        if($scope.res.capsole.minute == 1)
            $scope.number += " , " + $scope.res.capsole.minute  +"  "+ "Minute ";
        else
            $scope.number += " , " + $scope.res.capsole.minute  +"  "+ "Minutes ";
        if($scope.res.capsole.second == 1)
            $scope.number += " , " +$scope.res.capsole.second  +"  "+ "Second " ;
        else
            $scope.number += " , " +$scope.res.capsole.second  +"  "+ "Second " ;
        $scope.flag=0;
    };

    $scope.equalButton = function()
    {
        $scope.equal();
        $scope.pre_operator='';
        $scope.flag = 2;
    };

    $scope.calculate=function() {
        if($scope.res.capsole.second <0)
        {
            $scope.m=$scope.res.capsole.second;
            $scope.res.capsole.second=60+$scope.res.capsole.second%60;
            $scope.res.capsole.minute += ( $scope.m-($scope.m)%60) / 60;
            if($scope.m % 60 !=0)
            {
                $scope.res.capsole.minute -=1;
            }
        }
        if($scope.res.capsole.minute <0)
        {
            $scope.m=$scope.res.capsole.minute;
            $scope.res.capsole.minute=60+(($scope.res.capsole.minute)%60);
            $scope.res.capsole.hour += ( $scope.m-($scope.m)%60) / 60;
            if($scope.m % 60 !=0)
            {
                $scope.res.capsole.hour -=1;
            }
        }
        if($scope.res.capsole.hour <0)
        {
            $scope.m=$scope.res.capsole.hour;
            $scope.res.capsole.hour=24+$scope.res.capsole.hour%24;
            $scope.res.capsole.day += ( $scope.m-($scope.m)%24) / 24;
            if($scope.m % 24 !=0)
            {
                $scope.res.capsole.day -=1;
            }
        }

        if ($scope.res.capsole.day >=0){
            $scope.res.capsole.hour+=((($scope.res.capsole.day)%1)*24);
            $scope.res.capsole.day-=(($scope.res.capsole.day)%1);
        }
         if ($scope.res.capsole.hour >=0){
            $scope.res.capsole.minute+=(($scope.res.capsole.hour)%1)*60;
            $scope.res.capsole.hour-=(($scope.res.capsole.hour)%1);
        }
        if ($scope.res.capsole.minute >=0){
            $scope.res.capsole.second+=(($scope.res.capsole.minute)%1)*60;
            $scope.res.capsole.minute-=(($scope.res.capsole.minute)%1);
        }
        if ($scope.res.capsole.second >=0){
            $scope.res.capsole.second-=(($scope.res.capsole.second)%1);
        }

        if ($scope.res.capsole.second >=0) {
            $scope.m = $scope.res.capsole.second;
            $scope.res.capsole.second = $scope.m % 60;
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
    $scope.dot = function ($val)
    {
        if($scope.dot_flag==1) {
            if ($scope.flag == 0)
                $scope.number = '';
            else if ($scope.flag == 2) {
                console.log('hello');
                $scope.number = '';
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
            $scope.number += $val;
            $scope.dot_flag=0;
        }
    }


});