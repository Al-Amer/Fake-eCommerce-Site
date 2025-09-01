"use client";

import React from 'react'


export default function ProductCard({product}) {
    const title = product.title;
    const image = product.image;
    const description = product.description;
    const price = product.price;
    console.log(`product : ${product}`)
  return (

    // <div className="grid grid-cols-4 gap-5 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">  {/* Gernerally Continer  */}
    //         {/* Product cat satrt hier  */}
    //   {products.map((product) =>{ 
          <div className="card bg-base-100 shadow-xl dark:bg-gray-800 dark:border-gray-700 h-120">
            <figure className="bg-white h-48 p-3">
             <img className="rounded-t-lg object-contain h-full w-full" src={image} alt={title} />
            </figure>
            <div className="p-5 card-body">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <div className='h-70'>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-70 text-ellipsis">{description}</p>
            </div>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-70">{description}</p> */}
            <p>price : {price}</p>
            <button className=" bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
              Add to cart
            </button>
            </div>
          </div>
  //     })}
  // </div>
  )
}


// <div class="grid grid-cols-4 gap-5">
//   <div class="card bg-base-100 shadow-xl">
//     <figure class="bg-white h-48 p-3">
//       <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="Shoes" class="object-contain h-full w-full">
//     </figure>
//     <div class="card-body">
//       <h2 class="card-title truncate">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
//       <p>109.95 € </p>
//       <div class="card-actions justify-end items-center">
//         <a class="no-underline hover:underline text-xs" href="/category/men's clothing">More from men's clothing</a>
//         <button class="btn btn-primary">Add to cart</button>
//       </div>
//     </div>
//   </div>
//    bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
//    rtl:rotate-180 ms-2 btn btn-primary bg-pink-400 rounded border hover:bg-pink-800 hover:text-black " 
