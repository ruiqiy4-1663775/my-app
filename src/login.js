import React, { useState, useEffect} from 'react';
import {loginToServiceLayer} from './utility'

export function Login() {
    const [sessionId, setsessionId] = useState("");

    useEffect(() => {
      loginToServiceLayer().then(id => {
        setsessionId(id);
      })
    }, [])

    function clickHandler() {
      loginToServiceLayer()
      .then(id => {
        setsessionId(id);
      });
    }
    return (
      <div>
        <button className='bg-cyan-500 hover:bg-cyan-600 rounded-full px-8 text-base' onClick ={clickHandler}>Connect to service layer</button>
        {sessionId !== "" && <Popup message={"login success! Your session id: " + sessionId} />}
      </div>
    );
}

function Popup({message}) {
    return (
        <>
            <div className='text-green-600 text-base'>
            <p>{message}</p>
            </div>
        </>
    );
};