import { Card } from "./components/Card"

function App() {
  return (
    <>
      <h1 className="text-7xl font-thin text-center">World Weather</h1>
      <p className="text-gray-500 font-normal mt-4 text-center">Keep track of the weather in the place you want</p>
      <div className="flex flex-wrap justify-center items-center mt-20">
        <Card />
      </div>
    <div className="bg-amber-600 w-[60px] h-[60px] flex justify-center self-center rounded-full cursor-pointer fixed bottom-4 right-3"><span className="font-thin text-white text-5xl">+</span></div>
    </>
  )
}

export default App;