import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CategoryIcons from './category-icons';

test('should be able to render all icons', () => {
	render(<CategoryIcons />);

	['방석', '가방', '하네스', '푸드', '모래', '패드'].forEach((name) => {
		expect(screen.getByRole('link', { name })).toBeVisible();
	});
});

test('should be able to click icon and move to related page', () => {
	render(<CategoryIcons />);

	['방석', '가방', '하네스', '푸드', '모래', '패드'].forEach(async (name) => {
		expect(screen.getByRole('link', { name })).toHaveAttribute('href', '/');
	});
});
