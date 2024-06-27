import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'


describe('Product Image Gallery', () => {
    it('should render the component with an empty array', () => {
        const { container } = render(<ProductImageGallery imageUrls={[]} />)

        expect(container).toBeEmptyDOMElement();
    })

    it('should render the list elements with the img src correct', () => {
        const imagesUrls =  [
            'www.google.com',
            'www.immagini.com'
        ]

        render(<ProductImageGallery imageUrls={imagesUrls} />)
        
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(2);
        
        imagesUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url)
        })

        
    })
})