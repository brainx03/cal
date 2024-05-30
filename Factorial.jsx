import React, { useState } from 'react'
import '../Style.css'
const Factorial = () => {
    const[number , setNumber] = useState(0);
    const[factorial , setFactorial] = useState(1);

    const fact = (n) =>{
        if(n==0 || n== 1)
            {
                return 1;
            }

            let result  = 1;
            for(let i  = 1; i<=n; i++)
                {
                    result*=i;
                }

        return result;

    };

    const findFactorial = () =>{
        const newNumber = number + 1;
        setNumber(newNumber);
        setFactorial(fact(newNumber));
    }
    
  return (
    <div className='factorial-calculator'>
      <div className='display'>
        <div>Number : {number}</div>
        <div>Factorial: {factorial}</div>
      </div>
      <button onClick={findFactorial}>+Factorial</button>
    </div>
  )
}

export default Factorial
