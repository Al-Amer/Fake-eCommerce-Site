import React from 'react'

export default function ProductCard({props}) {
    const title = props.title;
    const image = props.image;
    const description = props.description;
    const price = props.price;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={image} alt={title} />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <button className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                   Add to cart
                </button>
        </div>
    </div>
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
//   <div class="card bg-base-100 shadow-xl">
//     <figure class="bg-white h-48 p-3">
//       <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" alt="Shoes" class="object-contain h-full w-full">
//     </figure>
//     <div class="card-body">
//       <h2 class="card-title truncate">Mens Casual Premium Slim Fit T-Shirts </h2>
//       <p>22.3 € </p>
//       <div class="card-actions justify-end items-center">
//         <a class="no-underline hover:underline text-xs" href="/category/men's clothing">More from men's clothing</a>
//         <button class="btn btn-primary">Add to cart</button>
//       </div>
//     </div>
//   </div>