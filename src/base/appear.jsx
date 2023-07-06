import React, { useState } from "react";
import classes from "./appear.module.css";
import Select from "./Select";
//import Input from './Input';
//import axios from 'axios'

const Appear = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sendNum1 = (number) => {
    //console.log(current);
    setNum1(number);
    // console.log("num");
    // console.log(number);
  };
  const sendNum2 = (number) => {
    //console.log(current);
    setNum2(number);
    // console.log("num");
    // console.log(number);
  };

  //
  
  return (
    <div className={classes.Main}>
      <h1>
        {" "}
        <strong>Конвертер валют</strong>{" "}
      </h1>
      <div className={classes.wrapper}>
        <h3>Вы переводите из</h3>

        <div className="stolbic">
          <div className={classes.s1}>
            <Select num1={num1} num2={num2}></Select>

            <div className={classes.text}>в</div>

            <Select num1={num1} num2={num2}></Select>
          </div>

          <div className={classes.f_select_money}>
            <input
              type="number"
              value={num1}
              onChange={(e) => sendNum1(e.target.value)}
            />

            <div className={classes.text}>=</div>
            <input
              type="number"
              value={num2}
              onChange={(e) => sendNum2(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={classes.but}>Поменять валюты местами</div>
    </div>
  );
};

export default Appear;
