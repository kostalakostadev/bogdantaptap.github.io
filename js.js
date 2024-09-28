const preloadImage = src => (new Image().src = src);
['img/ForCases/bogdanCase.png', 'img/ForCases/customCase.png', 'img/ForCases/camonFon.jpg', 'img/ForCases/epicFon.jpg', 'img/ForCases/mifFon.jpg', 'img/ForCases/legFon.jpg', 'img/IconsBottom/caseGrey.png', 'img/IconsBottom/caseWhite.png', 'img/IconsBottom/dropGrey.png', 'img/IconsBottom/dropWhite.png', 'img/IconsBottom/homeGrey.png', 'img/IconsBottom/homeWhite.png', 'img/IconsBottom/mineGrey.png', 'img/IconsBottom/mineWhite.png', 'img/IconsBottom/skinsGrey.png', 'img/IconsBottom/skinsWhite.png', 'img/Mine/anapaMine.jpeg', 'img/Mine/gnomMine.jpeg', 'img/Mine/terMine.jpeg', 'img/Mine/eatsMine.jpg', 'img/Mine/grandMine.jpg', 'img/Mine/halatMine.jpg', 'img/Mine/krapivaMine.jpg', 'img/Mine/melonMine.jpg', 'img/Mine/mumMine.jpg', 'img/Mine/stolbMine.jpg', 'img/Mine/mumMine.jpg', 'img/More/one.png', 'img/More/two.png', 'img/More/four.png', 'img/More/eight.png', 'img/More/sixteen.png', 'img/More/32.png', 'img/More/64.png', 'img/Skins/classic.png', 'img/Skins/depresCamon.png', 'img/Skins/trendyCamon.png', 'img/Skins/gnevEpic.png', 'img/Skins/iEpic.png', 'img/Skins/krestEpic.png', 'img/Skins/norelaxEpic.png', 'img/Skins/noseyEpic.png', 'img/Skins/svoEpic.png', 'img/Skins/coolLeg.png', 'img/Skins/finsniperLeg.png', 'img/Skins/gulLeg.png', 'img/Skins/stickLeg.png', 'img/Skins/winterLeg.png', 'img/Skins/wtfLeg.png'].forEach(preloadImage);



let values = 100;
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
tg.expand()
document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}

let clickBtnNone = false;

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
            document.getElementById("fingerimg").src = 'img/More/sixteen.png';
            values = values - 50000;
            fingerlvl = 16;
            document.getElementById("value").innerText = values;
            return;
        }
    }
    else if (fingerlvl==16){
        if (values>=200000){
            document.getElementById("fingers").innerText = "Стоит: 500000";
            document.getElementById("fingerimg").src = 'img/More/32.png';
            values = values - 200000;
            fingerlvl = 32;
            document.getElementById("value").innerText = values;
            return;
        }
    }
    else if (fingerlvl==32){
        if (values>=500000){
            document.getElementById("fingers").innerText = "Максимум!";
            document.getElementById("fingerimg").src = 'img/More/64.png';
            values = values - 500000;
            fingerlvl = 64;
            document.getElementById("value").innerText = values;
            return;
        }
    }
    else if (fingerlvl==64){
        tg.showAlert("Тут больше нечего прокачивать");
        return;
    }
    tg.showAlert("У вас недостаточно БогданКоина");

}

function toTap(){
    document.getElementById("finger").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("skins").style.display = "none";
    document.getElementById("cases").style.display = "none";
    document.getElementById("drop").style.display = "none";

    document.getElementById("mineBtn").style.backgroundImage = 'url("img/IconsBottom/mineGrey.png")';
    document.getElementById("mineBtn").style.color = "#646464";
    document.getElementById("skinsBtn").style.backgroundImage = 'url("img/IconsBottom/skinsGrey.png")';
    document.getElementById("skinsBtn").style.color = "#646464";
    document.getElementById("casesBtn").style.backgroundImage = 'url("img/IconsBottom/caseGrey.png")';
    document.getElementById("casesBtn").style.color = "#646464";
    document.getElementById("dropBtn").style.backgroundImage = 'url("img/IconsBottom/dropGrey.png")';
    document.getElementById("dropBtn").style.color = "#646464";


    document.getElementById("tapBtn").style.color = "#ffffff";
    document.getElementById("tapBtn").style.backgroundImage = 'url("img/IconsBottom/homeWhite.png")';
    document.getElementById("taptap").style.display = "block";
    document.getElementById("scroll").style.overflowY = "hidden";
    document.getElementById("cruchu").style.display = "none";
    document.getElementById("para").style.display = "none";

}
function toMine(){
    document.getElementById("finger").style.display = "block";
    document.getElementById("taptap").style.display = "none";
    document.getElementById("skins").style.display = "none";
    document.getElementById("cases").style.display = "none";
    document.getElementById("drop").style.display = "none";

    document.getElementById("tapBtn").style.backgroundImage = 'url("img/IconsBottom/homeGrey.png")';
    document.getElementById("tapBtn").style.color = "#646464";
    document.getElementById("skinsBtn").style.backgroundImage = 'url("img/IconsBottom/skinsGrey.png")';
    document.getElementById("skinsBtn").style.color = "#646464";
    document.getElementById("casesBtn").style.backgroundImage = 'url("img/IconsBottom/caseGrey.png")';
    document.getElementById("casesBtn").style.color = "#646464";
    document.getElementById("dropBtn").style.backgroundImage = 'url("img/IconsBottom/dropGrey.png")';
    document.getElementById("dropBtn").style.color = "#646464";


    document.getElementById("mineBtn").style.color = "#ffffff";
    document.getElementById("mineBtn").style.backgroundImage = 'url("img/IconsBottom/mineWhite.png")';
    document.getElementById("cards").style.display = "block";
    document.getElementById("scroll").style.overflowY = "scroll";
    document.getElementById("cruchu").style.display = "none";
    document.getElementById("para").style.display = "none";
}
function toSkins(){
    document.getElementById("finger").style.display = "none";
    document.getElementById("taptap").style.display = "none";
    document.getElementById("cases").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("drop").style.display = "none";

    document.getElementById("tapBtn").style.backgroundImage = 'url("img/IconsBottom/homeGrey.png")';
    document.getElementById("tapBtn").style.color = "#646464";
    document.getElementById("mineBtn").style.backgroundImage = 'url("img/IconsBottom/mineGrey.png")';
    document.getElementById("mineBtn").style.color = "#646464";
    document.getElementById("casesBtn").style.backgroundImage = 'url("img/IconsBottom/caseGrey.png")';
    document.getElementById("casesBtn").style.color = "#646464";
    document.getElementById("dropBtn").style.backgroundImage = 'url("img/IconsBottom/dropGrey.png")';
    document.getElementById("dropBtn").style.color = "#646464";


    document.getElementById("skinsBtn").style.color = "#ffffff";
    document.getElementById("skinsBtn").style.backgroundImage = 'url("img/IconsBottom/skinsWhite.png")';
    document.getElementById("skins").style.display = "block";
    document.getElementById("scroll").style.overflowY = "scroll";
    document.getElementById("cruchu").style.display = "none";
    document.getElementById("para").style.display = "none";
    bogdanSkins()
}
function toCases(){
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


    document.getElementById("casesBtn").style.color = "#ffffff";
    document.getElementById("casesBtn").style.backgroundImage = 'url("img/IconsBottom/caseWhite.png")';
    document.getElementById("cases").style.display = "block";
    document.getElementById("scroll").style.overflowY = "hidden";
}
function toDrop(){
    document.getElementById("finger").style.display = "none";
    document.getElementById("taptap").style.display = "none";
    document.getElementById("skins").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("cases").style.display = "none";

    document.getElementById("tapBtn").style.backgroundImage = 'url("img/IconsBottom/homeGrey.png")';
    document.getElementById("tapBtn").style.color = "#646464";
    document.getElementById("mineBtn").style.backgroundImage = 'url("img/IconsBottom/mineGrey.png")';
    document.getElementById("mineBtn").style.color = "#646464";
    document.getElementById("skinsBtn").style.backgroundImage = 'url("img/IconsBottom/skinsGrey.png")';
    document.getElementById("skinsBtn").style.color = "#646464";
    document.getElementById("casesBtn").style.backgroundImage = 'url("img/IconsBottom/caseGrey.png")';
    document.getElementById("casesBtn").style.color = "#646464";


    document.getElementById("dropBtn").style.color = "#ffffff";
    document.getElementById("dropBtn").style.backgroundImage = 'url("img/IconsBottom/dropWhite.png")';
    document.getElementById("drop").style.display = "block";
    document.getElementById("scroll").style.overflowY = "hidden";
    document.getElementById("cruchu").style.display = "none";
    document.getElementById("para").style.display = "none";
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
        tg.showAlert("У вас недостаточно БогданКоина");
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
        tg.showAlert("У вас недостаточно БогданКоина");
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
        tg.showAlert("У вас недостаточно БогданКоина");
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
        tg.showAlert("У вас недостаточно БогданКоина");
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
        tg.showAlert("У вас недостаточно БогданКоина");
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
        tg.showAlert("У вас недостаточно БогданКоина");
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
        tg.showAlert("У вас недостаточно БогданКоина");
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
        tg.showAlert("У вас недостаточно БогданКоина");
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
        tg.showAlert("У вас недостаточно БогданКоина");
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
        tg.showAlert("У вас недостаточно БогданКоина");
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
        tg.showAlert("У вас недостаточно БогданКоина");
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
//        tg.showAlert("У вас недостаточно БогданКоина");
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
        if (values>=50000){
            values=values-50000;
            document.getElementById("value").innerText = values;
            depresSkin = true;
            document.getElementById("depresSkinText").innerText = "Используется";
            document.getElementById("depresSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/depresCamon.png')";
            skin = "depresSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("depresSkinText").innerText = "Используется";
        document.getElementById("depresSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/depresCamon.png')";
        if (skin!="depresSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "depresSkinText";
        }
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 5000
        }

    }
}

function trendySkintap(){
    if (trendySkin==false){
        if (values>=50000){
            values=values-50000;
            document.getElementById("value").innerText = values;
            trendySkin = true;
            document.getElementById("trendySkinText").innerText = "Используется";
            document.getElementById("trendySkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/trendyCamon.png')";
            skin = "trendySkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("trendySkinText").innerText = "Используется";
        document.getElementById("trendySkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/trendyCamon.png')";
        if (skin!="trendySkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "trendySkinText";
        }
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 5000
        }

    }
}

function gnevSkintap(){
    if (gnevSkin==false){
        if (values>=75000){
            values=values-75000;
            document.getElementById("value").innerText = values;
            gnevSkin = true;
            document.getElementById("gnevSkinText").innerText = "Используется";
            document.getElementById("gnevSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/gnevEpic.png')";
            skin = "gnevSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("gnevSkinText").innerText = "Используется";
        document.getElementById("gnevSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/gnevEpic.png')";
        if (skin!="gnevSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "gnevSkinText";
        }
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 7500
        }

    }
}

function iSkintap(){
    if (iSkin==false){
        if (values>=75000){
            values=values-75000;
            document.getElementById("value").innerText = values;
            iSkin = true;
            document.getElementById("iSkinText").innerText = "Используется";
            document.getElementById("iSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/iEpic.png')";
            skin = "iSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

        }
    }
    else{
        document.getElementById("iSkinText").innerText = "Используется";
        document.getElementById("iSkin").style.borderColor = "green";
        document.getElementById("btap").style.backgroundImage = "url('img/Skins/iEpic.png')";
        if (skin!="iSkinText"){
            document.getElementById(skin).innerText = "Есть";
            skin = "iSkinText";
        }
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 7500
        }

    }
}

function krestSkintap(){
    if (krestSkin==false){
        if (values>=75000){
            values=values-75000;
            document.getElementById("value").innerText = values;
            krestSkin = true;
            document.getElementById("krestSkinText").innerText = "Используется";
            document.getElementById("krestSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/krestEpic.png')";
            skin = "krestSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

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
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 7500
        }

    }
}

function norelaxSkintap(){
    if (norelaxSkin==false){
        if (values>=75000){
            values=values-75000;
            document.getElementById("value").innerText = values;
            norelaxSkin = true;
            document.getElementById("norelaxSkinText").innerText = "Используется";
            document.getElementById("norelaxSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/norelaxEpic.png')";
            skin = "norelaxSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

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
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 7500
        }

    }
}

function noseySkintap(){
    if (noseySkin==false){
        if (values>=75000){
            values=values-75000;
            document.getElementById("value").innerText = values;
            noseySkin = true;
            document.getElementById("noseySkinText").innerText = "Используется";
            document.getElementById("noseySkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/noseyEpic.png')";
            skin = "noseySkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

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
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 7500
        }

    }
}

function svoSkintap(){
    if (svoSkin==false){
        if (values>=75000){
            values=values-75000;
            document.getElementById("value").innerText = values;
            svoSkin = true;
            document.getElementById("svoSkinText").innerText = "Используется";
            document.getElementById("svoSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/svoEpic.png')";
            skin = "svoSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

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
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 7500
        }

    }
}

function coolSkintap(){
    if (coolSkin==false){
        if (values>=500000){
            values=values-500000;
            document.getElementById("value").innerText = values;
            coolSkin = true;
            document.getElementById("coolSkinText").innerText = "Используется";
            document.getElementById("coolSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/coolLeg.png')";
            skin = "coolSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

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
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 50000
        }

    }
}

function finsniperSkintap(){
    if (finsniperSkin==false){
        if (values>=500000){
            values=values-500000;
            document.getElementById("value").innerText = values;
            finsniperSkin = true;
            document.getElementById("finsniperSkinText").innerText = "Используется";
            document.getElementById("finsniperSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/finsniperLeg.png')";
            skin = "finsniperSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

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
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 50000
        }

    }
}

function gulSkintap(){
    if (gulSkin==false){
        if (values>=500000){
            values=values-500000;
            document.getElementById("value").innerText = values;
            gulSkin = true;
            document.getElementById("gulSkinText").innerText = "Используется";
            document.getElementById("gulSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/gulLeg.png')";
            skin = "gulSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

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
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 50000
        }

    }
}

function stickSkintap(){
    if (stickSkin==false){
        if (values>=500000){
            values=values-50000;
            document.getElementById("value").innerText = values;
            stickSkin = true;
            document.getElementById("stickSkinText").innerText = "Используется";
            document.getElementById("stickSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/stickLeg.png')";
            skin = "stickSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

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
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 50000
        }

    }
}

function winterSkintap(){
    if (winterSkin==false){
        if (values>=500000){
            values=values-500000;
            document.getElementById("value").innerText = values;
            winterSkin = true;
            document.getElementById("winterSkinText").innerText = "Используется";
            document.getElementById("winterSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/winterLeg.png')";
            skin = "winterSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

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
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 50000
        }

    }
}

function wtfSkintap(){
    if (wtfSkin==false){
        if (values>=1000000){
            values=values-1000000;
            document.getElementById("value").innerText = values;
            wtfSkin = true;
            document.getElementById("wtfSkinText").innerText = "Используется";
            document.getElementById("wtfSkin").style.borderColor = "green";
            document.getElementById(skin).innerText = "Есть";
            document.getElementById("btap").style.backgroundImage = "url('img/Skins/wtfLeg.png')";
            skin = "wtfSkinText";
            if (clickBtnNone==false){
                document.getElementById('tapBtn').click();
            }
            else{
                clickBtnNone = false;
            }

        }
        else{
            tg.showAlert("У вас недостаточно БогданКоина");

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
        if (clickBtnNone==false){
            document.getElementById('tapBtn').click();
        }
        else{
            clickBtnNone = false;
            values = values + 100000
        }
    }
}






function bogdanSkins(){
    document.getElementById("bogdanSkinsBtn").style.color = "#fff";
    document.getElementById("customSkinsBtn").style.color = "#646464";
    document.getElementById("bogdanSkins").style.display = "block";
    document.getElementById("customSkins").style.display = "none";

}
function customSkins(){
    document.getElementById("customSkinsBtn").style.color = "#fff";
    document.getElementById("bogdanSkinsBtn").style.color = "#646464";
    document.getElementById("customSkins").style.display = "block";
    document.getElementById("bogdanSkins").style.display = "none";
}



function restartanim(){
    document.getElementById("cruchu").style.display = "block";
}
function fonye(fonc){
    document.getElementById("cruchu").style.backgroundColor = fonc;
}
function parandfon(fon){
    document.getElementById("para").style.display = "block";
    document.getElementById("cruchu").style.backgroundImage = fon;
}
function bogdanCase(){
    if (values>=100000){
        document.getElementById("bogdanCase").disabled = true;
        setTimeout(function() { document.getElementById("bogdanCase").disabled = false }, 3500);
        document.getElementById("customCase").disabled = true;
        setTimeout(function() { document.getElementById("customCase").disabled = false }, 3500);
        document.getElementById("cruchu").style.backgroundColor = "blue";
        document.getElementById("cruchu").style.backgroundImage = "none";
        document.getElementById("para").style.display = "none";
        let number = Math.ceil(Math.random()*100);
        let rare;
        let skins;
        let lenq;
        let coins;
        let fon;
        let names = {depres: "Депрессивный", trendy: "Модный", svo: "СВО", nosey: "Носатик", norelax: "Напряженный", krest: "Крестьянин", i: "iBogdan", gnev: "Это не просто гнев", winter: "Зимний", stick: "С палочкой", gul: "Гуль", finsniper: "Финский снайпер", cool: "Крутой",};
        let opises = {depres: "Отобрали телефон", trendy: "Стал модным", svo: "Какой хороший день...", nosey: "Носатик", norelax: "напрягся...", krest: "Эта рубашка просто имба", i: "Apple или Ньютон", gnev: "...то что живёт во мне", winter: "А меня мама, тепло одела", stick: "Крутой", gul: "Стал дединсайдом", finsniper: "Деловой и точка", cool: "Легенда Найт-Сити",};
        if (number<=50){
            rare = "Camon";
            skins = ["depres", "trendy"];
            lenq = 2;
            coins = 50000;
            fon = "url('img/ForCases/camonFon.jpg')";
            fonc = '#e8e8e8';
        }
        else if (number>=51 && number<=90){
            rare = "Epic";
            skins = ["svo", "nosey", "norelax", "krest", "i", "gnev"];
            lenq = 6;
            coins = 75000;
            fon = "url('img/ForCases/epicFon.jpg')";
            fonc = "#fe69f7";
        }
        else {
            rare = "Leg";
            skins = ["winter", "stick", "gul", "finsniper", "cool"];
            lenq = 5;
            coins = 500000;
            fon = "url('img/ForCases/legFon.jpg')";
            fonc = "#fefe00";
        }
        let skin = skins[Math.floor(Math.random() * lenq)];
        let skinimg = "img/Skins/"+skin+rare+".png";
        document.getElementById("bogdan").src = skinimg;
        document.getElementById("nameSkins").innerText = names[skin];
        document.getElementById("opisSkins").innerText = opises[skin];
        switch (skin){
            case "depres":
                document.getElementById("nameSkins").style.fontSize = "24px";
                break;
            case "gnev":
                document.getElementById("nameSkins").style.fontSize = "18px";
                break;
            case "finsniper":
                document.getElementById("nameSkins").style.fontSize = "20px";
                break;
            default:
                document.getElementById("nameSkins").style.fontSize = "25px";
        }
        values=values-100000;
        document.getElementById("cruchu").style.display = "none";
        clickBtnNone = true;
        values = values + coins;
        skinS = skin + "Skin";
        document.getElementById(skinS).click();
        setTimeout(restartanim, 1);
        setTimeout(fonye, 2000, fonc);
        setTimeout(parandfon, 3000, fon);
    }
    else{
        tg.showAlert("У вас недостаточно БогданКоина");
    }
}
function customCase(){
    if (values>=150000){
        let number = Math.ceil(Math.random()*100);
        if (number>=10){
            tg.showAlert("Не повезло...")
        }
        else{
            document.getElementById("bogdanCase").disabled = true;
            setTimeout(function() { document.getElementById("bogdanCase").disabled = false }, 3500);
            document.getElementById("customCase").disabled = true;
            setTimeout(function() { document.getElementById("customCase").disabled = false }, 3500);
            document.getElementById("cruchu").style.backgroundColor = "blue";
            document.getElementById("cruchu").style.backgroundImage = "none";
            document.getElementById("para").style.display = "none";
            let skinimg = "img/Skins/wtfLeg.png";
            document.getElementById("bogdan").src = skinimg;
            document.getElementById("nameSkins").innerText = "Wtf";
            document.getElementById("opisSkins").innerText = "Фак...";

            values=values-150000;
            document.getElementById("cruchu").style.display = "none";
            clickBtnNone = true;
            skinS = skin + "Skin";
            document.getElementById("wtfSkin").click();
            setTimeout(restartanim, 1);
            fon = "url('img/ForCases/mifFon.jpg')";
            fonc = "#fe3a3b";
            setTimeout(fonye, 2000, fonc);
            setTimeout(parandfon, 3000, fon);
        }
    }
    else{
        tg.showAlert("У вас недостаточно БогданКоина");
    }
}







let timerId = setInterval(() => autotap(), 1000);
