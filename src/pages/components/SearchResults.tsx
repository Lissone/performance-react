import { useMemo } from 'react'

import { ProductItem } from './ProductItem'

interface SearchResultsProps {
  results: Array<{
    id: number
    price: number
    title: string
  }>
  onAddToWishlist: (id: number) => void
}

export function SearchResults({ results, onAddToWishlist }: SearchResultsProps) {
  const totalPrice = useMemo(
    () => results.reduce((total, product) => total + product.price, 0),
    [results]
  )

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
