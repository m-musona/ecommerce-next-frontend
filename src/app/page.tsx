import Navbar from "@/components/navbar/navbar";
import ProductComp from "@/components/products/request/product";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <div>
      <main className="p-3 bg-gray-100">
        <div>
          <h1 className="p-2 font-semibold text-xl">Home</h1>
          <div className="flex">
            <Sidebar />
            <ProductComp />
          </div>
        </div>
      </main>
    </div>
  );
}
