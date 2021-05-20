import { randomInt } from 'crypto'
import assert from 'assert'
import Card, { CardRank, CardSuit } from './card'
import { shuffleInPlace } from '../util/array'

export default class Deck extends Array<Card> {
    private _size: number

    constructor() {
        super()

        this._size = 52
        let index = 0
        for (let suit = CardSuit.CLUBS; suit <= CardSuit.SPADES; suit++) {
            for (let rank = CardRank._2; rank <= CardRank.A; rank++) {
                this[index++] = new Card(rank, suit)
            }
        }

        shuffleInPlace(this)
    }

    fillAndShuffle(): void {
        this._size = 52;
        shuffleInPlace(this)
    }

    draw(): Card {
        assert(this._size > 0, 'Cannot draw from an empty deck')
        return this[--this._size]
    }
}