import React, { useState } from "react";
import classes from "./appear.module.css";
import Select from "./Select";
import Select2 from './Select2';


const Appear = (props) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [currentNew1, setCurrentNew1] = useState(0.0);
  const [currentNew2, setCurrentNew2] = useState(0.0);
  

  console.log('Num1: '+ num1)
  console.log('Num2: '+ num2)
  console.log('Current1: '+ currentNew1)
  console.log('Current2: '+ currentNew2)

  const handleChangeCurrent = (current1,number1) => {
  
    setCurrentNew1(current1)
    
    setNum1(number1)
   
  };
  const handleChangeCurrent2 = (current2,number2) => {

    setCurrentNew2(current2)
    setNum2(number2)

  };

  // Convert = ()=>{



  // }


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
            <Select 
            num2={num2} 
            currentNew2 = {currentNew2}
            onChangeCurrent={handleChangeCurrent}
            ></Select>

            <div className={classes.text}>в</div>

            <Select2 
            num1={num1} 
            currentNew1 = {currentNew1}
            // val2 = {currentNew2}
            onChangeCurrent={handleChangeCurrent2}
            ></Select2>
          </div>

          

         
        </div>
      </div>
     
      <div className={classes.but}>Поменять валюты местами</div>
    </div>
  );
};

export default Appear;
