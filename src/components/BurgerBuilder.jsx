import { Fragment } from "react";

const BurgerBuilder = ({ salad = 0, cheese = 0, meat = 0, bacon = 0 }) => {
  return (
    <Fragment>
      <h3 className="text-center">Your taste burger</h3>
      <div className="box">
        <div className="bread-top">
          <div className="seeds" />
          <div className="seeds2" />
        </div>
        {salad === 0 && cheese === 0 && meat === 0 && bacon === 0 && (
          <h5 className="text-center fw-bold">
            Please start adding ingredients
          </h5>
        )}
        {salad > 0 && <BurgerItem type="salad" number={salad} />}
        {cheese > 0 && <BurgerItem type="cheese" number={cheese} />}
        {meat > 0 && <BurgerItem type="meat" number={meat} />}
        {bacon > 0 && <BurgerItem type="bacon" number={bacon} />}
        <div className="bread-bottom" />
      </div>
    </Fragment>
  );
};

const BurgerItem = ({ type, number }) => {
  return [...Array(number)].map((item, i) => (
    <div className={type} key={`${type}-${i}`} />
  ));
};

export default BurgerBuilder;
