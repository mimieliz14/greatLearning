import { products } from "../../lib/data";
import { Product } from "../../types";
import Image from "next/image";
import Link from "next/link";

// Define TypeScript interface for props received by this component
interface ProductsProps {
  products: Product[];
}

// This is the main component for displaying the list of products
export default function Products({ products }: ProductsProps) {
  return (
    <div className="container">
      <h1>ShopSmart - Product List</h1>

      {products.map((product) => {
        return (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="product-item">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={100}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}


export const getServerSideProps = async () => {
  return {
    props: { products },
  };
};
