var services = angular.module('services',[]);

services.factory('timeCapsoleFactory',function()
{

    var factory = function( day , hour ,minute ,second ,opr)
    {
        var output = {};

        output.capsole = {
            day:0,
            hour:0,
            minute:0,
            second:0,
            opr:"+"
        };

        output.capsole.day = typeof day == 'undefined' ? 0 : day;
        output.capsole.hour = typeof hour == 'undefined' ? 0 : hour;
        output.capsole.minute = typeof minute == 'undefined' ? 0 : minute;
        output.capsole.second = typeof second == 'undefined' ? 0 : second;
        output.capsole.opr = typeof opr == 'undefined' ? '+' : opr;

        output.printResult = function()
        {
            console.log();
        };



        return output;

    };





    return factory;

})