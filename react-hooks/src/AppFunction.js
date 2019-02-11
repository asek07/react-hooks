import React, { useState, useEffect } from 'react';

const App = () => {

  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: null, y: null})

  useEffect(() => {
    document.title = `Count clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
    </div>
  )
}

export default App;