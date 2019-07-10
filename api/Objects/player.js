export default class player{
    constructor(id, username, score,){
        this.id = id;
        this.username = username;
        this.score = score;
        this.cards = [];
    }
    
    get Cards(){
        return this.cards;
    }

    get points(){
        return this.score;
    }

    addCard(card){
        this.cards.push(card);
    }

    playCard(pick, card){
        let array = [];
        for(let i = 0; i < card.length; i++){
            if(pick == i) break;
            array.push(this.cards[card[i]]);
        }
        for(let i = 0; i < array.length; i++){
            let index = this.cards.indexOf(array[i]);
            this.cards.splice(index, 1);
        }
        return array;
    }
}