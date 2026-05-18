import Link from "next/link";
import { redirect } from "next/navigation";


export const metadata = {
  title: "Products",
  description: "Browse all products",
};


const goToDetails = async (formdata) => {
  "use server";
  const id = formdata.get("prodid");
  console.log(id);
  redirect(`/products/${id}`);
};
export default async function Products() {
  const res = await fetch("https://api.vercel.app/products");
  const data = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
          >
            <h2 className="mt-4 font-semibold text-lg line-clamp-2">
              {product.name}
            </h2>

            <p className="text-cyan-600 font-bold text-xl mt-2">
              ${product.description}
            </p>

            <form action={goToDetails}>
              <input type="hidden" name="prodid" value={product.id} />
              <button
                className="mt-2 w-full bg-cyan-600 text-white py-2 rounded-xl hover:bg-cyan-700 transition"
              >
                View Details
              </button>
            </form>
            <Link href="/">
              <button className="mt-2 w-full border border-slate-900 text-slate-900 py-2 rounded-xl hover:bg-slate-900 hover:text-white transition">
                Back To Home
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
