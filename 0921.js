
function helloFc() {
    const n = document.querySelector('#hanyszor').value;
    //let s = "";
    for (let i = 1; i <= n; i++) {
        //s += '<p style="font-size: ' + (i * 5) + 'px">Hello world!</p>';
        const p = document.createElement('p');
        p.style = 'font-size: ' + (i * 5) + 'px';
        p.innerHTML = 'Hello world!';
        document.querySelector('#hello').appendChild(p);
    }
   //document.querySelector('#hello').innerHTML = s;
}

function genFc() {
    const n = document.querySelector('#n').value;
    let s = "<table>";
    for (let i = 1; i <= n; i++) {
        s += "<tr>";
        for (let j = 1; j <= n; j++) {
            //s += "<td>" + (i * j) + "</td>";
            s += `<td>${i * j}</td>`;
        }
        s += "</tr>";
    }
    s += "</table>";
    document.querySelector('#tabla').innerHTML = s;
}

function keruletFc() {
    const r = document.querySelector('#r').value;
    document.querySelector('#kerulet').innerHTML = 2 * r * Math.PI;
}

function masolasFc() {
    document.querySelector('#masodik').value = document.querySelector('#elso').value;
}

function tippFc() {
    const tipp = document.querySelector('#tipp').value;
    if (tipp < kitalaltSzam) {
        document.querySelector('#valasz').innerHTML = 'Nagyobb!';
        document.querySelector('#lista').innerHTML += `<li>${tipp}</li>`;
    } else if (tipp > kitalaltSzam) {
        document.querySelector('#valasz').innerHTML = 'Kisebb!';
        document.querySelector('#lista').innerHTML += `<li>${tipp}</li>`;
    } else {
        document.querySelector('#valasz').innerHTML = 'Talált!';
        document.querySelector('#tippgomb').disabled = 'true';
    }
}
 
let kitalaltSzam;
function init() {
    document.getElementById('hellogomb').onclick = helloFc;
    document.getElementById('gengomb').onclick = genFc;
    document.getElementById('kergomb').onclick = keruletFc;
    document.getElementById('masologomb').onclick = masolasFc;
    document.getElementById('tippgomb').onclick = tippFc;

    kitalaltSzam = Math.floor(Math.random() * 100);
    console.log(kitalaltSzam);
}

window.onload = init;