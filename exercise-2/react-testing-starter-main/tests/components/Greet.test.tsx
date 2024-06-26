/* import { it, expect, describe } from 'vitest' */ /* we set up as global */
import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'
/* import '@testing-library/jest-dom/vitest' */ /* in setup.ts */

describe('Greet', () => {
    it('should render login button when the name is not provided', () => {
        render(<Greet />)

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    })
})