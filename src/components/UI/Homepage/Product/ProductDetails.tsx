"use client";

import { useParams } from "next/navigation"; // Use useParams for dynamic routes in app directory
import { productDatas } from "@/components/ProductData/ProductData";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const productId = id as string;

  const product = productDatas?.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
