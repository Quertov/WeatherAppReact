import { Card } from "./components/Card"
import { Form } from "./components/Form";
import { ReactElement, useState } from "react";

function App() {
  const [formIsOpen, setFormState] = useState<boolean>(false);
  const [cityInInput, setCityInInput] = useState('');
  const [cityList, setCityList] = useState<ReactElement[]>([]);

  const handleForm = () => {
    setFormState((prevFormState: boolean) => !prevFormState);
    setCityInInput('');
  }

  return (
    <>
      <h1 className="text-7xl font-thin text-center">World Weather</h1>
      <p className="text-gray-500 font-normal mt-4 text-center">Keep track of the weather in the place you want</p>
      <div className="flex flex-wrap justify-center items-center mt-20">
        <Card city='Khust' />
        { cityList }
      </div>
    <div 
      className="bg-amber-600 w-[60px] h-[60px] flex justify-center self-center rounded-full cursor-pointer fixed bottom-4 right-3"
      onClick={ handleForm } ><span className="font-thin text-white text-5xl">+</span></div>
    { formIsOpen && <Form handleForm={ handleForm } cityInInput={ cityInInput } setCityInInput={ setCityInInput } setCityList={ setCityList } /> }
    </>
  )
}

export default App;