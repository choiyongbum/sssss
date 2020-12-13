
        var resultBox = document.getElementById('resultbox');
        var memory1Box = document.getElementById("memory1");
        var memory2Box = document.getElementById("memory2");
        var operatorBox = document.getElementById("operator");
        
        function insert(value){
            if(resultBox.value == 0){
                resultBox.value = '';
            }
            resultBox.value += value;
            memory2.value = value;
        }
        
        function insertop(value){
            memory1Box.value = value;
            memory2Box.value = value;
            operatorBox.value = value;
            memory1Box.value = resultBox.value;
            resultBox.value = "0";
        }

        function equal(){
            resultVal = resultBox.value;
            memory1Val = memory1Box.value;
            if (memory1.value === "=")
            {
                resultStr = memory1Box.value+operatorBox.value+memory2Box.value;                
            }
            else {
                resultStr = memory1Box.value+operatorBox.value+memory2Box.value;
                memory2Box.value = resultVal;
            }
            resultBox.value = eval(resultStr);
            memory2.value = "=";
        }   

    
