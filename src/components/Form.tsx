import { FC, ReactElement, useState } from 'react';
import { Card } from './Card';

interface FormProps {
    handleForm: any
    cityInInput: string,
    setCityInInput: React.Dispatch<React.SetStateAction<string>>,
    setCityList: any
};

export const Form: FC<FormProps> = ({ handleForm, cityInInput, setCityInInput, setCityList }) => {
    const [isInputError, setInputError] = useState(false);

    const cityInputHandler = (event: any) => {
        setCityInInput(event.target.value);
    }

    const addCity = () => {
        if (!cityInInput || !cityInInput.trim()) {
          setInputError(true);
          return;
        }
        setInputError(false);
        setCityList((prevCityList: ReactElement<any, string>[]) => prevCityList.concat(<Card city={ cityInInput } />));
        setCityInInput('');
    }

    return (
        <div id="modalBg" className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
        <div className="w-[400px] h-[200px] p-5 bg-white rounded flex justify-between flex-col">
          <span className="text-3xl">Add place</span>
          <input value={ cityInInput } onChange={ cityInputHandler } type="text" placeholder="Enter city, region or country here..." className="p-2 outline-none border-b-2 border-gray-300 w-full" />
          { isInputError && <span className="text-red-500 ">Please enter the city</span> }
          <div>
            <button onClick={ () => { addCity(); handleForm() } } className="text-amber-600 font-semibold ml-auto mr-3">ADD</button>
            <button onClick={ handleForm } className="text-amber-600 font-semibold ml-auto">CLOSE</button>
          </div>
        </div>
      </div>
    )
}