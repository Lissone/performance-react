import { memo } from 'react'

interface ProductItemProps {
  product: {
    id: number
    title: string
    price: number
    priceFormatted: string
  }
  onAddToWishlist: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button type="button" onClick={() => onAddToWishlist(product.id)}>
        Add to Wishlist
      </button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product)
)
