// src/PrimeCalculator.js
import React, { useState } from 'react';
import '../Style.css';

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    // for (let i = 5; i * i <= num; i += 6) {
    //     if (num % i === 0 || num % (i + 2) === 0) return false;
    // }

    return true;
};

const PrimeCalculator = () => {
    const [number, setNumber] = useState(0);
    const [isPrimeResult, setIsPrimeResult] = useState(false);

    const handleIncrementAndCheckPrime = () => {
        const newNumber = number + 1;
        setNumber(newNumber);
        setIsPrimeResult(isPrime(newNumber));
    };

    return (
        <div className="prime-calculator">
            <div className="display">
                <div>Number: {number}</div>
                <div>Result: {isPrimeResult ? 'Prime' : 'Not Prime'}</div>
            </div>
            <button onClick={handleIncrementAndCheckPrime}>+isPrime</button>
        </div>
    );
};

export default PrimeCalculator;
