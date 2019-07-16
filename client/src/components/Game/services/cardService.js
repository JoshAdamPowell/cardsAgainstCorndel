import blackCards from '../data/black-cards.js';
import whiteCards from '../data/white-cards.js';

export default class cardService {

  static generateBlackBody(){
		let blackCard;
		let ranBlackCard = blackCards[Math.floor(Math.random() * blackCards.length)];
		blackCard = ranBlackCard.text;
		return blackCard;
	}

	static generateWhiteBody(){
		let whiteCard;
		let ranWhiteCard = whiteCards[Math.floor(Math.random() * whiteCards.length)];
		whiteCard = ranWhiteCard;
		return whiteCard;
	}

}