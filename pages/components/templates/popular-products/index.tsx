import Image from "next/image";
import Product1 from "../../../../public/products/popular_product-1.svg";
import Cart from "../../../../public/cart.svg";
import "./styles.scss";

export default function PopularProducts() {
  const products = [
    { name: "Vanilla Latte", price: "21 K" },
    { name: "Vanilla Latte", price: "21 K" },
    { name: "Vanilla Latte", price: "21 K" },
  ];
  return (
    <div className="popular-products h-[300px] pt-8">
      <div className="container">
        <div>
          <div className="header">Popular Now</div>
          <div className="content relative z-[2] mt-[-25%]">
            <div>
              <div className="list-product grid grid-cols-3 md:grid-cols-1 gap-x-[24px] md:gap-x-[12px] md:w-[1000px]">
                {products.map((item, index) => {
                  return (
                    <div
                      className="bg-white rounded-[10px] p-4"
                      key={`popular-${index + 1}`}
                    >
                      <Image
                        src={Product1}
                        alt=""
                        className="rounded-[10px] w-full"
                      />
                      <div className="infor flex justify-between mt-[24px]">
                        <h5>{item.name}</h5>
                        <span>{item.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <ul className="flex">
                          <li>hot</li>
                          <li>cold</li>
                        </ul>
                        <div className="bg-orange rounded-full p-[10px]">
                          <Image src={Cart} alt="" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-popular absolute z-[-1] top-[24%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
