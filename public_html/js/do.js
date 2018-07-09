
document.getElementById("submit").addEventListener("click", operation);
function operation() {
    var t1 = parseFloat(document.getElementById("t1").value);
    var t2 = parseFloat(document.getElementById("t2").value);
    var operator = document.getElementById("operator").value;
   
     if (operator === '+') {
        document.getElementById("result").value = t1 + t2;
    }
       if (operator === '-') {
        document.getElementById("result").value = t1 - t2;
    }
        if (operator === '/') {
        document.getElementById("result").value = t1 / t2;
    }
        if (operator === '*') {
        document.getElementById("result").value = t1 * t2;
    }
     
     

};


