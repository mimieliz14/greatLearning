import { GetServerSideProps } from "next";
import { products } from "../../lib/data";
import { Product } from "../../types";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: Product | null;
}

export default function ProductDetail({ product }: ProductProps) {
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="dish-details-container">
      <h1>{product.name}</h1>
      <div className="dish-image">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={175}
        />
      </div>
      <p>{product.description}</p>
      <p>
        <strong>Specs:</strong> {product.specs.join(", ")}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <Link href="/products">
        <button>Back to Products</button>
      </Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("context", context);
  const { id } = context.params as { id: string };
  const product = products.find((product) => product.id === id);
  console.log("products", product);
  return {
    props: {
      product,
    },
  };
};
