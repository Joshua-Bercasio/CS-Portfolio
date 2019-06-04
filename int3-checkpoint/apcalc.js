var num1 = document.getElementById("num1");
var operator = document.getElementById("operator");
var num2 = document.getElementById("num2");
var clickyboi =document.getElementById("clickyboi");
var display = document.getElementById("display");
var gnome = document.getElementById("gnome");
var kill =false

alert ("4")
clickyboi.addEventListener("click", function(){
    // alert ("1")
    var number1 =+num1.value;
    // alert ("2")
    var number2 = +num2.value;
    // alert ("3")
    var op = operator.value;
    if(op === "+"){
    display.innerHTML = number1 + number2;
}
    else if (op === "-"){
    display.innerHTML = number1 - number2;
}
    else if (op === "/"){
    display.innerHTML = number1 / number2;
}
    else if (op === "*"){
    display.innerHTML = number1 * number2;
}
});
gnome.addEventListener("click", function myFunction(){ 
    kill =!kill;
    if(kill){ 
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/EaqJgQOVZ9k/hqdefault.jpg')";}
    else{
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('')";
    }
});
function myFunction(){
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/EaqJgQOVZ9k/hqdefault.jpg')";
    
}
    


// https://i.ytimg.com/vi/Cw7PgJVQbYY/hqdefault.jpg,