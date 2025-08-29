import ProductCard from "@/Components/ProductCard";
import Image from "next/image";

export default async function Home() {
  const [catagoriesRes, productsRes] = await Promise.all([fetch("https://fakestoreapi.com/products/categories"),fetch("https://fakestoreapi.com/products")]);
  const [categories, products] = await Promise.all([catagoriesRes.json(),productsRes.json()]);

  return (
    <div className="font-sans flex flex-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
       {/* Catagroies button */}
      {/* Products Image */}
      {products.map((product)=>{
        return (
        <ProductCard key={product.id} props={product}/>);
      })}
    </div>
  );
}
