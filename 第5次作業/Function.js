function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    }
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    document.getElementById("myDropdown").classList.remove("show");
    }
}
function cal(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let bmi = (weight/(height*height)).toFixed(2);
    document.getElementById("BMI").innerHTML= bmi;
    if(bmi >= 27){
        document.getElementById("Introduce").innerHTML= "啊～「肥胖」，需要立刻力行「健康體重管理」囉！";
    }
    else if(bmi >= 24){
        document.getElementById("Introduce").innerHTML= "哦！「體重過重」了，要小心囉，趕快力行「健康體重管理」！";
    }
    else if(bmi >= 18.5){
        document.getElementById("Introduce").innerHTML= "恭喜！「健康體重」，要繼續保持！";
    }
    else{
        document.getElementById("Introduce").innerHTML= "「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！";
    }
}
const image = ["黑色鈦金屬.jpg", "白色鈦金屬.jpg", "原色鈦金屬.jpg" , "沙漠色鈦金屬.jpg"];
var x = 0;
function left(){
    x = x - 1;
    if(x < 0){
        x = x + 4;
    }
    img.src = image[x];
}
function right(){
    x = x + 1;
    if(x > 3){
        x = x - 4;
    }
    img.src = image[x];
}