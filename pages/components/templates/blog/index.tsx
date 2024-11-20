import Image from "next/image";
import ImageIntro from "../../../../public/image-intro.svg";
import Button from "../../common/button";
import "./styles.scss";

export default function Blog() {
  return (
    <div className="blog pb-8 mt-[100px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="image-intro mt-[-10%]">
            <Image src={ImageIntro} alt="" />
          </div>
          <div className="content max-w-[478px] ">
            <h3 className="header text-xl">
              About <span className="border-b-orange border-b-[5px]">us</span>
            </h3>
            <h4 className="title text-medium-1 mt-[24px] text-medium-2">
              We provide quality coffee, and ready to deliver.
            </h4>
            <p className="description text-secondary mt-[24px] text-secondary">
              We are a company that makes and distributes delicious drinks. our
              main product is made with a secret recipe and available in stores
              worldwide.
            </p>
            <div className="max-w-[142px] mt-[24px] text-12 text-orange">
              <Button
                name={"Get your coffee"}
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                isIcon={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
