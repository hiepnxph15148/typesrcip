import { useState } from 'react'
import ShowInfo from './components/showInfo'

function App() {
  const products =[ 
    {id: 1, name: "product a"},
    {id: 2, name: "product b"},
  ]
  return (
    <div>
    <h1><ShowInfo name="Sang"/></h1>
    {products.map((item, index) => <div key={index}>{item.name}</div>)}
    </div>
    
  )
};
export default App;
