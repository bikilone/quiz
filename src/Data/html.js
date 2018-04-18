// var html = [{question: "what http means", answer: "HyperText Transfer Protocol"},
// {question: "what http measdfns", answer: "HyperText Transfer Protocsdfol"}];


// export default html;

var question = [["Sta znaci kad kazemo da je modul singleton?", "Importuje se samo jednom, iako ga mi importujemo vise puta"], ["Koja su dva nacina za eksportovanje modula", "CommonJs i AMD"], ["Kako eksportujemo fajl u CommonJS-u?", "Sa modul.exports"], ["Kako importujemo fajl u CommonJS-u?", "Sa require"], ["Koji su nacini za export u ES6?", "export i export default"], ["Kako importujemo u ES6?", "import from"], ["Kako u ES6 mozemo sve da importujemo sto je eksportovano iz nekog fajla>", "sa import * from"], ["Objasni razliku izmedju sinhronog, threaded i asinhronog modela?", "sinhroni - taskovi se izvrsavaju jedan za drugim, threaded - vise paralelinih threadova, asinhroni - vise procesa odjednom, radimo druge zadatke dok se ne zavrsi nesto iz prethodnog npr fetch"], ["Kako se zove thread u broewseru? ", "Event loop"], ["Sta je promis objekat?", "Vrednost koja ce mozda biti dostpuna buducnosti"], ["Koja stanja mogu da imaju promisi?", "pending, resolve, reject"], ["Koji su promis metodi?", "then, catch, all, race, resolve"], ["Koje parametre prima .then?", "dve kolbek funkcije, prva je resolve, druga je reject"], ["Koje parametre prima .catch?", "Kolbek funkciju koja ce se izvrsiti on reject?"], ["Da li fetch izbacuje gresku na 404?", "Jok tebra"], ["Koje tri vrste servera postoje?", "web, aplikativni, database"], ["Sta je node.js", "JS bez browsera, sluzi za servere bla bla.."], ["Sta je platforma?", "Hardver/softver za koje je napravljen neki kod"], ["Primeri platformi?", "mac, windows, android, sony playstation, xbox..."], ["Sta je framework/libraru?", "Daju kod koji moze da se koristi vise puta i sluze kao temelj aplikaciji..."], ["U cemu je razlika izmedju library i frameworka?", "Inverion of Control, mi kontrolisemo biblioteku, framework kontrolise nas - masoni"], ["Sta je SDK?", "Software Develpoment Kit"], ["Sta se nalazi u SDK?", "Sve alatke potrebne da bi se radilo u nekoj platformi "], ["Sta je API?", "Aplication Programming Intreface"], ["Sta znaci kad je neka aplikacija stateless?", "Ne cuva podatke"], ["Kako browser zaobilazi statelessness?", "Cookies, caching, local storage"], ["Koje vrste kukija postoje?", "in memory, persistent"], ["Koja je razlika izmedju in-memory i persistent kukija?", "prvi nestaju kad se ugasi browser, drugi ostaju na hard disku"], ["Koji je kapacitet kukija?", "do 4kb"], ["Koji je kapacitet local storage-a?", "5-10 mb"], ["Koje vrste storage postoje?", "local i session"], ["Razlika izmedju local i session storage-a?", "local - postoji dok se ne ukloni, nema rok trajanja, session - postoji dok se ne ugasi tab, ima scope jednog browsera"], ["Navedi metode Web storage-a", "setItem, getItem, removeItem, clear, key"], ["Na kom principu se cuvaju podaci u storage-u?", "key-value"], ["STa je funkcionalno programiranje?", "Funckije su bazicne jedinice rada, sve se odvija oko njih"], ["Razlika izmedju deklarativnog i funckionalnog programiranja?", "Deklarativno programiranje je stil programiranja aplikacija gde je prioritet na opisivanju STA bi nesto trebalo da se odradi, umesto na definisanju KAKO bi trebalo da se odradi; Imperativno programiranje je stil programiranja koji se jedino brine KAKO da se postigne rezultat."], ["Koji su funckonalni koncepti?", "Immutability, pure functions, data transformations, higher-order functions, recursion"], ["Sta je immutability?", "Ne menjamo originalne podatke, nego pravimo kopije istih"], ["Sta znaci pure function?", "Prima bar jedan argument i vraca vrednost na osnovu svojih argumenta, ne dirajuci globalni skoup"], ["Sta su higher-order funcitons?", "F-je koje mogu da primaju druge funkcije kao parametre i mogu da ih returnuju"], ["Sta je rekurzija?", "Funkcija koja zove samu sebe"], ["Za sta sluzi react, a za sta reactDOM?", "React kreira viewove, a react dom sluzi za renderovanje"], ["Virtualni DOM je skup cega?", "JS objekata"], ["Sta od parametara prima React.createElement?", "naziv elementa koji zelimo da napravimo, njeogove propse, njegovu decu"], ["U sta se pretvara : React.createElement('h1', null, 'Pesto Pasta')", "<h1>Pedro Pasta</h1>"],  ["Sta prima ReactDOM.render?", "element koji zelimo da renderujemo i neki html element koji zelimo da bude roditelj nasoj komponenti"], ["Razlika izmedju statefull i stateless komponenti?", "Prve su funkcije, primaju prospe i nemaju svoj this"], ["Sta je JSX?", "java script extension ili alternativa React.createElement()"], ["Sta je create react app?", "tool razvijen od strane fejsbuka za setup-vanje projekta"], ["Sta su propsi?", "js objekti"], ["Da li smemo da menjamo propse?", "Nikako, oni su read-only"], ["Koja su dva primarna life-cycle-a?", "mounting i updating"], ["Koji su mounting life-cycle metodi?", "constructor(props)- tehnicki nije, componentWillMount(), render(), componentDidMount(), componentWillUnmount()"], ["Koje su updating life-cycle metodi?", "componentWillRecieveProps, shouldCOmponentUpdate, componentWillUpdate, componentDidUpdate"], ["Koju biblioteku koristimo za navigaciju u reactu", "react-router"], ["Za sta sluzi Switch komponenta?", "Menjanje komponenti u zavisnosti od winodw.location"], ["Za sta sluzi Redirect?", "Kada vise puteva vodi kao istoj komponenti"], ["Za sta sluzi Link?", "Umesto <a/>"], ["Kako mozemo da pristupimo parametru koji je prosledjen preko url?", "props.match.params.(naziv naseg propsa)"], ["Za sta sluzi Babel>", "Za prevodjenje iz ES6 u ES5 jer ne podrzavaju svi browseri ES6"]];



var questionsWeb = [["Sta je url?", "Uniform resourse locator"], ["Iz cega se sastoji url adresa?", "protokol, domen, putanja do dokumenta"], ["Sta radi html?", "html treba da opise strukturu stranice"], ["Sta se stavalja u <head/> tag?", "informacije o stranici"], ["Sta je IDE?", "Integrated develpment enviroment"], ["Kako browseru objasnjavamo o kojoj verziji html-a se radi?", "preko DOCTYPE ili Document Type Definition"], ["Kako se mogu podeliti tekst elementi?", "strukturalne i semanticke"], ["Za sta sluze strukturni, a za sta semanticki elementi?", "Strukturalni elementi se koriste za opisivanje naslova i paragrafa teksta, dok se semantički tagovi koriste da obezbede neku dodatnu informaciju o samom tekstu,  kao npr. da je neka reč dosta bitna ili da je nesto citat i sl."], ["Koje vrste lista postoje u HTML-u?", "ordered, unordered i definition lists"], ["Ako zelimo da imamo link koji ce otvoriti mejl program na klijentovom racunaru, sta koristimo?", "<a>, sa atributom 'mailto' valjda"], ["Ako zelimo da nam se odredjena celija u tabeli prostire u vise kolona/redova, sta koristimo?", "col/row span"], ["Da bi forma mogla da salje podakte ka serveru, koji atributi su neophodni?", "action - vrednost ovog atributa je stranica na koju želimo da pošaljemo podatke koji su prikupljeni u formi; method - atribut koji govori brauzeru koji http metod da koristi kada šalje formu brauzeru."], ["Koje postoje metode sa slanje podataka iz forme?", "get/post"], ["razlika izmedju get i post metoda?", "get - podaci se salju tako sto se dodaju na kraj url-a, post - salju se kao deo http requesta, ovaj nacin je sigurniji"], ["Za sta sluzi radio button?", "Za klik jedne od stavki"], ["Za sta sluzi checkbox?", "Za klik vise stavki"], ["Kako biste napravili dropdown?", "<p>bla</p> <select><option/><otpion/></select>"], ["Sta su block, a sta inline elementi?", "block se uvek pojavlju u novoj liniji, a inline u produzetku linije"], ["Za sta sluzi iframe?", "Prozor koji vodi na drugu stranu"], ["Kako mozemo da uklucimo css u nas html fajl?", "eksterno preko linka, interno u style tagovima"], ["Sta je opacity?", "Neprovidnost"], ["Razlika izmedju rgba i opacity?", "opacity postavlja vrednost prozirnosti i za element i za svu njegovu decu, rgba samo za taj element"], ["Od cega se sastoji box model?", "content, padding, border, margin"], ["Koje dve sintakse podrzava sass?", ".SASS i .SCSS"], ["Kako glasi komanda u termianlu za automatsku transpilaciju iz sassa u css?", "sass -watch style.sass:style.css"], ["Kako oznacavmo varijablu u sass-u?", "$"], ["Koje control directives postoje u sassu?", "@if, @for, @each"], ["Navedite nekoliko stvari koje BOM sadrzi?", "navigator, screen, location, local storage, hitsory, pristupamo im preko window.navigator itd.."], ["Sta mozemo da radimo koristeci DOM metode?", "da pristupimo svakom elementu na stranici, da menjamo i brisemo elemente i da dodajmo nove elemente"], ["Koji je root element u DOM-u?", "html"], ["Kako se zovu cvorcici u DOM-u?", "nodes"], ["Kako pravimo nov element u DOM-u?", "document.createElement('naziv elementa')"], ["Kako pravimo text node u DOM-u?", "document.createTextNode()"], ["Kako prikljucujemo text node elementu?", "nekiElement.appendChild(text node)"], ["Kako pronalazimo neki DOM element?", "querrySelector"], ["Kako brisemo element u DOM-u?", "parentElement.removeChild(removingElement)"] ]

var finalData = [];

finalData.push(...question);
finalData.push(...questionsWeb);

finalData.forEach((e,i) => e[2] = i)

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
