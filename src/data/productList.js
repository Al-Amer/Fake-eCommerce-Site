export const getProductList = async() =>  {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products List ");
    const resList = await res.json();
  return resList;
}
