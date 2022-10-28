import styles from './Player.module.css';

export const Player = () => {
	return (
		<div className={styles.player_block}>
			<div className={styles.player_name}>
				<span>Al Pudding</span>
			</div>
			<div className={styles.player_info}>
				<div className={styles.player_image} />
				<div className={styles.card_count}>
					<div className={styles.card}>6</div>
					<div className={styles.card_before} />
				</div>
			</div>
		</div>
	)
}