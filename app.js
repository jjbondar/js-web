const form = document.querySelector("#container");
const h1 = document.createElement("h1");
h1.innerText = "Индех Биг Мака";
const p = document.createElement("p");
p.innerText = "Индекс Биг Мака - это стоимость гамбургера в сети Мак Дональдс. Биг мак содержит, мясо, овощи, сыр, хлеб и другие продукты.\nВ его стоимость так же входят аренда помещения и оборудования, рабочая сила и многие другие факторы.\nЕсли цена биг мака низкая то можно сказать что цены в стране низкие, если высокая то и цены относительно высокие.\nИсследования проводятся журналом «The Economist».";
const div = document.createElement("div");
const span = document.createElement("span");
span.innerText = "Индекс Биг Мака в разных странах";
const table = document.createElement("table");
const tr1 = document.createElement("tr");
const td1 = document.createElement("td");
td1.innerText = "Год";
const td2 = document.createElement("td");
td2.innerText = "Россия";
const td3 = document.createElement("td");
td3.innerText = "Великобритания";
const td4 = document.createElement("td");
td4.innerText = "США";
const td5 = document.createElement("td");
td5.innerText = "Израиль";
const tr2 = document.createElement("tr");
const td6 = document.createElement("td");
td6.innerText = "2012";
const td7 = document.createElement("td");
td7.innerText = "2.62";
const td8 = document.createElement("td");
td8.innerText = "4.5";
const td9 = document.createElement("td");
td9.innerText = "4.33";
const td10 = document.createElement("td");
td10.innerText = "3.99";
const tr3 = document.createElement("tr");
const td11 = document.createElement("td");
td11.innerText = "2013";
const td12 = document.createElement("td");
td12.innerText = "2.64";
const td13 = document.createElement("td");
td13.innerText = "4.51";
const td14 = document.createElement("td");
td14.innerText = "2.9";
const td15 = document.createElement("td");
td15.innerText = "4.15";
const tr4 = document.createElement("tr");
const td16 = document.createElement("td");
td16.innerText = "2014";
const td17 = document.createElement("td");
td17.innerText = "2.6";
const td18 = document.createElement("td");
td18.innerText = "4.66";
const td19 = document.createElement("td");
td19.innerText = "4.68";
const td20 = document.createElement("td");
td20.innerText = "4.18";
const h3 = document.createElement("h3");
h3.innerText = "Интересные факты:";
const ol = document.createElement("ol");
const li1 = document.createElement("li");
li1.innerText = "По мнению экспертов журнала «The Economist» российский рубль, наряду с валютами таких стран как Украина, Египет, Филипины, Аргентина, Гонконг, Индонезия, Тайланд, Малайзия, недооценен примерно на 50%";
const li2 = document.createElement("li");
li2.innerText = "В 2015 году самым дешевым Биг-Маком можно \"полакомится\" в Венесуэле - за 0,67 доллара (недооценка на 86%), потом идет Украина - 1,55 $ (-67,7%), а за ними Индия, где цена за этот бутерброд 1,83 доллара (-61,7%).";
const li3 = document.createElement("li");
li3.innerText = "Самый дорогой Биг-Мак можно купить в Швейцарии за 6,83 доллара (+42,4%), затем идут Норвегия - 5,65 $ (+17,9%), Швеция - 5,13 $ (+7%) и Дания - 5,08 $ (+6%).";
form.append(h1,p,div,h3,ol);
div.append(span,table);
table.append(tr1,td1,td2,td3,td4,td5,tr2,td6,td7,td8,td9,td10,tr3,td11,td12,td13,td14,td15,tr4,td16,td17,td18,td19,td20);
ol.append(li1,li2,li3);
container.style.margin = "0";
container.style.padding = "20px";
table.style.border = "2px solid grey";
tr1.style.border = "2px solid grey";
tr2.style.border = "2px solid grey";
tr3.style.border = "2px solid grey";
tr4.style.border = "2px solid grey";
td1.style.border = "2px solid grey";
td2.style.border = "2px solid grey";
td3.style.border = "2px solid grey";
td4.style.border = "2px solid grey";
td5.style.border = "2px solid grey";
td6.style.border = "2px solid grey";
td7.style.border = "2px solid grey";
td8.style.border = "2px solid grey";
td9.style.border = "2px solid grey";
td10.style.border = "2px solid grey";
td11.style.border = "2px solid grey";
td12.style.border = "2px solid grey";
td13.style.border = "2px solid grey";
td14.style.border = "2px solid grey";
td15.style.border = "2px solid grey";
td16.style.border = "2px solid grey";
td17.style.border = "2px solid grey";
td18.style.border = "2px solid grey";
td19.style.border = "2px solid grey";
td20.style.border = "2px solid grey";
span.style.paddingLeft = "40px";
span.style.fontStyle = "italic";