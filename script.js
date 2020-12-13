  var resultBox = document.getElementById('resultbox');
        var number1Box = document.getElementById("number1");
        var number2Box = document.getElementById("number2");
        var operatorBox = document.getElementById("operator");
        
        function insert(value){
            if(resultBox.value == 0){
                resultBox.value = '';
            }
            resultBox.value += value;
            number2.value = value;
        }
        
        function insertop(value){
            number1Box.value = value;
            number2Box.value = value;
            operatorBox.value = value;
            number1Box.value = resultBox.value;
            resultBox.value = "0";
        }

        function equal(){
            resultVal = resultBox.value;
            number1Val = number1Box.value;
            if (number1.value === "=")
            {
                resultStr = number1Box.value+operatorBox.value+number2Box.value;                
            }
            else {
                resultStr = number1Box.value+operatorBox.value+number2Box.value;
                number2Box.value = resultVal;
            }
            resultBox.value = eval(resultStr);
            number2.value = "=";
        }   
