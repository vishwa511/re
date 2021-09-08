import React, { useState } from 'react'
import './sty.css'

    const Button = () => {
  
 
        const [result, ansOf] = useState("");
        const Click = (e) => {
          ansOf(result.concat(e.target.name));
        }
        const erase=()=>{
          ansOf("");
        }
        const dele=()=>{
          ansOf(result.slice(0,result.length-1));
        }
        const calculate=()=>{
          ansOf(eval(result).toString())
        }
        
       
        
        return (
          
         
        
          
          
            <div className="container">
              
                <input type="text" value={result} />
      
             
              <div className="calc_but">
      
                <button onClick={erase}>C</button>
                <button onClick={dele}>X</button>
                <button name="/" onClick={Click}>&divide;</button>
                <button name="." onClick={Click}>.</button> <br/>
                <button name="8" onClick={Click}>8</button>
                <button name="9" onClick={Click}>9</button>
                <button name="7" onClick={Click}>7</button>
                <button name="*" onClick={Click}>&times;</button><br/>
                <button name="6" onClick={Click}>6 </button>
                <button name="5" onClick={Click}>5</button>
                <button name="4" onClick={Click}>4</button>
                <button name="-" onClick={Click}>&ndash;</button> <br/>
                <button name="3" onClick={Click}>3</button>
                <button name="2" onClick={Click}>2</button>
                <button name="1" onClick={Click}>1</button>
                <button name="+" onClick={Click}>+</button><br/>
                <button  name="0" onClick={Click}>0</button>
                <button name="(" onClick={Click}>(</button>
                <button name=")" onClick={Click}>)</button>
                <button onClick={Click} onClick={calculate} className="result">=</button>
               
      
      
      
              </div>
            </div>
            
             
        )
      
    }

export default Button 