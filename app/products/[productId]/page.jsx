export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);

  return {
    title: product.data.title,
    description: product.data.description,
  };
}


export default async function ProductDetails({ params }) {

  const { productId } = await params;
  console.log(productId)

  const res = await fetch(`https://api.vercel.app/products/${productId}`);

  const product = await res.json();

  return (
    <div className="p-10">
   

      <h1 className="text-3xl font-bold mt-5">{product.name}</h1>

      <p className="mt-4 text-gray-600">{product.description}</p>

      <p className="text-2xl font-bold text-cyan-600 mt-4">${product.price}</p>
    </div>
  );
}
