import { Card } from '../Card/Card';
import { HandProps } from './Hand.props';
import styles from './Hand.module.css';


export const Hand = ({ hand }: HandProps) => {
	return (
		<div className={styles.hand}>
			{hand.map((card, index) => {
				return (
					<div className={styles.cardWrapper} key={index}>
						<Card suit={card.suit} value={card.value} />
					</div>
				)
			})}
		</div>
	)
}