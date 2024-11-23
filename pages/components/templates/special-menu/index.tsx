import Image from "next/image";
import Sandwich from "../../../../public/special-menu/item-1.svg";
import Cart from "../../../../public/cart-white.svg";
import StartIcon from "../../../../public/akar-icons_star.svg";

export default function SpecialMenu() {
  const menu = [
    {
      id: 1,
      name: " Sandwich",
      price: 12,
      description: "bread with meat and vegetables",
    },
    {
      id: 2,
      name: " Sandwich",
      price: 12,
      description: "bread with meat and vegetables",
    },
    {
      id: 3,
      name: " Sandwich",
      price: 12,
      description: "bread with meat and vegetables",
    },
  ];
  return (
    <div className="py-8">
      <div className="container">
        <div className="content">
          <h3 className="header text-xl">
            Special menu
            <span className="border-b-orange border-b-[5px]">for you</span>
          </h3>
          <div className="menu mt-8">
            <div className="grid grid-cols-3 gap-x-[24px] md:grid-cols-1">
              {menu.map((item, index) => {
                return (
                  <div
                    key={`special-item-${index + 1}`}
                    className="item bg-white relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-[24px] rounded-[10px]"
                  >
                    <div className="star absolute top-[30px] left-[30px] rounded-full bg-[#ffffff85] p-[5px]">
                      <div className="box-rate bg-white px-[10px] py-[4px] rounded-full flex text-[14px] font-[700] text-coffee">
                        <span className="mr-[5px]">4.8</span>
                        <Image src={StartIcon} alt="" />
                      </div>
                    </div>
                    <div className="image-item">
                      <Image src={Sandwich} alt="" className="w-full" />
                    </div>
                    <div className="content-item mt-4">
                      <div className="flex text-medium-2 justify-between text-coffee mb-[12px]">
                        <h4 className="title">{item.name}</h4>
                        <div className="price">${item.price}</div>
                      </div>
                      <div className="flex justify-between">
                        <p className="description text-light text-[14px] font-[500]">
                          {item.description}
                        </p>
                        <div className="p-[5px] bg-orange rounded-full">
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
  );
}
