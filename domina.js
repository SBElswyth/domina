const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const RANKS = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
const HANDS = ['High Card', 'Pair', 'Two Pair', 'Three of a Kind', 'Straight', 'Flush', 'Full House', 'Four of a Kind', 'Straight Flush'];
const REDUCTION = [null, 4, 7, 10, 14, 18, 21, 24, null];
const DRAWS = 2;
const DRAW_INTERVAL = 3;
const HAND_SIZE = 6;

const TASKS = {
  'Clubs': {
    0: ['Easy Task A', 'Easy Task B', 'Easy Task C'],
    1: ['Normal Task A', 'Normal Task B', 'Normal Task B'],
    2: ['Tricky Task A', 'Tricky Task B', 'Tricky Task B'],
    3: ['Hard Task A', 'Hard Task B', 'Hard Task C'],
    4: ['Fiendish Task A', 'Fiendish Task B', 'Fiendish Task C'],
    'Jack': {
      'text': 'Jack Task X Text',
      'base': 1,
      'mult': 2
    },
    'Queen': {
      'text': 'Queen Task X Text',
      'base': 1,
      'mult': 2
    },
    'King': {
      'text': 'King Task X Text',
      'base': 1,
      'mult': 2
    },
    'Ace': {
      'high': 'Ace High Task Text',
      'low': 'Ace Low Task Text'
    }
  },
  'Diamonds': {
    0: ['Easy Task A', 'Easy Task B', 'Easy Task C'],
    1: ['Normal Task A', 'Normal Task B', 'Normal Task B'],
    2: ['Tricky Task A', 'Tricky Task B', 'Tricky Task B'],
    3: ['Hard Task A', 'Hard Task B', 'Hard Task C'],
    4: ['Fiendish Task A', 'Fiendish Task B', 'Fiendish Task C'],
    'Jack': {
      'text': 'Jack Task X Text',
      'base': 1,
      'mult': 2
    },
    'Queen': {
      'text': 'Queen Task X Text',
      'base': 1,
      'mult': 2
    },
    'King': {
      'text': 'King Task X Text',
      'base': 1,
      'mult': 2
    },
    'Ace': {
      'high': 'Ace High Task Text',
      'low': 'Ace Low Task Text'
    }
  },
  'Hearts': {
    0: ['Easy Task A', 'Easy Task B', 'Easy Task C'],
    1: ['Normal Task A', 'Normal Task B', 'Normal Task B'],
    2: ['Tricky Task A', 'Tricky Task B', 'Tricky Task B'],
    3: ['Hard Task A', 'Hard Task B', 'Hard Task C'],
    4: ['Fiendish Task A', 'Fiendish Task B', 'Fiendish Task C'],
    'Jack': {
      'text': 'Jack Task X Text',
      'base': 1,
      'mult': 2
    },
    'Queen': {
      'text': 'Queen Task X Text',
      'base': 1,
      'mult': 2
    },
    'King': {
      'text': 'King Task X Text',
      'base': 1,
      'mult': 2
    },
    'Ace': {
      'high': 'Ace High Task Text',
      'low': 'Ace Low Task Text'
    }
  },
  'Spades': {
    0: ['Easy Task A', 'Easy Task B', 'Easy Task C'],
    1: ['Normal Task A', 'Normal Task B', 'Normal Task B'],
    2: ['Tricky Task A', 'Tricky Task B', 'Tricky Task B'],
    3: ['Hard Task A', 'Hard Task B', 'Hard Task C'],
    4: ['Fiendish Task A', 'Fiendish Task B', 'Fiendish Task C'],
    'Jack': {
      'text': 'Jack Task X Text',
      'base': 1,
      'mult': 2
    },
    'Queen': {
      'text': 'Queen Task X Text',
      'base': 1,
      'mult': 2
    },
    'King': {
      'text': 'King Task X Text',
      'base': 1,
      'mult': 2
    },
    'Ace': {
      'high': 'Ace High Task Text',
      'low': 'Ace Low Task Text'
    }
  }
};
const DOMINAS = [
  {
    'rank': 0,
    'name': 'Domina of Thing',
    'effect': 'Reduces or Increases a Thing',
    'session': 'Session Name',
    'link': 'https://session.link.com/'
  },
  {
    'rank': 1,
    'name': 'Domina of Thing',
    'effect': 'Reduces or Increases a Thing',
    'session': 'Session Name',
    'link': 'https://session.link.com/'
  },
  {
    'rank': 2,
    'name': 'Domina of Thing',
    'effect': 'Reduces or Increases a Thing',
    'session': 'Session Name',
    'link': 'https://session.link.com/'
  },
  {
    'rank': 3,
    'name': 'Domina of Thing',
    'effect': 'Reduces or Increases a Thing',
    'session': 'Session Name',
    'link': 'https://session.link.com/'
  },
  {
    'rank': 4,
    'name': 'Domina of Thing',
    'effect': 'Reduces or Increases a Thing',
    'session': 'Session Name',
    'link': 'https://session.link.com/'
  },
  {
    'rank': 5,
    'name': 'Domina of Thing',
    'effect': 'Reduces or Increases a Thing',
    'session': 'Session Name',
    'link': 'https://session.link.com/'
  },
  {
    'rank': 6,
    'name': 'Domina of Thing',
    'effect': 'Reduces or Increases a Thing',
    'session': 'Session Name',
    'link': 'https://session.link.com/'
  },
  {
    'rank': 7,
    'name': 'Domina of Thing',
    'effect': 'Reduces or Increases a Thing',
    'session': 'Session Name',
    'link': 'https://session.link.com/'
  }
];

var testDate = null;
var testMode = false;
function advanceDate(days = 1) {
  testDate = testDate.add(days, 'day');
};

function Interface() {
  this.level_faceCardsDrawn = document.getElementById('level-faceCardsDrawn');
  this.level_days = document.getElementById('level-days');
  this.level_level = document.getElementById('level-level');

  this.draw_date = document.getElementById('draw-date');
  this.draw_days = document.getElementById('draw-days');

  this.release_date = document.getElementById('release-date');
  this.release_days = document.getElementById('release-days');

  this.deck_size = document.getElementById('deck-size');
  this.hand_container = document.getElementById('hand-container');
  this.discard_container = document.getElementById('discard-container');
  this.discard_size = document.getElementById('discard-size');

  this.dominas_container = document.getElementById('dominas-container');

  this.levelSegment = document.getElementById('level');
  this.drawSegment = document.getElementById('draw');

  this.info_heading = document.getElementById('info-heading');
  this.info_info = document.getElementById('info-info');
  this.info_button = document.getElementById('info-button');
  
  this.newGame_dialog = document.getElementById('newGame');
  this.newGame_sentence = document.getElementById('newGame-sentence');
  this.newGameConfig = {
    'sentence': 30,
    'difficulties': {
      'clubs': 0,
      'diamonds': 0,
      'hearts': 0,
      'spades': 0
    }
  };

  this.choices_dialog = document.getElementById('choices');
  this.choices_container = document.getElementById('choicesContainer');
  this.choices_heading = document.getElementById('choices-heading');
  this.choices_info = document.getElementById('choices-info');
  this.choices_selected = 0;

  this.help_dialog = document.getElementById('help');

  this.displayHelp = function() {
    this.help_dialog.showModal();
  };
  this.hideHelp = function() {
    this.help_dialog.close();
  };

  this.displayNewGame = function() {
    this.newGameConfig.sentence = 30;
    this.newGame_sentence.innerHTML = this.newGameConfig.sentence;
    this.newGame_dialog.showModal();
  };
  this.increaseSentence = function() {
    this.newGameConfig.sentence += 15;
    this.newGame_sentence.innerHTML = this.newGameConfig.sentence;
  };
  this.decreaseSentence = function() {
    if (this.newGameConfig.sentence > 15) {
      this.newGameConfig.sentence -= 15;
    }
    this.newGame_sentence.innerHTML = this.newGameConfig.sentence;
  };
  this.cancelNewGame = function() {
    this.newGame_dialog.close();
  };

  this.displayChoices = function() {
    this.choices_selected = 0;
    let choicesContainer = this.choices_container;
    while (choicesContainer.firstChild) {
      choicesContainer.removeChild(choicesContainer.lastChild);
    }
    for (var Ci = 0, Cl = game.choices.length; Ci < Cl; Ci++) {
      let cardElement = this.createCardElement(game.choices[Ci], Ci, 'choices');
      if (Ci == 0) {
        cardElement.classList.add('selected');
      }
      this.choices_container.appendChild(cardElement);
    }
    this.showChoiceSelectionInfo();
    this.choices_dialog.showModal();
  };

  this.updateLevel = function() {
    this.level_faceCardsDrawn.innerHTML = game.faceCardsDrawn;
    this.level_days.innerHTML = game.sentence;
    this.level_level.innerHTML = 1;
  };
  this.updateDraw = function(date = game.getDate()) {
    this.draw_date.innerHTML = game.drawDate.format('DD MMM'); //Needs to be today's date!
    if (date.isAfter(game.drawDate)) {
      this.draw_days.innerHTML = 'Today';
    } else {      
      this.draw_days.innerHTML = game.drawDate.diff(date.startOf('day'), 'days') + ' days';
    }
  };
  this.updateRelease = function(date = game.getDate()) {
    this.release_date.innerHTML = game.releaseDate.format('DD MMM');
    if (date.isAfter(game.releaseDate)) {
      this.release_days.innerHTML = 'Today';
    } else {
      this.release_days.innerHTML = game.releaseDate.diff(date.startOf('day'), 'days') + ' days';
    }
  };
  this.updateDeckSize = function(size) {
    this.deck_size.innerHTML = size + '/60';
  };
  this.updateDiscardSize = function(size) {
    this.discard_size.innerHTML = size;
  };

  this.getSelectedCardsInHand = function() {
    let selectedCards = [];
    for (card of this.hand_container.children) {
      if (card.classList.contains('selected')) {
        selectedCards.push(new Card(parseInt(card.dataset.suit), parseInt(card.dataset.rank)));
      }
    }
    return selectedCards;
  };
  this.getSelectedChoice = function() {
    for (card of this.choices_container.children) {
      if (card.classList.contains('selected')) {
        selectedCards.push(new Card(parseInt(card.dataset.suit), parseInt(card.dataset.rank)));
      }
    }
  };

  this.clearInfo = function() {
    while (this.info_info.firstChild) {
      this.info_info.removeChild(this.info_info.firstChild);
    }
  };
  this.getInfoLineElement = function(text, benefit = false) {
    let line = document.createElement('p');
    line.innerHTML = text;
    if (benefit) {
      line.classList.add('benefit');
    }
    return line;
  };
  this.getInfoCompleteTaskButtonElement = function(high = false) {
    let button = document.createElement('button');
    button.innerHTML = "Task Complete";
    button.dataset.high = high;
    button.addEventListener('click', game.completeTask);
    return button;
  };
  this.getInfoPlayHandButtonElement = function() {
    let button = document.createElement('button');
    button.innerHTML = "Play Hand";
    button.addEventListener('click', game.playHand);
    return button;
  };

  this.showHandSelectionInfo = function() {
    this.clearInfo();
    let selectedCards = this.getSelectedCardsInHand();
    if (selectedCards.length == 0) {
      //Nothing is selected
      //Show a tip
      this.info_heading.innerHTML = "Nothing Selected";
      this.info_info.appendChild(this.getInfoLineElement("Select one or more cards from your hand to get closer to release"));
      return;
    } else if (selectedCards.length == 1) {
      //One card selected
      //Show the task
      let card = selectedCards[0];
      this.info_heading.innerHTML = RANKS[card.rank] + " of " + SUITS[card.suit];
      if (card.rank == 12) {
        //This is an ace, so let's do something slightly different
        let aceContainer = document.createElement('div');
        aceContainer.style.display = 'flex';
        aceContainer.style.gap = '8px';
        let aceLow = document.createElement('div');
        aceLow.appendChild(this.getInfoLineElement(game.getTaskText(card.suit, 12)));
        aceLow.appendChild(this.getInfoLineElement("Reduce your sentence by " + game.getTaskBenefit(12) + " days", true));
        aceLow.appendChild(this.getInfoCompleteTaskButtonElement());
        aceContainer.append(aceLow);
        aceContainer.append(document.createElement('hr'));
        let aceHigh = document.createElement('div');
        aceHigh.appendChild(this.getInfoLineElement(game.getTaskText(card.suit, 13)));
        aceHigh.appendChild(this.getInfoLineElement("Reduce your sentence by " + game.getTaskBenefit(13) + " days", true));
        aceHigh.appendChild(this.getInfoCompleteTaskButtonElement(true));
        aceContainer.append(aceHigh);
        this.info_info.append(aceContainer);
      } else {
        this.info_info.appendChild(this.getInfoLineElement(game.getTaskText(card.suit, card.rank)));
        this.info_info.appendChild(this.getInfoLineElement("Reduce your sentence by " + game.getTaskBenefit(card.rank) + " days", true));
        this.info_info.appendChild(this.getInfoCompleteTaskButtonElement());
      }
      return;
    }
    let handRank = game.rankHand(selectedCards);
    this.info_heading.innerHTML = HANDS[handRank];
    let line = document.createElement('p');
    if (handRank > 0) {
      if (handRank == 8) {
        this.info_info.appendChild(this.getInfoLineElement("Immediate release!"));
        this.info_info.appendChild(this.getInfoLineElement("You're free, you lucky devil", true))
        //TODO: Add a button to confirm this...
        return;
      }
      this.info_info.appendChild(this.getInfoLineElement("Reduce your sentence by " + REDUCTION[handRank] + " days", true));
      this.info_info.appendChild(this.getInfoPlayHandButtonElement());

    } else {
      this.info_info.appendChild(this.getInfoLineElement("Check your cards for tasks to complete"));
      this.info_info.appendChild(this.getInfoLineElement("Hand has no effect", true));
    }
  };
  this.showChoiceSelectionInfo = function() {
    while (this.choices_info.firstChild) {
      this.choices_info.removeChild(this.choices_info.firstChild);
    }
    let card = game.choices[this.choices_selected];
    if (card.suit == 4) {
      this.choices_heading.innerHTML = DOMINAS[card.rank].name;
      this.choices_info.appendChild(this.getInfoLineElement(DOMINAS[card.rank].effect));
    } else if (card.rank == 12) {
      //This is an Ace
    } else {
      this.choices_heading.innerHTML = RANKS[card.rank] + " of " + SUITS[card.suit]
      this.choices_info.appendChild(this.getInfoLineElement(game.getTaskText(card.suit, card.rank) + ', -' + game.getTaskBenefit(card.rank) + ' days'));
    }

    this.choices_info.appendChild(this.getInfoLineElement("Remaining cards will be discarded", true));
  };
  this.showDominaSelectionInfo = function() {
    this.clearInfo();
    let selectedCard = null;
    for (card of this.dominas_container.children) {
      if (card.classList.contains('selected')) {
        selectedCard = new Card(card.dataset.suit, card.dataset.rank);
        break;
      }
    }
    if (card != null) {
      this.info_heading.innerHTML = DOMINAS[card.rank].name;
      this.info_info.appendChild(this.getInfoLineElement(DOMINAS[card.rank].effect));
    }
  };

  this.createCardElement = function(card = null, index = null, context = null) {
    let cardElement = document.createElement('img');
    cardElement.classList.add('card');
    if (card == null) {
      cardElement.classList.add('empty');
      cardElement.src = 'png/blank.png';
      return cardElement;
    } else if (card.suit == 4) {
      cardElement.src = 'png/d_' + card.rank + '.png';
    } else {
      cardElement.src = 'png/' + card.rank + '_' + card.suit + '.png';
    }
    cardElement.dataset.rank = card.rank;
    cardElement.dataset.suit = card.suit;
    cardElement.dataset.index = index;
    if (context == 'hand') {
      cardElement.addEventListener('click', function() {
        if (cardElement.classList.contains('selected')) {
          cardElement.classList.remove('selected');
        } else if (game.interface.getSelectedCardsInHand().length == 5) {
          //TODO: Need an error
          console.log('Only 5 cards can be selected');
          return;
        } else {
          cardElement.classList.add('selected');
        }
        game.interface.showHandSelectionInfo();
      });
    } else if (context == 'dominas') {
      cardElement.addEventListener('click', function() {
        for (domina of cardElement.parentElement.children) {
          domina.classList.remove('selected');
        }
        cardElement.classList.add('selected');
        game.interface.showDominaSelectionInfo();
      });
    } else if (context == 'choices') {
      cardElement.addEventListener('click', function() {
        for (choice of cardElement.parentElement.children) {
          choice.classList.remove('selected');
        }
        cardElement.classList.add('selected');
        game.interface.choices_selected = cardElement.dataset.index;
        game.interface.showChoiceSelectionInfo();
        //TODO: Need to put info on screen
      });
    }
    return cardElement;
  };
};

function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
  if (suit == 4) {
    this.active = false;
  }
};

function Game() {
  //These properties relate to where cards actually are
  this.deck;
  this.choices;
  this.hand;
  this.dominas;
  this.discardPile;

  //These properies are based on New Game choices
  this.level;
  this.sentence;

  //These properties relate to dates
  this.releaseDate;
  this.drawDate;

  //These properties relate to incremental modifiers
  this.reduction;
  this.faceCardsDrawn;

  //These properties relate to meta-progression
  this.longestSentence;
  this.maxDifficulty;
  this.completedTasks;

  this.interface = new Interface();

  this.init = function(date = this.getDate()) {
    //TODO
    //I suppose that this is where we would look for a saved game!
    //But currently this resets the game state to a default.
    this.deck = [];
    this.choices = [];
    this.hand = [];
    this.dominas = [];
    this.discardPile = [];

    this.level = 0;
    this.sentence = this.interface.newGameConfig.sentence;
    this.releaseDate = date.startOf('day').add(this.sentence, 'day');
    this.drawDate = date.startOf('day');
    this.reduction = 0;
    this.faceCardsDrawn = 0;
  };
  this.getDate = function() {
    if (testMode) {
      return testDate;
    } else {
      return dayjs();
    }
  };
  this.newGame = function() {
    let date = this.getDate();
    this.init(date);
    //Create Playing Cards
    for (var Si = 0, Sl = SUITS.length; Si < Sl; Si++) {
      for (var Ri = 0, Rl = RANKS.length; Ri < Rl; Ri++) {
        this.discardPile.push(new Card(Si, Ri));
      }
    }
    //Draw Starting Hand
    while (this.hand.length < 5) {
      let i = Math.floor(Math.random() * this.discardPile.length);
      let card = this.discardPile[i];
      if (this.discardPile[i].rank > 8 && this.discardPile[i].rank < 12) {
        this.faceCardsDrawn++;
      }
      this.hand.push(this.discardPile[i]);
      this.discardPile.splice(i, 1);
    }
    this.hand.sort(this.sortByRank);
    //Add Dominas to Deck
    for (var Di = 0, Dl = DOMINAS.length; Di < Dl; Di++) {
      this.discardPile.push(new Card(4, Di, true));
    }
    this.reshuffle();
    //Prepare interface
    this.interface.updateLevel();
    this.interface.updateDraw();
    this.interface.updateRelease();
    this.interface.updateDeckSize(this.deck.length);
    this.interface.updateDiscardSize(this.discardPile.length);
    this.displayHand();
    this.displayDiscardTop();
    this.interface.showHandSelectionInfo();
    this.interface.newGame_dialog.close();
  };

  this.getTaskText = function(suit, rank) {
    if (rank == 13) {
      //Here we get the "High" Ace task
      let task = TASKS[SUITS[suit]]['Ace'];
      return task.high;
    } else if (rank == 12) {
      let task = TASKS[SUITS[suit]]['Ace'];
      return task.low;
    } else if (rank == 11) {
      let task = TASKS[SUITS[suit]]['King'];
      return task.text.replace('X', task.base + (task.mult * this.faceCardsDrawn));
    } else if (rank == 10) {
      let task = TASKS[SUITS[suit]]['Queen'];
      return task.text.replace('X', task.base + (task.mult * this.faceCardsDrawn));
    } else if (rank == 9) {
      let task = TASKS[SUITS[suit]]['Jack'];
      return task.text.replace('X', task.base + (task.mult * this.faceCardsDrawn));
    } else if (rank > 5) {
      return TASKS[SUITS[suit]][2][rank - 6];
    } else if (rank > 2) {
      return TASKS[SUITS[suit]][1][rank - 3];
    } else {
      return TASKS[SUITS[suit]][0][rank];
    }
  };
  this.getTaskBenefit = function(rank) {
    if (rank == 13) {
      return 4;
    } else if (rank == 12) {
      return 1;
    } else if (rank > 8) {
      return 4;
    } else if (rank > 5) {
      return 3;
    } else if (rank > 2) {
      return 2;
    } else {
      return 1;
    }
  }

  this.choose = function() {
    if (this.choices[this.interface.choices_selected].suit == 4) {
      this.dominas.push(this.choices[this.interface.choices_selected]);
      this.choices.splice(this.interface.choices_selected, 1);
      this.displayDominas();
    } else {
      this.hand.push(this.choices[this.interface.choices_selected]);
      this.choices.splice(this.interface.choices_selected, 1);
      this.displayHand();
    }
    while (this.choices.length > 0) {
      this.discardPile.push(this.choices.pop());
    }
    this.interface.updateDiscardSize(this.discardPile.length);
    this.displayDiscardTop();
    this.interface.choices_dialog.close();
  };

  this.displayHand = function() {
    this.hand.sort(this.sortByRank);
    let handContainer = this.interface.hand_container;
    while (handContainer.firstChild) {
      handContainer.removeChild(handContainer.lastChild);
    }
    for (var Hi = 0, Hl = this.hand.length; Hi < Hl; Hi++) {
      handContainer.appendChild(
        this.interface.createCardElement(
        this.hand[Hi], Hi, 'hand'));
    }
  };
  this.displayDiscardTop = function() {
    let discardContainer = this.interface.discard_container;
    while (discardContainer.firstChild) {
      discardContainer.removeChild(discardContainer.lastChild);
    }
    if (this.discardPile.length == 0) {
      discardContainer.appendChild(this.interface.createCardElement());
    } else {
      discardContainer.appendChild(
        this.interface.createCardElement(
        this.discardPile[this.discardPile.length - 1]));
    }
  };

  this.displayDominas = function() {
    //this.dominas.sort(this.sortByRank);
    let dominasContainer = this.interface.dominas_container;
    while (dominasContainer.firstChild) {
      dominasContainer.removeChild(dominasContainer.lastChild);
    }
    for (var Di = 0, Dl = this.dominas.length; Di < Dl; Di++) {
      let cardElement = this.interface.createCardElement(this.dominas[Di], Di, 'dominas');
      dominasContainer.appendChild(cardElement);
    }
  }

  this.sortByRank = function(a, b) {
    if (a.rank == b.rank) {
      if (a.suit == b.suit) {
        return 0;
      }
      return game.sortBySuit(a, b); //TODO: I feel like I'm doing this wrong
    }
    return b.rank - a.rank;
  };
  this.sortBySuit = function(a, b) {
    if (a.suit == b.suit) {
      if (a.rank == b.rank) {
        return 0;
      }
      return game.sortByRank(a, b); //TODO: And I can't help that it bothers me
    }
    return b.suit - a.suit;
  };

  this.completeTask = function() {
    let selectedCard = game.interface.getSelectedCardsInHand()[0];
    /*TODO: Validation - It should be impossible to trigger this with more than
      one card selected. But we should ensure there is just one card selected!
    */
    //Remove selectedCard from the hand array
    for (var Hi = 0, Hl = game.hand.length; Hi < Hl; Hi++) {
      if (game.hand[Hi].suit == selectedCard.suit &&
        game.hand[Hi].rank == selectedCard.rank) {
        game.discardPile.push(game.hand[Hi]);
        game.hand.splice(Hi, 1);
        break;
      }
    }
    /*If we clicked the "High" button we need to spoof the rank to one
      higher than an ace
    */
    let benefit = game.getTaskBenefit(event.target.dataset.high ? 13 : selectedCard.rank);
    game.releaseDate = game.releaseDate.subtract(benefit, 'day');
    game.reduction += benefit;
    game.interface.updateRelease();
    game.interface.updateDiscardSize(game.discardPile.length);
    game.displayHand();
    game.displayDiscardTop();
    game.interface.showHandSelectionInfo();
  };
  this.playHand = function() {
    let selectedCards = game.interface.getSelectedCardsInHand();
    let rank = game.rankHand(selectedCards);
    console.log(selectedCards);
    console.log(rank + ': ' + HANDS[rank]);
    /*TODO: Validation - It should be impossible to trigger this with less than
      two cards selected. But we should ensure there are at least two cards
      selected, and that they represent a hand at least as good as a Pair!
    */
    //TODO: Need to find all those cards in the hand variable and remove them
    for (var Si = 0, Sl = selectedCards.length; Si < Sl; Si++) {
      for (var Hi = 0, Hl = game.hand.length; Hi < Hl; Hi++) {
        if (game.hand[Hi].suit == selectedCards[Si].suit &&
          game.hand[Hi].rank == selectedCards[Si].rank) {
          game.discardPile.push(game.hand[Hi]);
          game.hand.splice(Hi, 1);
          break;
        }
      }
    }
    game.releaseDate = game.releaseDate.subtract(REDUCTION[rank], 'day');
    game.reduction += REDUCTION[rank];
    game.interface.updateRelease();
    game.interface.updateDiscardSize(game.discardPile.length);
    game.displayHand();
    game.displayDiscardTop();
    game.interface.showHandSelectionInfo();
  };

  this.queryDomina = function(rank) {

  };

  this.drawChoices = function() {
    if (this.hand.length >= HAND_SIZE) {
      //TODO: Need a warning.
      console.log("Hand is full.");
      return;
    }
    if (this.choices.length > 0) {
      //TODO: Need a warning.
      console.log("Can't draw until after a choice is made.");
      return;
    }
    let date = this.getDate();
    if (date.isBefore(this.drawDate)) {
      //TODO: Need a warning.
      console.log("Too early to draw again.");
      return;
    }
    for (var i = 0; i < DRAWS; i++) {
      if (this.deck.length == 0) {
        this.reshuffle();
      }
      if (this.deck[this.deck.length - 1].suit < 4 && 
        this.deck[this.deck.length - 1].rank > 8 && 
        this.deck[this.deck.length - 1].rank < 12) {
        this.faceCardsDrawn++;
      }
      this.choices.push(this.deck.pop());
    }
    this.interface.updateLevel();
    this.drawDate = date.add(DRAW_INTERVAL, 'day').startOf('day');
    this.interface.updateDraw();
    this.interface.updateDeckSize(this.deck.length);
    this.interface.updateDiscardSize(this.discardPile.length);
    this.interface.showChoiceSelectionInfo();
    this.displayDiscardTop();
    this.interface.displayChoices(this.choices);
  };

  this.trash = function() {
    this.discardPile.push(this.deck.pop());
  };

  this.reshuffle = function() {
    while (this.deck.length > 0) {
      this.trash();
    }
    while (this.discardPile.length > 0) {
      var i = Math.floor(Math.random() * this.discardPile.length);
      this.deck.push(this.discardPile[i]);
      this.discardPile.splice(i, 1);
    }
  };

  this.rankHand = function(cards) {
    /*
      8 Straight Flush  5 Flush           2 Two Pair
      7 4 of a Kind     4 Straight        1 Pair
      6 Full House      3 3 of a Kind     0 High Card
    */
    let isFlush = true;
    let isStraight = true;
    let flushSuit = cards[0].suit;
    cards.sort(this.sortByRank);
    let rankHistogram = {};
    let sortedRanks = [];

    for (var Ci = 0, Cl = cards.length; Ci < Cl; Ci++) {
      if (rankHistogram.hasOwnProperty(cards[Ci].rank)) {
        rankHistogram[cards[Ci].rank]++;
      } else {
        rankHistogram[cards[Ci].rank] = 1;
      }
      //If any card differs in suit from the first card,
      //  we don't have a Flush!
      if (cards[Ci].suit != flushSuit) {
        isFlush = false;
      }
    }
    for (rank in rankHistogram) {
      sortedRanks.push(rankHistogram[rank]);
    }
    sortedRanks.sort(function(a, b) {
      return b - a;
    });
    if (sortedRanks[0] == 4) {
      return 7;
    } else if (sortedRanks[0] == 3) {
      if (sortedRanks[1] && sortedRanks[1] == 2) {
        return 6;
      }
      return 3;
    } else if (sortedRanks[0] == 2) {
      if (sortedRanks[1] && sortedRanks[1] == 2) {
        return 2;
      }
      return 1;
    }
    //Early escape here!
    //  If there aren't 5 cards
    //  it can't be a Straight or Flush
    if (cards.length < 5) {
      return 0;
    }
    if (cards[0].rank - cards[4].rank != 4) {
      isStraight = false;
    }
    if (isFlush && isStraight) {
      return 8;
    }
    if (isFlush) {
      return 5;
    }
    if (isStraight) {
      return 4;
    }
    return 0;
  };

  this.update = function() {
    console.log(game.getDate())
    game.interface.updateDraw();
    game.interface.updateRelease();
  };
};

var game = new Game();
var timer = setInterval(game.update, 5000);
game.interface.displayNewGame();
testDate = dayjs();
