let values = 50;
let hour = 0;
let fingerlvl = 1;

let melonlvl = 0;
let meloncost = 100;

let terlvl = 0;
let tercost = 500;

let stolblvl = 0;
let stolbcost = 1000;

let gnomlvl = 0;
let gnomcost = 40000;

let anapalvl = 0;
let anapacost = 45000;

let mumlvl = 0;
let mumcost = 50000;

let tapoklvl = 0;
let tapokcost = 30000;

let grandlvl = 0;
let grandcost = 10000;


document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}


function tap(){
    values=values+fingerlvl;
    document.getElementById("value").innerText = values;
    document.getElementById("btap").disabled = true;
    setTimeout(function() { document.getElementById("btap").disabled = false }, 100);
}

function autotap(){
    values=values+hour;
    document.getElementById("value").innerText = values;
}
function fingers(){
    if (fingerlvl==1){
        if (values>=100){
            document.getElementById("fingers").innerText = "Стоит: 500";
            document.getElementById("fingerimg").src = 'img/More/two.png';
            values = values - 100;
            fingerlvl = 2;
            return;
        }
    }
    else if (fingerlvl==2){
        if (values>=500){
            document.getElementById("fingers").innerText = "Стоит: 5000";
            document.getElementById("fingerimg").src = 'img/More/four.png';
            values = values - 500;
            fingerlvl = 4;
            return;
        }
    }
    else if (fingerlvl==4){
        if (values>=5000){
           document.getElementById("fingers").innerText = "Стоит: 10000";
            document.getElementById("fingerimg").src = 'img/More/eight.png';
            values = values - 5000;
            fingerlvl = 8;
            return;
        }
    }
    else if (fingerlvl==8){
        if (values>=10000){
            document.getElementById("fingers").innerText = "Максимум!";
            document.getElementById("fingerimg").src = 'img/More/ten.avif';
            values = values - 10000;
            fingerlvl = 10;
            return;
        }
    }
    else if (fingerlvl==10){
        alert("Тут больше нечего прокачивать");
        return;
    }
    alert("У вас недостаточно БогданКоина");

}

function toTap(){
    document.getElementById("finger").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("skins").style.display = "none";
    document.getElementById("friends").style.display = "none";
    document.getElementById("drop").style.display = "none";

    document.getElementById("mineBtn").style.backgroundImage = 'url("img/IconsBottom/mineGrey.png")';
    document.getElementById("mineBtn").style.color = "#646464";
    document.getElementById("skinsBtn").style.backgroundImage = 'url("img/IconsBottom/skinsGrey.png")';
    document.getElementById("skinsBtn").style.color = "#646464";
    document.getElementById("friendsBtn").style.backgroundImage = 'url("img/IconsBottom/friendsGrey.png")';
    document.getElementById("friendsBtn").style.color = "#646464";
    document.getElementById("dropBtn").style.backgroundImage = 'url("img/IconsBottom/dropGrey.png")';
    document.getElementById("dropBtn").style.color = "#646464";


    document.getElementById("tapBtn").style.color = "#ffffff";
    document.getElementById("tapBtn").style.backgroundImage = 'url("img/IconsBottom/homeWhite.png")';
    document.getElementById("taptap").style.display = "block";
    document.getElementById("scroll").style.overflowY = "hidden";

}
function toMine(){
    document.getElementById("finger").style.display = "block";
    document.getElementById("taptap").style.display = "none";
    document.getElementById("skins").style.display = "none";
    document.getElementById("friends").style.display = "none";
    document.getElementById("drop").style.display = "none";

    document.getElementById("tapBtn").style.backgroundImage = 'url("img/IconsBottom/homeGrey.png")';
    document.getElementById("tapBtn").style.color = "#646464";
    document.getElementById("skinsBtn").style.backgroundImage = 'url("img/IconsBottom/skinsGrey.png")';
    document.getElementById("skinsBtn").style.color = "#646464";
    document.getElementById("friendsBtn").style.backgroundImage = 'url("img/IconsBottom/friendsGrey.png")';
    document.getElementById("friendsBtn").style.color = "#646464";
    document.getElementById("dropBtn").style.backgroundImage = 'url("img/IconsBottom/dropGrey.png")';
    document.getElementById("dropBtn").style.color = "#646464";


    document.getElementById("mineBtn").style.color = "#ffffff";
    document.getElementById("mineBtn").style.backgroundImage = 'url("img/IconsBottom/mineWhite.png")';
    document.getElementById("cards").style.display = "block";
    document.getElementById("scroll").style.overflowY = "scroll";
}
function toSkins(){
    document.getElementById("finger").style.display = "none";
    document.getElementById("taptap").style.display = "none";
    document.getElementById("friends").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("drop").style.display = "none";

    document.getElementById("tapBtn").style.backgroundImage = 'url("img/IconsBottom/homeGrey.png")';
    document.getElementById("tapBtn").style.color = "#646464";
    document.getElementById("mineBtn").style.backgroundImage = 'url("img/IconsBottom/mineGrey.png")';
    document.getElementById("mineBtn").style.color = "#646464";
    document.getElementById("friendsBtn").style.backgroundImage = 'url("img/IconsBottom/friendsGrey.png")';
    document.getElementById("friendsBtn").style.color = "#646464";
    document.getElementById("dropBtn").style.backgroundImage = 'url("img/IconsBottom/dropGrey.png")';
    document.getElementById("dropBtn").style.color = "#646464";


    document.getElementById("skinsBtn").style.color = "#ffffff";
    document.getElementById("skinsBtn").style.backgroundImage = 'url("img/IconsBottom/skinsWhite.png")';
    document.getElementById("skins").style.display = "block";
    document.getElementById("scroll").style.overflowY = "scroll";
}
function toFriends(){
    document.getElementById("finger").style.display = "none";
    document.getElementById("taptap").style.display = "none";
    document.getElementById("skins").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("drop").style.display = "none";

    document.getElementById("tapBtn").style.backgroundImage = 'url("img/IconsBottom/homeGrey.png")';
    document.getElementById("tapBtn").style.color = "#646464";
    document.getElementById("mineBtn").style.backgroundImage = 'url("img/IconsBottom/mineGrey.png")';
    document.getElementById("mineBtn").style.color = "#646464";
    document.getElementById("skinsBtn").style.backgroundImage = 'url("img/IconsBottom/skinsGrey.png")';
    document.getElementById("skinsBtn").style.color = "#646464";
    document.getElementById("dropBtn").style.backgroundImage = 'url("img/IconsBottom/dropGrey.png")';
    document.getElementById("dropBtn").style.color = "#646464";


    document.getElementById("friendsBtn").style.color = "#ffffff";
    document.getElementById("friendsBtn").style.backgroundImage = 'url("img/IconsBottom/friendsWhite.png")';
    document.getElementById("friends").style.display = "block";
    document.getElementById("scroll").style.overflowY = "hidden";
}
function toDrop(){
    document.getElementById("finger").style.display = "none";
    document.getElementById("taptap").style.display = "none";
    document.getElementById("skins").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("friends").style.display = "none";

    document.getElementById("tapBtn").style.backgroundImage = 'url("img/IconsBottom/homeGrey.png")';
    document.getElementById("tapBtn").style.color = "#646464";
    document.getElementById("mineBtn").style.backgroundImage = 'url("img/IconsBottom/mineGrey.png")';
    document.getElementById("mineBtn").style.color = "#646464";
    document.getElementById("skinsBtn").style.backgroundImage = 'url("img/IconsBottom/skinsGrey.png")';
    document.getElementById("skinsBtn").style.color = "#646464";
    document.getElementById("friendsBtn").style.backgroundImage = 'url("img/IconsBottom/friendsGrey.png")';
    document.getElementById("friendsBtn").style.color = "#646464";


    document.getElementById("dropBtn").style.color = "#ffffff";
    document.getElementById("dropBtn").style.backgroundImage = 'url("img/IconsBottom/dropWhite.png")';
    document.getElementById("drop").style.display = "block";
    document.getElementById("scroll").style.overflowY = "hidden";
}









function melontap(){
    if (values>=meloncost){
        values=values-meloncost
        document.getElementById("value").innerText = values;
        melonlvl++;
        hour=hour+1*melonlvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        meloncost=Math.floor(meloncost+meloncost*1.1156);
        document.getElementById("melonText").innerText = 'Уровень: '+melonlvl+'\nСтоит: ' +meloncost;


    }
    else{
        alert("У вас недостаточно БогданКоина");
    }
}
function tertap(){
    if (values>=tercost){
        values=values-tercost
        document.getElementById("value").innerText = values;
        terlvl++;
        hour=hour+6*terlvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        tercost=Math.floor(tercost+tercost*0.9586);
        document.getElementById("terText").innerText = 'Уровень: '+terlvl+'\nСтоит: ' +tercost;


    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function stolbtap(){
    if (values>=stolbcost){
        values=values-stolbcost
        document.getElementById("value").innerText = values;
        stolblvl++;
        hour=hour+15*stolblvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        stolbcost=Math.floor(stolbcost+stolbcost*0.8431);
        document.getElementById("stolbText").innerText = 'Уровень: '+stolblvl+'\nСтоит: ' +stolbcost;


    }
    else{
        alert("У вас недостаточно БогданКоина");
    }
}
function gnomtap(){
    if (values>=gnomcost){
        values=values-gnomcost
        document.getElementById("value").innerText = values;
        gnomlvl++;
        hour=hour+150*gnomlvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        gnomcost=Math.floor(gnomcost+gnomcost*0.7961);
        document.getElementById("gnomText").innerText = 'Уровень: '+gnomlvl+'\nСтоит: ' +gnomcost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function anapatap(){
    if (values>=anapacost){
        values=values-anapacost
        document.getElementById("value").innerText = values;
        anapalvl++;
        hour=hour+510*anapalvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        anapacost=Math.floor(anapacost+anapacost*0.6489);
        document.getElementById("anapaText").innerText = 'Уровень: '+anapalvl+'\nСтоит: ' +anapacost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function mumtap(){
    if (values>=mumcost){
        values=values-mumcost
        document.getElementById("value").innerText = values;
        mumlvl++;
        hour=hour+700*mumlvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        mumcost=Math.floor(mumcost+mumcost*0.4057);
        document.getElementById("mumText").innerText = 'Уровень: '+mumlvl+'\nСтоит: ' +mumcost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function tapoktap(){
    if (values>=tapokcost){
        values=values-tapokcost
        document.getElementById("value").innerText = values;
        tapoklvl++;
        hour=hour+350*tapoklvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        tapokcost=Math.floor(tapokcost+tapokcost*0.7616);
        document.getElementById("tapokText").innerText = 'Уровень: '+tapoklvl+'\nСтоит: ' +tapokcost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function grandtap(){
    if (values>=grandcost){
        values=values-grandcost
        document.getElementById("value").innerText = values;
        grandlvl++;
        hour=hour+50*grandlvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        grandcost=Math.floor(grandcost+grandcost*0.4057);
        document.getElementById("grandText").innerText = 'Уровень: '+grandlvl+'\nСтоит: ' +grandcost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}














let timerId = setInterval(() => autotap(), 1000);
