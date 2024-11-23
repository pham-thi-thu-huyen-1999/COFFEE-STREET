import Image from "next/image";
import Product1 from "../../../../public/products/popular_product-1.svg";
import Cart from "../../../../public/cart-white.svg";
import StartIcon from "../../../../public/akar-icons_star.svg";
import "./styles.scss";
import { ListStatus } from "./status";

export default function PopularProducts() {
  const products = [
    { name: "Vanilla Latte", price: "21 K" },
    { name: "Vanilla Latte", price: "21 K" },
    { name: "Vanilla Latte", price: "21 K" },
  ];

  return (
    <div className="popular-products pt-8 md:pt-4 relative z-[2]">
      <div className="container">
        <div className="mt-[-25%]">
          <div className="header">Popular Now</div>
          <div className="content relative z-[2]">
            <div className="overflow-auto">
              <div className="list-product flex flex-1 gap-x-[24px] md:gap-x-[12px] md:w-[1000px]">
                {products.map((item, index) => {
                  return (
                    <div
                      className="item rounded-[10px] w-[33.3%] relative bg-[#ffffff85] p-[5px] shadow-gray-300"
                      key={`popular-${index + 1}`}
                    >
                      <div className="box-item bg-white rounded-[10px] p-4 ">
                        <div className="star absolute top-[30px] left-[30px] rounded-full bg-[#ffffff85] p-[5px]">
                          <div className="box-rate bg-white px-[10px] py-[4px] rounded-full flex text-[14px] font-[700] text-coffee">
                            <span className="mr-[5px]">4.8</span>
                            <Image src={StartIcon} alt="" />
                          </div>
                        </div>
                        <Image
                          src={Product1}
                          alt=""
                          className="rounded-[10px] w-full"
                        />
                        <div className="infor flex justify-between mt-[24px] font-bold text-coffee text-medium-2">
                          <h5>{item.name}</h5>
                          <span>{item.price}</span>
                        </div>
                        <div className="flex justify-between items-center mt-[16px]">
                          <ListStatus />
                          <div className="bg-orange rounded-full p-[10px]">
                            <Image src={Cart} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-popular absolute z-[-1] bottom-[-87px]"></div>
    </div>
  );
}
