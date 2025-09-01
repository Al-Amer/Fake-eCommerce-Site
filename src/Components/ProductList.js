"use client";

import React, { use } from 'react'
import ProductCard from './ProductCard'
import { getProductList } from '@/data/ProductList';

export const ProductList = ({productsListFetch}) => {
  // const productsListFetch = getProductList();
  const productsListFetchinput = use(productsListFetch);

  console.log(productsListFetchinput);
  console.log(typeof productsListFetchinput);

  return (
    <div className="grid grid-cols-4 gap-5 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {productsListFetchinput.map((pro)=>{
        return (
          <ProductCard product={pro} key={pro.id}/>
      )})}
    </div>
  )
}



        // {products.Array.map((product) =>{
        //     <ProductCard product= {product} />
        // })}  