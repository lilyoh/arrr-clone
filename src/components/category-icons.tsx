import React from 'react';
import Link from 'next/link';

const CATEGORIES = ['방석', '가방', '하네스', '푸드', '모래', '패드'];

const CategoryIcons = () => {
	return (
		<ul>
			{CATEGORIES.map((category) => (
				<li key={category}>
					<Link href="/">{category}</Link>
				</li>
			))}
		</ul>
	);
};

export default CategoryIcons;
