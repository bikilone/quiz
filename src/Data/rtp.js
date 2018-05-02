var finalData = [["Kakva moze biti fakturna cena?", "Bruto i neto(na dan isporuke/ na dan placanja"], ["Sta je pdv?", "Svefazni opsti porez na promet"], ["Da li je pdv trosak nabavke?", "Ne"], ["Sta su zavisni troskovi nabavke?", "Svi sporedni troskovi koji se smatraju neophodinm da bi roba bila dovedena u mesto i stanje u kojem je po obavljenoj nabavci"], ["Navedi neke ZTN", "Trasnport, osiguranje, utovar, istovar, pretovar"], ["Sta se koristi za raspodelu opstih troskova?", "Kljucevi zasnovani na uzrocnosti (kolicina, tezina i vrednost)"], ["Zasto se koriste planski ZTN?", "Azurnost, mogusnost kontrolisanja kroz poredjenje sa stvarnim troskovima"], ["Da li se u kalkulaciju ukljucuje ztn sa pdv-om ili bez?", "Bez"], ["Kakav saldo ima pdv?", "On je racun aktive i ima dugovni saldo"], ["Zasto je vazna nabavna cena?", "Jer se po njoj vrednuju zalihe"], ["Kada je prodajna cena manja od nabavne, po kojoj se vode zalihe?", "Po nizoj"], ["Sta su troskovi u trgovini?", "Troskovi robe i troskovi poslovanja"], ["Koja su moguca ogranicenja razlike u ceni?", "Maksimalna marza (ako je drzava propise) ili drzava moze tacno determinisati cenu po kojoj se odredjeni tip robe mora prodavati, taj oblik RUC se naziva rabat"], ["Razlika u ceni moze biti?", "Procenat od prodajne ili procenat od nabavne cene"], ["Za sta nam sluzi racun RUC?", "To je korektivni racun racuna roba, da bismo imali info o nabavnoj ceni"], ["Sta je preracunska stopa PDV-a?", "Stopa PDV-a u odnosu na prodajnu cenu sa PDV-om (na pdv od 18% to je nekih 17%)"], ["Kada se evidencija robe vodi po nabavnim cenama, gde se evidentira odstupanje stvarnih od planiranih ztn?", "Na racunu ostalih rashoda/prihoda"], ["Da li stopu kasa skonta primenjujemo na bruto ili na neto faktrunu vrednost?", "Iskljucivo na neto fakturnu vrednost na dan isporuke"], ["Sta cini kontirbucionu marzu?", "Fiksni troskovi i profit"], ["Da li se u kalkulaciji racuna pdv sa inostranstvom?", "Da"], ["Sta je interno kretanje robe?", "Kretanje robe izmedju objekata iste firme"], ["Po kojim vrednostima se vrsi evidentiranje internog kretanja robe?", "Po nabavnim"], ["Po kojim vrednostima se roba evidentira kada ide iz magacina, a po kojim kad ide iz skladista?", "Magacin - nabavna, skladiste - prodajna bez pdv-a"], ["Kod snizenja prodajne cene robe, sta duguje, a sta potrazuje?", "Duguje - ukalkulisana ruc, ukalkulisani pdv; Potrazuje - roba"], ["Kada nastaju viskovi i manjkovi?", "Kada se stvarno stanje razlikuje od knjigovodstvenog"], ["Kako se evidentiraju viskovi?", "Po nabavnim cenama i vode se kao ostali prihodi"], ["Kako se evidentira manjak?", "Kao ostali rashodi"], ["Navedi prirodne gubitke robe", "Kalo-smanjenje tezine usled prirodnih proces, rastru - rasturanje robe koja se razmerava, lom - karakteristican za krhke materijale poput stakla i keramike, kvar - roba se ne moze vise upotrebljavati"]]


if(localStorage.length !== 0) {

var questions = localStorage.getItem("questions") 


questions = JSON.parse(questions);
// finalData = finalData.filter(e => storage.includes(e))

finalData.forEach((e,i) => e[2] = i)
var newArray = finalData;
finalData = [];

for ( var i = 0; i < newArray.length; i++) {
    if(questions.indexOf(newArray[i][2]) === -1) {
        
        finalData.push(newArray[i])
    }
}

} else {
    finalData.forEach((e,i) => e[2] = i)
}


var length = finalData.length;
var current;
var index;

while(length > 0) {
    length--;
    index = Math.floor(Math.random()*length);
    current = finalData[index];
    finalData[index] = finalData[length];
    finalData[length] = current;
}



export default finalData;