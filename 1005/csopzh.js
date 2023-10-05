
//1
let matrix = [[1,0,3],[1,0,0],[1,1,1]];
let m = matrix.length;

function noZero(matrix){
    let sum = 0;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                sum++;
                break;
            }
        }
    }
    return sum;
}

console.log(noZero(matrix));

//2

function press(e){
    let max = 9999999;
    let min = -9999999;
    let action = e.target.value;
    let num = document.querySelector("#masodik");
    if((max > num.value) && (min < num.value)){
        document.querySelector("#minusz").disabled = false;
        document.querySelector("#plusz").disabled = false;
        if(action === "+"){
            num.innerHTML = num.value++;
        }
        else if(action === '-'){
            num.innerHTML = num.value--;
        }
    }
    if(num.value >= max){
        document.querySelector("#plusz").disabled = true;
        
        if(action === '-'){
            num.innerHTML = num.value--;
        }
    }
    if(num.value <= min){
        document.querySelector("#minusz").disabled = true;
        
        if(action === "+"){
            num.innerHTML = num.value++;
        }
    }
}

//3
let words = ['alma', 'barack', "szilva", "ananász", "körte"];
let n = Math.floor(Math.random() * (words.length));

function hangmanGenerate(words){
    
    for(let i = 0; i < words[n].length; i++){
        document.querySelector('#lines').insertCell(0);
    }
}

function hangmanGuess(){
    let guess = document.querySelector("#guess").value;
    let turns = 0;

   // if(words[n].includes(guess)){

    //}
}

function init(){
    document.querySelector("#plusz").addEventListener("click", press, false);
    document.querySelector("#minusz").addEventListener("click", press, false);
    hangmanGenerate(words);
}

window.addEventListener('load', init, false);