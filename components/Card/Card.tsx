import Bugfix from './svg/bugfix.svg';
import Eye from './svg/eye.svg';
import Index from './svg/index.svg';
import Send from './svg/send.svg';
import Skip from './svg/skip.svg';
import Swap from './svg/swap.svg';
import style from './Card.module.css';
import cn from 'classnames';
import { Suits } from '../../libs/Card';
import { CardProps } from './Card.props';
import { useEffect, useRef } from 'react';
import { cardColor } from '../../libs/CardColor';

export const Card = ({ suit, value }: CardProps) => {

	const front = useRef<HTMLDivElement>(null);
	let color = cardColor(suit);
	useEffect(() => {
		if (front.current != null) {
			front.current!.style.setProperty('--card-suit-color', color);
		}
	}, [color]);

	let icon;
	switch (suit) {
		case Suits.Bugfix:
			icon = <Bugfix />;
			break;
		case Suits.Eye:
			icon = <Eye />;
			break;
		case Suits.Index:
			icon = <Index />;
			break;
		case Suits.Send:
			icon = <Send />;
			break;
		case Suits.Skip:
			icon = <Skip />;
			break;
		case Suits.Swap:
			icon = <Swap />;
			break;
	}
	return (
		<div className={style.card}>
			<div ref={front} className={cn(style.card_face, style.front)}>
				<div className={style.value}>
					<span>{value}</span>
					{icon}
				</div>
				<div className={style.suit}>
					{icon}
				</div>
			</div>
			<div className={cn(style.card_face, style.back)} />
		</div>
	)
}