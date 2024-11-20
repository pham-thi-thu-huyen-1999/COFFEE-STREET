import "./styles.scss";

export default function DiscountBanner() {
  return (
    <section className="discount-banner">
      <div className="container">
        <div className="box-container tex-center flex items-center justify-center rounded-[20px]">
          <div className="content-discount text-center">
            <h3 className="header text-white text-xl">
              Subscribe to get 50% discount price
            </h3>
            <div className="input mt-[24px]">
              <input placeholder="Email address" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
