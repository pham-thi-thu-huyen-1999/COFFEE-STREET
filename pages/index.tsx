import Header from "./components/header";
import Banner from "./components/templates/banner";
import PopularProducts from "./components/templates/popular-products";
import Blog from "./components/templates/blog";
import SpecialMenu from "./components/templates/special-menu";
import Assess from "./components/templates/assess";
import DiscountBanner from "./components/templates/discount-banner";
import DeliveryService from "./components/templates/delivery-service";
import "@/styles/embla.css";

export default function Home() {
  return (
    <div
      className={`min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="">
        {/* header */}
        <div className="bg-accent">
          <Header />
          {/* banner */}
          <Banner />
        </div>
        {/* popular products - list*/}
        <PopularProducts />
        {/* delivery service */}
        <DeliveryService />
        {/* blog */}
        <Blog />
        {/* special menu */}
        <SpecialMenu />
        {/* assess */}
        <Assess />
        {/* discount */}
        <DiscountBanner />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
