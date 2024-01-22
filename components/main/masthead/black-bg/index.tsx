import React from 'react';
import styles from './styles.module.scss';
import ButtonCircle from '@/ui/button-circle';
import { hoverMannequin, resetHoverMannequin } from '@/store';

const BlackBg: React.FC = () => {
	return (
		<div className={styles.blackBg}>
			<div>
				<div className={styles.buttonCircleContainer}>
					<ButtonCircle
						label='смотреть'
						onMouseEnter={() => hoverMannequin()}
						onMouseLeave={() => resetHoverMannequin()}
						topColor='#fafafa'
						bottomColor='#f51b1b'
						showCircle={true}
					/>
				</div>
			</div>
			<div />
		</div>
	);
};

export default BlackBg;
