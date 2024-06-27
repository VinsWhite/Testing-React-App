import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'

describe('ExpandableText', () => {
    it('should show entire article', () => {
        const shortText = 'short'
        render(<ExpandableText text={shortText} />)

        const article = screen.queryByRole('article');
        expect(article).toBeInTheDocument();
        expect(article).toHaveTextContent(shortText)
    })

    it('should show button show less and show more', () => {
        const longText = 'a'.repeat(255)
        render(<ExpandableText text={longText} />)

        const button = screen.queryByRole('button');
        expect(button).toHaveTextContent(/show/i)
    })
})