import { Suits } from '../../libs/Card'

export interface HandProps {
	hand: {
		suit: Suits,
		value: number
	}[];
}