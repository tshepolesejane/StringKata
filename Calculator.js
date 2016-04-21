/**
 * Created by Tshepo on 4/19/2016.
 */
var calculator = {};
calculator = new function () {

    var number;
    var splitBy = ["\n",","];
    function parseNumbers(stringNumber) {
        var numbersToAdd={};
        for (var splitIndex =0;splitIndex <splitBy.length; splitIndex++){
            console.log(splitBy[0])
            numbersToAdd= stringNumber.split(splitBy[splitIndex])
            console.log(splitBy[splitIndex] + numbersToAdd)

        }
        console.log(numbersToAdd)
        var sum = 0;


        for(var index =0;index < numbersToAdd.length;index++){

            sum =sum + parseInt(numbersToAdd[index]);
        }
console.log(numbersToAdd.length)
        return sum;
    }

    this.add = function (stringNumber) {

        if(stringNumber.length >0){
            if(stringNumber.indexOf(',')>0 || stringNumber.indexOf('\n')){
                number  = parseNumbers(stringNumber);
            }else {number =parseInt(stringNumber);}

        }else {
            number = 0;
        }
        return number;
    }

    
};

