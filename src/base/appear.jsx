import React, { useEffect, useState } from 'react'
import classes from './appear.module.css'
import Select from './Select';
import Input from './Input';
import axios from 'axios'

const Appear = () => {
    const [val, setVal] = useState();
    const access_key = '4b8d4019215160d9ecdb87aac8a3d9c6'
    const from = 'EUR';
    const to = 'RUB';
    const amount = '111';

    useEffect(()=>{
        getData();
        
    },[])

    async function getData(){
        const curren = await axios.get('http://data.fixer.io/api/convert?access_key=' + access_key + '&from' + from + '&to'+ to +'&amount' + amount)
        //console.log(curren.data.rates);
        console.log(curren.data);
    }
    //console.log(val);
    
    return (
    

    <div className={classes.Main}>
            <h1> <strong>Конвертер валют</strong> </h1>
            <div className={classes.wrapper}>
            
                <h3>Вы переводите из</h3>

                <div className="stolbic">
                
                <div className={classes.s1}>
                <Select value = {"222"}/>
                <div className={classes.text}>в</div>
                <Select></Select>

            </div>




            <div className={classes.f_select_money}>
               
                <input  type="number" 
                value = {val} 
                onChange={(e)=>setVal(e.target.value)}/>
                
                <div className={classes.text}>=</div>
                <input type="number" />


            </div>
        </div>
        
        </div>
        <div className={classes.but}>Поменять валюты местами</div>




    </div>
  )
}

export default Appear
