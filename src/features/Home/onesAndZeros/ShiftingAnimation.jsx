'use client';
import { useEffect, useState } from 'react';
import styles from './onesAndZeros.module.scss';

const ShiftingAnimation = () => {
	const [binaryStrings, setBinaryStrings] = useState([]);

	useEffect(() => {
		const interval = setInterval(() => {
			// Generate multiple binary strings with different offsets
			setBinaryStrings(prevBinaryStrings => {
				const maxLength = 30; // Maximum length for binary strings
				const newBinaryStrings = prevBinaryStrings.map(str => {
					const offset = Math.floor(Math.random() * maxLength); // Random offset within the range
					const binaryString = str.string.slice(-offset) + str.string.slice(0, -offset);
					const delay = Math.floor(Math.random() * 500) + 100; // Random delay between 100ms and 600ms
					return {
						string: binaryString,
						delay: delay,
					};
				});
				return newBinaryStrings;
			});
		}, 300); // Change the interval duration as needed

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		// Initialize the binary strings
		const initialBinaryStrings = Array.from({ length: 10 }, () => {
			const maxLength = 45; // Maximum length for binary strings
			const binaryString = '10'.repeat(maxLength);
			const delay = Math.floor(Math.random() * 500) + 100; // Random delay between 100ms and 600ms
			return { string: binaryString, delay: delay };
		});
		setBinaryStrings(initialBinaryStrings);
	}, []);

	return (
		<div className={styles.container}>
			{binaryStrings.map((binaryString, index) => (
				<p key={index} style={{ animationDelay: `${binaryString.delay}ms` }}>
					{binaryString.string}
				</p>
			))}
		</div>
	);
};

export default ShiftingAnimation;
