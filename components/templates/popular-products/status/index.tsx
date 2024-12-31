import { useState } from "react";
import { TItem } from "./type";

export function Status({ name, checkID, id, onCheck }: TItem) {
  return (
    <li
      key={`status-${checkID}`}
      className={`px-[8px] text-[#FFD28F] py-[4px] rounded-[10px] border-[2px] border-[#FFD28F] cursor-pointer border-solid ${
        checkID === id ? "active" : ""
      }`}
      onClick={() => onCheck(id)}
    >
      {name}
    </li>
  );
}

export function ListStatus() {
  const [isCheck, setIscheck] = useState("11");
  const items = [
    { id: "11", name: "hot" },
    { id: "22", name: "cold" },
  ];
  return (
    <ul className="flex status font-bold status text-[16px] gap-x-[5px]">
      {items.map((item, index) => {
        return (
          <Status
            key={index + 1}
            name={item.name}
            checkID={isCheck}
            id={item.id}
            onCheck={(id: string) => setIscheck(id)}
          />
        );
      })}
    </ul>
  );
}
