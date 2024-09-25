let values = 0;
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

let eatslvl = 0;
let eatscost = 15000;

let krapivalvl = 0;
let krapivacost = 200;

let halatlvl = 0;
let halatcost = 1000;

let skin = "classicSkinText";
let depresSkin = false;
let trendySkin = false;
let gnevSkin = false;
let iSkin = false;
let krestSkin = false;
let norelaxSkin = false;
let noseySkin = false;
let svoSkin = false;
let coolSkin = false;
let finsniperSkin = false;
let gulSkin = false;
let stickSkin = false;
let winterSkin = false;
let wtfSkin = false;

let tg = window.Telegram.WebApp;
tg.disableVerticalSwipes()
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
            document.getElementById("value").innerText = values;
            return;
        }
    }
    else if (fingerlvl==2){
        if (values>=500){
            document.getElementById("fingers").innerText = "Стоит: 5000";
            document.getElementById("fingerimg").src = 'img/More/four.png';
            values = values - 500;
            fingerlvl = 4;
            document.getElementById("value").innerText = values;
            return;
        }
    }
    else if (fingerlvl==4){
        if (values>=5000){
           document.getElementById("fingers").innerText = "Стоит: 50000";
            document.getElementById("fingerimg").src = 'img/More/eight.png';
            values = values - 5000;
            fingerlvl = 8;
            document.getElementById("value").innerText = values;
            return;
        }
    }
    else if (fingerlvl==8){
        if (values>=50000){
            document.getElementById("fingers").innerText = "Стоит: 200000";
            document.getElementById("fingerimg").src = 'img/More/sixteen.jpg';
            values = values - 50000;
            fingerlvl = 16;
            document.getElementById("value").innerText = values;
            return;
        }
    }
    else if (fingerlvl==16){
        if (values>=200000){
            document.getElementById("fingers").innerText = "Стоит: 500000";
            document.getElementById("fingerimg").src = 'img/More/32.jpg';
            values = values - 200000;
            fingerlvl = 32;
            document.getElementById("value").innerText = values;
            return;
        }
    }
    else if (fingerlvl==32){
        if (values>=500000){
            document.getElementById("fingers").innerText = "Максимум!";
            document.getElementById("fingerimg").src = 'img/More/64.jpg';
            values = values - 500000;
            fingerlvl = 64;
            document.getElementById("value").innerText = values;
            return;
        }
    }
    else if (fingerlvl==64){
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
function eatstap(){
    if (values>=eatscost){
        values=values-eatscost
        document.getElementById("value").innerText = values;
        eatslvl++;
        hour=hour+80*eatslvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        eatscost=Math.floor(eatscost+eatscost*0.4869);
        document.getElementById("eatsText").innerText = 'Уровень: '+eatslvl+'\nСтоит: ' +eatscost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function krapivatap(){
    if (values>=krapivacost){
        values=values-krapivacost
        document.getElementById("value").innerText = values;
        krapivalvl++;
        hour=hour+5*krapivalvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        krapivacost=Math.floor(krapivacost+krapivacost*0.8791);
        document.getElementById("krapivaText").innerText = 'Уровень: '+krapivalvl+'\nСтоит: ' +krapivacost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
function halattap(){
    if (values>=halatcost){
        values=values-halatcost
        document.getElementById("value").innerText = values;
        halatlvl++;
        hour=hour+58*halatlvl;
        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
        halatcost=Math.floor(halatcost+halatcost*0.6894);
        document.getElementById("halatText").innerText = 'Уровень: '+halatlvl+'\nСтоит: ' +halatcost;

    }
    else{
        alert("У вас недостаточно БогданКоина");
    }

}
//function !tap(){
//    if (values>=!cost){
//        values=values-!cost
//        document.getElementById("value").innerText = values;
//        !lvl++;
//        hour=hour+80*!lvl;
//        document.getElementById("earn").innerText = "Прибыль в секунду: "+hour;
//        !cost=Math.floor(!cost+!cost*0.4869);
//        document.getElementById("!Text").innerText = 'Уровень: '+!lvl+'\nСтоит: ' +!cost;
//
//    }
//    else{
//        alert("У вас недостаточно БогданКоина");
//    }
//
//}



function classicSkintap(){
    document.getElementById("classicSkinText").innerText = "Используется";
    document.getElementById("classicSkin").style.borderColor = "green";
    document.getElementById("btap").style.backgroundImage = "url('img/Skins/classic.png')";
    if (skin!="classicSkinText"){
        document.getElementById(skin).innerText = "Есть";
        skin = "classicSkinText";
    }
    document.getElementById('tapBtn').click();

}

function depresSkintap(){
    if (depresSkin==false){
        if (values>=10000){
            values=values-10000;
            document.getElementById("value").innerText = values;
            depresSkin = true;
            document.getElementById("depresSkinText").innerText = "Используется";
            document.getElementById("depresSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/depressiveCamon.png')";
            skin = "depresSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("depresSkinText").innerText = "Используется";
        document.getElementById("depresSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/depressiveCamon.png')";
        if (skin!="depresSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "depresSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function trendySkintap(){
    if (trendySkin==false){
        if (values>=15000){
            values=values-15000;
            document.getElementById("value").innerText = values;
            trendySkin = true;
            document.getElementById("trendySkinText").innerText = "Используется";
            document.getElementById("trendySkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/trandyCamon.png')";
            skin = "trendySkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("trendySkinText").innerText = "Используется";
        document.getElementById("trendySkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/trandyCamon.png')";
        if (skin!="trendySkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "trendySkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function gnevSkintap(){
    if (gnevSkin==false){
        if (values>=20000){
            values=values-20000;
            document.getElementById("value").innerText = values;
            gnevSkin = true;
            document.getElementById("gnevSkinText").innerText = "Используется";
            document.getElementById("gnevSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/angerEpic.png')";
            skin = "gnevSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("gnevSkinText").innerText = "Используется";
        document.getElementById("gnevSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/angerEpic.png')";
        if (skin!="gnevSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "gnevSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function iSkintap(){
    if (iSkin==false){
        if (values>=20000){
            values=values-20000;
            document.getElementById("value").innerText = values;
            iSkin = true;
            document.getElementById("iSkinText").innerText = "Используется";
            document.getElementById("iSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/iBogdanEpic.png')";
            skin = "iSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("iSkinText").innerText = "Используется";
        document.getElementById("iSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/iBogdanEpic.png')";
        if (skin!="iSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "iSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function krestSkintap(){
    if (krestSkin==false){
        if (values>=20000){
            values=values-20000;
            document.getElementById("value").innerText = values;
            krestSkin = true;
            document.getElementById("krestSkinText").innerText = "Используется";
            document.getElementById("krestSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/krestEpic.png')";
            skin = "krestSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("krestSkinText").innerText = "Используется";
        document.getElementById("krestSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/krestEpic.png')";
        if (skin!="krestSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "krestSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function norelaxSkintap(){
    if (norelaxSkin==false){
        if (values>=20000){
            values=values-20000;
            document.getElementById("value").innerText = values;
            norelaxSkin = true;
            document.getElementById("norelaxSkinText").innerText = "Используется";
            document.getElementById("norelaxSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/norelaxEpic.png')";
            skin = "norelaxSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("norelaxSkinText").innerText = "Используется";
        document.getElementById("norelaxSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/norelaxEpic.png')";
        if (skin!="norelaxSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "norelaxSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function noseySkintap(){
    if (noseySkin==false){
        if (values>=20000){
            values=values-20000;
            document.getElementById("value").innerText = values;
            noseySkin = true;
            document.getElementById("noseySkinText").innerText = "Используется";
            document.getElementById("noseySkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/noseyEpic.png')";
            skin = "noseySkinText";
            document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("noseySkinText").innerText = "Используется";
        document.getElementById("noseySkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/noseyEpic.png')";
        if (skin!="noseySkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "noseySkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function svoSkintap(){
    if (svoSkin==false){
        if (values>=20000){
            values=values-20000;
            document.getElementById("value").innerText = values;
            svoSkin = true;
            document.getElementById("svoSkinText").innerText = "Используется";
            document.getElementById("svoSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/svoEpic.png')";
            skin = "svoSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("svoSkinText").innerText = "Используется";
        document.getElementById("svoSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/svoEpic.png')";
        if (skin!="svoSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "svoSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function coolSkintap(){
    if (coolSkin==false){
        if (values>=50000){
            values=values-50000;
            document.getElementById("value").innerText = values;
            coolSkin = true;
            document.getElementById("coolSkinText").innerText = "Используется";
            document.getElementById("coolSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/coolLeg.png')";
            skin = "coolSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("coolSkinText").innerText = "Используется";
        document.getElementById("coolSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/coolLeg.png')";
        if (skin!="coolSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "coolSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function finsniperSkintap(){
    if (finsniperSkin==false){
        if (values>=50000){
            values=values-50000;
            document.getElementById("value").innerText = values;
            finsniperSkin = true;
            document.getElementById("finsniperSkinText").innerText = "Используется";
            document.getElementById("finsniperSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/finsniperLeg.png')";
            skin = "finsniperSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("finsniperSkinText").innerText = "Используется";
        document.getElementById("finsniperSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/finsniperLeg.png')";
        if (skin!="finsniperSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "finsniperSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function gulSkintap(){
    if (gulSkin==false){
        if (values>=50000){
            values=values-50000;
            document.getElementById("value").innerText = values;
            gulSkin = true;
            document.getElementById("gulSkinText").innerText = "Используется";
            document.getElementById("gulSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/gulLeg.png')";
            skin = "gulSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("gulSkinText").innerText = "Используется";
        document.getElementById("gulSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/gulLeg.png')";
        if (skin!="gulSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "gulSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function stickSkintap(){
    if (stickSkin==false){
        if (values>=50000){
            values=values-50000;
            document.getElementById("value").innerText = values;
            stickSkin = true;
            document.getElementById("stickSkinText").innerText = "Используется";
            document.getElementById("stickSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/stickLeg.png')";
            skin = "stickSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("stickSkinText").innerText = "Используется";
        document.getElementById("stickSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/stickLeg.png')";
        if (skin!="stickSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "stickSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function winterSkintap(){
    if (winterSkin==false){
        if (values>=50000){
            values=values-50000;
            document.getElementById("value").innerText = values;
            winterSkin = true;
            document.getElementById("winterSkinText").innerText = "Используется";
            document.getElementById("winterSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/winterLeg.png')";
            skin = "winterSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("winterSkinText").innerText = "Используется";
        document.getElementById("winterSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/winterLeg.png')";
        if (skin!="winterSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "dwinterSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}

function wtfSkintap(){
    if (wtfSkin==false){
        if (values>=100000){
            values=values-100000;
            document.getElementById("value").innerText = values;
            wtfSkin = true;
            document.getElementById("wtfSkinText").innerText = "Используется";
            document.getElementById("wtfSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/wtfLeg.png')";
            skin = "wtfSkinText";
        document.getElementById('tapBtn').click();
        }
        else{
            alert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("wtfSkinText").innerText = "Используется";
        document.getElementById("wtfSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/wtfLeg.png')";
        if (skin!="wtfSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "wtfSkinText";
        }
        document.getElementById('tapBtn').click();
    }
}











tg.expand()
let timerId = setInterval(() => autotap(), 1000);
