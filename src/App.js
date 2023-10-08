
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setvalue] = useState("");
  console.log(value);
  return (
    <div className="App">
     <div className='mx-auto my-20 bg-white rounded-lg w-1/4 p-5'>
       <div>
        <input type="text" className='bg-gray-600 w-[90%] p-4 text-white text-bold text-lg' value={value}/>
       </div>
       <div className='p-5 space-y-4'>
       <div className='flex items-center gap-4 justify-around'>
        <input type='button' value='C' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue("")}/>
        <input type='button' value='DEL' className='bg-green-500 w-20 h-10 text-white' onClick={() => setvalue(value.slice(0,-1))}/>
        <input type='button' value='-' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue(value + e.target.value)} />
        <input type='button' value='/' className='bg-green-500 w-20 h-10 text-white'  onClick={(e) => setvalue( value + e.target.value)}/>
       </div>
       <div className='flex items-center gap-4 justify-around'>
        <input type='button' value='7' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue(value + e.target.value)}/>
        <input type='button' value='8' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue(value + e.target.value)}/>
        <input type='button' value='9' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue(value + e.target.value)} />
        <input type='button' value='*' className='bg-green-500 w-20 h-10 text-white'  onClick={(e) => setvalue( value + e.target.value)}/>
       </div>
       <div className='flex items-center gap-4 justify-around'>
        <input type='button' value='4' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue( value + e.target.value)}/>
        <input type='button' value='5' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue( value + e.target.value)}/>
        <input type='button' value='6' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue(value + e.target.value)} />
        <input type='button' value='-' className='bg-green-500 w-20 h-10 text-white'  onClick={(e) => setvalue( value + e.target.value)}/>
       </div>
       <div className='flex items-center gap-4 justify-around'>
        <input type='button' value='1' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue( value + e.target.value)}/>
        <input type='button' value='2' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue( value + e.target.value)}/>
        <input type='button' value='3' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue(value + e.target.value)} />
        <input type='button' value='+' className='bg-green-500 w-20 h-10 text-white'  onClick={(e) => setvalue( value + e.target.value)}/>
       </div>
       <div className='flex items-center gap-4 justify-around'>
        <input type='button' value='.' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue( value + e.target.value)}/>
        <input type='button' value='0' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue( value + e.target.value)}/>
        <input type='button' value='=' className='bg-green-500 w-20 h-10 text-white' onClick={(e) => setvalue(eval(value))} />
       </div>
       </div>
     </div>
    </div>
  );
}

export default App;
