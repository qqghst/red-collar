import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import IBigTextProps from './interface';

const BigText: React.FC<IBigTextProps> = ({ handleMouseEnter, handleMouseLeave }) => {
	return (
		<div className={styles.bigText}>
			<h1>
				<div>emal&apos;s not dead</div>
				<div>
					<Link href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						hello <strong>(a)</strong> redcollar.ru
					</Link>
				</div>
			</h1>
		</div>
	);
};

export default BigText;
