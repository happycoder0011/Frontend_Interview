import { useState } from 'react';
import usePrevious from './usePrevious';

export default function UsePreviousExample() {
    const [value,setValue] = useState(0);
    const prev = usePrevious(value);

    return (
        <>
        <div>{value}</div>
        <button onClick={() => setValue(i => i+1)}>click</button>
        <div>{prev}</div>
        </>
    )
}