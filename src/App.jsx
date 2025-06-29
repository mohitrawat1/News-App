// App.jsx
import { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'


const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us"); // Default countr

  return (
    <div className='bg-secondary'>
      <Navbar
        setCategory={setCategory}
        setCountry={setCountry}
      />
      <NewsBoard category={category} country={country}/>
    </div>
  )
}

export default App