import React, { memo } from 'react';

function MemoFn(props) {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
}

const FinalMemoFn = memo(function (props) {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
});

export default FinalMemoFn;
