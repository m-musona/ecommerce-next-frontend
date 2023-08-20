import ProductComponent from '@/components/products/request/product'
import React from 'react'

export default async function CategoryProductPage (
    {params: {product_id},
  }:{
    params: {product_id:string},
    
  }
  ) {
	const endpoint: string = `products/${product_id}`;
  return (
    <main className="p-3 bg-gray-100">
      <div>
        <h1 className="p-2 font-semibold text-base">Home &gt;&gt; Product</h1>
        <div className="flex">
          <ProductComponent api_endpoint={endpoint} />
        </div>
      </div>
    </main>
  )
}