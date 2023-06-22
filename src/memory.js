class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards() {
    
    if (!this.cards) {
      return undefined;
    }
  
    this.cards.sort(() => Math.random() - 0.5);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }

    return false;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
