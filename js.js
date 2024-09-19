let values = 0;
let hour = 0;
let melonlvl = 1;
let meloncost = 100;
let melonprin = 0;
let terlvl = 1;
let tercost = 500;
let terprin = 0;
let stolblvl = 1;
let stolbcost = 1488;
let stolbprin = 0;
let gnomlvl = 1;
let gnomcost = 52000;
let gnomprin = 0;
let stage = 1;

let tg = window.Telegram.WebApp;
tg.expand()

function tap(){
    values++;
    document.getElementById("value").innerText = values;
}
function autotap(){
    values=values+hour;
    document.getElementById("value").innerText = values;

}
function toMine(){
    document.getElementById("taptap").style.display = "none";
    document.getElementById("cards").style.display = "block";

    document.getElementById("tapBtn").style.color = "#646464";
    document.getElementById("tapBtn").style.backgroundColor = "#3c3c3c";

    document.getElementById("mineBtn").style.color = "#ffffff";
    document.getElementById("mineBtn").style.backgroundColor = "#222222";
}
function toTap(){
    document.getElementById("taptap").style.display = "block";
    document.getElementById("cards").style.display = "none";

    document.getElementById("mineBtn").style.color = "#646464";
    document.getElementById("mineBtn").style.backgroundColor = "#3c3c3c";

    document.getElementById("tapBtn").style.color = "#ffffff";
    document.getElementById("tapBtn").style.backgroundColor = "#222222";

}









function melontap(){
    if (values>=meloncost){
        values=values-meloncost
        document.getElementById("value").innerText = values;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        hour=hour+1*melonlvl;
        melonprin=melonprin+1*melonlvl;
        melonlvl++;
        meloncost=Math.floor(meloncost+meloncost*0.9549);
        document.getElementById("melon").innerText = 'Арбузный бизнес\nПриносит: '+melonprin+' в секунду\nСтоит: ' +meloncost;
        let ml = document.getElementById("melon");
        let newElem = document.createElement('img');
        ml.append(newElem);
        newElem.src = 'https://i.postimg.cc/PLYdp3hG/melon.jpg';


    }
    else{
        alert("У вас недостаточно БогданКоина");
    }
}
function tertap(){
    if (values>=tercost){
        values=values-tercost
        document.getElementById("value").innerText = values;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        hour=hour+10*terlvl;
        terprin=terprin+10*terlvl;
        terlvl++;
        tercost=Math.floor(tercost+tercost*0.9586);
        document.getElementById("ter").innerText = 'Террария\nПриносит: '+terprin+' в секунду\nСтоит: ' +tercost;
        let ml = document.getElementById("ter");
        let newElem = document.createElement('img');
        ml.append(newElem);
        newElem.src = 'https://i.postimg.cc/gXKd4xnN/ter.jpg';


    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function stolbtap(){
    if (values>=stolbcost){
        values=values-stolbcost
        document.getElementById("value").innerText = values;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        hour=hour+50*stolblvl;
        stolbprin=stolbprin+50*stolblvl;
        stolblvl++;
        stolbcost=Math.floor(stolbcost+stolbcost*0.9571);
        document.getElementById("stolb").innerText = 'Столб фарм\nПриносит: '+stolbprin+' в секунду\nСтоит: ' +stolbcost;
        let ml = document.getElementById("stolb");
        let newElem = document.createElement('img');
        ml.append(newElem);
        newElem.src = 'https://i.postimg.cc/ZBm4r8KW/stolb.jpg';


    }
    else{
        alert("У вас недостаточно БогданКоина");
    }
}
function gnomtap(){
    if (values>=gnomcost){
        values=values-gnomcost
        document.getElementById("value").innerText = values;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        hour=hour+1000*gnomlvl;
        gnomprin=gnomprin+1000*gnomlvl;
        gnomlvl++;
        gnomcost=Math.floor(gnomcost+gnomcost*0.9531);
        document.getElementById("gnom").innerText = 'Гном фарм\nПриносит: '+gnomprin+' в секунду\nСтоит: ' +gnomcost;
        let ml = document.getElementById("gnom");
        let newElem = document.createElement('img');
        ml.append(newElem);
        newElem.src = 'https://i.postimg.cc/PCLXhfR5/gnom.jpg';


    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}














let timerId = setInterval(() => autotap(), 1000);
