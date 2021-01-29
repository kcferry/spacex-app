import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import NextLaunchMain from './components/NextLaunchMain'
import LoadingPage from './components/LoadingPage'
import './App.css'




const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://api.spacexdata.com/v4/launches/next')

      setItems(result.data)
      setisLoading(false)
    }
    fetchItems()
  },[])

  

  return (
    <div className='container'>
      <Header />
      { isLoading ? <LoadingPage /> : <NextLaunchMain isLoading={isLoading} nextLaunch={items} />}
      
    </div>
  );
}

export default App;
