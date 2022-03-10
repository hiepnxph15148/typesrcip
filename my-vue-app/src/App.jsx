import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

function App() {
  const [count, setCout] = useState(0)
  const [myName, setMyName] = useState("Hiệp")
  const [status, setStatus] = useState(false)

  // const products =[
    // {id :1, name: "Products A"},
    // {id :2, name: "Products B"},
    // {id :3, name: "Products C"},
  // ]
  const [products,setProducts] = useState([
    {id :1, name: "Products A"},
    {id :2, name: "Products B"},
    {id :3, name: "Products C"},
  ])
  return(
    <div>
      Count: {count} <button onClick={() => setCout(count + 1)}>Click</button>
      <hr />
      {myName} <button onClick={() => setMyName("Phanh")}>Change Name</button>
      <hr />
      <button onClick={() => setStatus(!status)}>Toggleb</button>
      <hr />
      {status ? products.map((item,index) => <div key={index}>{item.name}</div>) : ""}
      <ShowInfo name ="Hiệp" />
      <ShowInfo name ="Phanh" />
      <ShowInfo name ="Gà" />
    </div>
  )
}

export default App
