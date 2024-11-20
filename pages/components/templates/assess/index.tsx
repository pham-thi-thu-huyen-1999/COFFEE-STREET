export default function Assess() {
  return (
    <div className="assess">
      <div className="introduce">
        <div className="header">What they say about us</div>
        <div className="description">
          We always provide the best service and always maintain the quality of
          coffee
        </div>
      </div>
      <div className="assess-customers">
        <div className="list">
          {/* slides */}
          <div className="item relative">
            <div className="image-item"></div>
            <div className="information absolute bottom-[12px]">
              <div className="name">Naura</div>
              <div className="description">
                I really love the cappucino the coffee was very smoonth
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
