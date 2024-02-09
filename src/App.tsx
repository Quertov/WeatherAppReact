import { Card } from "./components/Card"
import { useState } from 'react';

function App() {
  const [formIsOpen, setFormState] = useState<boolean>(false);

  const handleForm = () => {
    setFormState((prevFormState: boolean) => !prevFormState);
  }

  return (
    <>
      <h1 className="text-7xl font-thin text-center">World Weather</h1>
      <p className="text-gray-500 font-normal mt-4 text-center">Keep track of the weather in the place you want</p>
      <div className="flex flex-wrap justify-center items-center mt-20">
        <Card />
      </div>
    <div 
      className="bg-amber-600 w-[60px] h-[60px] flex justify-center self-center rounded-full cursor-pointer fixed bottom-4 right-3"
      onClick={ handleForm } ><span className="font-thin text-white text-5xl">+</span></div>
    { formIsOpen && <div id="modalBg" className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
        <div className="w-[400px] h-[200px] p-5 bg-white rounded flex justify-between flex-col">
          <span className="text-3xl">Add place</span>
          <input type="text" placeholder="Enter city here..." className="p-2 outline-none border-b-2 border-gray-300 w-full" />
          <div>
            <button className="text-amber-600 font-semibold ml-auto mr-3">ADD</button>
            <button onClick={ handleForm } className="text-amber-600 font-semibold ml-auto">CLOSE</button>
          </div>
        </div>
      </div> }
    </>
  )
}

export default App;