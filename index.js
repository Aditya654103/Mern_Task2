function multiply()
{
    var num1=document.getElementById('Number1').value;
    var num2=document.getElementById('Number2').value;
    document.querySelector(".result").innerHTML="The Result is "+num1*num2;
}
function divide()
{
    var num1=document.getElementById('Number1').value;
    var num2=document.getElementById('Number2').value;
    document.querySelector(".result").innerHTML="The Result is "+num1/num2;
}