import { ProductItem } from './ProductItem'

interface SearchResultsProps {
  results: Array<{
    id: number
    title: string
    price: number
    priceFormatted: string
  }>
  totalPrice: number
  onAddToWishlist: (id: number) => void
}

export function SearchResults({
  results,
  totalPrice,
  onAddToWishlist
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  )
}
