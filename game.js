$(document).ready(function() {
    var firstNumber = '';
    var secondNumber = '';
    var operator = '';
    var result = 0;
    var isCalculated = false;
    var isOperator = false;
    
    function initializeCalculator() {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        isCalculated = false;
        isOperator = false;
        $('#first-number, #second-number, #operator, #result').empty()
    };

    $('.number').on('click', function() {
        if(isCalculated) {
            return false;
        }
        if (isOperator) {
            secondNumber += $(this).val();
            console.log(secondNumber);
            $('#second-number').text(secondNumber);
        } else {
            firstNumber += $(this).val();
            console.log(firstNumber);
            $('#first-number').text(firstNumber);
        }
    });

    $('.operator').on('click', function() {
        if(isCalculated) {
            return false
        }
        isOperator = true;
        operator += $(this).val();
        $('#operator').text($(this).text());
    });

    $('.equal').on('click', function() {
        if (isCalculated === false && isOperator === true) {
            if (operator === 'plus') {
                result = parseInt(firstNumber) + parseInt(secondNumber);
                $('#result').text(result);
            }
            if (operator === 'minus') {
                result = parseInt(firstNumber) - parseInt(secondNumber);
                $('#result').text(result);
            }
            if (operator === 'times') {
                result = parseInt(firstNumber) * parseInt(secondNumber);
                $('#result').text(result);
            }
            if (operator === 'divide') {
                result = parseInt(firstNumber) / parseInt(secondNumber);
                $('#result').text(result);
            }
            if (operator === 'power') {
                result = Math.pow(parseInt(firstNumber), parseInt(secondNumber));
                $('#result').text(result);
            }
            isCalculated = true;
        }  
    });
    $('.clear').on('click', function() {
        initializeCalculator();
        console.log('I was clicked')
    })

})