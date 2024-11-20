import Image from "next/image";
import LogoCoffee from "../../../public/logo_coffee.svg";
import Cart from "../../../public/cart.svg";

export default function Header() {
  return (
    <div className="py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <Image src={LogoCoffee} alt="" />
          </div>
          <ul className="flex">
            <li className="px-[12px]">About us</li>
            <li className="px-[12px]">Our Product</li>
            <li className="px-[12px]">Delivery</li>
          </ul>
          <input
            placeholder="Cappuccino"
            className="rounded-[20px] p-[5px] text-[12px]"
          />
          <div>
            <Image src={Cart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
