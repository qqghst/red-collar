import React from 'react';
import styles from './styles.module.scss';
import ButtonCircle from '@/ui/button-circle';
import { hoverMannequin, resetHoverMannequin } from '@/store';
import TitleSection from '@/ui/title-section';

const BlackBg: React.FC = () => {
	return (
		<>
			<div className='absolute top-[50vw] z-[10000]'>
				<TitleSection title='showreel' showSpan={true} showDot={true} color='#fafafa' />
			</div>
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
		</>
	);
};

export default BlackBg;
