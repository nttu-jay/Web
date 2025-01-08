/*老師之前上課有說過,就不說了*/
var graphics = ['♑', '♒', '♓', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐']; //所有星座的圖示
var cards = [];  //空陣列
var pairs = 12;  //12對
function createCards(pairs) {
    var shuffledGraphics = graphics.slice();
    shuffleArray(shuffledGraphics);
    cards = [];
    for (let i = 0; i < pairs; i++) {
        let temp = shuffledGraphics.pop();
        cards.push(temp, temp);
    }
    cards.push("X");
    shuffleArray(cards);
    console.log(cards);
    shuffleArray(cards);
    console.log(cards);
}
function shuffleArray(arr) {  /*用亂陣列*/
for (let i = arr.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[arr[i], arr[j]] = [arr[j], arr[i]];
}
}
createCards(pairs);
function clickButton(button_number){
    changeCardDiv(button_number);
}
function changeCardDiv(button_number) {
    document.getElementById("box"+(button_number)).innerHTML = "<p class='innerGraphic'>"+cards[button_number]+"</p>";
}
var openNumber = 0;
var step = 1;
function clickButton(button_number){
    changeCardDiv(button_number);
    if (step == 1){
        openNumber = button_number;
        step++;
    }
    else{
        if (cards[openNumber]!=cards[button_number]){
            setTimeout(function() {
                document.getElementById("box"+(openNumber)).innerHTML = '<button onclick="clickButton('+openNumber+')"class="innerButton"><p>翻牌</p></button>';
                document.getElementById("box"+(button_number)).innerHTML = '<button onclick="clickButton('+button_number+')"class="innerButton"><p>翻牌</p></button>';
                openNumber=0;
                step--;
            }, 1000);
        }
        else{
            openNumber=0;
            step--;
        }
    }
}
function clickButton(button_number){
    changeCardDiv(button_number);
    if (step == 1){
    openNumber = button_number;
    step++;
    }
    else{
        if (cards[openNumber]!=cards[button_number]){
            setTimeout(function() {
                recoverCardDiv(openNumber);
                recoverCardDiv(button_number);
                openNumber=0;
                step--;
            }, 1000);
        }
        else{
            openNumber=0;
            step--;
        }
    }
}
function recoverCardDiv(button_number){
    document.getElementById("box"+(button_number)).innerHTML = '<button onclick="clickButton('+button_number+')"class="innerButton"><p>翻牌</p></button>';
}