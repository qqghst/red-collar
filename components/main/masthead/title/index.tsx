import React from 'react';
import styles from './styles.module.scss'

const Title: React.FC = () => {
	return (
		<h2 className={styles.title}>
			Создаем цифровые <br /> продукты с чистого лица{' '}
		</h2>
	);
};

export default Title;
