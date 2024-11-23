import Image from "next/image";
import LogoCoffee from "../../../public/logo_coffee.svg";
import Cart from "../../../public/cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="py-4">
      <div className="container">
        <div className="flex justify-between items-center md:hidden relative z-[4]">
          <div>
            <Image src={LogoCoffee} alt="" />
          </div>
          <ul className="flex">
            <li className="px-[12px]">About us</li>
            <li className="px-[12px]">Our Product</li>
            <li className="px-[12px]">Delivery</li>
          </ul>
          <div className="relative">
            <div className="absolute left-[10px] top-[3px]">
              <FontAwesomeIcon icon={faSearch} width={10} />
            </div>
            <input
              placeholder="Cappuccino"
              className="rounded-[20px] px-[34px] py-[5px] text-[12px]"
            />
          </div>
          <div>
            <Image src={Cart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
