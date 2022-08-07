import React, { useState } from 'react';

function HookState() {
    const [action, setAction] = useState(0);
    return (
        <>
            <span>El valor acuatl es: {action} </span>
            <button
                onClick={() => setAction(action + 1)}
            >
                Incrementar
            </button>

        </>
    );
}

export default HookState;
