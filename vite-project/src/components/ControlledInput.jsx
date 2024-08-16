import React, { useState, useMemo } from 'react';

function ControlledInput() {
    const [ans, setAns] = useState(0);
    const [sum, setSum] = useState(0);
    const [count, setCount] = useState(0);

    function handleInp(e) {
        let no = parseInt(e.target.value, 10);
        setAns(no);

        let aaa = 0;
        for (let i = 1; i <= no; i++) {
            aaa += i;
        }
        setSum(aaa);
    }

    const memoizedSum = useMemo(() => {
        let aaa = 0;
        for (let i = 1; i <= ans; i++) {
            aaa += i;
        }
        return aaa;
    }, [ans]);

    return (
        <div>
            <h1>Input: {ans}</h1>
            <h1>Sum: {memoizedSum}</h1>
            <input type="number" onChange={handleInp} value={ans} />
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
}

export default ControlledInput;
