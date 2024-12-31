import style from "./styles.module.scss";

export default function DiscountBanner() {
  return (
    <section className={style.DiscountBanner}>
      <div className="container">
        <div className="box-container tex-center flex items-center justify-center rounded-[20px]">
          <div className="content-discount text-center">
            <h3 className="header text-white text-xl">
              Subscribe to get 50% discount price
            </h3>
            <div className="input mt-[24px] relative">
              <input
                placeholder="Email address"
                className="rounded-[20px] px-[12px] py-[5px] text-[12px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
