import Image from "next/image";
import Sandwich from "../../../../public/special-menu/item-1.svg";
import Cart from "../../../../public/cart-white.svg";
import Button from "../../common/button";

export default function SpecialMenu() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="content">
          <h3 className="header text-xl">
            Special menu
            <span className="border-b-orange border-b-[5px]">for you</span>
          </h3>
          <div className="menu mt-8">
            <div className="grid grid-cols-3 md:grid-cols-1">
              <div className="item bg-white relative">
                <div className="star absolute top-[5px] left-[5px] rounded-full bg-light">
                  <div className="bg-white p-[4px]">4.8</div>
                  <Image src={Cart} alt="" />
                </div>
                <div className="image-item">
                  <Image src={Sandwich} alt="" className="w-full" />
                </div>
                <div className="content-item mt-4">
                  <div className="flex text-medium-2 justify-between">
                    <h4 className="title">Sandwich</h4>
                    <div className="price">12k</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="description text-secondary font-[500]">
                      bread with meat and vegetables
                    </div>
                    <div className="p-[5px] bg-orange rounded-full">
                      <Image src={Cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
