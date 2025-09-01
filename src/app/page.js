import { FetchListSkeleton } from "@/Components/fetchListSkeleton";
import ProductCard from "@/Components/ProductCard";
import { ProductList } from "@/Components/ProductList";
import { getProductList } from "@/data/ProductList";

import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  // const [catagoriesRes, productsRes] = await Promise.all([fetch("https://fakestoreapi.com/products/categories"),fetch("https://fakestoreapi.com/products")]);
  // const [categories_All, products_All] = await Promise.all([catagoriesRes.json(),productsRes.json()]);
  // const [categories, setCategories]= useState("all");
  const getProducts = getProductList();
  // console.log(getProducts)

  return (
    // <div className="grid grid-cols-4 gap-5 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"> </div>

    <Suspense fallback={<FetchListSkeleton/>}>
      <ProductList productsListFetch={getProducts}/>
      {/* <ProductList /> */}
    </Suspense>



  );
}

    // <div className="font-sans flex flex-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">


      //     {products_All.map((product)=>{
      //   return (
      //   <ProductCard key={product.id} props={product}/>);
      // })}