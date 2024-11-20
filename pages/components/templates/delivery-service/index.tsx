import Image from "next/image";
import DeliveryCoffee from "../../../../public/delivery-coffee.svg";

export default function DeliveryService() {
  return (
    <div className="delivery-service py-[48px]">
      <div className="container">
        <div>
          <h5 className="header text-2xl">
            How to use delivery{" "}
            <span className="border-b-orange border-b-[5px]">service</span>
          </h5>
          <div className="services grid grid-cols-3 md:grid-cols-1 md:gap-y-8 justify-between mt-[48px]">
            <div className="item text-center">
              <div className="image-item">
                <Image src={DeliveryCoffee} alt="" className="m-auto" />
              </div>
              <div className="content-item mt-[24px]">
                <div className="title text-medium-2">Choose your coffee</div>
                <p className="description text-medium mt-[12px]">
                  there are 20+ coffees for you
                </p>
              </div>
            </div>
            <div className="item text-center">
              <div className="image-item">
                <Image src={DeliveryCoffee} alt="" className="m-auto" />
              </div>
              <div className="content-item mt-[24px]">
                <div className="title text-medium-2">Choose your coffee</div>
                <p className="description text-medium mt-[12px]">
                  there are 20+ coffees for you
                </p>
              </div>
            </div>
            <div className="item text-center">
              <div className="image-item">
                <Image src={DeliveryCoffee} alt="" className="m-auto" />
              </div>
              <div className="content-item mt-[24px]">
                <div className="title text-medium-2">Choose your coffee</div>
                <p className="description text-medium mt-[12px]">
                  there are 20+ coffees for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
