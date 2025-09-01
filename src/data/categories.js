import React from 'react'

export const getCategoriesList = async() => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    if (!res.ok) throw new Error("Failed to fetch categories List ");
    const resList =  await res.json();
  return resList;
}
