import React, { useState } from 'react';
import styles from './styles.module.scss';
import MenuContent from './menu-content';
import { AnimatePresence } from 'framer-motion';

const Menu: React.FC = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleMenuToggle = () => {
		setIsActive(!isActive);
	};

	return (
		<>
			<div className={styles.buttonContainer}>
				<div className={styles.button} onClick={handleMenuToggle}>
					<div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`} />
				</div>
			</div>

			<AnimatePresence mode='wait'> {isActive && <MenuContent />}</AnimatePresence>
		</>
	);
};

export default Menu;
