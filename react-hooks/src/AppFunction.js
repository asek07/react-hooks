import React, { useState, useEffect } from 'react';
import GitUser from './GitUser'

const App = () => {

  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: null, y: null})
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    //component didmount
    document.title = `Count clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    //Component did unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, [count])

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  }

  const handleMouseMove = event => {
    setMousePosition({
        x: event.pageX,
        y: event.pageY
      })
  }

  const handleOnline = () => {
    setStatus(true);
  }
  
  const handleOffline = () => {
    setStatus(false);
  }

  return (
    <div>
      <h2>Counter</h2>
        <button onClick={incrementCount}>
        You clicked the button {count} times
      </button>

      <div>
        <h2>Toggle Light</h2>
        <p>Click the light to turn it on and off!</p>
        <div>
          <img 
          alt={"flashlight"}
          onClick={toggleLight}
          src ={
            isOn ? 'https://icon.now.sh/highlight/fd0' 
                 : 'https://icon.now.sh/highlight/aaa' 
          }
          style={{
            height: '50px', 
            width: '50px'}}
          />
        </div>
      </div>

      <div>
        <h2>Mouse position</h2>
        {JSON.stringify(mousePosition, null, 2)}
        <br />
      </div>

      <div>
        <h2>Status</h2>
          <p>
            Status: 
            <img  style={
              { height: '10px', 
                width: '10px', 
                borderRadius: 5,
                marginRight: '5px', 
                marginLeft: '5px',
                background: status ? 'green' : 'red'}}
              />
            <strong>{status ? 'Online': 'Offline'}</strong>
          </p>
      </div>
      <GitUser />
    </div>
  )
}

export default App;