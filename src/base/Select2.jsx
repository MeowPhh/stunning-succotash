import React, { useEffect, useState } from "react";
import classes from "./appear.module.css";
import axios from "axios";

const Select2 = (props) => {
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [countr, setCountr] = useState({});

    useEffect(() => {
      getData();
    }, []);

    useEffect(() => setVal2(Cong()),[props.num1])

    // console.log('...num1 '+props.num1);
    // console.log('...current1 '+props.currentNew1);
    // console.log('...current2 '+val1);

    async function getData() {
      const curren = await axios.get("https://www.cbr-xml-daily.ru/latest.js");
      setCountr(curren.data.rates);
    }
  
    const options = Object.keys(countr).map((text, index) => {
      return (
        <option key={index} value={countr[text]}>
          {text}
        </option>
      );
    });
  
    const Convert = (current) => {
      setVal1(current);
    };
    const Cong = () => {
        const result = (props.num1*val1)/props.currentNew1;
        return result.toFixed(2);
      }
    return (
      <div>
        <select
          className={classes.Sel1}
          value={val1}
          onChange={(current) => Convert(current.target.value)}
        >
          {options}
        </select>
     
      
      <div className={classes.f_select_money}>
      <input
        type="number"
        value={val2}
        onChange={(e) => props.onChangeCurrent(val1 ,e.target.value) || setVal2(e.target.value)}
      
      />
      </div>
      </div>
    );
  };

export default Select2
