let values = 0;
let hour = 0;
let melonlvl = 1;
let meloncost = 100;
let melonprin = 0;

let terlvl = 1;
let tercost = 500;
let terprin = 0;

let stolblvl = 1;
let stolbcost = 1000;
let stolbprin = 0;

let gnomlvl = 1;
let gnomcost = 40000;
let gnomprin = 0;

let anapalvl = 1;
let anapacost = 45000;
let anapaprin = 0;

let mumlvl = 1;
let mumcost = 50000;
let mumprin = 0;

let tapoklvl = 1;
let tapokcost = 30000;
let tapokprin = 0;

let grandlvl = 1;
let grandcost = 10000;
let grandprin = 0;

let stage = 1;

document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}


function tap(){
    values++;
    document.getElementById("value").innerText = values;
    document.getElementById("btap").disabled = true;
    setTimeout(function() { document.getElementById("btap").disabled = false }, 100);
    var PreviousDownTimeX = 0;
    document.onkeydown = function ()
    {
    if (!PreviousDownTimeX) PreviousDownTimeX = new Date ().getTime (); else
       {
       var CurrentDownTimeX = new Date ().getTime ();
       alert ('Клавиатура задействована через ' + (CurrentDownTimeX - PreviousDownTimeX) + ' мс после предыдущего нажатия.');
       PreviousDownTimeX = CurrentDownTimeX;
       }
}
}
function autotap(){
    values=values+hour;
    document.getElementById("value").innerText = values;

}
function toTap(){
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
    document.getElementById("scroll").style.overflowY = "hidden";
}
function toFriends(){
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
        hour=hour+1*melonlvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        melonprin=melonprin+1*melonlvl;
        melonlvl++;
        meloncost=Math.floor(meloncost+meloncost*1.1156);
        document.getElementById("melonText").innerText = 'Приносит: '+melonprin+' в секунду\nСтоит: ' +meloncost;


    }
    else{
        alert("У вас недостаточно БогданКоина");
    }
}
function tertap(){
    if (values>=tercost){
        values=values-tercost
        document.getElementById("value").innerText = values;
        hour=hour+6*terlvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        terprin=terprin+6*terlvl;
        terlvl++;
        tercost=Math.floor(tercost+tercost*0.9586);
        document.getElementById("terText").innerText = 'Приносит: '+terprin+' в секунду\nСтоит: ' +tercost;


    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function stolbtap(){
    if (values>=stolbcost){
        values=values-stolbcost
        document.getElementById("value").innerText = values;
        hour=hour+15*stolblvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        stolbprin=stolbprin+15*stolblvl;
        stolblvl++;
        stolbcost=Math.floor(stolbcost+stolbcost*0.8431);
        document.getElementById("stolbText").innerText = 'Приносит: '+stolbprin+' в секунду\nСтоит: ' +stolbcost;


    }
    else{
        alert("У вас недостаточно БогданКоина");
    }
}
function gnomtap(){
    if (values>=gnomcost){
        values=values-gnomcost
        document.getElementById("value").innerText = values;
        hour=hour+150*gnomlvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        gnomprin=gnomprin+150*gnomlvl;
        gnomlvl++;
        gnomcost=Math.floor(gnomcost+gnomcost*0.7961);
        document.getElementById("gnomText").innerText = 'Приносит: '+gnomprin+' в секунду\nСтоит: ' +gnomcost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function anapatap(){
    if (values>=anapacost){
        values=values-anapacost
        document.getElementById("value").innerText = values;
        hour=hour+510*anapalvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        anapaprin=anapaprin+510*anapalvl;
        anapalvl++;
        anapacost=Math.floor(anapacost+anapacost*0.6489);
        document.getElementById("anapaText").innerText = 'Приносит: '+anapaprin+' в секунду\nСтоит: ' +anapacost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function mumtap(){
    if (values>=mumcost){
        values=values-mumcost
        document.getElementById("value").innerText = values;
        hour=hour+700*mumlvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        mumprin=mumprin+700*mumlvl;
        mumlvl++;
        mumcost=Math.floor(mumcost+mumcost*0.4057);
        document.getElementById("mumText").innerText = 'Приносит: '+mumprin+' в секунду\nСтоит: ' +mumcost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function tapoktap(){
    if (values>=tapokcost){
        values=values-tapokcost
        document.getElementById("value").innerText = values;
        hour=hour+350*tapoklvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        tapokprin=tapokprin+350*mumlvl;
        tapoklvl++;
        tapokcost=Math.floor(tapokcost+tapokcost*0.7616);
        document.getElementById("tapokText").innerText = 'Приносит: '+tapokprin+' в секунду\nСтоит: ' +tapokcost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function grandtap(){
    if (values>=grandcost){
        values=values-grandcost
        document.getElementById("value").innerText = values;
        hour=hour+50*grandlvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        grandprin=grandprin+50*grandlvl;
        grandlvl++;
        grandcost=Math.floor(grandcost+grandcost*0.4057);
        document.getElementById("grandText").innerText = 'Приносит: '+grandprin+' в секунду\nСтоит: ' +grandcost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}














let timerId = setInterval(() => autotap(), 1000);
