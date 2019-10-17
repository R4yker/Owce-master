randomSheeps.sort((a,b) => 
    parseInt(a.maxSpeed) < parseInt(b.maxSpeed) ? -1 : 1 );


function toHTML( owca ){
   return `
             <tr>
                <td>${owca.name}</td>
                <td>${owca.colors}</td>
                <td>${owca.age}</td>
                <td>${owca.canSweam}</td>
                <td>${owca.isHappy}</td>
                <td>${owca.maxSpeed}</td>
                <td>${owca.numberOfLegs}</td>
            </tr>`;
}

const tabela = document.querySelector("#owce");
const imię = document.querySelector("#sheep-name");

function check (owca){
    const wpisaneImię = imię.value.trim();
    if(wpisaneImię =="") return true;
    return owca.name.startsWith(wpisaneImię);
}

function refresh(){
    const przefiltrowane_owce = randomSheeps.filter( check /* Magia */);
    const html_owce = przefiltrowane_owce.map(toHTML);
    tabela.innerHTML=html_owce.join("");
}

    refresh();

const szukaj = document.querySelector("#szukaj");
szukaj.addEventListener("click", refresh);
