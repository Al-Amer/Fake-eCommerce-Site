"use client";

import React, { use, useState } from 'react'
import ProductCard from './ProductCard'
import { getProductList } from '@/data/productList';
import { getCategoriesList } from '@/data/categories';
// import { getProductList } from '@/data/ProductList';

export const ProductList = ({productsListFetch, categoriesFetch }) => {
  const productsListFetchinput = use(productsListFetch);
  const categoriesFetchinput =  use(categoriesFetch);
  const [category, setCategories] = useState("All");

  const clickHandelung = ((e)=>{
    setCategories(e.target.innerHTML);
   console.log(e.target.innerHTML);
});

  // console.log(categoriesFetchinput);
  // console.log(typeof categoriesFetchinput);
    console.log(productsListFetchinput);
  // console.log(typeof productsListFetchinput);

  return (
    <div>
      <div className=" items-center ">

        {categoriesFetchinput.map((cater, index) => {
          return(
          <button key={index} className='text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center p-2 m-2' onClick={clickHandelung}>{cater}</button>
        )})}
      </div>
      <div className="grid grid-cols-4 gap-5 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
         { productsListFetchinput.map((produc) => {
          if (category== "All"){
            return ( <ProductCard product={produc} key={produc.id} />);
          }else{
            if (category == produc.category){
              return ( <ProductCard product={produc} key={produc.id} /> )
            }
          }
         })}
      </div>
    </div>
  )
}


    // <div>
    //   <div className=" items-center ">
        
    //     {categoriesFetchinput.map((cater, index) => {
    //       return(
    //       <button key={index} className='text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center p-2 m-2' onClick={clickHandelung}>{cater}</button>
    //     )})}
    //   </div>
    //   <div className="grid grid-cols-4 gap-5 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //     {productsListFetchinput.map((pro)=>{
    //       return (
    //         <ProductCard key={pro.id} product={pro} />
    //     )})}
    //   </div>
    // </div>