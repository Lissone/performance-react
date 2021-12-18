import { List, ListRowRenderer } from 'react-virtualized'

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ProductItem product={results[index]} onAddToWishlist={onAddToWishlist} />
    </div>
  )

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}
