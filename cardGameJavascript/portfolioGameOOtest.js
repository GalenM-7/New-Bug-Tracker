//create arrays for hands, suits, and values

let suits = ["Hearts", "Diamonds", "Clubs", "Spades", "Skulls", "Swords"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let hand1 = [];
let hand2 = [];
let hand3 = [];
let hand4 = [];
let hand5 = [];
let hand6 = [];
let hand7 = [];
let hand8 = [];
let hand9 = [];
let hand10 = [];
let hand11 = [];
let hand12 = [];
let hand13 = [];
let hand14 = [];

let collection = [];

let collectionRevised1 = [];
let collectionRevised2 = [];
let collectionRevised3 = [];
let collectionRevised4 = [];
let collectionRevised5 = [];

let valuesTest1 = [];
let valuesTest2 = [];
let evaluateSet1 = [];
let evaluateSet2 = [];
let evaluateSet3 = [];
let evaluateSet4 = [];
let evaluateSet5 = [];
let end3 = [];
//let FEnd3=[];

let evalSuit = [];
let storeBonuses = [];
let score = [];

let Royal1 = [];
let Straight1 = [];
let FourKind1 = [];
let FullHouse1 = [];
let ThreeKind1 = [];
let Pair1 = [];
let Flush1 = [];

let Royal2 = [];
let Straight2 = [];
let FourKind2 = [];
let FullHouse2 = [];
let ThreeKind2 = [];
let TwoPair2 = [];
let Pair2 = [];
let Flush2 = [];

let Royal3 = [];
let Straight3 = [];
let FourKind3 = [];
let FullHouse3 = [];
let ThreeKind3 = [];
let Pair3 = [];
let Flush3 = [];

let Royal4 = [];
let Straight4 = [];
let FourKind4 = [];
let FullHouse4 = [];
let ThreeKind4 = [];
let Pair4 = [];
let Flush4 = [];

let Royal5 = [];
let Straight5 = [];
let FourKind5 = [];
let FullHouse5 = [];
let ThreeKind5 = [];
let Pair5 = [];
let Flush5 = [];

let finalCountBonuses = [];

let handCounter = [];

let check = [];

let check2 = [];

//let dupCheck= [];

let anchor = ["collectionAnchor1"];


 let HandDup = ["Hearts", "Diamonds", "Clubs", "Spades", "Skulls", "Swords"];
 let Hand2Dup = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


 



//let anchorsDeleted = [];

//create deck and deal functions

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }

  createDeck(suits, values) {
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push(new Card(suit, value));
      }
    }
    return this.deck;
  }

  shuffle() {
    let counter = this.deck.length,
      temp,
      i;

    while (counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;
    }
    return this.deck;
  }

  deal1() {
    for (let i = 0; i < 5; i++) {
      hand1.push(this.deck.pop());
    }
    return hand1;
  }

  deal2() {
    for (let i = 0; i < 5; i++) {
      hand2.push(this.deck.pop());
    }
    return hand2;
  }

  deal3() {
    for (let i = 0; i < 5; i++) {
      hand3.push(this.deck.pop());
    }
    return hand3;
  }

  deal4() {
    for (let i = 0; i < 5; i++) {
      hand4.push(this.deck.pop());
    }
    return hand4;
  }

  deal5() {
    for (let i = 0; i < 5; i++) {
      hand5.push(this.deck.pop());
    }
    return hand5;
  }

  deal6() {
    for (let i = 0; i < 5; i++) {
      hand6.push(this.deck.pop());
    }
    return hand6;
  }

  deal7() {
    for (let i = 0; i < 5; i++) {
      hand7.push(this.deck.pop());
    }
    return hand7;
  }

  deal8() {
    for (let i = 0; i < 5; i++) {
      hand8.push(this.deck.pop());
    }
    return hand8;
  }

  deal9() {
    for (let i = 0; i < 5; i++) {
      hand9.push(this.deck.pop());
    }
    return hand9;
  }

  deal10() {
    for (let i = 0; i < 5; i++) {
      hand10.push(this.deck.pop());
    }
    return hand10;
  }

  deal11() {
    for (let i = 0; i < 5; i++) {
      hand11.push(this.deck.pop());
    }
    return hand11;
  }

  deal12() {
    for (let i = 0; i < 5; i++) {
      hand12.push(this.deck.pop());
    }
    return hand12;
  }

  deal13() {
    for (let i = 0; i < 5; i++) {
      hand13.push(this.deck.pop());
    }
    return hand13;
  }

  deal14() {
    for (let i = 0; i < 5; i++) {
      hand14.push(this.deck.pop());
    }
    return hand14;
  }
}

let deck = new Deck();
deck.createDeck(suits, values);
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
function hideall() {
  let hideGetEval = document.getElementById("confirmButton");
  hideGetEval.style.display = "none";

  let makeSwitch1 = document.getElementById("makeSwitch");
  makeSwitch1.style.display = "none";

  let reset1 = document.getElementById("reset");
  reset1.style.display = "none";

  let scoreHideLabel = document.getElementById("scoreLabel");
  scoreHideLabel.style.display = "none";

  let scoreHide = document.getElementById("score");
  scoreHide.style.display = "none";

  let FE1 = document.getElementById("FinalEvaluation1");
  FE1.style.display = "none";

  let FE2 = document.getElementById("FinalEvaluation2");
  FE2.style.display = "none";

  let FE3 = document.getElementById("FinalEvaluation3");
  FE3.style.display = "none";

  let FE4 = document.getElementById("FinalEvaluation4");
  FE4.style.display = "none";

  let FE5 = document.getElementById("FinalEvaluation5");
  FE5.style.display = "none";

  let Bonuses = document.getElementById("BonusEvaluation");
  Bonuses.style.display = "none";

  let AddUp = document.getElementById("AddItUp");
  AddUp.style.display = "none";

  document.getElementById("handAnchor1").addEventListener("click", ChooseTwoClickFirst);
  document.getElementById("handAnchor2").addEventListener("click", ChooseTwoClickSecond);
  document.getElementById("handAnchor3").addEventListener("click", ChooseTwoClickThird);
  document.getElementById("handAnchor4").addEventListener("click", ChooseTwoClickFourth);
  document.getElementById("handAnchor5").addEventListener("click", ChooseTwoClickFifth);



  document.getElementById("click1").addEventListener("click", getValue1); 
  document.getElementById("click2").addEventListener("click", getValue2);
  document.getElementById("click3").addEventListener("click", getValue3);
  document.getElementById("click4").addEventListener("click", getValue4);
  document.getElementById("click5").addEventListener("click", getValue5);
  document.getElementById("click6").addEventListener("click", getValue6);
  document.getElementById("click7").addEventListener("click", getValue7);
  document.getElementById("click8").addEventListener("click", getValue8);
  document.getElementById("click9").addEventListener("click", getValue9);
  document.getElementById("click10").addEventListener("click", getValue10);
  document.getElementById("click11").addEventListener("click", getValue11);
  document.getElementById("click12").addEventListener("click", getValue12);
  document.getElementById("click13").addEventListener("click", getValue13);
  document.getElementById("click14").addEventListener("click", getValue14);
  document.getElementById("click15").addEventListener("click", getValue15);
  document.getElementById("click16").addEventListener("click", getValue16);
  document.getElementById("click17").addEventListener("click", getValue17);
  document.getElementById("click18").addEventListener("click", getValue18);
  document.getElementById("click19").addEventListener("click", getValue19);
  document.getElementById("click20").addEventListener("click", getValue20);
  document.getElementById("click21").addEventListener("click", getValue21);
  document.getElementById("click22").addEventListener("click", getValue22);
  document.getElementById("click23").addEventListener("click", getValue23);
  document.getElementById("click24").addEventListener("click", getValue24);
  document.getElementById("click25").addEventListener("click", getValue25);
  document.getElementById("click26").addEventListener("click", getValue26);
  document.getElementById("click27").addEventListener("click", getValue27);
  document.getElementById("click28").addEventListener("click", getValue28);
}

window.onload = hideall();



function changeRound(number) {
  document.getElementById("round");
  let roundCounter = document.createElement("p");
  round.appendChild(roundCounter);
  roundCounter.innerHTML = `This is Hand ${number}`;
  roundCounter.setAttribute("style", "font-size: 50px");
  roundCounter.style.textAlign = "right";
  roundCounter.style.color = "white";
}

function seeAll (){
console.log(hand1);
console.log(hand2);
console.log(hand3);
console.log(hand4);
console.log(hand5);
console.log(hand6);
console.log(hand7);
console.log(hand8);
console.log(hand9);
console.log(hand10);
console.log(hand11);
console.log(hand12);
console.log(hand13);
console.log(hand14);
console.log(check2);

}
function clearRound() {
 let anchorRound=document.getElementById("round");
  while (anchorRound.firstChild) {
    anchorRound.removeChild(anchorRound.firstChild);
  }
}

function clearHand() {
  let anchorHand1=document.getElementById("handAnchor1");
  while (anchorHand1.firstChild) {
    anchorHand1.removeChild(anchorHand1.firstChild);
  }
    let anchorHand2=document.getElementById("handAnchor2");
  while (anchorHand2.firstChild) {
    anchorHand2.removeChild(anchorHand2.firstChild);
  }
    let anchorHand3=document.getElementById("handAnchor3");
  while (anchorHand3.firstChild) {
    anchorHand3.removeChild(anchorHand3.firstChild);
  }
    let anchorHand4 = document.getElementById("handAnchor4");
  while (anchorHand4.firstChild) {
    anchorHand4.removeChild(anchorHand4.firstChild);
  }
    let anchorHand5 = document.getElementById("handAnchor5");
  while (anchorHand5.firstChild) {
    anchorHand5.removeChild(anchorHand5.firstChild);
  }
}

function showCard1(currentHand) {
  document.getElementById("handAnchor1");
  let h1c1 = document.createElement("img");
  h1c1.src = `cardGameImages/${currentHand[0].suit}${currentHand[0].value}.png`;
  handAnchor1.appendChild(h1c1);
}

function showCard2(currentHand) {
  document.getElementById("handAnchor2");
  let h1c1 = document.createElement("img");
  h1c1.src = `cardGameImages/${currentHand[1].suit}${currentHand[1].value}.png`;
  handAnchor2.appendChild(h1c1);
}

function showCard3(currentHand) {
  document.getElementById("handAnchor3");
  let h1c1 = document.createElement("img");
  h1c1.src = `cardGameImages/${currentHand[2].suit}${currentHand[2].value}.png`;
  handAnchor3.appendChild(h1c1);
}

function showCard4(currentHand) {
  document.getElementById("handAnchor4");
  let h1c1 = document.createElement("img");
  h1c1.src = `cardGameImages/${currentHand[3].suit}${currentHand[3].value}.png`;
  handAnchor4.appendChild(h1c1);
}

function showCard5(currentHand) {
  document.getElementById("handAnchor5");
  let h1c1 = document.createElement("img");
  h1c1.src = `cardGameImages/${currentHand[4].suit}${currentHand[4].value}.png`;
  handAnchor5.appendChild(h1c1);
  check2.push("draw");
}

//function to differenciate which hand we are on/round we are on
function getHand() {
  let hand1function = hand1;
  let hand2function = hand2;
  let hand3function = hand3;
  let hand4function = hand4;
  let hand5function = hand5;
  let hand6function = hand6;
  let hand7function = hand7;
  let hand8function = hand8;
  let hand9function = hand9;
  let hand10function = hand10;
  let hand11function = hand11;
  let hand12function = hand12;
  let hand13function = hand13;
  let hand14function = hand14;

  function addDup(){
    HandDup.push("duplicate");
  }

  switch (check2.length) {
    case 0:
        clearHand();
      showCard1(hand1function);
      showCard2(hand1function);
      showCard3(hand1function);
      showCard4(hand1function);
      showCard5(hand1function);
      changeRound("One");
      console.log(hand1);
      break;
    case 1:
        clearHand();
      addDup();
      showCard1(hand2function);
      showCard2(hand2function);
      showCard3(hand2function);
      showCard4(hand2function);
      showCard5(hand2function);      
      clearRound();
      changeRound("Two");
      console.log(hand2);
      break;
    case 2:
        clearHand();
        addDup();
      showCard1(hand3function);
      showCard2(hand3function);
      showCard3(hand3function);
      showCard4(hand3function);
      showCard5(hand3function); 
      clearRound();
      changeRound("Three");
      console.log(hand3);
      break;
    case 3:
      clearHand();
      addDup();
      showCard1(hand4function);
      showCard2(hand4function);
      showCard3(hand4function);
      showCard4(hand4function);
      showCard5(hand4function); 
      clearRound();
      changeRound("Four");
      console.log(hand4);
      break;
    case 4:
      clearHand();
      addDup();      
      showCard1(hand5function);
      showCard2(hand5function);
      showCard3(hand5function);
      showCard4(hand5function);
      showCard5(hand5function); 
      clearRound();
      changeRound("Five");
      console.log(hand5);
      break;
    case 5:
      clearHand();
      addDup();      
      showCard1(hand6function);
      showCard2(hand6function);
      showCard3(hand6function);
      showCard4(hand6function);
      showCard5(hand6function);      
      clearRound();
      changeRound("Six");
      console.log(hand6);
      break;
    case 6:
      clearHand();
      addDup();
    showCard1(hand7function);
    showCard2(hand7function);
    showCard3(hand7function);
    showCard4(hand7function);
    showCard5(hand7function);
    clearRound();
      clearRound();
      changeRound("Seven");
      console.log(hand7);
      break;
    case 7:
      clearHand();
      addDup();
      showCard1(hand8function);
      showCard2(hand8function);
      showCard3(hand8function);
      showCard4(hand8function);
      showCard5(hand8function);
      clearRound();
      changeRound("Eight");
      console.log(hand8);
      break;
    case 8:
    clearHand();
    addDup();
    showCard1(hand9function);
    showCard2(hand9function);
    showCard3(hand9function);
    showCard4(hand9function);
    showCard5(hand9function);
      clearRound();
      changeRound("Nine");
      console.log(hand9);
      break;
    case 9:
    clearHand();
    addDup();
    showCard1(hand10function);
    showCard2(hand10function);
    showCard3(hand10function);
    showCard4(hand10function);
    showCard5(hand10function);
      clearRound();
      changeRound("Ten");
      console.log(hand10);
      break;
    case 10:
    clearHand();
    addDup();
    showCard1(hand11function);
    showCard2(hand11function);
    showCard3(hand11function);
    showCard4(hand11function);
    showCard5(hand11function);
      clearRound();
      changeRound("Eleven");
      console.log(hand11);
      break;
    case 11:
    clearHand();
    addDup();
    showCard1(hand12function);
    showCard2(hand12function);
    showCard3(hand12function);
    showCard4(hand12function);
    showCard5(hand12function); 
     clearRound();
      changeRound("Twelve");
      console.log(hand12);
      break;
    case 12:
    clearHand();
    addDup();
    showCard1(hand13function);
    showCard2(hand13function);
    showCard3(hand13function);
    showCard4(hand13function);
    showCard5(hand13function); 
      clearRound();
      changeRound("Thirteen");
      console.log(hand13);
      break;
    case 13:
    clearHand();
    addDup();
    showCard1(hand14function);
    showCard2(hand14function);
    showCard3(hand14function);
    showCard4(hand14function);
    showCard5(hand14function); 
      clearRound();
      changeRound("Fourteen");
      console.log(hand14);
      break;
    default:
      break;
  }
}

//function for collectionAnchor variable used to attach image to "Your Collection"
function whichAnchor () {
if (collection.length === 1) {
    anchor[0]="collectionAnchor2";
  } else if (collection.length === 2) {
    anchor[0] = "collectionAnchor3";
  } else if (collection.length === 3) {
    anchor[0] = "collectionAnchor4";
  } else if (collection.length === 4) {
    anchor[0] = "collectionAnchor5";
  } else if (collection.length === 5) {
    anchor[0] = "collectionAnchor6";
  } else if (collection.length === 6) {
    anchor[0] = "collectionAnchor7";
  } else if (collection.length === 7) {
    anchor[0] = "collectionAnchor8";
  } else if (collection.length === 8) {
    anchor[0] = "collectionAnchor9";
  } else if (collection.length === 9) {
    anchor[0] = "collectionAnchor10";
  } else if (collection.length === 10) {
    anchor[0] = "collectionAnchor11";
  } else if (collection.length === 11) {
    anchor[0] = "collectionAnchor12";
  } else if (collection.length === 12) {
    anchor[0] = "collectionAnchor13";
  } else if (collection.length === 13) {
    anchor[0] = "collectionAnchor14";
  } else if (collection.length === 14) {
    anchor[0] = "collectionAnchor15";
  } else if (collection.length === 15) {
    anchor[0] = "collectionAnchor16";
  } else if (collection.length === 16) {
    anchor[0] = "collectionAnchor17";
  } else if (collection.length === 17) {
    anchor[0] = "collectionAnchor18";
  } else if (collection.length === 18) {
    anchor[0] = "collectionAnchor18";
  } else if (collection.length === 19) {
    anchor[0] = "collectionAnchor20";
  } else if (collection.length === 20) {
    anchor[0] = "collectionAnchor21";
  } else if (collection.length === 21) {
    anchor[0] = "collectionAnchor22";
  } else if (collection.length === 22) {
    anchor[0] = "collectionAnchor23";
  } else if (collection.length === 23) {
    anchor[0] = "collectionAnchor24";
  } else if (collection.length === 24) {
    anchor[0] = "collectionAnchor25";
  } else if (collection.length === 25) {
    anchor[0] = "collectionAnchor26";
  } else if (collection.length === 26) {
    anchor[0] = "collectionAnchor27";
  } else if (collection.length === 27) {
    anchor[0] = "collectionAnchor28";
  } else {

  }
}

//Master Equation for first card all hands

function ChooseTwoClickFirst() {
  let numbers2 = [0,2,4,6,8,10,12,14,16,18,20,22,24,26];
  let numbers = [1,3,5,7,9,11,13,15,17,19,21,23,25,27];

  let hand1function = hand1;
  let hand2function = hand2;
  let hand3function = hand3;
  let hand4function = hand4;
  let hand5function = hand5;
  let hand6function = hand6;
  let hand7function = hand7;
  let hand8function = hand8;
  let hand9function = hand9;
  let hand10function = hand10;
  let hand11function = hand11;
  let hand12function = hand12;
  let hand13function = hand13;
  let hand14function = hand14;
  


    if (collection.length < 2) {
    ChooseTwoCardSecond(
      hand1function,
      numbers2[0],
      numbers[0]
    );
    whichAnchor();
  } else if (collection.length === 3 || collection.length === 4) {
    ChooseTwoCardSecond(
      hand2function,
      numbers2[1],
      numbers[1],
    );
    whichAnchor();
  } else if (collection.length === 5 || collection.length === 6) {
    ChooseTwoCardSecond(
      hand3function,
      numbers2[2],
      numbers[2],
    );
    whichAnchor();
  } else if (collection.length === 7 || collection.length === 8) {
    ChooseTwoCardSecond(
      hand4function,
      numbers2[3],
      numbers[3],
    );
    whichAnchor();
  } else if (collection.length === 9 || collection.length === 10) {
    ChooseTwoCardSecond(
      hand5function,
      numbers2[4],
      numbers[4],
    );
    whichAnchor();
  } else if (collection.length === 11 || collection.length === 12) {
    ChooseTwoCardSecond(
      hand6function,
      numbers2[5],
      numbers[5],
    );
    whichAnchor();
  } else if (collection.length === 13 || collection.length === 14) {
    ChooseTwoCardSecond(
      hand7function,
      numbers2[6],
      numbers[6],
      Hand7DupF,
      Hand1DupF2
    );
    whichAnchor();
  } else if (collection.length === 15 || collection.length === 16) {
    ChooseTwoCardSecond(
      hand8function,
      numbers2[7],
      numbers[7],
      Hand8DupF,
      Hand1DupF2
    );
    whichAnchor();
  } else if (collection.length === 17 || collection.length === 18) {
    ChooseTwoCardSecond(
      hand9function,
      numbers2[8],
      numbers[8],
      Hand9DupF,
      Hand1DupF2
    );
    whichAnchor();
  } else if (collection.length === 19 || collection.length === 20) {
    ChooseTwoCardSecond(
      hand10function,
      numbers2[9],
      numbers[9],
      Hand10DupF,
      Hand1DupF2
    );
    whichAnchor();
  } else if (collection.length === 21 || collection.length === 22) {
    ChooseTwoCardSecond(
      hand11function,
      numbers2[10],
      numbers[10],
      Hand11DupF,
      Hand1DupF2
    );
    whichAnchor();
  } else if (collection.length === 23 || collection.length === 24) {
    ChooseTwoCardSecond(
      hand12function,
      numbers2[11],
      numbers[11],
      Hand12DupF,
      Hand1DupF2
    );
    whichAnchor();
  } else if (collection.length === 25 || collection.length === 26) {
    ChooseTwoCardSecond(
      hand13function,
      numbers2[12],
      numbers[12],
      Hand13DupF,
      Hand1DupF2
    );
    whichAnchor();
  } else if (collection.length === 27 || collection.length === 28) {
    ChooseTwoCardSecond(
      hand14function,
      numbers2[13],
      numbers[13],
      Hand14DupF,
      Hand1DupF2
    );
    whichAnchor();
  } else {
  }
  }

// Equation for just first card of each hand


function ChooseTwoCardFirst(
  hand,
  number,
  number2,
) {

  if (collection.length === number) {
      collection.push(hand[0]);
      //Hand1Dup.push("One");
      window.alert("why");
      let toAttach = document.getElementById(anchor);
      let card1 = document.createElement("img");
      card1.src = `cardGameImages/${hand[0].suit}${hand[0].value}.png`;
      toAttach.appendChild(card1);
      //dupCheck.push("One");
      console.log("collection");
      console.log(collection);
      console.log("check");
      console.log(check);
    } else if (
      collection[number2].suit === hand[0] &&
      collection[number2].value === hand[0]
    ) {
      console.log("duplicate");
    } else if (collection.length === number2) {
      collection.push(hand[0]);
      let toAttach = document.getElementById(anchor);
      let card1 = document.createElement("img");
      card1.src = `cardGameImages/${hand[0].suit}${hand[0].value}.png`;
      toAttach.appendChild(card1);
      check.push("One");
      console.log("collection");
      console.log(collection);
      console.log("check");
      console.log(check);
    } else {
    }
}

// Master Equation second card of all hands

function ChooseTwoClickSecond() {
  let numbers2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];
  let numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];

  let hand1function = hand1;
  let hand2function = hand2;
  let hand3function = hand3;
  let hand4function = hand4;
  let hand5function = hand5;
  let hand6function = hand6;
  let hand7function = hand7;
  let hand8function = hand8;
  let hand9function = hand9;
  let hand10function = hand10;
  let hand11function = hand11;
  let hand12function = hand12;
  let hand13function = hand13;
  let hand14function = hand14;
  let Hand1DupF = Hand1Dup;
  let Hand2DupF = Hand2Dup;
  let Hand3DupF = Hand3Dup;
  let Hand4DupF = Hand4Dup;
  let Hand5DupF = Hand5Dup;
  let Hand6DupF = Hand6Dup;
  let Hand7DupF = Hand7Dup;
  let Hand8DupF = Hand8Dup;
  let Hand9DupF = Hand9Dup;
  let Hand10DupF = Hand10Dup;
  let Hand11DupF = Hand11Dup;
  let Hand12DupF = Hand12Dup;
  let Hand13DupF = Hand13Dup;
  let Hand14DupF = Hand14Dup;

  if (collection.length < 2) {
    ChooseTwoCardSecond(hand1function, numbers2[0], numbers[0], Hand1DupF);
    whichAnchor();
  } else if (collection.length === 3 || collection.length === 4) {
    ChooseTwoCardSecond(hand2function, numbers2[1], numbers[1], Hand2DupF);
    whichAnchor();
  } else if (collection.length === 5 || collection.length === 6) {
    ChooseTwoCardSecond(hand3function, numbers2[2], numbers[2], Hand3DupF);
    whichAnchor();
  } else if (collection.length === 7 || collection.length === 8) {
    ChooseTwoCardSecond(hand4function, numbers2[3], numbers[3], Hand4DupF);
    whichAnchor();
  } else if (collection.length === 9 || collection.length === 10) {
    ChooseTwoCardSecond(hand5function, numbers2[4], numbers[4], Hand5DupF);
    whichAnchor();
  } else if (collection.length === 11 || collection.length === 12) {
    ChooseTwoCardSecond(hand6function, numbers2[5], numbers[5], Hand6DupF);
    whichAnchor();
  } else if (collection.length === 13 || collection.length === 14) {
    ChooseTwoCardSecond(hand7function, numbers2[6], numbers[6], Hand7DupF);
    whichAnchor();
  } else if (collection.length === 15 || collection.length === 16) {
    ChooseTwoCardSecond(hand8function, numbers2[7], numbers[7], Hand8DupF);
    whichAnchor();
  } else if (collection.length === 17 || collection.length === 18) {
    ChooseTwoCardSecond(hand9function, numbers2[8], numbers[8], Hand9DupF);
    whichAnchor();
  } else if (collection.length === 19 || collection.length === 20) {
    ChooseTwoCardSecond(hand10function, numbers2[9], numbers[9], Hand10DupF);
    whichAnchor();
  } else if (collection.length === 21 || collection.length === 22) {
    ChooseTwoCardSecond(hand11function, numbers2[10], numbers[10], Hand11DupF);
    whichAnchor();
  } else if (collection.length === 23 || collection.length === 24) {
    ChooseTwoCardSecond(hand12function, numbers2[11], numbers[11], Hand12DupF);
    whichAnchor();
  } else if (collection.length === 25 || collection.length === 26) {
    ChooseTwoCardSecond(hand13function, numbers2[12], numbers[12], Hand13DupF);
    whichAnchor();
  } else if (collection.length === 27 || collection.length === 28) {
    ChooseTwoCardSecond(hand14function, numbers2[13], numbers[13], Hand14DupF);
    whichAnchor();
  } else {
  }
}




// Equation for just second card of each hand

function ChooseTwoCardSecond(hand, number, number2, dupHand) {

    if (collection.length === 0) {
      dupHand.push("Two");
    } else if (collection.length === 2) {
      Hand2Dup.push("Two");
    } else if (collection.length === 4) {
      Hand3Dup.push("Two");
    } else if (collection.length === 6) {
      Hand4Dup.push("Two");
    } else if (collection.length === 8) {
      Hand5Dup.push("Two");
    } else if (collection.length === 10) {
      Hand6Dup.push("Two");
    } else if (collection.length === 12) {
      Hand7Dup.push("Two");
    } else if (collection.length === 14) {
      Hand8Dup.push("Two");
    } else if (collection.length === 16) {
      Hand9Dup.push("Two");
    } else if (collection.length === 18) {
      Hand10Dup.push("Two");
    } else if (collection.length === 20) {
      Hand11Dup.push("Two");
    } else if (collection.length === 22) {
      Hand12Dup.push("Two");
    } else if (collection.length === 24) {
      Hand13Dup.push("Two");
    } else if (collection.length === 26) {
      Hand14Dup.push("Two");
    } else {
    }   
  
  if (collection.length === number) {
    collection.push(hand[1]);
    window.alert("why");
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[1].suit}${hand[1].value}.png`;
    toAttach.appendChild(card1);
     Hand1Dup.push("Two");
    console.log("collection");
    console.log(collection);
    console.log("check");
    console.log(check);
  } else if (dupHand[0] === "Two") {
      console.log("duplicate");
  } else if (collection.length === number2) {
    collection.push(hand[1]);
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[1].suit}${hand[1].value}.png`;
    toAttach.appendChild(card1);
    check.push("Two");
    console.log("collection");
    console.log(collection);
    console.log("check");
    console.log(check);
  } else {
  }
}

// Master Function Third card of all hands

function ChooseTwoClickThird() {
  let numbers2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];
  let numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];

  let hand1function = hand1;
  let hand2function = hand2;
  let hand3function = hand3;
  let hand4function = hand4;
  let hand5function = hand5;
  let hand6function = hand6;
  let hand7function = hand7;
  let hand8function = hand8;
  let hand9function = hand9;
  let hand10function = hand10;
  let hand11function = hand11;
  let hand12function = hand12;
  let hand13function = hand13;
  let hand14function = hand14;
  let Hand1DupF = Hand1Dup;
  let Hand2DupF = Hand2Dup;
  let Hand3DupF = Hand3Dup;
  let Hand4DupF = Hand4Dup;
  let Hand5DupF = Hand5Dup;
  let Hand6DupF = Hand6Dup;
  let Hand7DupF = Hand7Dup;
  let Hand8DupF = Hand8Dup;
  let Hand9DupF = Hand9Dup;
  let Hand10DupF = Hand10Dup;
  let Hand11DupF = Hand11Dup;
  let Hand12DupF = Hand12Dup;
  let Hand13DupF = Hand13Dup;
  let Hand14DupF = Hand14Dup;

if (collection.length < 2) {
  ChooseThreeCardSecond(hand1function, numbers2[0], numbers[0], Hand1DupF);
  whichAnchor();
} else if (collection.length === 3 || collection.length === 4) {
  ChooseThreeCardSecond(hand2function, numbers2[1], numbers[1], Hand2DupF);
  whichAnchor();
} else if (collection.length === 5 || collection.length === 6) {
  ChooseThreeCardSecond(hand3function, numbers2[2], numbers[2], Hand3DupF);
  whichAnchor();
} else if (collection.length === 7 || collection.length === 8) {
  ChooseThreeCardSecond(hand4function, numbers2[3], numbers[3], Hand4DupF);
  whichAnchor();
} else if (collection.length === 9 || collection.length === 10) {
  ChooseThreeCardSecond(hand5function, numbers2[4], numbers[4], Hand5DupF);
  whichAnchor();
} else if (collection.length === 11 || collection.length === 12) {
  ChooseThreeCardSecond(hand6function, numbers2[5], numbers[5], Hand6DupF);
  whichAnchor();
} else if (collection.length === 13 || collection.length === 14) {
  ChooseThreeCardSecond(hand7function, numbers2[6], numbers[6], Hand7DupF);
  whichAnchor();
} else if (collection.length === 15 || collection.length === 16) {
  ChooseThreeCardSecond(hand8function, numbers2[7], numbers[7], Hand8DupF);
  whichAnchor();
} else if (collection.length === 17 || collection.length === 18) {
  ChooseThreeCardSecond(hand9function, numbers2[8], numbers[8], Hand9DupF);
  whichAnchor();
} else if (collection.length === 19 || collection.length === 20) {
  ChooseThreeCardSecond(hand10function, numbers2[9], numbers[9], Hand10DupF);
  whichAnchor();
} else if (collection.length === 21 || collection.length === 22) {
  ChooseThreeCardSecond(hand11function, numbers2[10], numbers[10], Hand11DupF);
  whichAnchor();
} else if (collection.length === 23 || collection.length === 24) {
  ChooseThreeCardSecond(hand12function, numbers2[11], numbers[11], Hand12DupF);
  whichAnchor();
} else if (collection.length === 25 || collection.length === 26) {
  ChooseThreeCardSecond(hand13function, numbers2[12], numbers[12], Hand13DupF);
  whichAnchor();
} else if (collection.length === 27 || collection.length === 28) {
  ChooseThreeCardSecond(hand14function, numbers2[13], numbers[13], Hand14DupF);
  whichAnchor();
} else {
}
}


// Equation for just third card of each hand

function ChooseTwoCardThird(hand, number, number2, dupHand) {

    if (collection.length === 0) {
      Hand1Dup.push("Three");
    } else if (collection.length === 2) {
      Hand2Dup.push("Three");
    } else if (collection.length === 4) {
      Hand3Dup.push("Three");
    } else if (collection.length === 6) {
      Hand4Dup.push("Three");
    } else if (collection.length === 8) {
      Hand5Dup.push("Three");
    } else if (collection.length === 10) {
      Hand6Dup.push("Three");
    } else if (collection.length === 12) {
      Hand7Dup.push("Three");
    } else if (collection.length === 14) {
      Hand8Dup.push("Three");
    } else if (collection.length === 16) {
      Hand9Dup.push("Three");
    } else if (collection.length === 18) {
      Hand10Dup.push("Three");
    } else if (collection.length === 20) {
      Hand11Dup.push("Three");
    } else if (collection.length === 22) {
      Hand12Dup.push("Three");
    } else if (collection.length === 24) {
      Hand13Dup.push("Three");
    } else if (collection.length === 26) {
      Hand14Dup.push("Three");
    } else {
    }   
  
  if (collection.length === number) {
    collection.push(hand[2]);
    window.alert("why");
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[2].suit}${hand[2].value}.png`;
    toAttach.appendChild(card1);
     dupHand.push("Three");
    console.log("collection");
    console.log(collection);
    console.log("check");
    console.log(check);
  } else if ( dupHand[0] === "Three") { 
    console.log("Duplicate")
  } else if (collection.length === number2) {
    collection.push(hand[2]);
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[2].suit}${hand[2].value}.png`;
    toAttach.appendChild(card1);
    check.push("One");
    console.log("collection");
    console.log(collection);
    console.log("check");
    console.log(check);
  } else {
  }
}

// Master Function Fourth card of all hands

function ChooseTwoClickFourth() {
  let numbers2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];
  let numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];

  let hand1function = hand1;
  let hand2function = hand2;
  let hand3function = hand3;
  let hand4function = hand4;
  let hand5function = hand5;
  let hand6function = hand6;
  let hand7function = hand7;
  let hand8function = hand8;
  let hand9function = hand9;
  let hand10function = hand10;
  let hand11function = hand11;
  let hand12function = hand12;
  let hand13function = hand13;
  let hand14function = hand14;
  let Hand1DupF = Hand1Dup;
  let Hand2DupF = Hand2Dup;
  let Hand3DupF = Hand3Dup;
  let Hand4DupF = Hand4Dup;
  let Hand5DupF = Hand5Dup;
  let Hand6DupF = Hand6Dup;
  let Hand7DupF = Hand7Dup;
  let Hand8DupF = Hand8Dup;
  let Hand9DupF = Hand9Dup;
  let Hand10DupF = Hand10Dup;
  let Hand11DupF = Hand11Dup;
  let Hand12DupF = Hand12Dup;
  let Hand13DupF = Hand13Dup;
  let Hand14DupF = Hand14Dup;

  if (collection.length < 2) {
    ChooseThreeCardFourth(hand1function, numbers2[0], numbers[0], Hand1DupF);
    whichAnchor();
  } else if (collection.length === 3 || collection.length === 4) {
    ChooseThreeCardFourth(hand2function, numbers2[1], numbers[1], Hand2DupF);
    whichAnchor();
  } else if (collection.length === 5 || collection.length === 6) {
    ChooseThreeCardFourth(hand3function, numbers2[2], numbers[2], Hand3DupF);
    whichAnchor();
  } else if (collection.length === 7 || collection.length === 8) {
    ChooseThreeCardFourth(hand4function, numbers2[3], numbers[3], Hand4DupF);
    whichAnchor();
  } else if (collection.length === 9 || collection.length === 10) {
    ChooseThreeCardFourth(hand5function, numbers2[4], numbers[4], Hand5DupF);
    whichAnchor();
  } else if (collection.length === 11 || collection.length === 12) {
    ChooseThreeCardFourth(hand6function, numbers2[5], numbers[5], Hand6DupF);
    whichAnchor();
  } else if (collection.length === 13 || collection.length === 14) {
    ChooseThreeCardFourth(hand7function, numbers2[6], numbers[6], Hand7DupF);
    whichAnchor();
  } else if (collection.length === 15 || collection.length === 16) {
    ChooseThreeCardFourth(hand8function, numbers2[7], numbers[7], Hand8DupF);
    whichAnchor();
  } else if (collection.length === 17 || collection.length === 18) {
    ChooseThreeCardFourth(hand9function, numbers2[8], numbers[8], Hand9DupF);
    whichAnchor();
  } else if (collection.length === 19 || collection.length === 20) {
    ChooseThreeCardFourth(hand10function, numbers2[9], numbers[9], Hand10DupF);
    whichAnchor();
  } else if (collection.length === 21 || collection.length === 22) {
    ChooseThreeCardFourth(hand11function, numbers2[10], numbers[10], Hand11DupF);
    whichAnchor();
  } else if (collection.length === 23 || collection.length === 24) {
    ChooseThreeCardFourth(hand12function, numbers2[11], numbers[11], Hand12DupF);
    whichAnchor();
  } else if (collection.length === 25 || collection.length === 26) {
    ChooseThreeCardFourth(hand13function, numbers2[12], numbers[12], Hand13DupF);
    whichAnchor();
  } else if (collection.length === 27 || collection.length === 28) {
    ChooseThreeCardFourth(hand14function, numbers2[13], numbers[13], Hand14DupF);
    whichAnchor();
  } else {
  }
}

// Equation for just fourth card of each hand

function ChooseTwoCardFourth(hand, number, number2, dupHand) {
  
    if (collection.length === 0) {
      Hand1Dup.push("Four");
    } else if (collection.length === 2) {
      Hand2Dup.push("Four");
    } else if (collection.length === 4) {
      Hand3Dup.push("Four");
    } else if (collection.length === 6) {
      Hand4Dup.push("Four");
    } else if (collection.length === 8) {
      Hand5Dup.push("Four");
    } else if (collection.length === 10) {
      Hand6Dup.push("Four");
    } else if (collection.length === 12) {
      Hand7Dup.push("Four");
    } else if (collection.length === 14) {
      Hand8Dup.push("Four");
    } else if (collection.length === 16) {
      Hand9Dup.push("Four");
    } else if (collection.length === 18) {
      Hand10Dup.push("Four");
    } else if (collection.length === 20) {
      Hand11Dup.push("Four");
    } else if (collection.length === 22) {
      Hand12Dup.push("Four");
    } else if (collection.length === 24) {
      Hand13Dup.push("Four");
    } else if (collection.length === 26) {
      Hand14Dup.push("Four");
    } else {
    }   
  

  if (collection.length === number) {
    collection.push(hand[3]);
    window.alert("why");
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[3].suit}${hand[3].value}.png`;
    toAttach.appendChild(card1);
     Hand1Dup.push("Four");
    console.log("collection");
    console.log(collection);
    console.log("check");
    console.log(check);
  } else if (dupHand[0] === "Four") { 
    console.log("Duplicate")
  } else if (collection.length === number2) {
    collection.push(hand[3]);
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[3].suit}${hand[3].value}.png`;
    toAttach.appendChild(card1);
    check.push("One");
    console.log("collection");
    console.log(collection);
    console.log("check");
    console.log(check);
  } else {
  }
}


// Master Function Fourth card of all hands

function ChooseTwoClickFifth() {
  let numbers2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];
  let numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];

  let hand1function = hand1;
  let hand2function = hand2;
  let hand3function = hand3;
  let hand4function = hand4;
  let hand5function = hand5;
  let hand6function = hand6;
  let hand7function = hand7;
  let hand8function = hand8;
  let hand9function = hand9;
  let hand10function = hand10;
  let hand11function = hand11;
  let hand12function = hand12;
  let hand13function = hand13;
  let hand14function = hand14;
  let Hand1DupF = Hand1Dup;
  let Hand2DupF = Hand2Dup;
  let Hand3DupF = Hand3Dup;
  let Hand4DupF = Hand4Dup;
  let Hand5DupF = Hand5Dup;
  let Hand6DupF = Hand6Dup;
  let Hand7DupF = Hand7Dup;
  let Hand8DupF = Hand8Dup;
  let Hand9DupF = Hand9Dup;
  let Hand10DupF = Hand10Dup;
  let Hand11DupF = Hand11Dup;
  let Hand12DupF = Hand12Dup;
  let Hand13DupF = Hand13Dup;
  let Hand14DupF = Hand14Dup;

    if (collection.length === 0) {
      Hand1Dup.push("Five");
    } else if (collection.length === 2) {
      Hand2Dup.push("Five");
    } else if (collection.length === 4) {
      Hand3Dup.push("Five");
    } else if (collection.length === 6) {
      Hand4Dup.push("Five");
    } else if (collection.length === 8) {
      Hand5Dup.push("Five");
    } else if (collection.length === 10) {
      Hand6Dup.push("Five");
    } else if (collection.length === 12) {
      Hand7Dup.push("Five");
    } else if (collection.length === 14) {
      Hand8Dup.push("Five");
    } else if (collection.length === 16) {
      Hand9Dup.push("Five");
    } else if (collection.length === 18) {
      Hand10Dup.push("Five");
    } else if (collection.length === 20) {
      Hand11Dup.push("Five");
    } else if (collection.length === 22) {
      Hand12Dup.push("Five");
    } else if (collection.length === 24) {
      Hand13Dup.push("Five");
    } else if (collection.length === 26) {
      Hand14Dup.push("Five");
    } else {
    }   
  
 
  if (collection.length < 2) {
    ChooseThreeCardFifth(hand1function, numbers2[0], numbers[0], Hand1DupF);
    whichAnchor();
  } else if (collection.length === 3 || collection.length === 4) {
    ChooseThreeCardFifth(hand2function, numbers2[1], numbers[1], Hand2DupF);
    whichAnchor();
  } else if (collection.length === 5 || collection.length === 6) {
    ChooseThreeCardFifth(hand3function, numbers2[2], numbers[2], Hand3DupF);
    whichAnchor();
  } else if (collection.length === 7 || collection.length === 8) {
    ChooseThreeCardFifth(hand4function, numbers2[3], numbers[3], Hand4DupF);
    whichAnchor();
  } else if (collection.length === 9 || collection.length === 10) {
    ChooseThreeCardFifth(hand5function, numbers2[4], numbers[4], Hand5DupF);
    whichAnchor();
  } else if (collection.length === 11 || collection.length === 12) {
    ChooseThreeCardFifth(hand6function, numbers2[5], numbers[5], Hand6DupF);
    whichAnchor();
  } else if (collection.length === 13 || collection.length === 14) {
    ChooseThreeCardFifth(hand7function, numbers2[6], numbers[6], Hand7DupF);
    whichAnchor();
  } else if (collection.length === 15 || collection.length === 16) {
    ChooseThreeCardFifth(hand8function, numbers2[7], numbers[7], Hand8DupF);
    whichAnchor();
  } else if (collection.length === 17 || collection.length === 18) {
    ChooseThreeCardFifth(hand9function, numbers2[8], numbers[8], Hand9DupF);
    whichAnchor();
  } else if (collection.length === 19 || collection.length === 20) {
    ChooseThreeCardFifth(hand10function, numbers2[9], numbers[9], Hand10DupF);
    whichAnchor();
  } else if (collection.length === 21 || collection.length === 22) {
    ChooseThreeCardFifth(hand11function, numbers2[10], numbers[10], Hand11DupF);
    whichAnchor();
  } else if (collection.length === 23 || collection.length === 24) {
    ChooseThreeCardFifth(hand12function, numbers2[11], numbers[11], Hand12DupF);
    whichAnchor();
  } else if (collection.length === 25 || collection.length === 26) {
    ChooseThreeCardFifth(hand13function, numbers2[12], numbers[12], Hand13DupF);
    whichAnchor();
  } else if (collection.length === 27 || collection.length === 28) {
    ChooseThreeCardFifth(hand14function, numbers2[13], numbers[13], Hand14DupF);
    whichAnchor();
  } else {
  }
}


// Equation for just fifth card of fifth hand

function ChooseTwoCardFifth(hand, number, number2, dupHand) {

  if (collection.length === number) {
    collection.push(hand[4]);
    window.alert("why");
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[4].suit}${hand[4].value}.png`;
    toAttach.appendChild(card1);
     dupHand.push("Five");
    console.log("collection");
    console.log(collection);
    console.log("check");
    console.log(check);
  } else if (dupHand[0] === "Five") { 
    console.log("Duplicate")
  } else if (collection.length === number2) {
    collection.push(hand[4]);
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[4].suit}${hand[4].value}.png`;
    toAttach.appendChild(card1);
    check.push("One");
    console.log("collection");
    console.log(collection);
    console.log("check");
    console.log(check);
  } else {
  }
}


////////////////////////////////////////////////

/*
function Fourteenhand14Choose2C5() {
  if (collection6.length < 2) {
    collection6.push(hand14[4]);
    collection.push(hand14[4]);

    document.getElementById("collectionAnchor27");
    let ah14c5 = document.createElement("img");
    ah14c5.src = `cardGameImages/${hand14[4].suit}${hand14[4].value}.png`;
    collectionAnchor27.appendChild(ah14c5);
    ah14c5.setAttribute("style", "width:180px;");
    ah14c5.setAttribute("style", "height:240px;");
    ah14c5.setAttribute("style", "padding:10px");
    document
      .getElementById("btn5")
      .removeEventListener("click", Fourteenhand14Choose2C5);
    let GetHideBtn14 = document.getElementById("getBtn14");
    GetHideBtn14.style.display = "none";
  } else if (collection6.length < 3) {
    collection6.push(hand14[4]);
    collection.push(hand14[4]);

    document.getElementById("collectionAnchor28");
    let ah13c5 = document.createElement("img");
    ah13c5.src = `cardGameImages/${hand14[4].suit}${hand14[4].value}.png`;
    collectionAnchor28.appendChild(ah13c5);
    ah13c5.setAttribute("style", "width:180px;");
    ah13c5.setAttribute("style", "height:240px;");
    ah13c5.setAttribute("style", "padding:10px");
    document
      .getElementById("btn5")
      .removeEventListener("click", Thirteenhand13Choose2C5);
    let showConfirm = document.getElementById("confirmButton");
    showConfirm.style.display = "inline-block";
    let handTakeAway = document.getElementById("handAnchor");
    let buttonsHandTakeAway = document.getElementById("buttonsAnchor");
    let roundHandTakeAway = document.getElementById("round");

    while (handTakeAway.firstChild) {
      handTakeAway.removeChild(handTakeAway.firstChild);
    }

    while (buttonsHandTakeAway.firstChild) {
      buttonsHandTakeAway.removeChild(buttonsHandTakeAway.firstChild);
    }

    while (roundHandTakeAway.firstChild) {
      roundHandTakeAway.removeChild(roundHandTakeAway.firstChild);
    }

    let scoreShowLabel = document.getElementById("scoreLabel");
    scoreShowLabel.style.display = "inline-block";

    let scoreShow = document.getElementById("score");
    scoreShow.style.display = "inline-block";

    let hideGoToEval = document.getElementById("confirmButton");
    hideGoToEval.style.display = "inline-block";
  } else {
  }
}


function getValue1() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor1");
    valuesTest1.push("0");
    valuesTest1.push(collection[0]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor1");
    valuesTest2.push("0");
    valuesTest2.push(collection[0]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue2() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor2");
    valuesTest1.push("1");
    valuesTest1.push(collection[1]);

    //document.getElementById("card1Sel").style.backgroundColor="red";
    //document.body.style.backgroundColor="red";
    // btnColor.style.backgroundColor="red";
    //.style.text="white";
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor2");
    valuesTest2.push("1");
    valuesTest2.push(collection[1]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue3() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor3");
    valuesTest1.push("2");
    valuesTest1.push(collection[2]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor3");
    valuesTest2.push("2");
    valuesTest2.push(collection[2]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue4() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor4");
    valuesTest1.push("3");
    valuesTest1.push(collection[3]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor4");
    valuesTest2.push("3");
    valuesTest2.push(collection[3]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue5() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor5");
    valuesTest1.push("4");
    valuesTest1.push(collection[4]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor5");
    valuesTest2.push("4");
    valuesTest2.push(collection[4]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue6() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor6");
    valuesTest1.push("5");
    valuesTest1.push(collection[5]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor6");
    valuesTest2.push("5");
    valuesTest2.push(collection[5]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue7() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor7");
    valuesTest1.push("6");
    valuesTest1.push(collection[6]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor7");
    valuesTest2.push("6");
    valuesTest2.push(collection[6]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue8() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor8");
    valuesTest1.push("7");
    valuesTest1.push(collection[7]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor8");
    valuesTest2.push("7");
    valuesTest2.push(collection[7]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest1.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue9() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor9");
    valuesTest1.push("8");
    valuesTest1.push(collection[8]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor9");
    valuesTest2.push("8");
    valuesTest2.push(collection[8]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest1.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue10() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor10");
    valuesTest1.push("9");
    valuesTest1.push(collection[9]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor10");
    valuesTest2.push("9");
    valuesTest2.push(collection[9]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest1.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue11() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor11");
    valuesTest1.push("10");
    valuesTest1.push(collection[10]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor11");
    valuesTest2.push("10");
    valuesTest2.push(collection[10]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest1.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue12() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor12");
    valuesTest1.push("11");
    valuesTest1.push(collection[11]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor12");
    valuesTest2.push("11");
    valuesTest2.push(collection[11]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest1.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue13() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor13");
    valuesTest1.push("12");
    valuesTest1.push(collection[12]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor13");
    valuesTest2.push("12");
    valuesTest2.push(collection[12]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest1.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue14() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor14");
    valuesTest1.push("13");
    valuesTest1.push(collection[13]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor14");
    valuesTest2.push("13");
    valuesTest2.push(collection[13]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue15() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor15");
    valuesTest1.push("14");
    valuesTest1.push(collection[14]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor15");
    valuesTest2.push("14");
    valuesTest2.push(collection[14]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue16() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor16");
    valuesTest1.push("15");
    valuesTest1.push(collection[15]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor16");
    valuesTest2.push("15");
    valuesTest2.push(collection[15]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue17() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor17");
    valuesTest1.push("16");
    valuesTest1.push(collection[16]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor17");
    valuesTest2.push("16");
    valuesTest2.push(collection[16]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue18() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor18");
    valuesTest1.push("17");
    valuesTest1.push(collection[17]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor18");
    valuesTest2.push("17");
    valuesTest2.push(collection[17]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue19() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor19");
    valuesTest1.push("18");
    valuesTest1.push(collection[18]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor19");
    valuesTest2.push("18");
    valuesTest2.push(collection[18]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue20() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor20");
    valuesTest1.push("19");
    valuesTest1.push(collection[19]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor20");
    valuesTest2.push("19");
    valuesTest2.push(collection[19]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue21() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor21");
    valuesTest1.push("20");
    valuesTest1.push(collection[20]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor21");
    valuesTest2.push("20");
    valuesTest2.push(collection[20]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue22() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor22");
    valuesTest1.push("21");
    valuesTest1.push(collection[21]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor22");
    valuesTest2.push("21");
    valuesTest2.push(collection[21]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue23() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor23");
    valuesTest1.push("22");
    valuesTest1.push(collection[22]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor23");
    valuesTest2.push("22");
    valuesTest2.push(collection[22]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue24() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor24");
    valuesTest1.push("23");
    valuesTest1.push(collection[23]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor24");
    valuesTest2.push("23");
    valuesTest2.push(collection[23]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue25() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor25");
    valuesTest1.push("24");
    valuesTest1.push(collection[24]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor25");
    valuesTest2.push("24");
    valuesTest2.push(collection[24]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue26() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor26");
    valuesTest1.push("25");
    valuesTest1.push(collection[25]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor26");
    valuesTest2.push("25");
    valuesTest2.push(collection[25]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue27() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor27");
    valuesTest1.push("26");
    valuesTest1.push(collection[26]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor27");
    valuesTest2.push("26");
    valuesTest2.push(collection[26]);
  } else {
  }
  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue28() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor28");
    valuesTest1.push("27");
    valuesTest1.push(collection[27]);
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor28");
    valuesTest2.push("27");
    valuesTest2.push(collection[27]);
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest2.length > 1) {
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function makeSwitchCards() {
  takeAway();
  switchAdd();
  switchCollection();
  resetSwap();
}

function takeAway() {
  if (valuesTest1[0] === valuesTest2[0]) {
  } else {
    newSwitchA = document.getElementById(valuesTest1[0]);
    newSwitchA.removeChild(newSwitchA.lastElementChild);
    newSwitchB = document.getElementById(valuesTest2[0]);
    newSwitchB.removeChild(newSwitchB.lastElementChild);
  }
}

function switchAdd() {
  if (valuesTest1[0] === valuesTest2[0]) {
  } else {
    let addVar = document.getElementById(valuesTest1[0]);
    let newSwitchAdd1 = document.createElement("img");
    newSwitchAdd1.src = `cardGameImages/${valuesTest2[2].suit}${valuesTest2[2].value}.png`;
    addVar.appendChild(newSwitchAdd1);

    let addVar2 = document.getElementById(valuesTest2[0]);
    let newSwitchAdd2 = document.createElement("img");
    newSwitchAdd2.src = `cardGameImages/${valuesTest1[2].suit}${valuesTest1[2].value}.png`;
    addVar2.appendChild(newSwitchAdd2);
  }
}

function switchCollection() {
  if (valuesTest1 === valuesTest2) {
  } else {
    let temp = collection[valuesTest2[1]];
    collection[valuesTest2[1]] = collection[valuesTest1[1]];
    collection[valuesTest1[1]] = temp;
  }
}

function resetSwap() {
  valuesTest1.pop();
  valuesTest1.pop();
  valuesTest1.pop();
  valuesTest2.pop();
  valuesTest2.pop();
  valuesTest2.pop();
  let takeAway1 = document.getElementById("reset");
  takeAway1.style.display = "none";
  let takeAway2 = document.getElementById("makeSwitch");
  takeAway2.style.display = "none";
}

/*function goToConfirmation(){

    let handTakeAway=document.getElementById("handAnchor");
    let buttonsHandTakeAway=document.getElementById("buttonsAnchor");
    let roundHandTakeAway=document.getElementById("round");


    while(handTakeAway.firstChild){
        handTakeAway.removeChild(handTakeAway.firstChild);
    }

    while(buttonsHandTakeAway.firstChild){
        buttonsHandTakeAway.removeChild(buttonsHandTakeAway.firstChild);
    }

    while(roundHandTakeAway.firstChild){
        roundHandTakeAway.removeChild(roundHandTakeAway.firstChild);
    }

    let scoreShowLabel=document.getElementById("scoreLabel");
    scoreShowLabel.style.display="inline-block";

    let scoreShow=document.getElementById("score");
    scoreShow.style.display="inline-block";

    let hideGoToEval=document.getElementById("confirm");
    hideGoToEval.style.display="inline-block";

   

 
}*/

function goToConfirmation() {
  document.getElementById("click1").removeEventListener("click", getValue1);
  document.getElementById("click2").removeEventListener("click", getValue2);
  document.getElementById("click3").removeEventListener("click", getValue3);
  document.getElementById("click4").removeEventListener("click", getValue4);
  document.getElementById("click5").removeEventListener("click", getValue5);
  document.getElementById("click6").removeEventListener("click", getValue6);
  document.getElementById("click7").removeEventListener("click", getValue7);
  document.getElementById("click8").removeEventListener("click", getValue8);
  document.getElementById("click9").removeEventListener("click", getValue9);
  document.getElementById("click10").removeEventListener("click", getValue10);
  document.getElementById("click11").removeEventListener("click", getValue11);
  document.getElementById("click12").removeEventListener("click", getValue12);
  document.getElementById("click13").removeEventListener("click", getValue13);
  document.getElementById("click14").removeEventListener("click", getValue14);
  document.getElementById("click15").removeEventListener("click", getValue15);
  document.getElementById("click16").removeEventListener("click", getValue16);
  document.getElementById("click17").removeEventListener("click", getValue17);
  document.getElementById("click18").removeEventListener("click", getValue18);
  document.getElementById("click19").removeEventListener("click", getValue19);
  document.getElementById("click20").removeEventListener("click", getValue20);
  document.getElementById("click21").removeEventListener("click", getValue21);
  document.getElementById("click22").removeEventListener("click", getValue22);
  document.getElementById("click23").removeEventListener("click", getValue23);
  document.getElementById("click24").removeEventListener("click", getValue24);
  document.getElementById("click25").removeEventListener("click", getValue25);
  document.getElementById("click26").removeEventListener("click", getValue26);
  document.getElementById("click27").removeEventListener("click", getValue27);
  document.getElementById("click28").removeEventListener("click", getValue28);

  //let evalHandS=document.getElementById("handEvaluation");
  // evalHandS.style.display="inline-block";

  // let evalBonusesS=document.getElementById("bonusEvaluation");
  // evalBonusesS.style.display="inline-block";

  let hideConfirm = document.getElementById("confirmButton");
  hideConfirm.style.display = "none";

  let F1Show = document.getElementById("FinalEvaluation1");
  F1Show.style.display = "inline-block";

  let F2Show = document.getElementById("FinalEvaluation2");
  F2Show.style.display = "inline-block";

  let F3Show = document.getElementById("FinalEvaluation3");
  F3Show.style.display = "inline-block";

  let F4Show = document.getElementById("FinalEvaluation4");
  F4Show.style.display = "inline-block";

  let F5Show = document.getElementById("FinalEvaluation5");
  F5Show.style.display = "inline-block";

  //let threeShow=document.getElementById("3Evaluation");
  //threeShow.style.display="inline-block";

  let BonusesShow = document.getElementById("BonusEvaluation");
  BonusesShow.style.display = "inline-block";

  let Add = document.getElementById("AddItUp");
  Add.style.display = "inline-block";

  evaluateSet1.push(collection[0]);
  evaluateSet1.push(collection[1]);
  evaluateSet1.push(collection[2]);
  evaluateSet1.push(collection[3]);
  evaluateSet1.push(collection[4]);
  console.log(evaluateSet1);

  evaluateSet2.push(collection[5]);
  evaluateSet2.push(collection[6]);
  evaluateSet2.push(collection[7]);
  evaluateSet2.push(collection[8]);
  evaluateSet2.push(collection[9]);
  console.log(evaluateSet2);

  evaluateSet3.push(collection[10]);
  evaluateSet3.push(collection[11]);
  evaluateSet3.push(collection[12]);
  evaluateSet3.push(collection[13]);
  evaluateSet3.push(collection[14]);
  console.log(evaluateSet3);

  evaluateSet4.push(collection[15]);
  evaluateSet4.push(collection[16]);
  evaluateSet4.push(collection[17]);
  evaluateSet4.push(collection[18]);
  evaluateSet4.push(collection[19]);
  console.log(evaluateSet4);

  evaluateSet5.push(collection[20]);
  evaluateSet5.push(collection[21]);
  evaluateSet5.push(collection[22]);
  evaluateSet5.push(collection[23]);
  evaluateSet5.push(collection[24]);
  console.log(evaluateSet5);

  end3.push(collection[25]);
  end3.push(collection[26]);

  end3.push(collection[27]);
}

function OneSetEvaluate() {
  //let flushSuccess=[];
  CheckClubs = evaluateSet1.filter((item) => item.suit === "Clubs");
  if (CheckClubs.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  CheckDiamonds = evaluateSet1.filter((item) => item.suit === "Diamonds");
  if (CheckDiamonds.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  CheckSpades = evaluateSet1.filter((item) => item.suit === "Spades");
  if (CheckSpades.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  CheckHearts = evaluateSet1.filter((item) => item.suit === "Hearts");
  if (CheckHearts.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  CheckSwords = evaluateSet1.filter((item) => item.suit === "Swords");
  if (CheckSwords.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  CheckSkulls = evaluateSet1.filter((item) => item.suit === "Skulls");
  if (CheckSkulls.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  Check2 = evaluateSet1.filter((item) => item.value === 2);
  if (Check2.length === 2) {
    Pair1.push("Pair1");
  } else if (Check2.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check2.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check3 = evaluateSet1.filter((item) => item.value === 3);
  if (Check3.length === 2) {
    Pair1.push("Pair1");
  } else if (Check3.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check3.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check4 = evaluateSet1.filter((item) => item.value === 4);
  if (Check4.length === 2) {
    Pair1.push("Pair1");
  } else if (Check4.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check4.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check5 = evaluateSet1.filter((item) => item.value === 5);
  if (Check5.length === 2) {
    Pair1.push("Pair1");
  } else if (Check5.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check5.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check6 = evaluateSet1.filter((item) => item.value === 6);
  if (Check6.length === 2) {
    Pair1.push("Pair1");
  } else if (Check6.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check6.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check7 = evaluateSet1.filter((item) => item.value === 7);
  if (Check7.length === 2) {
    Pair1.push("Pair1");
  } else if (Check7.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check7.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check8 = evaluateSet1.filter((item) => item.value === 8);
  if (Check8.length === 2) {
    Pair1.push("Pair1");
  } else if (Check8.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check8.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check9 = evaluateSet1.filter((item) => item.value === 7);
  if (Check9.length === 2) {
    Pair1.push("Pair1");
  } else if (Check9.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check9.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check10 = evaluateSet1.filter((item) => item.value === 10);
  if (Check10.length === 2) {
    Pair1.push("Pair1");
  } else if (Check10.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check10.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check11 = evaluateSet1.filter((item) => item.value === 11);
  if (Check11.length === 2) {
    Pair1.push("Pair1");
  } else if (Check11.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check11.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check12 = evaluateSet1.filter((item) => item.value === 12);
  if (Check12.length === 2) {
    Pair1.push("Pair1");
  } else if (Check12.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check12.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check13 = evaluateSet1.filter((item) => item.value === 13);
  if (Check13.length === 2) {
    Pair1.push("Pair1");
  } else if (Check13.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check13.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  Check14 = evaluateSet1.filter((item) => item.value === 14);
  if (Check14.length === 2) {
    Pair1.push("Pair1");
  } else if (Check14.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check14.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  CheckVF = [];

  let Royal = [];
  for (i = 0; i < evaluateSet1.length; i++) {
    if (evaluateSet1.value === 10) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet1.value === 11) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet1.value === 12) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet1.value === 13) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet1.value === 14) {
      Royal.push("success");
    } else {
    }
    if (Royal.length === 5) {
      Royal1.push("Royal");
    } else {
    }
  }

  if (
    evaluateSet1[1].value === evaluateSet1[0].value + 1 &&
    evaluateSet1[2].value === evaluateSet1[1].value + 1 &&
    evaluateSet1[3].value === evaluateSet1[2].value + 1 &&
    evaluateSet1[4].value === evaluateSet1[3].value + 1
  ) {
    Straight1.push("Straight");
  } else {
  }

  console.log("Pair1");

  console.log(Pair1);
}

function TwoSetEvaluate() {
  //let flushSuccess=[];
  CheckClubs = evaluateSet2.filter((item) => item.suit === "Clubs");
  if (CheckClubs.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  CheckDiamonds = evaluateSet2.filter((item) => item.suit === "Diamonds");
  if (CheckDiamonds.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  CheckSpades = evaluateSet2.filter((item) => item.suit === "Spades");
  if (CheckSpades.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  CheckHearts = evaluateSet2.filter((item) => item.suit === "Hearts");
  if (CheckHearts.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  CheckSwords = evaluateSet2.filter((item) => item.suit === "Swords");
  if (CheckSwords.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  CheckSkulls = evaluateSet2.filter((item) => item.suit === "Skulls");
  if (CheckSkulls.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  Check2 = evaluateSet2.filter((item) => item.value === 2);
  if (Check2.length === 2) {
    Pair2.push("Pair1");
  } else if (Check2.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check2.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check3 = evaluateSet2.filter((item) => item.value === 3);
  if (Check3.length === 2) {
    Pair2.push("Pair1");
  } else if (Check3.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check3.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check4 = evaluateSet2.filter((item) => item.value === 4);
  if (Check4.length === 2) {
    Pair2.push("Pair1");
  } else if (Check4.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check4.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check5 = evaluateSet2.filter((item) => item.value === 5);
  if (Check5.length === 2) {
    Pair2.push("Pair1");
  } else if (Check5.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check5.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check6 = evaluateSet2.filter((item) => item.value === 6);
  if (Check6.length === 2) {
    Pair2.push("Pair1");
  } else if (Check6.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check6.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check7 = evaluateSet2.filter((item) => item.value === 7);
  if (Check7.length === 2) {
    Pair2.push("Pair1");
  } else if (Check7.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check7.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check8 = evaluateSet2.filter((item) => item.value === 8);
  if (Check8.length === 2) {
    Pair2.push("Pair1");
  } else if (Check8.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check8.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check9 = evaluateSet2.filter((item) => item.value === 7);
  if (Check9.length === 2) {
    Pair2.push("Pair1");
  } else if (Check9.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check9.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check10 = evaluateSet2.filter((item) => item.value === 10);
  if (Check10.length === 2) {
    Pair2.push("Pair1");
  } else if (Check10.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check10.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check11 = evaluateSet2.filter((item) => item.value === 11);
  if (Check11.length === 2) {
    Pair2.push("Pair1");
  } else if (Check11.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check11.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check12 = evaluateSet2.filter((item) => item.value === 12);
  if (Check12.length === 2) {
    Pair2.push("Pair1");
  } else if (Check12.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check12.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check13 = evaluateSet2.filter((item) => item.value === 13);
  if (Check13.length === 2) {
    Pair2.push("Pair1");
  } else if (Check13.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check13.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  Check14 = evaluateSet2.filter((item) => item.value === 14);
  if (Check14.length === 2) {
    Pair2.push("Pair1");
  } else if (Check14.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check14.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  CheckVF = [];

  let Royal = [];
  for (i = 0; i < evaluateSet2.length; i++) {
    if (evaluateSet2.value === 10) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet2.value === 11) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet2.value === 12) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet2.value === 13) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet2.value === 14) {
      Royal.push("success");
    } else {
    }
    if (Royal.length === 5) {
      evaluateSet2.push("Royal");
    } else {
    }
  }

  if (
    evaluateSet2[1].value === evaluateSet2[0].value + 1 &&
    evaluateSet2[2].value === evaluateSet2[1].value + 1 &&
    evaluateSet2[3].value === evaluateSet2[2].value + 1 &&
    evaluateSet2[4].value === evaluateSet2[3].value + 1
  ) {
    Straight2.push("Straight");
  } else {
  }
  console.log("222222");
  console.log(Flush2);
}

function ThreeSetEvaluate() {
  //let flushSuccess=[];
  CheckClubs = evaluateSet3.filter((item) => item.suit === "Clubs");
  if (CheckClubs.length === 5) {
    Flush3.push("Flush");
  }

  CheckDiamonds = evaluateSet3.filter((item) => item.suit === "Diamonds");
  if (CheckDiamonds.length === 5) {
    Flush3.push("Flush");
  }

  CheckSpades = evaluateSet3.filter((item) => item.suit === "Spades");
  if (CheckSpades.length === 5) {
    Flush3.push("Flush");
  }

  CheckHearts = evaluateSet3.filter((item) => item.suit === "Hearts");
  if (CheckHearts.length === 5) {
    Flush3.push("Flush");
  }

  CheckSwords = evaluateSet3.filter((item) => item.suit === "Swords");
  if (CheckSwords.length === 5) {
    Flush3.push("Flush");
  }

  CheckSkulls = evaluateSet3.filter((item) => item.suit === "Skulls");
  if (CheckSkulls.length === 5) {
    Flush3.push("Flush");
  }

  Check2 = evaluateSet3.filter((item) => item.value === 2);
  if (Check2.length === 2) {
    Pair3.push("Pair1");
  } else if (Check2.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check2.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check3 = evaluateSet3.filter((item) => item.value === 3);
  if (Check3.length === 2) {
    Pair3.push("Pair1");
  } else if (Check3.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check3.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check4 = evaluateSet3.filter((item) => item.value === 4);
  if (Check4.length === 2) {
    Pair3.push("Pair1");
  } else if (Check4.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check4.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check5 = evaluateSet3.filter((item) => item.value === 5);
  if (Check5.length === 2) {
    Pair3.push("Pair1");
  } else if (Check5.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check5.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check6 = evaluateSet3.filter((item) => item.value === 6);
  if (Check6.length === 2) {
    Pair3.push("Pair1");
  } else if (Check6.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check6.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check7 = evaluateSet3.filter((item) => item.value === 7);
  if (Check7.length === 2) {
    Pair3.push("Pair1");
  } else if (Check7.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check7.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check8 = evaluateSet3.filter((item) => item.value === 8);
  if (Check8.length === 2) {
    Pair3.push("Pair1");
  } else if (Check8.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check8.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check9 = evaluateSet3.filter((item) => item.value === 7);
  if (Check9.length === 2) {
    Pair3.push("Pair1");
  } else if (Check9.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check9.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check10 = evaluateSet3.filter((item) => item.value === 10);
  if (Check10.length === 2) {
    Pair3.push("Pair1");
  } else if (Check10.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check10.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check11 = evaluateSet3.filter((item) => item.value === 11);
  if (Check11.length === 2) {
    Pair3.push("Pair1");
  } else if (Check11.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check11.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check12 = evaluateSet3.filter((item) => item.value === 12);
  if (Check12.length === 2) {
    Pair3.push("Pair1");
  } else if (Check12.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check12.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check13 = evaluateSet3.filter((item) => item.value === 13);
  if (Check13.length === 2) {
    Pair3.push("Pair1");
  } else if (Check13.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check13.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  Check14 = evaluateSet3.filter((item) => item.value === 14);
  if (Check14.length === 2) {
    Pair3.push("Pair1");
  } else if (Check14.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check14.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  CheckVF = [];

  let Royal = [];
  for (i = 0; i < evaluateSet3.length; i++) {
    if (evaluateSet3.value === 10) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet3.value === 11) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet3.value === 12) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet3.value === 13) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet3.value === 14) {
      Royal.push("success");
    } else {
    }
    if (Royal.length === 5) {
      evaluateSet2.push("Royal");
    } else {
    }
  }

  if (
    evaluateSet3[1].value === evaluateSet3[0].value + 1 &&
    evaluateSet3[2].value === evaluateSet3[1].value + 1 &&
    evaluateSet3[3].value === evaluateSet3[2].value + 1 &&
    evaluateSet3[4].value === evaluateSet3[3].value + 1
  ) {
    Straight3.push("Straight");
  } else {
  }

  console.log("3333333333");
  console.log(Pair3);
}

function FourSetEvaluate() {
  //let flushSuccess=[];
  CheckClubs = evaluateSet4.filter((item) => item.suit === "Clubs");
  if (CheckClubs.length === 5) {
    Flush4.push("Flush");
  }

  CheckDiamonds = evaluateSet4.filter((item) => item.suit === "Diamonds");
  if (CheckDiamonds.length === 5) {
    Flush4.push("Flush");
  }

  CheckSpades = evaluateSet4.filter((item) => item.suit === "Spades");
  if (CheckSpades.length === 5) {
    Flush4.push("Flush");
  }

  CheckHearts = evaluateSet4.filter((item) => item.suit === "Hearts");
  if (CheckHearts.length === 5) {
    Flush4.push("Flush");
  }

  CheckSwords = evaluateSet4.filter((item) => item.suit === "Swords");
  if (CheckSwords.length === 5) {
    Flush4.push("Flush");
  }

  CheckSkulls = evaluateSet4.filter((item) => item.suit === "Skulls");
  if (CheckSkulls.length === 5) {
    Flush4.push("Flush");
  }

  Check2 = evaluateSet4.filter((item) => item.value === 2);
  if (Check2.length === 2) {
    Pair4.push("Pair1");
  } else if (Check2.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check2.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check3 = evaluateSet4.filter((item) => item.value === 3);
  if (Check3.length === 2) {
    Pair4.push("Pair1");
  } else if (Check3.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check3.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check4 = evaluateSet4.filter((item) => item.value === 4);
  if (Check4.length === 2) {
    Pair4.push("Pair1");
  } else if (Check4.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check4.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check5 = evaluateSet4.filter((item) => item.value === 5);
  if (Check5.length === 2) {
    Pair4.push("Pair1");
  } else if (Check5.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check5.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check6 = evaluateSet4.filter((item) => item.value === 6);
  if (Check6.length === 2) {
    Pair4.push("Pair1");
  } else if (Check6.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check6.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check7 = evaluateSet4.filter((item) => item.value === 7);
  if (Check7.length === 2) {
    Pair4.push("Pair1");
  } else if (Check7.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check7.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check8 = evaluateSet4.filter((item) => item.value === 8);
  if (Check8.length === 2) {
    Pair4.push("Pair1");
  } else if (Check8.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check8.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check9 = evaluateSet4.filter((item) => item.value === 7);
  if (Check9.length === 2) {
    Pair4.push("Pair1");
  } else if (Check9.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check9.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check10 = evaluateSet4.filter((item) => item.value === 10);
  if (Check10.length === 2) {
    Pair4.push("Pair1");
  } else if (Check10.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check10.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check11 = evaluateSet4.filter((item) => item.value === 11);
  if (Check11.length === 2) {
    Pair4.push("Pair1");
  } else if (Check11.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check11.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check12 = evaluateSet4.filter((item) => item.value === 12);
  if (Check12.length === 2) {
    Pair4.push("Pair1");
  } else if (Check12.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check12.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check13 = evaluateSet4.filter((item) => item.value === 13);
  if (Check13.length === 2) {
    Pair4.push("Pair1");
  } else if (Check13.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check13.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  Check14 = evaluateSet4.filter((item) => item.value === 14);
  if (Check14.length === 2) {
    Pair4.push("Pair1");
  } else if (Check14.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check14.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  CheckVF = [];

  let Royal = [];
  for (i = 0; i < evaluateSet4.length; i++) {
    if (evaluateSet4.value === 10) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet4.value === 11) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet4.value === 12) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet4.value === 13) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet4.value === 14) {
      Royal.push("success");
    } else {
    }
    if (Royal.length === 5) {
      evaluateSet2.push("Royal");
    } else {
    }
  }

  if (
    evaluateSet4[1].value === evaluateSet4[0].value + 1 &&
    evaluateSet4[2].value === evaluateSet4[1].value + 1 &&
    evaluateSet4[3].value === evaluateSet4[2].value + 1 &&
    evaluateSet4[4].value === evaluateSet4[3].value + 1
  ) {
    Straight4.push("Straight");
  } else {
  }

  console.log("44444444");
  console.log(Pair4);
}

function FiveSetEvaluate() {
  //let flushSuccess=[];
  CheckClubs = evaluateSet5.filter((item) => item.suit === "Clubs");
  if (CheckClubs.length === 5) {
    Flush4.push("Flush");
  }

  CheckDiamonds = evaluateSet5.filter((item) => item.suit === "Diamonds");
  if (CheckDiamonds.length === 5) {
    Flush4.push("Flush");
  }

  CheckSpades = evaluateSet5.filter((item) => item.suit === "Spades");
  if (CheckSpades.length === 5) {
    Flush4.push("Flush");
  }

  CheckHearts = evaluateSet5.filter((item) => item.suit === "Hearts");
  if (CheckHearts.length === 5) {
    Flush4.push("Flush");
  }

  CheckSwords = evaluateSet5.filter((item) => item.suit === "Swords");
  if (CheckSwords.length === 5) {
    Flush4.push("Flush");
  }

  CheckSkulls = evaluateSet5.filter((item) => item.suit === "Skulls");
  if (CheckSkulls.length === 5) {
    Flush4.push("Flush");
  }

  Check2 = evaluateSet5.filter((item) => item.value === 2);
  if (Check2.length === 2) {
    Pair5.push("Pair1");
  } else if (Check2.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check2.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check3 = evaluateSet5.filter((item) => item.value === 3);
  if (Check3.length === 2) {
    Pair5.push("Pair1");
  } else if (Check3.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check3.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check4 = evaluateSet5.filter((item) => item.value === 4);
  if (Check4.length === 2) {
    Pair5.push("Pair1");
  } else if (Check4.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check4.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check5 = evaluateSet5.filter((item) => item.value === 5);
  if (Check5.length === 2) {
    Pair5.push("Pair1");
  } else if (Check5.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check5.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check6 = evaluateSet5.filter((item) => item.value === 6);
  if (Check6.length === 2) {
    Pair5.push("Pair1");
  } else if (Check6.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check6.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check7 = evaluateSet5.filter((item) => item.value === 7);
  if (Check7.length === 2) {
    Pair5.push("Pair1");
  } else if (Check7.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check7.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check8 = evaluateSet5.filter((item) => item.value === 8);
  if (Check8.length === 2) {
    Pair5.push("Pair1");
  } else if (Check8.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check8.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check9 = evaluateSet5.filter((item) => item.value === 7);
  if (Check9.length === 2) {
    Pair5.push("Pair1");
  } else if (Check9.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check9.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check10 = evaluateSet5.filter((item) => item.value === 10);
  if (Check10.length === 2) {
    Pair5.push("Pair1");
  } else if (Check10.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check10.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check11 = evaluateSet5.filter((item) => item.value === 11);
  if (Check11.length === 2) {
    Pair5.push("Pair1");
  } else if (Check11.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check11.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check12 = evaluateSet5.filter((item) => item.value === 12);
  if (Check12.length === 2) {
    Pair5.push("Pair1");
  } else if (Check12.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check12.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check13 = evaluateSet5.filter((item) => item.value === 13);
  if (Check13.length === 2) {
    Pair5.push("Pair1");
  } else if (Check13.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check13.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  Check14 = evaluateSet5.filter((item) => item.value === 14);
  if (Check14.length === 2) {
    Pair5.push("Pair1");
  } else if (Check14.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check14.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  CheckVF = [];

  let Royal = [];
  for (i = 0; i < evaluateSet5.length; i++) {
    if (evaluateSet5.value === 10) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet5.value === 11) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet5.value === 12) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet5.value === 13) {
      Royal.push("success");
    } else {
    }
    if (evaluateSet5.value === 14) {
      Royal.push("success");
    } else {
    }
    if (Royal.length === 5) {
      Royal5.push("Royal");
    } else {
    }
  }

  if (
    evaluateSet5[1].value === evaluateSet5[0].value + 1 &&
    evaluateSet5[2].value === evaluateSet5[1].value + 1 &&
    evaluateSet5[3].value === evaluateSet5[2].value + 1 &&
    evaluateSet5[4].value === evaluateSet5[3].value + 1
  ) {
    Straight5.push("Straight");
  } else {
  }

  console.log("555555555");
  console.log(Pair5);
}

function BonusChoices() {
  let AllNew = evaluateSet1
    .concat(evaluateSet2)
    .concat(evaluateSet3)
    .concat(evaluateSet4)
    .concat(evaluateSet5)
    .concat(end3);
  console.log("stats");

  let filter11 = AllNew.filter((item) => item.value === 11);
  if (filter11.length === 6) {
    finalCountBonuses.push("Jack");
  } else {
    finalCountBonuses.push("Fail");
  }

  let filter12 = AllNew.filter((item) => item.value === 12);
  if (filter12.length === 6) {
    finalCountBonuses.push("Queen");
  } else {
    finalCountBonuses.push("Fail");
  }

  let filter13 = AllNew.filter((item) => item.value === 13);
  if (filter13.length === 6) {
    finalCountBonuses.push("King");
  } else {
    finalCountBonuses.push("Fail");
  }

  let filter14 = AllNew.filter((item) => item.value === 14);
  if (filter14.length === 6) {
    finalCountBonuses.push("Ace");
  } else {
    finalCountBonuses.push("Fail");
  }

  console.log(finalCountBonuses);
  console.log(AllNew);
  console.log(filter11);
  console.log(filter12);
  console.log(filter13);
  console.log(filter14);
}

function EvaluateHands() {
  if (Royal1.length === 5 && Flush1.length === 1) {
    score.push(80);
  } else if (Straight1.length === 1 && Flush1.length == 1) {
    score.push(60);
  } else if (FourKind1.length === 1) {
    score.push(50);
  } else if (ThreeKind1.length === 1 && Pair1.length === 1) {
    score.push(40);
  } else if (Flush1.length === 1) {
    score.push(35);
  } else if (Straight1.length === 1) {
    score.push(30);
  } else if (ThreeKind1.length === 1) {
    score.push(25);
  } else if (Pair1.length === 2) {
    score.push(15);
  } else if (Pair1.length === 1) {
    score.push(10);
  } else {
    score.push(0);
  }

  if (Royal2.length === 5 && Flush2.length === 1) {
    score.push(80);
  } else if (Straight2.length === 1 && Flush2.length == 1) {
    score.push(60);
  } else if (FourKind2.length === 1) {
    score.push(50);
  } else if (ThreeKind2.length === 1 && Pair2.length === 1) {
    score.push(40);
  } else if (Flush2.length === 1) {
    score.push(35);
  } else if (Straight2.length === 1) {
    score.push(30);
  } else if (ThreeKind2.length === 1) {
    score.push(25);
  } else if (Pair2.length === 2) {
    score.push(15);
  } else if (Pair2.length === 1) {
    score.push(10);
  } else {
    score.push(0);
  }

  if (Royal3.length === 5 && Flush3.length === 1) {
    score.push(80);
  } else if (Straight3.length === 1 && Flush3.length == 1) {
    score.push(60);
  } else if (FourKind3.length === 1) {
    score.push(50);
  } else if (ThreeKind3.length === 1 && Pair3.length === 1) {
    score.push(40);
  } else if (Flush3.length === 1) {
    score.push(35);
  } else if (Straight3.length === 1) {
    score.push(30);
  } else if (ThreeKind3.length === 1) {
    score.push(25);
  } else if (Pair3.length === 2) {
    score.push(15);
  } else if (Pair3.length === 1) {
    score.push(10);
  } else {
    score.push(0);
  }

  if (Royal4.length === 5 && Flush4.length === 1) {
    score.push(80);
  } else if (Straight4.length === 1 && Flush4.length == 1) {
    score.push(60);
  } else if (FourKind4.length === 1) {
    score.push(50);
  } else if (ThreeKind4.length === 1 && Pair4.length === 1) {
    score.push(40);
  } else if (Flush4.length === 1) {
    score.push(35);
  } else if (Straight4.length === 1) {
    score.push(30);
  } else if (ThreeKind4.length === 1) {
    score.push(25);
  } else if (Pair4.length === 2) {
    score.push(15);
  } else if (Pair4.length === 1) {
    score.push(10);
  } else {
    score.push(0);
  }

  if (Royal5.length === 5 && Flush5.length === 1) {
    score.push(80);
  } else if (Straight5.length === 1 && Flush5.length == 1) {
    score.push(60);
  } else if (FourKind5.length === 1) {
    score.push(50);
  } else if (ThreeKind5.length === 1 && Pair5.length === 1) {
    score.push(40);
  } else if (Flush5.length === 1) {
    score.push(35);
  } else if (Straight5.length === 1) {
    score.push(30);
  } else if (ThreeKind5.length === 1) {
    score.push(25);
  } else if (Pair5.length === 2) {
    score.push(15);
  } else if (Pair5.length === 1) {
    score.push(10);
  } else {
    score.push(0);
  }

  if (
    finalCountBonuses[0] === "Jack" &&
    finalCountBonuses[1] === "Queen" &&
    finalCountBonuses[2] === "King" &&
    finalCountBonuses[3] === "Ace"
  ) {
    score.push(60);
  } else if (
    finalCountBonuses[0] === "Jack" &&
    finalCountBonuses[1] === "Queen" &&
    finalCountBonuses[2] === "King"
  ) {
    score.push(50);
  } else if (
    finalCountBonuses[0] === "Jack" &&
    finalCountBonuses[1] === "Queen"
  ) {
    score.push(40);
  } else if (finalCountBonuses[0] === "Jack") {
    score.push(30);
  } else {
    score.push(0);
  }

  console.log("scores");

  console.log(score[0]);
  console.log(score[1]);
  console.log(score[2]);
  console.log(score[3]);
  console.log(score[4]);
  console.log(score[5]);

  let FinalScore =
    score[0] + score[1] + score[2] + score[3] + score[4] + score[5];
  window.alert("Your Final Score is " + FinalScore + " points");

  document.getElementById("scoreLabel").innerText = FinalScore;
}

/*



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

console.log("collection1");

console.log(collection1);

console.log("collection2");

console.log(collection2);

console.log("collection3");

console.log(collection3);

console.log("collection4");

console.log(collection4);

console.log("collection5");

console.log(collection5);

console.log("collection6");

console.log(collection6);

console.log("collection");

console.log(collection);

console.log("valuesTest1");
console.log(valuesTest1);

console.log("valuesTest2");
console.log(valuesTest2);





console.log(deck);
*/
