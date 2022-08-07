import React, { useEffect, useState } from 'react';

function HookEffect() {
    const [actionEffect, setActionEffect] = useState('Hello');
    const handleAlert = () => {
        alert('I am button');
    };
    useEffect(()=>{
        //alert('Hello Again');
        setActionEffect('Hello Again');
    },[]);
    //},[actionEffect]);
    return (
        <>
            <button
                //onClick={() => setAction(action + 1)}
                //onClick={()=>setAction('Than you')}
                onClick={handleAlert}
            >
                Submit
            </button>
            <p>{actionEffect}</p>
        </>
    );
}

export default HookEffect;
