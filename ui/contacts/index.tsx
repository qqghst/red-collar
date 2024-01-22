import React from 'react';
import styles from './styles.module.scss';
import { IContactsProps } from './interface';

const Contacts: React.FC<IContactsProps> = ({ color }) => {
	const dynamicStyle = {
		color: color,
	};

	return (
		<div className={styles.contacts} style={dynamicStyle}>
			<div>
				<span>+7 (473) 229-91-94</span>
				<span>hello@redcollar.ru</span>
			</div>
			<div>
				<span>Россия, г. Воронеж,</span>
				<span>ул. Текстильщиков, 5Б</span>
			</div>
		</div>
	);
};

export default Contacts;
