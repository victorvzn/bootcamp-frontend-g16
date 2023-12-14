export const fetchProducts = async  () => {
  const url = 'https://dummyjson.com/products'

  const response = await fetch(url)

  const data = await response.json()

  return data.products
}