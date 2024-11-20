import Image from "next/image";
import { TButton } from "./type";
import Cart from "../../../../public/cart-white.svg";

export default function Button(type: TButton) {
  return (
    <button
      className="px-4 py-2 flex justify-between items-center bg-coffee text-white rounded-full w-full"
      onClick={type.onClick}
    >
      <span className="mr-[20px]">{type.name}</span>

      {type?.isIcon && (
        <div className="bg-orange rounded-full p-2">
          <Image src={Cart} alt="" />
        </div>
      )}
    </button>
  );
}
