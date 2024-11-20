import Image from "next/image";
import BannerCoffee from "../../../../public/banner.svg";
import Button from "../../common/button";

export default function Banner() {
  return (
    <section className="pt-[5rem] pb-[250px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="max-w-[489px]">
            <h3 className="header text-2xl font-bold">
              Enjoy your <span className="text-orange">coffee</span> before your
              activity
            </h3>
            <p className="pt-[24px] text-medium">
              Boost your productivity and build your mood with a glass of coffee
              in the morning
            </p>
            <div className="max-w-[170px] mt-[32px]">
              <Button
                name={"Order now"}
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                isIcon={true}
              ></Button>
            </div>
          </div>
          <div>
            <Image src={BannerCoffee} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
