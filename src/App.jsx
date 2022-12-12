import './App.css'
import 'bulma/css/bulma.min.css'
import axios from 'axios'
import Card from './components/card'
import { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  const getApiData = async() => {
    try {
      const res = await axios.get('https://dummyjson.com/products')

      setData(res.data.products)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getApiData()
  })

  return (
    <div className="App" >
      { data && data.map(p => {
        return <Card 
                key={p.id}
                title={p.title}
                desc={p.description}
                price={p.price}
                brand={p.brand} 
                category={p.category}
          />
      })}
    </div>
  )
}

export default App
