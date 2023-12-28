import { useRef } from 'react'

import User from './User'


function App() {
 
  const useRefHook=useRef();
  function handleInput(){
   useRefHook.current.focus()
   
   useRefHook.current.style.color="red"
   useRefHook.current.value="UseForwardHook Called"


  }

  return (
    <div className='mid'> 
    <h2>Use Forward Ref hook</h2>
      <User ref={useRefHook}/>
      <button onClick={()=>handleInput()}>handle input</button>
      
    </div>
  )
}

export default App
