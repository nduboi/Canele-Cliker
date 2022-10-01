cannele = 0;
cookies = 0;
milkshake = 0;

money = 0;

moulenbr=1;
furnacenbr = 1;
blendernbr = 1;

prixfurace = 50;
prixmoule= 10;
prixblender = 500;

m15000= 0;
m1500000 = 0 ;


secondes = 300;

pricecan = 1 ;
pricecookies = 10;
pricemilkshake = 50;

const sleep = ms => new Promise(res => setTimeout(res, ms));



function cookcannele(){
    cannele= moulenbr + cannele;
    document.getElementById("nbrcan").innerHTML = "Vous avez : "+cannele+" Cannelée(s) ";
}
function sellcan(){
    numbersellcan = document.getElementById("sellcannum").value;
    if(cannele >= numbersellcan){
        cannele = cannele - numbersellcan;
        money = money + (pricecan*numbersellcan);
        money = Math.round(money * 100) / 100
        document.getElementById("nbrcan").innerHTML = "Vous avez : "+cannele+" Cannelée(s) ";
        document.getElementById("money").innerHTML = "Money : "+money+" $ ";
    }else{
        alert("Vous n'avez pas assez de cannelée");
    }
    return false;
}
function buymoule(){
    if(money >= prixmoule){
        money = money - prixmoule;
        money = Math.round(money * 100) / 100
        prixmoule = prixmoule + 10;
        document.getElementById("moulebuy").innerHTML = "Achat d'un moule <br> ("+prixmoule+"$)";
        document.getElementById("money").innerHTML = "Money : "+money+" $ ";
        moulenbr++;
    }else{
        alert("Vous n'avez pas assez d'argent");
    }
}







function buy_150000(){
    if(money >= 15000){
        m15000 = 1 ;
        money = money - 15000;
        document.getElementById("money").innerHTML = "Money : "+money+"$";
        document.getElementById("cookiesbuymdl").innerHTML = "<h1 class=\"flex justify-center\" id=\"cookiesprice\">Cookies (10$) </h1> <h1 class=\"flex justify-center\" id=\"nbrcookies\">Vous avez : 0 Cookies(s)</h1><button class=\"flex justify-center mt-2\" onclick=\"cookcookies()\">Cuisiner</button> <div class=\"flex grid grid-cols-2 grid-rows-2\"><button class=\"flex justify-center row-start-2\" id=\"furnacebuy\" onclick=\"buyfurnace()\">Achat d'un four <br> (50$)</button><input class=\"row-start-1 col-span-2 flex justify-center text-center p-1\" id=\"sellcookies\" type=\"number\" name=\"cookiv\" placeholder=\"Mise en vente de ...\" id=\"cookiv\"><button class=\"flex justify-center row-start-2\"  onclick=\"sellcookies()\">Vendre</button></div>";
    }else{
        alert("Vous n'avez pas assez d'argent");
    }
}

function cookcookies(){
    cookies= furnacenbr + cookies;
    document.getElementById("nbrcookies").innerHTML = "Vous avez : "+cookies+" Cookies ";
}
function sellcookies(){
    numbersellcookies = document.getElementById("sellcookies").value;
    if(cookies >= numbersellcookies){
        cookies = cookies - numbersellcookies;
        money = money + (pricecookies*numbersellcookies);
        money = Math.round(money * 100) / 100
        document.getElementById("nbrcookies").innerHTML = "Vous avez : "+cookies+" Cookies ";
        document.getElementById("money").innerHTML = "Money : "+money+" $ ";
    }else{
        alert("Vous n'avez pas assez de cookies");
    }
    return false;
}
function buyfurnace(){
    if(money >= prixfurace){
        money = money - prixfurace;
        money = Math.round(money * 100) / 100
        prixfurace = prixfurace + 50;
        document.getElementById("furnacebuy").innerHTML = "Achat d'un four <br> ("+prixfurace+"$)";
        document.getElementById("money").innerHTML = "Money : "+money+" $ ";
        furnacenbr++;
    }else{
        alert("Vous n'avez pas assez d'argent");
    }
}






function buy_1500000(){
    if(money >= 1500000){
        m1500000 = 1 ;
        money = money - 1500000;
        document.getElementById("money").innerHTML = "Money : "+money+"$";
        document.getElementById("milkshakebuymdl").innerHTML = "<h1 class=\"flex justify-center\" id=\"milkhaskeprice\">MilkShake (50$) </h1> <h1 class=\"flex justify-center\" id=\"nbrmilkshake\">Vous avez : 0 Milkshake(s)</h1><button class=\"flex justify-center mt-2\" onclick=\"cookmilkshake()\">Cuisiner</button> <div class=\"flex grid grid-cols-2 grid-rows-2\"><button class=\"flex justify-center row-start-2\" id=\"milkshakebuy\" onclick=\"buyblender()\">Achat d'un Blender <br> (500$)</button><input class=\"row-start-1 col-span-2 flex justify-center text-center p-1\" id=\"sellmilkshake\" type=\"number\" name=\"cookiv\" placeholder=\"Mise en vente de ...\" id=\"cookiv\"><button class=\"flex justify-center row-start-2\"  onclick=\"sellmilkshake()\">Vendre</button></div>";
    }else{
        alert("Vous n'avez pas assez d'argent");
    }
}



function cookmilkshake(){
    milkshake= blendernbr + milkshake;
    document.getElementById("nbrmilkshake").innerHTML = "Vous avez : "+milkshake+" Milkshake(s) ";
}

function sellmilkshake(){
    numbersellmilkshake = document.getElementById("sellmilkshake").value;
    if(milkshake >= numbersellmilkshake){
        milkshake = milkshake - numbersellmilkshake;
        money = money + (pricemilkshake*numbersellmilkshake);
        money = Math.round(money * 100) / 100
        document.getElementById("nbrmilkshake").innerHTML = "Vous avez : "+milkshake+" Milkshake(s) ";
        document.getElementById("money").innerHTML = "Money : "+money+" $ ";
    }else{
        alert("Vous n'avez pas assez de Milkshake(s)");
    }
    return false;
}
function buyblender(){
    if(money >= prixblender){
        money = money - prixblender;
        money = Math.round(money * 100) / 100
        prixblender = prixblender + 200;
        document.getElementById("milkshakebuy").innerHTML = "Achat d'un Blender <br> ("+prixblender+"$)";
        document.getElementById("money").innerHTML = "Money : "+money+" $ ";
        blendernbr++;
    }else{
        alert("Vous n'avez pas assez d'argent");
    }
}















async function timetime(){
    if(secondes == 0){
        secondes = 300;
        await sleep(1000);
        pricecan = (Math.floor(Math.random() * (2 - 0) + 0)) + ((Math.floor(Math.random() * (80 - 0) + 0)) /100) ; 
        pricecan = Math.round(pricecan * 100) / 100;
        document.getElementById("pricecan").innerHTML = "Cannelées ("+pricecan+"$)";
        if(m15000 == 1){
            pricecookies =  (Math.floor(Math.random() * (11 - 8) + 8)) + ((Math.floor(Math.random() * (80 - 0) + 0)) /100) ; 
            pricecookies = Math.round(pricecookies * 100) / 100;
            document.getElementById("cookiesprice").innerHTML = "Cookies ("+pricecookies+"$)";
        }
        if( m1500000 == 1 ){
            pricemilkshake =  (Math.floor(Math.random() * (57 - 42) + 42)) + ((Math.floor(Math.random() * (80 - 0) + 0)) /100) ; 
            pricemilkshake = Math.round(pricemilkshake * 100) / 100;
            document.getElementById("milkhaskeprice").innerHTML = "Milkshake ("+pricemilkshake+"$)";
        }
    }else{
        secondes--;
        await sleep(1000);
        document.getElementById("time").innerHTML = secondes+" secondes";
    }
    timetime();
}















function save(){
    // Cannelées
    localStorage.setItem("cannele", cannele);
    localStorage.setItem("moulenbr", moulenbr);
    localStorage.setItem("prixmoule", prixmoule);
    localStorage.setItem("pricecan", pricecan);
    if(m15000 == 1){
    // Cookies
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("furnacenbr", furnacenbr);
    localStorage.setItem("prixfurnace", prixfurace);
    localStorage.setItem("pricecookies", pricecookies);
    }
    if(m1500000 == 1){
    //Milkshake
    localStorage.setItem("milkshake", milkshake);
    localStorage.setItem("blendernbr", blendernbr);
    localStorage.setItem("prixblender", prixblender);
    localStorage.setItem("pricemilkshake", pricemilkshake);
    }
    // Argent
    localStorage.setItem("money", money);
    // Achats
    localStorage.setItem("m15000", m15000);
    localStorage.setItem("m1500000", m1500000);
    //Plus
    localStorage.setItem("affichage", 1);
}



function load(){
    if(localStorage.getItem("affichage") == 1){
        cannele = Math.floor(localStorage.getItem("cannele"));
        moulenbr = Math.floor(localStorage.getItem("moulenbr"));
        prixmoule = Math.floor(localStorage.getItem("prixmoule"));
        pricecan = Math.floor((localStorage.getItem("pricecan")*100))/100;
        document.getElementById("nbrcan").innerHTML = "Vous avez : "+cannele+" Cannelée(s) ";
        document.getElementById("moulebuy").innerHTML = "Achat d'un moule <br> ("+prixmoule+"$)";
        document.getElementById("pricecan").innerHTML = "Cannelées ("+pricecan+"$)";


        // Achats
        m15000 = Math.floor(localStorage.getItem("m15000"));
        m1500000 = Math.floor(localStorage.getItem("m1500000"));

        if(m15000 == 1){
        // Cookies
        document.getElementById("cookiesbuymdl").innerHTML = "<h1 class=\"flex justify-center\" id=\"cookiesprice\">Cookies (10$) </h1> <h1 class=\"flex justify-center\" id=\"nbrcookies\">Vous avez : 0 Cookies(s)</h1><button class=\"flex justify-center mt-2\" onclick=\"cookcookies()\">Cuisiner</button> <div class=\"flex grid grid-cols-2 grid-rows-2\"><button class=\"flex justify-center row-start-2\" id=\"furnacebuy\" onclick=\"buyfurnace()\">Achat d'un four <br> (50$)</button><input class=\"row-start-1 col-span-2 flex justify-center text-center p-1\" id=\"sellcookies\" type=\"number\" name=\"cookiv\" placeholder=\"Mise en vente de ...\" id=\"cookiv\"><button class=\"flex justify-center row-start-2\"  onclick=\"sellcookies()\">Vendre</button></div>"
        cookies = Math.floor(localStorage.getItem("cookies"));
        furnacenbr = Math.floor(localStorage.getItem("furnacenbr"));
        prixfurace = Math.floor(localStorage.getItem("prixfurnace"));
        pricecookies = Math.floor((localStorage.getItem("pricecookies")*100))/100;
        document.getElementById("nbrcookies").innerHTML = "Vous avez : "+cookies+" Cookies ";
        document.getElementById("furnacebuy").innerHTML = "Achat d'un four <br> ("+prixfurace+"$)";
        document.getElementById("cookiesprice").innerHTML = "Cookies ("+pricecookies+"$)";

        }
        if(m1500000 == 1){
        //Milkshake
        document.getElementById("milkshakebuymdl").innerHTML = "<h1 class=\"flex justify-center\" id=\"milkhaskeprice\">MilkShake (50$) </h1> <h1 class=\"flex justify-center\" id=\"nbrmilkshake\">Vous avez : 0 Milkshake(s)</h1><button class=\"flex justify-center mt-2\" onclick=\"cookmilkshake()\">Cuisiner</button> <div class=\"flex grid grid-cols-2 grid-rows-2\"><button class=\"flex justify-center row-start-2\" id=\"milkshakebuy\" onclick=\"buyblender()\">Achat d'un Blender <br> (500$)</button><input class=\"row-start-1 col-span-2 flex justify-center text-center p-1\" id=\"sellmilkshake\" type=\"number\" name=\"cookiv\" placeholder=\"Mise en vente de ...\" id=\"cookiv\"><button class=\"flex justify-center row-start-2\"  onclick=\"sellmilkshake()\">Vendre</button></div>";
        milkshake = Math.floor(localStorage.getItem("milkshake"));
        blendernbr = Math.floor(localStorage.getItem("blendernbr"));
        prixblender = Math.floor(localStorage.getItem("prixblender"));
        pricemilkshake = Math.floor((localStorage.getItem("pricemilkshake")*100))/100;
        document.getElementById("nbrmilkshake").innerHTML = "Vous avez : "+milkshake+" Milkshake(s) ";
        document.getElementById("milkhaskeprice").innerHTML = "Milkshake ("+pricemilkshake+"$)";
        document.getElementById("milkshakebuy").innerHTML = "Achat d'un Blender <br> ("+prixblender+"$)";
        }
        // Argent
        money = Math.floor((localStorage.getItem("money")*100))/100;
        document.getElementById("money").innerHTML = "Money : "+money+" $ ";
    }else{
        alert("Vous n'avez pas sauvegarder de partie");
    }
}

function reset(){
    localStorage.clear();
    location.reload();
}
