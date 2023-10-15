function c(){
    let num1 = document.querySelector("#n1").value
    let opt = document.getElementById("opr").value
    let num2 = document.getElementById("n2").value
    let res;
    if (opt == "+") {
        res = parseFloat(num1) + parseFloat(num2);
        document.getElementById("output").innerHTML = "Your Answer is " + " " + res;
    } else if (opt == "-") {
        res = parseFloat(num1) - parseFloat(num2);
        document.getElementById("output").innerHTML = "Your Answer is " + " " + res;
    } else if(opt == "*") {
        res = parseFloat(num1) * parseFloat(num2);
        document.getElementById("output").innerHTML = "Your Answer is " + " " + res;
    } else if(opt == "/") {
        res = parseFloat(num1) / parseFloat(num2);
        document.getElementById("output").innerHTML = "Your Answer is " + " " + res;
    }
}
