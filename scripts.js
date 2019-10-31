function toHTML(owca) {
	return `
	  <tr>
			<td>${owca.name}</td>
			<td>${owca.colors}</td>
			<td>${owca.age}</td>
			<td>${owca.canSweam}</td>
			<td>${owca.isHappy}</td>
			<td>${owca.maxSpeed}</td>
			<td>${owca.numberOfLegs}</td>
	  </tr>
 	`;
}

const tabela = document.querySelector("#owce");
const imię = document.querySelector("#sheep-name");
const szczęście = document.querySelector("#sheep-happy");
const pływalność = document.querySelector("#sheep-sweam");
const kolor = document.querySelector("#sheep-color");
const minLiczbaNóg = document.querySelector("#sheep-legs-min");
const maxLiczbaNóg = document.querySelector("#sheep-legs-max");

	//sortowanie
	const sheepSort = document.querySelector("#sheep-sort")
	const sheepSortReverse = document.querySelector("#sheep-reverse")

function check( owca ){
	const wpisaneImię = imię.value.trim();
	const wpisaneSzczęście = szczęście.checked;
	const wpisanaPływalność = pływalność.checked;
	const wpisanyKolor = kolor.value.trim();
	const wpisanaMinimalnaLiczbaNóg = parseInt(minLiczbaNóg.value);
	const wpisanaMaksymalnaLiczbaNóg = parseInt(maxLiczbaNóg.value);

	// obsługa checkboxa
	if(wpisaneSzczęście && (!owca.isHappy) ) return false;
	if(wpisanaPływalność && (!owca.canSweam) ) return false;
	// ovsługa pola tekstowego
	if(wpisaneImię !== "" && !(owca.name.startsWith( wpisaneImię ))) return false;
	if(wpisanyKolor !== "" && !(owca.colors.startsWith( wpisanyKolor ))) return false;
	//obsługa pola numerycznego
	if(owca.numberOfLegs < wpisanaMinimalnaLiczbaNóg) return false;
	if(owca.numberOfLegs > wpisanaMaksymalnaLiczbaNóg) return false;
	return true;
}

function refresh(){
	const przefiltrowane_owce = randomSheeps.filter( check );

	const sortBy = sheepSort.value;
	const reverse = sheepSortReverse.checked;

	przefiltrowane_owce.sort( function( owcaA, owcaB){
		let result;
		if(sortBy === "name"){
			result = owcaA.name < owcaB.name ? -1: 1;
		}
		if(sortBy === "colors"){
			result = owcaA.colors < owcaB.colors ? -1: 1;
		}
		if(sortBy === "maxSpeed"){
			result = parseInt(owcaA.maxSpeed) < parseInt(owcaB.maxSpeed) ? -1: 1;
		}
		if(sortBy === "numberOfLegs"){
			result = owcaA.numberOfLegs < owcaB.numberOfLegs ? -1: 1;
		}

		return reverse ? - result : result;
	} )

	const html_owce = przefiltrowane_owce.map(toHTML);
	tabela.innerHTML = html_owce.join("");
}

refresh();


const szukaj = document.querySelector("#szukaj");
szukaj.addEventListener("click", refresh);

const wszystkieInputy = Array.from(document.querySelectorAll("input"))
wszystkieInputy.forEach( input => input.onchange = refresh)