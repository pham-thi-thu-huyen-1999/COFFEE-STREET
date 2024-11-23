import EmblaCarousel from "../../common/embla-carousel";
import "./styles.scss";
import { EmblaOptionsType } from "embla-carousel";
export default function Assess() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className="assess py-[50px] my-[60px] xl:px-[24px]">
      <div className="2xl:container">
        <div className="w-[1280px] max-w-full p-[10px] ml-auto mr-0 flex gap-x-[24px]">
          <div className="flex items-center">
            <div className="content">
              <h4 className="header text-coffee text-xl">
                What they say about us
              </h4>
              <p className="description mt-4">
                We always provide the best service and always maintain the
                quality of coffee
              </p>
            </div>
          </div>
          <div className="assess-customers">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            {/* <div className="list">
        
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
