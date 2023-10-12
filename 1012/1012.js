function bekuld(e){
    let hibak = [];
    if(document.querySelector('#nev').value === ''){
        hibak.push('A név kötelező!');
    }
    if(document.querySelector("#erd").value === ''){
        hibak.push("Az érdeklődés kötelező!");
    }
    if(!(/^\d{0,2}$/.test(document.querySelector("#kor").value))){
        hibak.push('A kor nem szám!');
    }

    if(hibak.length > 0){
        document.querySelector("#hibak").innerHTML = tombokLista(hibak);
        e.preventDefault();
    }
}

function tombokLista(t){
    return '<li>' + t.join('</li><li>') + '</li>';

}
let kincspos = null;
let gameover = false;

function generateTable(){
    let n = document.getElementById('meret').value;
    kincspos = {
        x: Math.floor(Math.random()*n),
        y: Math.floor(Math.random()*n)
    }
    console.log(kincspos);
    for(let i = 0; i < n; i++){
        document.getElementById('tabla').insertRow();
        
        for(let j = 0; j < n; j++){
            document.getElementById('tabla').rows[i].insertCell();
            if((i === kincspos.x) && (j === kincspos.y)){
                document.getElementById('tabla').rows[i].cells[j].innerHTML = 'KINCS';
                document.getElementById('tabla').rows[i].cells[j].style.color = "white";
            }
        }
    }
    document.getElementById('mehet').disabled = true;
    
}

function click(e){
    if(!gameover && (e.target.tagName === 'TD')){
        let td = e.target;
        let pos = coords(td);
        if(pos.x === kincspos.x && pos.y === kincspos.y){
            document.getElementById('tabla').rows[kincspos.x].cells[kincspos.y].style.color = "black";
            gameover = true;
        }
        else{
            td.innerHTML = "X";
        }

    }
}


function coords(e){
    let x = e.cellIndex;
    let tr = e.parentNode;
    let y = tr.sectionRowIndex;
    return{
        x: x,
        y: y
    };
}




function init(){
    document.querySelector("#form1").addEventListener('submit', bekuld, false);
    document.getElementById('mehet').addEventListener('click', generateTable, false);
    document.getElementById("tabla").addEventListener('click', click, false);
}

window.addEventListener('load', init, false);