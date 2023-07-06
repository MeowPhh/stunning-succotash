import React, { useEffect, useState } from "react";
import classes from "./appear.module.css";
import axios from "axios";

const Select = ({ num1, num2 }) => {
  const [val1, setVal1] = useState("");
  const [countr, setCountr] = useState({});
  

  useEffect(() => {
    getData();
  }, []);

  //console.log("num");
  //console.log(num1);

  //console.log("num2");
  //console.log(num2);

  async function getData() {
  
    const curren = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");

    
    //console.log(curren.data.Valute);
    setCountr(curren.data.Valute);
  }

  const options = Object.keys(countr).map((text, index) => {
    return (
      <option key={index} value={countr[text]}>
        {text}
      </option>
    );
  });

  const getCountry = (current) => {
    console.log('lllll '+current.date);
    setVal1(current);
    Convert(current);
  };

  const Convert = (current) => {
   // console.log(current); console.log("--- ");
  };

  // из useEffect в useState а потом в перерисовку

  return (
    <div>
      <select
        className={classes.Sel1}
        value={val1}
        onChange={(e) => getCountry(e.target.value)}
      >
        {options}
      </select>
    </div>
  );
};

export default Select;
