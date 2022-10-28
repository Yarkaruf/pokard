import { Suits } from "./Card";

export function cardColor(suit: Suits): string {
	switch (suit) {
		case Suits.Swap:
		case Suits.Index:
		case Suits.Eye:
			return '#fec415';
		default:
			return '#57585a'
	}
}