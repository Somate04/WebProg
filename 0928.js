function elso(e)
{
    //a
    console.log(e);
    //b
    console.log(e.type);
    //c
    console.log(e.button);
    //d
    console.log(e.pageX,e.pageY);
    //e
    console.log(e.target);
    //f
    if (e.target.tagName === 'SPAN')
    {
        console.log(e.target.innerHTML);
    }
    //g
    if (e.target.tagName === 'A')
    {
        if (e.target.innerHTML === 'libero')
        {
            e.preventDefault();
        }
    }

}

function negyedik(e)
{
    if (e.which < 48 || e.which > 57)
    {
        e.preventDefault();
    }
}

const filmek = [
    {
        cim: 'A keresztapa', 
        ev: 1972
    }, {
        cim: 'A keresztapa II',
        ev: 1974
    }, {
        cim: 'Tizenkét dühös ember',
        ev: 1957
    }, {
        cim: 'Forrest Gump',
        ev: 1994
    }, {
        cim: 'A bolygó neve: Halál',
        ev: 1986
    }
];

function filmekSzurese(reszlet, filmek)
{
    return filmek.filter(film => film.cim.indexOf(reszlet) >= 0);
}

function filmekbolHTMLList(szurtFilmek)
{
    let s = '';
    szurtFilmek.forEach(film => {
        s += `<li>${film.cim}</li>`;
    });
    return s;
}

function hatodik(e)
{
    const reszlet = this.value;
    const szurtFilmek = filmekSzurese(reszlet, filmek);
    document.querySelector('#filmek').innerHTML = filmekbolHTMLList(szurtFilmek);
}

function elsoKatt(e)
{
    console.log(e);
}

function init()
{
    //document.querySelector('#elso').addEventListener('click', elsoKatt, false);
    document.querySelector('#elso span').addEventListener('click', elso, false);
    document.querySelector('#csakszam').addEventListener('keypress', negyedik, false);
    document.querySelector('#cim').addEventListener('keyup', hatodik, false);
}

window.addEventListener('load', init, false);