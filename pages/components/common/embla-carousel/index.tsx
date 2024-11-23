import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Customer1 from "@/public/person-assess/person-1.svg";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="item relative">
                <div className="box-content">
                  <div className="image-item text-black">
                    <Image src={Customer1} alt="" />
                  </div>
                  <div className="information absolute bottom-[12px] left-[20px] p-[5px] bg-[#FFD390] rounded-[10px] w-[226px]">
                    <div className="box-info bg-[#FFCB7C] text-coffee rounded-[10px] p-[10px] font-[500]">
                      <h5 className="name text-medium">Naura</h5>
                      <p className="description text-[14px]">
                        I really love the cappucino the coffee was very smoonth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="embla__slide__number">{index + 1}</div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        {/* <div className="embla__buttons">
              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div> */}

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default EmblaCarousel;
