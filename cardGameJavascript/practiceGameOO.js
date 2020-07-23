//create arrays for hands, suits, and values

let suits = ["Hearts","Diamonds","Clubs","Spades","Skulls","Swords"];
let values = [2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"];
let hand1= [];
let hand2= [];
let hand3= [];
let hand4= [];
let hand5= [];
let hand6= [];
let hand7= [];
let hand8= [];
let hand9= [];
let hand10= [];
let hand11= [];
let hand12= [];
let hand13= [];
let hand14= [];
let collection=[];




//create deck and deal functions

class Card {
    constructor(suit,value){
        this.suit=suit;
        this.value=value;
    }
}

class Deck {
    constructor (){
        this.deck=[];
    }

    createDeck(suits,values) {
        for (let suit of suits){
            for(let value of values){
                this.deck.push (new Card(suit,value));
            }
        }
        return this.deck;
    }

    shuffle(){
        let counter=this.deck.length, temp, i;

        while (counter){
            i=Math.floor(Math.random()*counter--);
            temp=this.deck[counter];
            this.deck[counter]=this.deck[i];
            this.deck[i]=temp;
        }
        return this.deck;
    }

    deal1(){
        for (let i=0;i<5;i++){
            hand1.push(this.deck.pop());
        }
        return hand1;
    }

    deal2(){
        for (let i=0;i<5;i++){
            hand2.push(this.deck.pop());
        }
        return hand2;
    }

    deal3(){
        for (let i=0;i<5;i++){
            hand3.push(this.deck.pop());
        }
        return hand3;
    }

    deal4(){
        for (let i=0;i<5;i++){
            hand4.push(this.deck.pop());
        }
        return hand4;
    }

    deal5(){
        for (let i=0;i<5;i++){
            hand5.push(this.deck.pop());
        }
        return hand5;
    }

    deal6(){
        for (let i=0;i<5;i++){
            hand6.push(this.deck.pop());
        }
        return hand6;
    }

    deal7(){
        for (let i=0;i<5;i++){
            hand7.push(this.deck.pop());
        }
        return hand7;
    }

    deal8(){
        for (let i=0;i<5;i++){
            hand8.push(this.deck.pop());
        }
        return hand8;
    }

    deal9(){
        for (let i=0;i<5;i++){
            hand9.push(this.deck.pop());
        }
        return hand9;
    }

    deal10(){
        for (let i=0;i<5;i++){
            hand10.push(this.deck.pop());
        }
        return hand10;
    }

    deal11(){
        for (let i=0;i<5;i++){
            hand11.push(this.deck.pop());
        }
        return hand11;
    }

    deal12(){
        for (let i=0;i<5;i++){
            hand12.push(this.deck.pop());
        }
        return hand12;
    }

    deal13(){
        for (let i=0;i<5;i++){
            hand13.push(this.deck.pop());
        }
        return hand13;
    }

    deal14(){
        for (let i=0;i<5;i++){
            hand14.push(this.deck.pop());
        }
        return hand14;
    }


}

let deck=new Deck;
deck.createDeck(suits,values);
deck.shuffle();
deck.deal1();
deck.deal2();
deck.deal3();
deck.deal4();
deck.deal5();
deck.deal6();
deck.deal7();
deck.deal8();
deck.deal9();
deck.deal10();
deck.deal11();
deck.deal12();
deck.deal13();
deck.deal14();


//show first hand,
function hideall(){
    let TwoHideBtn1=document.getElementById("2btn1");
    TwoHideBtn1.style.display="none";
    let TwoHideBtn2=document.getElementById("2btn2");
    TwoHideBtn2.style.display="none";
    let TwoHideBtn3=document.getElementById("2btn3");
    TwoHideBtn3.style.display="none";
    let TwoHideBtn4=document.getElementById("2btn4");
    TwoHideBtn4.style.display="none";
    let TwoHideBtn5=document.getElementById("2btn5");
    TwoHideBtn5.style.display="none";
    
    let ThreeHideBtn1=document.getElementById("3btn1");
    ThreeHideBtn1.style.display="none";
    let ThreeHideBtn2=document.getElementById("3btn2");
    ThreeHideBtn2.style.display="none";
    let ThreeHideBtn3=document.getElementById("3btn3");
    ThreeHideBtn3.style.display="none";
    let ThreeHideBtn4=document.getElementById("3btn4");
    ThreeHideBtn4.style.display="none";
    let ThreeHideBtn5=document.getElementById("3btn5");
    ThreeHideBtn5.style.display="none";

    let FourHideBtn1=document.getElementById("4btn1");
    FourHideBtn1.style.display="none";
    let FourHideBtn2=document.getElementById("4btn2");
    FourHideBtn2.style.display="none";
    let FourHideBtn3=document.getElementById("4btn3");
    FourHideBtn3.style.display="none";
    let FourHideBtn4=document.getElementById("4btn4");
    FourHideBtn4.style.display="none";
    let FourHideBtn5=document.getElementById("4btn5");
    FourHideBtn5.style.display="none";

    let FiveHideBtn1=document.getElementById("5btn1");
    FiveHideBtn1.style.display="none";
    let FiveHideBtn2=document.getElementById("5btn2");
    FiveHideBtn2.style.display="none";
    let FiveHideBtn3=document.getElementById("5btn3");
    FiveHideBtn3.style.display="none";
    let FiveHideBtn4=document.getElementById("5btn4");
    FiveHideBtn4.style.display="none";
    let FiveHideBtn5=document.getElementById("5btn5");
    FiveHideBtn5.style.display="none";

    let SixHideBtn1=document.getElementById("6btn1");
    SixHideBtn1.style.display="none";
    let SixHideBtn2=document.getElementById("6btn2");
    SixHideBtn2.style.display="none";
    let SixHideBtn3=document.getElementById("6btn3");
    SixHideBtn3.style.display="none";
    let SixHideBtn4=document.getElementById("6btn4");
    SixHideBtn4.style.display="none";
    let SixHideBtn5=document.getElementById("6btn5");
    SixHideBtn5.style.display="none";

    let SevenHideBtn1=document.getElementById("7btn1");
    SevenHideBtn1.style.display="none";
    let SevenHideBtn2=document.getElementById("7btn2");
    SevenHideBtn2.style.display="none";
    let SevenHideBtn3=document.getElementById("7btn3");
    SevenHideBtn3.style.display="none";
    let SevenHideBtn4=document.getElementById("7btn4");
    SevenHideBtn4.style.display="none";
    let SevenHideBtn5=document.getElementById("7btn5");
    SevenHideBtn5.style.display="none";

    let EightHideBtn1=document.getElementById("8btn1");
    EightHideBtn1.style.display="none";
    let EightHideBtn2=document.getElementById("8btn2");
    EightHideBtn2.style.display="none";
    let EightHideBtn3=document.getElementById("8btn3");
    EightHideBtn3.style.display="none";
    let EightHideBtn4=document.getElementById("8btn4");
    EightHideBtn4.style.display="none";
    let EightHideBtn5=document.getElementById("8btn5");
    EightHideBtn5.style.display="none";

    let NineHideBtn1=document.getElementById("9btn1");
    NineHideBtn1.style.display="none";
    let NineHideBtn2=document.getElementById("9btn2");
    NineHideBtn2.style.display="none";
    let NineHideBtn3=document.getElementById("9btn3");
    NineHideBtn3.style.display="none";
    let NineHideBtn4=document.getElementById("9btn4");
    NineHideBtn4.style.display="none";
    let NineHideBtn5=document.getElementById("9btn5");
    NineHideBtn5.style.display="none";

    let TenHideBtn1=document.getElementById("10btn1");
    TenHideBtn1.style.display="none";
    let TenHideBtn2=document.getElementById("10btn2");
    TenHideBtn2.style.display="none";
    let TenHideBtn3=document.getElementById("10btn3");
    TenHideBtn3.style.display="none";
    let TenHideBtn4=document.getElementById("10btn4");
    TenHideBtn4.style.display="none";
    let TenHideBtn5=document.getElementById("10btn5");
    TenHideBtn5.style.display="none";

    let ElevenHideBtn1=document.getElementById("11btn1");
    ElevenHideBtn1.style.display="none";
    let ElevenHideBtn2=document.getElementById("11btn2");
    ElevenHideBtn2.style.display="none";
    let ElevenHideBtn3=document.getElementById("11btn3");
    ElevenHideBtn3.style.display="none";
    let ElevenHideBtn4=document.getElementById("11btn4");
    ElevenHideBtn4.style.display="none";
    let ElevenHideBtn5=document.getElementById("11btn5");
    ElevenHideBtn5.style.display="none";

    let TwelveHideBtn1=document.getElementById("12btn1");
    TwelveHideBtn1.style.display="none";
    let TwelveHideBtn2=document.getElementById("12btn2");
    TwelveHideBtn2.style.display="none";
    let TwelveHideBtn3=document.getElementById("12btn3");
    TwelveHideBtn3.style.display="none";
    let TwelveHideBtn4=document.getElementById("12btn4");
    TwelveHideBtn4.style.display="none";
    let TwelveHideBtn5=document.getElementById("12btn5");
    TwelveHideBtn5.style.display="none";
   
    let ThirteenHideBtn1=document.getElementById("13btn1");
    ThirteenHideBtn1.style.display="none";
    let ThirteenHideBtn2=document.getElementById("13btn2");
    ThirteenHideBtn2.style.display="none";
    let ThirteenHideBtn3=document.getElementById("13btn3");
    ThirteenHideBtn3.style.display="none";
    let ThirteenHideBtn4=document.getElementById("13btn4");
    ThirteenHideBtn4.style.display="none";
    let ThirteenHideBtn5=document.getElementById("13btn5");
    ThirteenHideBtn5.style.display="none";

    let FourteenHideBtn1=document.getElementById("14btn1");
    FourteenHideBtn1.style.display="none";
    let FourteenHideBtn2=document.getElementById("14btn2");
    FourteenHideBtn2.style.display="none";
    let FourteenHideBtn3=document.getElementById("14btn3");
    FourteenHideBtn3.style.display="none";
    let FourteenHideBtn4=document.getElementById("14btn4");
    FourteenHideBtn4.style.display="none";
    let FourteenHideBtn5=document.getElementById("14btn5");
    FourteenHideBtn5.style.display="none";

    let GetHideBtn2=document.getElementById("getBtn2");
    GetHideBtn2.style.display="none";
    
    let GetHideBtn3=document.getElementById("getBtn3");
    GetHideBtn3.style.display="none";
    
    let GetHideBtn4=document.getElementById("getBtn4");
    GetHideBtn4.style.display="none";
    
    let GetHideBtn5=document.getElementById("getBtn5");
    GetHideBtn5.style.display="none";
    
    let GetHideBtn6=document.getElementById("getBtn6");
    GetHideBtn6.style.display="none";
    
    let GetHideBtn7=document.getElementById("getBtn7");
    GetHideBtn7.style.display="none";

    let GetHideBtn8=document.getElementById("getBtn8");
    GetHideBtn8.style.display="none";

    let GetHideBtn9=document.getElementById("getBtn9");
    GetHideBtn9.style.display="none";

    let GetHideBtn10=document.getElementById("getBtn10");
    GetHideBtn10.style.display="none";

    let GetHideBtn11=document.getElementById("getBtn11");
    GetHideBtn11.style.display="none";

    let GetHideBtn12=document.getElementById("getBtn12");
    GetHideBtn12.style.display="none";

    let GetHideBtn13=document.getElementById("getBtn13");
    GetHideBtn13.style.display="none";

    let GetHideBtn14=document.getElementById("getBtn14");
    GetHideBtn14.style.display="none";


    document.getElementById("round");
    let roundCounter=document.createElement("p");
    round.appendChild(roundCounter);
    roundCounter.innerHTML="This is Hand 1";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";



}


function showHand1 () {
    for (i=0; i<hand1.length; ++i) {
        document.getElementById("handAnchor");
        let h1c1=document.createElement("img");

        h1c1.src= `cardGameImages/${hand1[i].suit}${hand1[i].value}.png`;
        handAnchor.appendChild(h1c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }
};


//pick 2 and add to collection


function Onehand1Choose2C1() {
    collection.push(hand1[0]);
    document.getElementById("collectionAnchor");
    let ah1c1=document.createElement("img");
    ah1c1.src= `cardGameImages/${hand1[0].suit}${hand1[0].value}.png`;
    collectionAnchor.appendChild(ah1c1);
    ah1c1.setAttribute("style","width:180px;");
    ah1c1.setAttribute("style","height:240px;");
    ah1c1.setAttribute("style","padding:10px");
    round.setAttribute("style","font-size: 50px");
    

};

function Onehand1Choose2C2() {
    collection.push(hand1[1]);
    document.getElementById("collectionAnchor");
    let ah1c2=document.createElement("img");
    ah1c2.src= `cardGameImages/${hand1[1].suit}${hand1[1].value}.png`;
    collectionAnchor.appendChild(ah1c2);
    ah1c2.setAttribute("style","width:180px;");
    ah1c2.setAttribute("style","height:240px;");
    ah1c2.setAttribute("style","padding:10px");
};

function Onehand1Choose2C3() {
    collection.push(hand1[2]);
    document.getElementById("collectionAnchor");
    let ah1c3=document.createElement("img");
    ah1c3.src= `cardGameImages/${hand1[2].suit}${hand1[2].value}.png`;
    collectionAnchor.appendChild(ah1c3);
    ah1c3.setAttribute("style","width:180px;");
    ah1c3.setAttribute("style","height:240px;");
    ah1c3.setAttribute("style","padding:10px");
};

function Onehand1Choose2C4() {
    collection.push(hand1[3]);
    document.getElementById("collectionAnchor");
    let ah1c4=document.createElement("img");
    ah1c4.src= `cardGameImages/${hand1[3].suit}${hand1[3].value}.png`;
    collectionAnchor.appendChild(ah1c4);
    ah1c4.setAttribute("style","width:180px;");
    ah1c4.setAttribute("style","height:240px;");
    ah1c4.setAttribute("style","padding:10px");
};

function Onehand1Choose2C5() {
    collection.push(hand1[4]);
    document.getElementById("collectionAnchor");
    let ah1c5=document.createElement("img");
    ah1c5.src= `cardGameImages/${hand1[4].suit}${hand1[4].value}.png`;
    collectionAnchor.appendChild(ah1c5);
    ah1c5.setAttribute("style","width:180px;");
    ah1c5.setAttribute("style","height:240px;");
    ah1c5.setAttribute("style","padding:10px");
};

//clear hand1 function and choose 2 new buttons
function Twohand2Choose2C1() {
    collection.push(hand2[0]);
    document.getElementById("collectionAnchor");
    let ah1c1=document.createElement("img");
    ah1c1.src= `cardGameImages/${hand2[0].suit}${hand2[0].value}.png`;
    collectionAnchor.appendChild(ah1c1);
    ah1c1.setAttribute("style","width:180px;");
    ah1c1.setAttribute("style","height:240px;");
    ah1c1.setAttribute("style","padding:10px");

};

function Twohand2Choose2C2() {
    collection.push(hand2[1]);
    document.getElementById("collectionAnchor");
    let ah1c2=document.createElement("img");
    ah1c2.src= `cardGameImages/${hand2[1].suit}${hand2[1].value}.png`;
    collectionAnchor.appendChild(ah1c2);
    ah1c2.setAttribute("style","width:180px;");
    ah1c2.setAttribute("style","height:240px;");
    ah1c2.setAttribute("style","padding:10px");
};

function Twohand2Choose2C3() {
    collection.push(hand2[2]);
    document.getElementById("collectionAnchor");
    let ah1c3=document.createElement("img");
    ah1c3.src= `cardGameImages/${hand2[2].suit}${hand2[2].value}.png`;
    collectionAnchor.appendChild(ah1c3);
    ah1c3.setAttribute("style","width:180px;");
    ah1c3.setAttribute("style","height:240px;");
    ah1c3.setAttribute("style","padding:10px");
};

function Twohand2Choose2C4() {
    collection.push(hand2[3]);
    document.getElementById("collectionAnchor");
    let ah1c4=document.createElement("img");
    ah1c4.src= `cardGameImages/${hand2[3].suit}${hand2[3].value}.png`;
    collectionAnchor.appendChild(ah1c4);
    ah1c4.setAttribute("style","width:180px;");
    ah1c4.setAttribute("style","height:240px;");
    ah1c4.setAttribute("style","padding:10px");
};

function Twohand2Choose2C5() {
    collection.push(hand2[4]);
    document.getElementById("collectionAnchor");
    let ah1c5=document.createElement("img");
    ah1c5.src= `cardGameImages/${hand2[4].suit}${hand2[4].value}.png`;
    collectionAnchor.appendChild(ah1c5);
    ah1c5.setAttribute("style","width:180px;");
    ah1c5.setAttribute("style","height:240px;");
    ah1c5.setAttribute("style","padding:10px");
};

function clearHand1(){
    let anchor=document.getElementById("handAnchor");
    while(anchor.firstChild){
        anchor.removeChild(anchor.firstChild);
    }
    let OneHideBtn1=document.getElementById("btn1");
    OneHideBtn1.style.display="none";
    let OneHideBtn2=document.getElementById("btn2");
    OneHideBtn2.style.display="none";
    let OneHideBtn3=document.getElementById("btn3");
    OneHideBtn3.style.display="none";
    let OneHideBtn4=document.getElementById("btn4");
    OneHideBtn4.style.display="none";
    let OneHideBtn5=document.getElementById("btn5");
    OneHideBtn5.style.display="none";
    
    let TwoShowBtn1=document.getElementById("2btn1");
    TwoShowBtn1.style.display="inline-block";
    let TwoShowBtn2=document.getElementById("2btn2");
    TwoShowBtn2.style.display="inline-block";
    let TwoShowBtn3=document.getElementById("2btn3");
    TwoShowBtn3.style.display="inline-block";
    let TwoShowBtn4=document.getElementById("2btn4");
    TwoShowBtn4.style.display="inline-block";
    let TwoShowBtn5=document.getElementById("2btn5");
    TwoShowBtn5.style.display="inline-block";

    let GetHideBtn1R=document.getElementById("getBtn1");
    GetHideBtn1R.style.display="none";
    let GetHideBtn1=document.getElementById("getBtn2");
    GetHideBtn1.style.display="inline-block";
}

//Get hand 2

function showHand2 () {
    for (i=0; i<hand1.length; ++i) {
        document.getElementById("handAnchor");
        let h2c1=document.createElement("img");
        h2c1.setAttribute("style","padding:50px");
        h2c1.setAttribute("style","width:180px;");
        h2c1.setAttribute("style","height:240px;");
        h2c1.src= `cardGameImages/${hand2[i].suit}${hand2[i].value}.png`;
        handAnchor.appendChild(h2c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }
    
    document.getElementById("round").innerHTML="This is Hand 2";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};

//choose 2 hand 2

function Twohand1Choose2C1() {
    collection.push(hand2[0]);
    document.getElementById("collectionAnchor");
    let ah2c1=document.createElement("img");
    ah2c1.src= `cardGameImages/${hand2[0].suit}${hand2[0].value}.png`;
    collectionAnchor.appendChild(ah2c1);
    ah2c1.setAttribute("style","width:180px;");
    ah2c1.setAttribute("style","height:240px;");
    ah2c1.setAttribute("style","padding:10px");

};

function Twohand1Choose2C2() {
    collection.push(hand2[1]);
    document.getElementById("collectionAnchor");
    let ah2c2=document.createElement("img");
    ah2c2.src= `cardGameImages/${hand2[1].suit}${hand2[1].value}.png`;
    collectionAnchor.appendChild(ah2c2);
    ah2c2.setAttribute("style","width:180px;");
    ah2c2.setAttribute("style","height:240px;");
    ah2c2.setAttribute("style","padding:10px");
};

function Twohand1Choose2C3() {
    collection.push(hand2[2]);
    document.getElementById("collectionAnchor");
    let ah2c3=document.createElement("img");
    ah2c3.src= `cardGameImages/${hand2[2].suit}${hand2[2].value}.png`;
    collectionAnchor.appendChild(ah2c3);
    ah2c3.setAttribute("style","width:180px;");
    ah2c3.setAttribute("style","height:240px;");
    ah2c3.setAttribute("style","padding:10px");
};

function Twohand1Choose2C4() {
    collection.push(hand2[3]);
    document.getElementById("collectionAnchor");
    let ah2c4=document.createElement("img");
    ah2c4.src= `cardGameImages/${hand2[3].suit}${hand2[3].value}.png`;
    collectionAnchor.appendChild(ah2c4);
    ah2c4.setAttribute("style","width:180px;");
    ah2c4.setAttribute("style","height:240px;");
    ah2c4.setAttribute("style","padding:10px");
};

function Twohand1Choose2C5() {
    collection.push(hand2[4]);
    document.getElementById("collectionAnchor");
    let ah2c5=document.createElement("img");
    ah2c5.src= `cardGameImages/${hand2[4].suit}${hand2[4].value}.png`;
    collectionAnchor.appendChild(ah2c5);
    ah2c5.setAttribute("style","width:180px;");
    ah2c5.setAttribute("style","height:240px;");
    ah2c5.setAttribute("style","padding:10px");
};

//clear hand2. get hand3 buttons.

function clearHand2(){
    let anchor2=document.getElementById("handAnchor");
    while(anchor2.firstChild){
        anchor2.removeChild(anchor2.firstChild);
    }
    let TwoHideBtn1R=document.getElementById("2btn1");
    TwoHideBtn1R.style.display="none";
    let TwoHideBtn2R=document.getElementById("2btn2");
    TwoHideBtn2R.style.display="none";
    let TwoHideBtn3R=document.getElementById("2btn3");
    TwoHideBtn3R.style.display="none";
    let TwoHideBtn4R=document.getElementById("2btn4");
    TwoHideBtn4R.style.display="none";
    let TwoHideBtn5R=document.getElementById("2btn5");
    TwoHideBtn5R.style.display="none";
    
    let ThreeShowBtn1=document.getElementById("3btn1");
    ThreeShowBtn1.style.display="inline-block";
    let ThreeShowBtn2=document.getElementById("3btn2");
    ThreeShowBtn2.style.display="inline-block";
    let ThreeShowBtn3=document.getElementById("3btn3");
    ThreeShowBtn3.style.display="inline-block";
    let ThreeShowBtn4=document.getElementById("3btn4");
    ThreeShowBtn4.style.display="inline-block";
    let ThreeShowBtn5=document.getElementById("3btn5");
    ThreeShowBtn5.style.display="inline-block";

    let GetHideBtn2R=document.getElementById("getBtn2");
    GetHideBtn2R.style.display="none";
    let GetHideBtn3=document.getElementById("getBtn3");
    GetHideBtn3.style.display="inline-block";
};

// get hand 3

function showHand3 () {
    for (i=0; i<hand3.length; ++i) {
        document.getElementById("handAnchor");
        let h3c1=document.createElement("img");
        h3c1.setAttribute("style","padding:50px");
        h3c1.setAttribute("style","width:180px;");
        h3c1.setAttribute("style","height:240px;");
        h3c1.src= `cardGameImages/${hand3[i].suit}${hand3[i].value}.png`;
        handAnchor.appendChild(h3c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 3";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};

// hand 3 choose 2
function Threehand3Choose2C1() {
    collection.push(hand3[0]);
    document.getElementById("collectionAnchor");
    let ah3c1=document.createElement("img");
    ah3c1.src= `cardGameImages/${hand3[0].suit}${hand3[0].value}.png`;
    collectionAnchor.appendChild(ah3c1);
    ah3c1.setAttribute("style","width:180px;");
    ah3c1.setAttribute("style","height:240px;");
    ah3c1.setAttribute("style","padding:10px");

};

function Threehand3Choose2C2() {
    collection.push(hand3[1]);
    document.getElementById("collectionAnchor");
    let ah3c2=document.createElement("img");
    ah3c2.src= `cardGameImages/${hand3[1].suit}${hand3[1].value}.png`;
    collectionAnchor.appendChild(ah3c2);
    ah3c2.setAttribute("style","width:180px;");
    ah3c2.setAttribute("style","height:240px;");
    ah3c2.setAttribute("style","padding:10px");
};

function Threehand3Choose2C3() {
    collection.push(hand3[2]);
    document.getElementById("collectionAnchor");
    let ah3c3=document.createElement("img");
    ah3c3.src= `cardGameImages/${hand3[2].suit}${hand3[2].value}.png`;
    collectionAnchor.appendChild(ah3c3);
    ah3c3.setAttribute("style","width:180px;");
    ah3c3.setAttribute("style","height:240px;");
    ah3c3.setAttribute("style","padding:10px");
};

function Threehand3Choose2C4() {
    collection.push(hand3[3]);
    document.getElementById("collectionAnchor");
    let ah3c4=document.createElement("img");
    ah3c4.src= `cardGameImages/${hand3[3].suit}${hand3[3].value}.png`;
    collectionAnchor.appendChild(ah3c4);
    ah3c4.setAttribute("style","width:180px;");
    ah3c4.setAttribute("style","height:240px;");
    ah3c4.setAttribute("style","padding:10px");
};

function Threehand3Choose2C5() {
    collection.push(hand3[4]);
    document.getElementById("collectionAnchor");
    let ah3c5=document.createElement("img");
    ah3c5.src= `cardGameImages/${hand3[4].suit}${hand3[4].value}.png`;
    collectionAnchor.appendChild(ah3c5);
    ah3c5.setAttribute("style","width:180px;");
    ah3c5.setAttribute("style","height:240px;");
    ah3c5.setAttribute("style","padding:10px");
};

// clear hand3. get hand4 buttons.
function clearHand3(){
    let anchor3=document.getElementById("handAnchor");
    while(anchor3.firstChild){
        anchor3.removeChild(anchor3.firstChild);
    }
    let ThreeHideBtn1R=document.getElementById("3btn1");
    ThreeHideBtn1R.style.display="none";
    let ThreeHideBtn2R=document.getElementById("3btn2");
    ThreeHideBtn2R.style.display="none";
    let ThreeHideBtn3R=document.getElementById("3btn3");
    ThreeHideBtn3R.style.display="none";
    let ThreeHideBtn4R=document.getElementById("3btn4");
    ThreeHideBtn4R.style.display="none";
    let ThreeHideBtn5R=document.getElementById("3btn5");
    ThreeHideBtn5R.style.display="none";
    
    let FourShowBtn1=document.getElementById("4btn1");
    FourShowBtn1.style.display="inline-block";
    let FourShowBtn2=document.getElementById("4btn2");
    FourShowBtn2.style.display="inline-block";
    let FourShowBtn3=document.getElementById("4btn3");
    FourShowBtn3.style.display="inline-block";
    let FourShowBtn4=document.getElementById("4btn4");
    FourShowBtn4.style.display="inline-block";
    let FourShowBtn5=document.getElementById("4btn5");
    FourShowBtn5.style.display="inline-block";

    let GetHideBtn3R=document.getElementById("getBtn3");
    GetHideBtn3R.style.display="none";
    let GetHideBtn4=document.getElementById("getBtn4");
    GetHideBtn4.style.display="inline-block";
};

// get hand 4
function showHand4 () {
    for (i=0; i<hand4.length; ++i) {
        document.getElementById("handAnchor");
        let h4c1=document.createElement("img");
        h4c1.setAttribute("style","padding:50px");
        h4c1.setAttribute("style","width:180px;");
        h4c1.setAttribute("style","height:240px;");
        h4c1.src= `cardGameImages/${hand4[i].suit}${hand4[i].value}.png`;
        handAnchor.appendChild(h4c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 4";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};

// hand 4 choose 2
function Fourhand4Choose2C1() {
    collection.push(hand4[0]);
    document.getElementById("collectionAnchor");
    let ah4c1=document.createElement("img");
    ah4c1.src= `cardGameImages/${hand4[0].suit}${hand4[0].value}.png`;
    collectionAnchor.appendChild(ah4c1);
    ah4c1.setAttribute("style","width:180px;");
    ah4c1.setAttribute("style","height:240px;");
    ah4c1.setAttribute("style","padding:10px");

};

function Fourhand4Choose2C2() {
    collection.push(hand4[1]);
    document.getElementById("collectionAnchor");
    let ah4c2=document.createElement("img");
    ah4c2.src= `cardGameImages/${hand4[1].suit}${hand4[1].value}.png`;
    collectionAnchor.appendChild(ah4c2);
    ah4c2.setAttribute("style","width:180px;");
    ah4c2.setAttribute("style","height:240px;");
    ah4c2.setAttribute("style","padding:10px");
};

function Fourhand4Choose2C3() {
    collection.push(hand4[2]);
    document.getElementById("collectionAnchor");
    let ah4c3=document.createElement("img");
    ah4c3.src= `cardGameImages/${hand4[2].suit}${hand4[2].value}.png`;
    collectionAnchor.appendChild(ah4c3);
    ah4c3.setAttribute("style","width:180px;");
    ah4c3.setAttribute("style","height:240px;");
    ah4c3.setAttribute("style","padding:10px");
};

function Fourhand4Choose2C4() {
    collection.push(hand4[3]);
    document.getElementById("collectionAnchor");
    let ah4c4=document.createElement("img");
    ah4c4.src= `cardGameImages/${hand4[3].suit}${hand4[3].value}.png`;
    collectionAnchor.appendChild(ah4c4);
    ah4c4.setAttribute("style","width:180px;");
    ah4c4.setAttribute("style","height:240px;");
    ah4c4.setAttribute("style","padding:10px");
};

function Fourhand4Choose2C5() {
    collection.push(hand4[4]);
    document.getElementById("collectionAnchor");
    let ah5c5=document.createElement("img");
    ah5c5.src= `cardGameImages/${hand4[4].suit}${hand4[4].value}.png`;
    collectionAnchor.appendChild(ah5c5);
    ah5c5.setAttribute("style","width:180px;");
    ah5c5.setAttribute("style","height:240px;");
    ah5c5.setAttribute("style","padding:10px");
};
// clear hand4. get hand5 buttons.
function clearHand4(){
    let anchor4=document.getElementById("handAnchor");
    while(anchor4.firstChild){
        anchor4.removeChild(anchor4.firstChild);
    }

    let FourHideBtn1R=document.getElementById("4btn1");
    FourHideBtn1R.style.display="none";
    let FourHideBtn2R=document.getElementById("4btn2");
    FourHideBtn2R.style.display="none";
    let FourHideBtn3R=document.getElementById("4btn3");
    FourHideBtn3R.style.display="none";
    let FourHideBtn4R=document.getElementById("4btn4");
    FourHideBtn4R.style.display="none";
    let FourHideBtn5R=document.getElementById("4btn5");
    FourHideBtn5R.style.display="none";
    
    let FiveShowBtn1=document.getElementById("5btn1");
    FiveShowBtn1.style.display="inline-block";
    let FiveShowBtn2=document.getElementById("5btn2");
    FiveShowBtn2.style.display="inline-block";
    let FiveShowBtn3=document.getElementById("5btn3");
    FiveShowBtn3.style.display="inline-block";
    let FiveShowBtn4=document.getElementById("5btn4");
    FiveShowBtn4.style.display="inline-block";
    let FiveShowBtn5=document.getElementById("5btn5");
    FiveShowBtn5.style.display="inline-block";

    let GetHideBtn4R=document.getElementById("getBtn4");
    GetHideBtn4R.style.display="none";
    let GetHideBtn5=document.getElementById("getBtn5");
    GetHideBtn5.style.display="inline-block";
};
// get hand 5
function showHand5 () {
    for (i=0; i<hand5.length; ++i) {
        document.getElementById("handAnchor");
        let h5c1=document.createElement("img");
        h5c1.setAttribute("style","padding:50px");
        h5c1.setAttribute("style","width:180px;");
        h5c1.setAttribute("style","height:240px;");
        h5c1.src= `cardGameImages/${hand5[i].suit}${hand5[i].value}.png`;
        handAnchor.appendChild(h5c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 5";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};


// hand 5 choose 2
function Fivehand5Choose2C1() {
    collection.push(hand5[0]);
    document.getElementById("collectionAnchor");
    let ah5c1=document.createElement("img");
    ah5c1.src= `cardGameImages/${hand5[0].suit}${hand5[0].value}.png`;
    collectionAnchor.appendChild(ah5c1);
    ah5c1.setAttribute("style","width:180px;");
    ah5c1.setAttribute("style","height:240px;");
    ah5c1.setAttribute("style","padding:10px");

};

function Fivehand5Choose2C2() {
    collection.push(hand5[1]);
    document.getElementById("collectionAnchor");
    let ah5c2=document.createElement("img");
    ah5c2.src= `cardGameImages/${hand5[1].suit}${hand5[1].value}.png`;
    collectionAnchor.appendChild(ah5c2);
    ah5c2.setAttribute("style","width:180px;");
    ah5c2.setAttribute("style","height:240px;");
    ah5c2.setAttribute("style","padding:10px");
};

function Fivehand5Choose2C3() {
    collection.push(hand5[2]);
    document.getElementById("collectionAnchor");
    let ah5c3=document.createElement("img");
    ah5c3.src= `cardGameImages/${hand5[2].suit}${hand5[2].value}.png`;
    collectionAnchor.appendChild(ah5c3);
    ah5c3.setAttribute("style","width:180px;");
    ah5c3.setAttribute("style","height:240px;");
    ah5c3.setAttribute("style","padding:10px");
};

function Fivehand5Choose2C4() {
    collection.push(hand5[3]);
    document.getElementById("collectionAnchor");
    let ah5c4=document.createElement("img");
    ah5c4.src= `cardGameImages/${hand5[3].suit}${hand5[3].value}.png`;
    collectionAnchor.appendChild(ah5c4);
    ah5c4.setAttribute("style","width:180px;");
    ah5c4.setAttribute("style","height:240px;");
    ah5c4.setAttribute("style","padding:10px");
};

function Fivehand5Choose2C5() {
    collection.push(hand5[4]);
    document.getElementById("collectionAnchor");
    let ah5c5=document.createElement("img");
    ah5c5.src= `cardGameImages/${hand5[4].suit}${hand5[4].value}.png`;
    collectionAnchor.appendChild(ah5c5);
    ah5c5.setAttribute("style","width:180px;");
    ah5c5.setAttribute("style","height:240px;");
    ah5c5.setAttribute("style","padding:10px");
};
// clear hand5. get hand6 buttons.
function clearHand5(){
    let anchor4=document.getElementById("handAnchor");
    while(anchor4.firstChild){
        anchor4.removeChild(anchor4.firstChild);
    }

    let FiveHideBtn1R=document.getElementById("5btn1");
    FiveHideBtn1R.style.display="none";
    let FiveHideBtn2R=document.getElementById("5btn2");
    FiveHideBtn2R.style.display="none";
    let FiveHideBtn3R=document.getElementById("5btn3");
    FiveHideBtn3R.style.display="none";
    let FiveHideBtn4R=document.getElementById("5btn4");
    FiveHideBtn4R.style.display="none";
    let FiveHideBtn5R=document.getElementById("5btn5");
    FiveHideBtn5R.style.display="none";
    
    let SixShowBtn1=document.getElementById("6btn1");
    SixShowBtn1.style.display="inline-block";
    let SixShowBtn2=document.getElementById("6btn2");
    SixShowBtn2.style.display="inline-block";
    let SixShowBtn3=document.getElementById("6btn3");
    SixShowBtn3.style.display="inline-block";
    let SixShowBtn4=document.getElementById("6btn4");
    SixShowBtn4.style.display="inline-block";
    let SixShowBtn5=document.getElementById("6btn5");
    SixShowBtn5.style.display="inline-block";

    let GetHideBtn5R=document.getElementById("getBtn5");
    GetHideBtn5R.style.display="none";
    let GetHideBtn6=document.getElementById("getBtn6");
    GetHideBtn6.style.display="inline-block";
};
// get hand 6
function showHand6 () {
    for (i=0; i<hand6.length; ++i) {
        document.getElementById("handAnchor");
        let h6c1=document.createElement("img");
        h6c1.setAttribute("style","padding:50px");
        h6c1.setAttribute("style","width:180px;");
        h6c1.setAttribute("style","height:240px;");
        h6c1.src= `cardGameImages/${hand6[i].suit}${hand6[i].value}.png`;
        handAnchor.appendChild(h6c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 6";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};


// hand 6 choose 2
function Sixhand6Choose2C1() {
    collection.push(hand6[0]);
    document.getElementById("collectionAnchor");
    let ah6c1=document.createElement("img");
    ah6c1.src= `cardGameImages/${hand6[0].suit}${hand6[0].value}.png`;
    collectionAnchor.appendChild(ah6c1);
    ah6c1.setAttribute("style","width:180px;");
    ah6c1.setAttribute("style","height:240px;");
    ah6c1.setAttribute("style","padding:10px");

};

function Sixhand6Choose2C2() {
    collection.push(hand6[1]);
    document.getElementById("collectionAnchor");
    let ah6c2=document.createElement("img");
    ah6c2.src= `cardGameImages/${hand6[1].suit}${hand6[1].value}.png`;
    collectionAnchor.appendChild(ah6c2);
    ah6c2.setAttribute("style","width:180px;");
    ah6c2.setAttribute("style","height:240px;");
    ah6c2.setAttribute("style","padding:10px");
};

function Sixhand6Choose2C3() {
    collection.push(hand6[2]);
    document.getElementById("collectionAnchor");
    let ah6c3=document.createElement("img");
    ah6c3.src= `cardGameImages/${hand6[2].suit}${hand6[2].value}.png`;
    collectionAnchor.appendChild(ah6c3);
    ah6c3.setAttribute("style","width:180px;");
    ah6c3.setAttribute("style","height:240px;");
    ah6c3.setAttribute("style","padding:10px");
};

function Sixhand6Choose2C4() {
    collection.push(hand6[3]);
    document.getElementById("collectionAnchor");
    let ah6c4=document.createElement("img");
    ah6c4.src= `cardGameImages/${hand6[3].suit}${hand6[3].value}.png`;
    collectionAnchor.appendChild(ah6c4);
    ah6c4.setAttribute("style","width:180px;");
    ah6c4.setAttribute("style","height:240px;");
    ah6c4.setAttribute("style","padding:10px");
};

function Sixhand6Choose2C5() {
    collection.push(hand6[4]);
    document.getElementById("collectionAnchor");
    let ah6c5=document.createElement("img");
    ah6c5.src= `cardGameImages/${hand6[4].suit}${hand6[4].value}.png`;
    collectionAnchor.appendChild(ah6c5);
    ah6c5.setAttribute("style","width:180px;");
    ah6c5.setAttribute("style","height:240px;");
    ah6c5.setAttribute("style","padding:10px");
};

// clear hand6. get hand7 buttons.
function clearHand6(){
    let anchor5=document.getElementById("handAnchor");
    while(anchor5.firstChild){
        anchor5.removeChild(anchor5.firstChild);
    }

    let SixHideBtn1R=document.getElementById("6btn1");
    SixHideBtn1R.style.display="none";
    let SixHideBtn2R=document.getElementById("6btn2");
    SixHideBtn2R.style.display="none";
    let SixHideBtn3R=document.getElementById("6btn3");
    SixHideBtn3R.style.display="none";
    let SixHideBtn4R=document.getElementById("6btn4");
    SixHideBtn4R.style.display="none";
    let SixHideBtn5R=document.getElementById("6btn5");
    SixHideBtn5R.style.display="none";
    
    let SevenShowBtn1=document.getElementById("7btn1");
    SevenShowBtn1.style.display="inline-block";
    let SevenShowBtn2=document.getElementById("7btn2");
    SevenShowBtn2.style.display="inline-block";
    let SevenShowBtn3=document.getElementById("7btn3");
    SevenShowBtn3.style.display="inline-block";
    let SevenShowBtn4=document.getElementById("7btn4");
    SevenShowBtn4.style.display="inline-block";
    let SevenShowBtn5=document.getElementById("7btn5");
    SevenShowBtn5.style.display="inline-block";

    let GetHideBtn6R=document.getElementById("getBtn6");
    GetHideBtn6R.style.display="none";
    let GetHideBtn7=document.getElementById("getBtn7");
    GetHideBtn7.style.display="inline-block";
};

// get hand 7
function showHand7 () {
    for (i=0; i<hand7.length; ++i) {
        document.getElementById("handAnchor");
        let h7c1=document.createElement("img");
        h7c1.setAttribute("style","padding:50px");
        h7c1.setAttribute("style","width:180px;");
        h7c1.setAttribute("style","height:240px;");
        h7c1.src= `cardGameImages/${hand7[i].suit}${hand7[i].value}.png`;
        handAnchor.appendChild(h7c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 7";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};


// hand 7 choose 2
function Sevenhand7Choose2C1() {
    collection.push(hand7[0]);
    document.getElementById("collectionAnchor");
    let ah7c1=document.createElement("img");
    ah7c1.src= `cardGameImages/${hand7[0].suit}${hand7[0].value}.png`;
    collectionAnchor.appendChild(ah7c1);
    ah7c1.setAttribute("style","width:180px;");
    ah7c1.setAttribute("style","height:240px;");
    ah7c1.setAttribute("style","padding:10px");

};

function Sevenhand7Choose2C2() {
    collection.push(hand7[1]);
    document.getElementById("collectionAnchor");
    let ah7c2=document.createElement("img");
    ah7c2.src= `cardGameImages/${hand7[1].suit}${hand7[1].value}.png`;
    collectionAnchor.appendChild(ah7c2);
    ah7c2.setAttribute("style","width:180px;");
    ah7c2.setAttribute("style","height:240px;");
    ah7c2.setAttribute("style","padding:10px");
};

function Sevenhand7Choose2C3() {
    collection.push(hand7[2]);
    document.getElementById("collectionAnchor");
    let ah7c3=document.createElement("img");
    ah7c3.src= `cardGameImages/${hand7[2].suit}${hand7[2].value}.png`;
    collectionAnchor.appendChild(ah7c3);
    ah7c3.setAttribute("style","width:180px;");
    ah7c3.setAttribute("style","height:240px;");
    ah7c3.setAttribute("style","padding:10px");
};

function Sevenhand7Choose2C4() {
    collection.push(hand7[3]);
    document.getElementById("collectionAnchor");
    let ah7c4=document.createElement("img");
    ah7c4.src= `cardGameImages/${hand7[3].suit}${hand7[3].value}.png`;
    collectionAnchor.appendChild(ah7c4);
    ah7c4.setAttribute("style","width:180px;");
    ah7c4.setAttribute("style","height:240px;");
    ah7c4.setAttribute("style","padding:10px");
};

function Sevenhand7Choose2C5() {
    collection.push(hand7[4]);
    document.getElementById("collectionAnchor");
    let ah7c5=document.createElement("img");
    ah7c5.src= `cardGameImages/${hand7[4].suit}${hand7[4].value}.png`;
    collectionAnchor.appendChild(ah7c5);
    ah7c5.setAttribute("style","width:180px;");
    ah7c5.setAttribute("style","height:240px;");
    ah7c5.setAttribute("style","padding:10px");
};
// clear hand7. get hand8 buttons.
function clearHand7(){
    let anchor6=document.getElementById("handAnchor");
    while(anchor6.firstChild){
        anchor6.removeChild(anchor6.firstChild);
    }

    let SevenHideBtn1R=document.getElementById("7btn1");
    SevenHideBtn1R.style.display="none";
    let SevenHideBtn2R=document.getElementById("7btn2");
    SevenHideBtn2R.style.display="none";
    let SevenHideBtn3R=document.getElementById("7btn3");
    SevenHideBtn3R.style.display="none";
    let SevenHideBtn4R=document.getElementById("7btn4");
    SevenHideBtn4R.style.display="none";
    let SevenHideBtn5R=document.getElementById("7btn5");
    SevenHideBtn5R.style.display="none";
    
    let EightShowBtn1=document.getElementById("8btn1");
    EightShowBtn1.style.display="inline-block";
    let EightShowBtn2=document.getElementById("8btn2");
    EightShowBtn2.style.display="inline-block";
    let EightShowBtn3=document.getElementById("8btn3");
    EightShowBtn3.style.display="inline-block";
    let EightShowBtn4=document.getElementById("8btn4");
    EightShowBtn4.style.display="inline-block";
    let EightShowBtn5=document.getElementById("8btn5");
    EightShowBtn5.style.display="inline-block";

    let GetHideBtn7R=document.getElementById("getBtn7");
    GetHideBtn7R.style.display="none";
    let GetHideBtn8=document.getElementById("getBtn8");
    GetHideBtn8.style.display="inline-block";
};
// get hand 8
function showHand8 () {
    for (i=0; i<hand8.length; ++i) {
        document.getElementById("handAnchor");
        let h8c1=document.createElement("img");
        h8c1.setAttribute("style","padding:50px");
        h8c1.setAttribute("style","width:180px;");
        h8c1.setAttribute("style","height:240px;");
        h8c1.src= `cardGameImages/${hand8[i].suit}${hand8[i].value}.png`;
        handAnchor.appendChild(h8c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 8";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};


// hand 8 choose 2
function Eighthand8Choose2C1() {
    collection.push(hand8[0]);
    document.getElementById("collectionAnchor");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand8[0].suit}${hand8[0].value}.png`;
    collectionAnchor.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");

};

function Eighthand8Choose2C2() {
    collection.push(hand8[1]);
    document.getElementById("collectionAnchor");
    let ah8c2=document.createElement("img");
    ah8c2.src= `cardGameImages/${hand8[1].suit}${hand8[1].value}.png`;
    collectionAnchor.appendChild(ah8c2);
    ah8c2.setAttribute("style","width:180px;");
    ah8c2.setAttribute("style","height:240px;");
    ah8c2.setAttribute("style","padding:10px");
};

function Eighthand8Choose2C3() {
    collection.push(hand8[2]);
    document.getElementById("collectionAnchor");
    let ah8c3=document.createElement("img");
    ah8c3.src= `cardGameImages/${hand8[2].suit}${hand8[2].value}.png`;
    collectionAnchor.appendChild(ah8c3);
    ah8c3.setAttribute("style","width:180px;");
    ah8c3.setAttribute("style","height:240px;");
    ah8c3.setAttribute("style","padding:10px");
};

function Eighthand8Choose2C4() {
    collection.push(hand8[3]);
    document.getElementById("collectionAnchor");
    let ah8c4=document.createElement("img");
    ah8c4.src= `cardGameImages/${hand8[3].suit}${hand8[3].value}.png`;
    collectionAnchor.appendChild(ah8c4);
    ah8c4.setAttribute("style","width:180px;");
    ah8c4.setAttribute("style","height:240px;");
    ah8c4.setAttribute("style","padding:10px");
};

function Eighthand8Choose2C5() {
    collection.push(hand8[4]);
    document.getElementById("collectionAnchor");
    let ah8c5=document.createElement("img");
    ah8c5.src= `cardGameImages/${hand8[4].suit}${hand8[4].value}.png`;
    collectionAnchor.appendChild(ah8c5);
    ah8c5.setAttribute("style","width:180px;");
    ah8c5.setAttribute("style","height:240px;");
    ah8c5.setAttribute("style","padding:10px");
};
// clear hand8. get hand9 buttons.
function clearHand8(){
    let anchor7=document.getElementById("handAnchor");
    while(anchor7.firstChild){
        anchor7.removeChild(anchor7.firstChild);
    }

    let EightHideBtn1R=document.getElementById("8btn1");
    EightHideBtn1R.style.display="none";
    let EightHideBtn2R=document.getElementById("8btn2");
    EightHideBtn2R.style.display="none";
    let EightHideBtn3R=document.getElementById("8btn3");
    EightHideBtn3R.style.display="none";
    let EightHideBtn4R=document.getElementById("8btn4");
    EightHideBtn4R.style.display="none";
    let EightHideBtn5R=document.getElementById("8btn5");
    EightHideBtn5R.style.display="none";
    
    let NineShowBtn1=document.getElementById("9btn1");
    NineShowBtn1.style.display="inline-block";
    let NineShowBtn2=document.getElementById("9btn2");
    NineShowBtn2.style.display="inline-block";
    let NineShowBtn3=document.getElementById("9btn3");
    NineShowBtn3.style.display="inline-block";
    let NineShowBtn4=document.getElementById("9btn4");
    NineShowBtn4.style.display="inline-block";
    let NineShowBtn5=document.getElementById("9btn5");
    NineShowBtn5.style.display="inline-block";

    let GetHideBtn8R=document.getElementById("getBtn8");
    GetHideBtn8R.style.display="none";
    let GetHideBtn9=document.getElementById("getBtn9");
    GetHideBtn9.style.display="inline-block";
};
// get hand 9
function showHand9 () {
    for (i=0; i<hand9.length; ++i) {
        document.getElementById("handAnchor");
        let h9c1=document.createElement("img");
        h9c1.setAttribute("style","padding:50px");
        h9c1.setAttribute("style","width:180px;");
        h9c1.setAttribute("style","height:240px;");
        h9c1.src= `cardGameImages/${hand9[i].suit}${hand9[i].value}.png`;
        handAnchor.appendChild(h9c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 9";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};

// hand 9 choose 2
function Ninehand9Choose2C1() {
    collection.push(hand9[0]);
    document.getElementById("collectionAnchor");
    let ah9c1=document.createElement("img");
    ah9c1.src= `cardGameImages/${hand9[0].suit}${hand9[0].value}.png`;
    collectionAnchor.appendChild(ah9c1);
    ah9c1.setAttribute("style","width:180px;");
    ah9c1.setAttribute("style","height:240px;");
    ah9c1.setAttribute("style","padding:10px");

};

function Ninehand9Choose2C2() {
    collection.push(hand9[1]);
    document.getElementById("collectionAnchor");
    let ah9c2=document.createElement("img");
    ah9c2.src= `cardGameImages/${hand9[1].suit}${hand9[1].value}.png`;
    collectionAnchor.appendChild(ah9c2);
    ah9c2.setAttribute("style","width:180px;");
    ah9c2.setAttribute("style","height:240px;");
    ah9c2.setAttribute("style","padding:10px");
};

function Ninehand9Choose2C3() {
    collection.push(hand9[2]);
    document.getElementById("collectionAnchor");
    let ah9c3=document.createElement("img");
    ah9c3.src= `cardGameImages/${hand9[2].suit}${hand9[2].value}.png`;
    collectionAnchor.appendChild(ah9c3);
    ah9c3.setAttribute("style","width:180px;");
    ah9c3.setAttribute("style","height:240px;");
    ah9c3.setAttribute("style","padding:10px");
};

function Ninehand9Choose2C4() {
    collection.push(hand9[3]);
    document.getElementById("collectionAnchor");
    let ah9c4=document.createElement("img");
    ah9c4.src= `cardGameImages/${hand9[3].suit}${hand9[3].value}.png`;
    collectionAnchor.appendChild(ah9c4);
    ah9c4.setAttribute("style","width:180px;");
    ah9c4.setAttribute("style","height:240px;");
    ah9c4.setAttribute("style","padding:10px");
};

function Ninehand9Choose2C5() {
    collection.push(hand9[4]);
    document.getElementById("collectionAnchor");
    let ah9c5=document.createElement("img");
    ah9c5.src= `cardGameImages/${hand9[4].suit}${hand9[4].value}.png`;
    collectionAnchor.appendChild(ah9c5);
    ah9c5.setAttribute("style","width:180px;");
    ah9c5.setAttribute("style","height:240px;");
    ah9c5.setAttribute("style","padding:10px");
};
// clear hand9. get hand10 buttons.
function clearHand9(){
    let anchor8=document.getElementById("handAnchor");
    while(anchor8.firstChild){
        anchor8.removeChild(anchor8.firstChild);
    }

    let NineHideBtn1R=document.getElementById("9btn1");
    NineHideBtn1R.style.display="none";
    let NineHideBtn2R=document.getElementById("9btn2");
    NineHideBtn2R.style.display="none";
    let NineHideBtn3R=document.getElementById("9btn3");
    NineHideBtn3R.style.display="none";
    let NineHideBtn4R=document.getElementById("9btn4");
    NineHideBtn4R.style.display="none";
    let NineHideBtn5R=document.getElementById("9btn5");
    NineHideBtn5R.style.display="none";
    
    let TenShowBtn1=document.getElementById("10btn1");
    TenShowBtn1.style.display="inline-block";
    let TenShowBtn2=document.getElementById("10btn2");
    TenShowBtn2.style.display="inline-block";
    let TenShowBtn3=document.getElementById("10btn3");
    TenShowBtn3.style.display="inline-block";
    let TenShowBtn4=document.getElementById("10btn4");
    TenShowBtn4.style.display="inline-block";
    let TenShowBtn5=document.getElementById("10btn5");
    TenShowBtn5.style.display="inline-block";

    let GetHideBtn9R=document.getElementById("getBtn9");
    GetHideBtn9R.style.display="none";
    let GetHideBtn10=document.getElementById("getBtn10");
    GetHideBtn10.style.display="inline-block";
};
//get hand 10
function showHand10 () {
    for (i=0; i<hand10.length; ++i) {
        document.getElementById("handAnchor");
        let h10c1=document.createElement("img");
        h10c1.setAttribute("style","padding:50px");
        h10c1.setAttribute("style","width:180px;");
        h10c1.setAttribute("style","height:240px;");
        h10c1.src= `cardGameImages/${hand10[i].suit}${hand10[i].value}.png`;
        handAnchor.appendChild(h10c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 10";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};

// hand 10 choose 2
function Tenhand10Choose2C1() {
    collection.push(hand10[0]);
    document.getElementById("collectionAnchor");
    let ah10c1=document.createElement("img");
    ah10c1.src= `cardGameImages/${hand10[0].suit}${hand10[0].value}.png`;
    collectionAnchor.appendChild(ah10c1);
    ah10c1.setAttribute("style","width:180px;");
    ah10c1.setAttribute("style","height:240px;");
    ah10c1.setAttribute("style","padding:10px");
};

function Tenhand10Choose2C2() {
    collection.push(hand10[1]);
    document.getElementById("collectionAnchor");
    let ah10c2=document.createElement("img");
    ah10c2.src= `cardGameImages/${hand10[1].suit}${hand10[1].value}.png`;
    collectionAnchor.appendChild(ah10c2);
    ah10c2.setAttribute("style","width:180px;");
    ah10c2.setAttribute("style","height:240px;");
    ah10c2.setAttribute("style","padding:10px");
};

function Tenhand10Choose2C3() {
    collection.push(hand10[2]);
    document.getElementById("collectionAnchor");
    let ah10c3=document.createElement("img");
    ah10c3.src= `cardGameImages/${hand10[2].suit}${hand10[2].value}.png`;
    collectionAnchor.appendChild(ah10c3);
    ah10c3.setAttribute("style","width:180px;");
    ah10c3.setAttribute("style","height:240px;");
    ah10c3.setAttribute("style","padding:10px");
};

function Tenhand10Choose2C4() {
    collection.push(hand10[3]);
    document.getElementById("collectionAnchor");
    let ah10c4=document.createElement("img");
    ah10c4.src= `cardGameImages/${hand10[3].suit}${hand10[3].value}.png`;
    collectionAnchor.appendChild(ah10c4);
    ah10c4.setAttribute("style","width:180px;");
    ah10c4.setAttribute("style","height:240px;");
    ah10c4.setAttribute("style","padding:10px");
};

function Tenhand10Choose2C5() {
    collection.push(hand10[4]);
    document.getElementById("collectionAnchor");
    let ah10c5=document.createElement("img");
    ah10c5.src= `cardGameImages/${hand10[4].suit}${hand10[4].value}.png`;
    collectionAnchor.appendChild(ah10c5);
    ah10c5.setAttribute("style","width:180px;");
    ah10c5.setAttribute("style","height:240px;");
    ah10c5.setAttribute("style","padding:10px");
};

// clear hand10. get hand11 buttons.

function clearHand10(){
    let anchor9=document.getElementById("handAnchor");
    while(anchor9.firstChild){
        anchor9.removeChild(anchor9.firstChild);
    }

    let TenHideBtn1R=document.getElementById("10btn1");
    TenHideBtn1R.style.display="none";
    let TenHideBtn2R=document.getElementById("10btn2");
    TenHideBtn2R.style.display="none";
    let TenHideBtn3R=document.getElementById("10btn3");
    TenHideBtn3R.style.display="none";
    let TenHideBtn4R=document.getElementById("10btn4");
    TenHideBtn4R.style.display="none";
    let TenHideBtn5R=document.getElementById("10btn5");
    TenHideBtn5R.style.display="none";
    
    let ElevenShowBtn1=document.getElementById("11btn1");
    ElevenShowBtn1.style.display="inline-block";
    let ElevenShowBtn2=document.getElementById("11btn2");
    ElevenShowBtn2.style.display="inline-block";
    let ElevenShowBtn3=document.getElementById("11btn3");
    ElevenShowBtn3.style.display="inline-block";
    let ElevenShowBtn4=document.getElementById("11btn4");
    ElevenShowBtn4.style.display="inline-block";
    let ElevenShowBtn5=document.getElementById("11btn5");
    ElevenShowBtn5.style.display="inline-block";

    let GetHideBtn10R=document.getElementById("getBtn10");
    GetHideBtn10R.style.display="none";
    let GetHideBtn11=document.getElementById("getBtn11");
    GetHideBtn11.style.display="inline-block";
};

// get hand 11

function showHand11 () {
    for (i=0; i<hand11.length; ++i) {
        document.getElementById("handAnchor");
        let h11c1=document.createElement("img");
        h11c1.setAttribute("style","padding:50px");
        h11c1.setAttribute("style","width:180px;");
        h11c1.setAttribute("style","height:240px;");
        h11c1.src= `cardGameImages/${hand11[i].suit}${hand11[i].value}.png`;
        handAnchor.appendChild(h11c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 11";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};



// hand 11 choose 2
function Elevenhand11Choose2C1() {
    collection.push(hand11[0]);
    document.getElementById("collectionAnchor");
    let ah11c1=document.createElement("img");
    ah11c1.src= `cardGameImages/${hand11[0].suit}${hand11[0].value}.png`;
    collectionAnchor.appendChild(ah11c1);
    ah11c1.setAttribute("style","width:180px;");
    ah11c1.setAttribute("style","height:240px;");
    ah11c1.setAttribute("style","padding:10px");
};
function Elevenhand11Choose2C2() {
    collection.push(hand11[1]);
    document.getElementById("collectionAnchor");
    let ah11c2=document.createElement("img");
    ah11c2.src= `cardGameImages/${hand11[1].suit}${hand11[1].value}.png`;
    collectionAnchor.appendChild(ah11c2);
    ah11c2.setAttribute("style","width:180px;");
    ah11c2.setAttribute("style","height:240px;");
    ah11c2.setAttribute("style","padding:10px");
};

function Elevenhand11Choose2C3() {
    collection.push(hand10[2]);
    document.getElementById("collectionAnchor");
    let ah11c3=document.createElement("img");
    ah11c3.src= `cardGameImages/${hand11[2].suit}${hand11[2].value}.png`;
    collectionAnchor.appendChild(ah11c3);
    ah11c3.setAttribute("style","width:180px;");
    ah11c3.setAttribute("style","height:240px;");
    ah11c3.setAttribute("style","padding:10px");
};

function Elevenhand11Choose2C4() {
    collection.push(hand11[3]);
    document.getElementById("collectionAnchor");
    let ah11c4=document.createElement("img");
    ah11c4.src= `cardGameImages/${hand11[3].suit}${hand11[3].value}.png`;
    collectionAnchor.appendChild(ah11c4);
    ah11c4.setAttribute("style","width:180px;");
    ah11c4.setAttribute("style","height:240px;");
    ah11c4.setAttribute("style","padding:10px");
};

function Elevenhand11Choose2C5() {
    collection.push(hand11[4]);
    document.getElementById("collectionAnchor");
    let ah11c5=document.createElement("img");
    ah11c5.src= `cardGameImages/${hand11[4].suit}${hand11[4].value}.png`;
    collectionAnchor.appendChild(ah11c5);
    ah11c5.setAttribute("style","width:180px;");
    ah11c5.setAttribute("style","height:240px;");
    ah11c5.setAttribute("style","padding:10px");
};

// clear hand11. get hand12 buttons.
function clearHand11(){
    let anchor10=document.getElementById("handAnchor");
    while(anchor10.firstChild){
        anchor10.removeChild(anchor10.firstChild);
    }

    let ElevenHideBtn1R=document.getElementById("11btn1");
    ElevenHideBtn1R.style.display="none";
    let ElevenHideBtn2R=document.getElementById("11btn2");
    ElevenHideBtn2R.style.display="none";
    let ElevenHideBtn3R=document.getElementById("11btn3");
    ElevenHideBtn3R.style.display="none";
    let ElevenHideBtn4R=document.getElementById("11btn4");
    ElevenHideBtn4R.style.display="none";
    let ElevenHideBtn5R=document.getElementById("11btn5");
    ElevenHideBtn5R.style.display="none";
    
    let TwelveShowBtn1=document.getElementById("12btn1");
    TwelveShowBtn1.style.display="inline-block";
    let TwelveShowBtn2=document.getElementById("12btn2");
    TwelveShowBtn2.style.display="inline-block";
    let TwelveShowBtn3=document.getElementById("12btn3");
    TwelveShowBtn3.style.display="inline-block";
    let TwelveShowBtn4=document.getElementById("12btn4");
    TwelveShowBtn4.style.display="inline-block";
    let TwelveShowBtn5=document.getElementById("12btn5");
    TwelveShowBtn5.style.display="inline-block";

    let GetHideBtn11R=document.getElementById("getBtn11");
    GetHideBtn11R.style.display="none";
    let GetHideBtn12=document.getElementById("getBtn12");
    GetHideBtn12.style.display="inline-block";
};

// get hand 12

function showHand12 () {
    for (i=0; i<hand12.length; ++i) {
        document.getElementById("handAnchor");
        let h12c1=document.createElement("img");
        h12c1.setAttribute("style","padding:50px");
        h12c1.setAttribute("style","width:180px;");
        h12c1.setAttribute("style","height:240px;");
        h12c1.src= `cardGameImages/${hand12[i].suit}${hand12[i].value}.png`;
        handAnchor.appendChild(h12c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 12";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};


// hand 12 choose 2

function Twelvehand12Choose2C1() {
    collection.push(hand12[0]);
    document.getElementById("collectionAnchor");
    let ah12c1=document.createElement("img");
    ah12c1.src= `cardGameImages/${hand12[0].suit}${hand12[0].value}.png`;
    collectionAnchor.appendChild(ah12c1);
    ah12c1.setAttribute("style","width:180px;");
    ah12c1.setAttribute("style","height:240px;");
    ah12c1.setAttribute("style","padding:10px");
};
function Twelvehand12Choose2C2() {
    collection.push(hand12[1]);
    document.getElementById("collectionAnchor");
    let ah12c2=document.createElement("img");
    ah12c2.src= `cardGameImages/${hand12[1].suit}${hand12[1].value}.png`;
    collectionAnchor.appendChild(ah12c2);
    ah12c2.setAttribute("style","width:180px;");
    ah12c2.setAttribute("style","height:240px;");
    ah12c2.setAttribute("style","padding:10px");
};

function Twelvehand12Choose2C3() {
    collection.push(hand12[2]);
    document.getElementById("collectionAnchor");
    let ah12c3=document.createElement("img");
    ah12c3.src= `cardGameImages/${hand12[2].suit}${hand12[2].value}.png`;
    collectionAnchor.appendChild(ah12c3);
    ah12c3.setAttribute("style","width:180px;");
    ah12c3.setAttribute("style","height:240px;");
    ah12c3.setAttribute("style","padding:10px");
};

function Twelvehand12Choose2C4() {
    collection.push(hand12[3]);
    document.getElementById("collectionAnchor");
    let ah12c4=document.createElement("img");
    ah12c4.src= `cardGameImages/${hand12[3].suit}${hand12[3].value}.png`;
    collectionAnchor.appendChild(ah12c4);
    ah12c4.setAttribute("style","width:180px;");
    ah12c4.setAttribute("style","height:240px;");
    ah12c4.setAttribute("style","padding:10px");
};

function Twelvehand12Choose2C5() {
    collection.push(hand12[4]);
    document.getElementById("collectionAnchor");
    let ah12c5=document.createElement("img");
    ah12c5.src= `cardGameImages/${hand12[4].suit}${hand12[4].value}.png`;
    collectionAnchor.appendChild(ah12c5);
    ah12c5.setAttribute("style","width:180px;");
    ah12c5.setAttribute("style","height:240px;");
    ah12c5.setAttribute("style","padding:10px");
};

// clear hand12. get hand13 buttons.
function clearHand12(){
    let anchor11=document.getElementById("handAnchor");
    while(anchor11.firstChild){
        anchor11.removeChild(anchor11.firstChild);
    }

    let TwelveHideBtn1R=document.getElementById("12btn1");
    TwelveHideBtn1R.style.display="none";
    let TwelveHideBtn2R=document.getElementById("12btn2");
    TwelveHideBtn2R.style.display="none";
    let TwelveHideBtn3R=document.getElementById("12btn3");
    TwelveHideBtn3R.style.display="none";
    let TwelveHideBtn4R=document.getElementById("12btn4");
    TwelveHideBtn4R.style.display="none";
    let TwelveHideBtn5R=document.getElementById("12btn5");
    TwelveHideBtn5R.style.display="none";
    
    let ThirteenShowBtn1=document.getElementById("13btn1");
    ThirteenShowBtn1.style.display="inline-block";
    let ThirteenShowBtn2=document.getElementById("13btn2");
    ThirteenShowBtn2.style.display="inline-block";
    let ThirteenShowBtn3=document.getElementById("13btn3");
    ThirteenShowBtn3.style.display="inline-block";
    let ThirteenShowBtn4=document.getElementById("13btn4");
    ThirteenShowBtn4.style.display="inline-block";
    let ThirteenShowBtn5=document.getElementById("13btn5");
    ThirteenShowBtn5.style.display="inline-block";

    let GetHideBtn12R=document.getElementById("getBtn12");
    GetHideBtn12R.style.display="none";
    let GetHideBtn13=document.getElementById("getBtn13");
    GetHideBtn13.style.display="inline-block";
};

// get hand 13
function showHand13 () {
    for (i=0; i<hand13.length; ++i) {
        document.getElementById("handAnchor");
        let h13c1=document.createElement("img");
        h13c1.setAttribute("style","padding:50px");
        h13c1.setAttribute("style","width:180px;");
        h13c1.setAttribute("style","height:240px;");
        h13c1.src= `cardGameImages/${hand13[i].suit}${hand13[i].value}.png`;
        handAnchor.appendChild(h13c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 13";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};


// hand 13 choose 2
function Thirteenhand13Choose2C1() {
    collection.push(hand13[0]);
    document.getElementById("collectionAnchor");
    let ah13c1=document.createElement("img");
    ah13c1.src= `cardGameImages/${hand13[0].suit}${hand13[0].value}.png`;
    collectionAnchor.appendChild(ah13c1);
    ah13c1.setAttribute("style","width:180px;");
    ah13c1.setAttribute("style","height:240px;");
    ah13c1.setAttribute("style","padding:10px");
};
function Thirteenhand13Choose2C2() {
    collection.push(hand13[1]);
    document.getElementById("collectionAnchor");
    let ah13c2=document.createElement("img");
    ah13c2.src= `cardGameImages/${hand13[1].suit}${hand13[1].value}.png`;
    collectionAnchor.appendChild(ah13c2);
    ah13c2.setAttribute("style","width:180px;");
    ah13c2.setAttribute("style","height:240px;");
    ah13c2.setAttribute("style","padding:10px");
};

function Thirteenhand13Choose2C3() {
    collection.push(hand13[2]);
    document.getElementById("collectionAnchor");
    let ah13c3=document.createElement("img");
    ah13c3.src= `cardGameImages/${hand13[2].suit}${hand13[2].value}.png`;
    collectionAnchor.appendChild(ah13c3);
    ah13c3.setAttribute("style","width:180px;");
    ah13c3.setAttribute("style","height:240px;");
    ah13c3.setAttribute("style","padding:10px");
};

function Thirteenhand13Choose2C4() {
    collection.push(hand13[3]);
    document.getElementById("collectionAnchor");
    let ah13c4=document.createElement("img");
    ah13c4.src= `cardGameImages/${hand13[3].suit}${hand13[3].value}.png`;
    collectionAnchor.appendChild(ah13c4);
    ah13c4.setAttribute("style","width:180px;");
    ah13c4.setAttribute("style","height:240px;");
    ah13c4.setAttribute("style","padding:10px");
};

function Thirteenhand13Choose2C5() {
    collection.push(hand13[4]);
    document.getElementById("collectionAnchor");
    let ah13c5=document.createElement("img");
    ah13c5.src= `cardGameImages/${hand13[4].suit}${hand13[4].value}.png`;
    collectionAnchor.appendChild(ah13c5);
    ah13c5.setAttribute("style","width:180px;");
    ah13c5.setAttribute("style","height:240px;");
    ah13c5.setAttribute("style","padding:10px");
};

// clear hand13. get hand14 buttons.

function clearHand13(){
    let anchor12=document.getElementById("handAnchor");
    while(anchor12.firstChild){
        anchor12.removeChild(anchor12.firstChild);
    }

    let ThirteenHideBtn1R=document.getElementById("13btn1");
    ThirteenHideBtn1R.style.display="none";
    let ThirteenHideBtn2R=document.getElementById("13btn2");
    ThirteenHideBtn2R.style.display="none";
    let ThirteenHideBtn3R=document.getElementById("13btn3");
    ThirteenHideBtn3R.style.display="none";
    let ThirteenHideBtn4R=document.getElementById("13btn4");
    ThirteenHideBtn4R.style.display="none";
    let ThirteenHideBtn5R=document.getElementById("13btn5");
    ThirteenHideBtn5R.style.display="none";

    let FourteenShowBtn1=document.getElementById("14btn1");
    FourteenShowBtn1.style.display="inline-block";
    let FourteenShowBtn2=document.getElementById("14btn2");
    FourteenShowBtn2.style.display="inline-block";
    let FourteenShowBtn3=document.getElementById("14btn3");
    FourteenShowBtn3.style.display="inline-block";
    let FourteenShowBtn4=document.getElementById("14btn4");
    FourteenShowBtn4.style.display="inline-block";
    let FourteenShowBtn5=document.getElementById("14btn5");
    FourteenShowBtn5.style.display="inline-block";

    let GetHideBtn13R=document.getElementById("getBtn13");
    GetHideBtn13R.style.display="none";
    let GetHideBtn14=document.getElementById("getBtn14");
    GetHideBtn14.style.display="inline-block";
};

// get hand 14

function showHand14 () {
    for (i=0; i<hand14.length; ++i) {
        document.getElementById("handAnchor");
        let h14c1=document.createElement("img");
        h14c1.setAttribute("style","padding:50px");
        h14c1.setAttribute("style","width:180px;");
        h14c1.setAttribute("style","height:240px;");
        h14c1.src= `cardGameImages/${hand14[i].suit}${hand14[i].value}.png`;
        handAnchor.appendChild(h14c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 14";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";
};

//hand14 choose2
function Fourteenhand14Choose2C1() {
    collection.push(hand14[0]);
    document.getElementById("collectionAnchor");
    let ah14c1=document.createElement("img");
    ah14c1.src= `cardGameImages/${hand14[0].suit}${hand14[0].value}.png`;
    collectionAnchor.appendChild(ah14c1);
    ah14c1.setAttribute("style","width:180px;");
    ah14c1.setAttribute("style","height:240px;");
    ah14c1.setAttribute("style","padding:10px");
};
function Fourteenhand14Choose2C2() {
    collection.push(hand14[1]);
    document.getElementById("collectionAnchor");
    let ah14c2=document.createElement("img");
    ah14c2.src= `cardGameImages/${hand14[1].suit}${hand14[1].value}.png`;
    collectionAnchor.appendChild(ah14c2);
    ah14c2.setAttribute("style","width:180px;");
    ah14c2.setAttribute("style","height:240px;");
    ah14c2.setAttribute("style","padding:10px");
};

function Fourteenhand14Choose2C3() {
    collection.push(hand14[2]);
    document.getElementById("collectionAnchor");
    let ah14c3=document.createElement("img");
    ah14c3.src= `cardGameImages/${hand14[2].suit}${hand14[2].value}.png`;
    collectionAnchor.appendChild(ah14c3);
    ah14c3.setAttribute("style","width:180px;");
    ah14c3.setAttribute("style","height:240px;");
    ah14c3.setAttribute("style","padding:10px");
};

function Fourteenhand14Choose2C4() {
    collection.push(hand14[3]);
    document.getElementById("collectionAnchor");
    let ah14c4=document.createElement("img");
    ah14c4.src= `cardGameImages/${hand14[3].suit}${hand14[3].value}.png`;
    collectionAnchor.appendChild(ah14c4);
    ah14c4.setAttribute("style","width:180px;");
    ah14c4.setAttribute("style","height:240px;");
    ah14c4.setAttribute("style","padding:10px");
};

function Fourteenhand14Choose2C5() {
    collection.push(hand14[4]);
    document.getElementById("collectionAnchor");
    let ah14c5=document.createElement("img");
    ah14c5.src= `cardGameImages/${hand14[4].suit}${hand14[4].value}.png`;
    collectionAnchor.appendChild(ah14c5);
    ah14c5.setAttribute("style","width:180px;");
    ah14c5.setAttribute("style","height:240px;");
    ah14c5.setAttribute("style","padding:10px");
};


console.log("hand1");
console.log(hand1);

console.log("hand2");

console.log(hand2);

console.log("hand3");
console.log(hand3);

console.log("hand4");
console.log(hand4);

console.log("hand5");
console.log(hand5);

console.log("hand6");
console.log(hand6);

console.log("hand7");
console.log(hand7);

console.log("hand8");
console.log(hand8);

console.log("hand9");
console.log(hand9);

console.log("hand10");
console.log(hand10);

console.log("hand11");
console.log(hand11);

console.log("hand12");
console.log(hand12);

console.log("hand13");
console.log(hand13);

console.log("hand14");
console.log(hand14);

console.log(hand1);
console.log(collection);

console.log(deck);
