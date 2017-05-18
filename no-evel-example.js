var input = '20+20*10';

spliteExpression(inputString);

var outputArray = [];
var current = '';

function spliteExpression(inputString) {

    for (var i = 0; i < inputString.length; i++) {
        if ('^*/+-'.indexOf(inputString[i]) > -1) {
            outputArray.push(Number(current));
            outputArray.push(inputString[i])
            current = '';
        } else {
            current += inputString[i];
        }
    }
    if (current) {
        outputArray.push(Number(current));
        current = '';
    }
    return evulateExpression(outputArray);
}

var resultArray = [];

var currentCtx = '';
function evulateExpression(input) {

    var operations = [{
        '^': (a,b)=>Math.pow(a, b)
    }, {
        '*': (a,b)=>a * b
    }, {
        '+': (a,b)=>a + b
    }, {
        '-': (a,b)=>a - b
    }];

    for (var o = 0; o < operations.length; o++) {

        for (var v = 0; v < input.length; v++) {
            if (operations[o][input[v]]) {
                currentCtx = operations[o][input[v]];
            } else if (currentCtx) {
                resultArray[resultArray.length - 1] = currentCtx(resultArray[resultArray.length - 1], input[v])
                currentCtx = null;
            } else {
                resultArray.push(input[v]);
            }
            console.log(resultArray);
        }
        input = resultArray;
        resultArray = [];

    }

    if (input.length == 1) {
        return input[0]
    }

}
