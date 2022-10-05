import BugFix from './svg/bugfix.svg';
import style from './Card.module.css';
import cn from 'classnames';

export const Card = () => {
    return (
        <div className={style.card}>
        	<div className={cn(style.card_face,style.front)}>
        		<div className={style.value}>
        			<span>5</span>
        			<BugFix />
        		</div>
        		<div className={style.suit}>
        			<BugFix />
        		</div>
        	</div>
        	<div className={cn(style.card_face, style.back)} />
        </div>
    )
  }