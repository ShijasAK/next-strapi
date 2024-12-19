import React from "react";
import rel from "@/styles/rel.module.scss";
import useCounter from "./Logic/useCounter";

const Counter = ({ target, symbol, description }) => {
  const count = useCounter(target, symbol);

  return (
    <li data-aos="fade-up">
      <h4
        className={`${rel.number_counter_experience} number-counter-2`}
        data-target={target}
        data-symbol="%"
      >
        {count}
      </h4>
      <p>{description}</p>
    </li>
  );
};

export default Counter;
