import {useState} from 'react';

function App() {

  const API_KEY = process.env.WEATHER_API_KEY

  const [noData,setNoData] = useState('No Data')
  const [searchTerm,setSearchTerm] = useState('')
  const [weatherData,setWeatherData] = useState([])
  const [city,setCity] = useState('Unknown')
  const [weatherIcon,setWeatherIcon] = useState(`${process.env.REACT_APP_ICON_URL}10n@2x.png`)

  return (
    <div className="bg-gray-800 flex items-center justify-center w-screen h-screen py-10">
      <div className="flex w-3/4 min-h-full rounded-3x1 shadow-lg m-auto bg-gray-100">

       <div className='form-container'>
         <div className='flex items-center justify-center'>
           <h3 className='my-auto mr-auto text-xl text-orange-500 font-bold shadow-md py-1 px-3 rounded--md bg-white bg-opacity-30'>
             forecast
           </h3>
           <div className='flex p-2 text-gray-100 bg-gray-600 bg-opacity-30 rounded-lg'>
             <i className='fa fa-map my-auto' aria--hidden='true'></i>
             <div className='text-right'>
               <p className='font-semibold text-sm ml-2'>{city}</p>
             </div>
           </div>
         </div>
         <div className='flex flex-col items-center justify-center h-full '>
           <h1 className='text-white text-2x1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tempore ea unde. Quo placeat error aperiam minus </h1>
           <hr className='h-1 bg-white w-1/4 rounded-full my-5' />
           <form noValidate onSubmit={handleSubmit} className='flex justify-center w-full '>
             <input />
           </form>
         </div>

       </div>
      </div>
    </div>
  );
}

export default App;
