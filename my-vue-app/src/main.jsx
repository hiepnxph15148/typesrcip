import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

    const root = document.querySelector('#root');
    // const myName = "Hiệp";
    // const myAge = 20;
    // const myStatus = true;
    // const myInfo = {
      // name : "Hiệp",
      // age: 20,
      // status : true,
    // }
    // function showInfo(props){
      // return <p>Hello{props.name}</p>
    // }
    // const ShowInfo1 =(props) =>{
      // return <p>Hello{props.name}</p>
    // }
        // 
ReactDOM.render(
  <div>
    {/* <div> */}
      {/* {showInfo({ name :"Hiệp"})} */}
    {/* </div> */}
    <div>
    {/* <ShowInfo name="Hiệp nè" />  */}
    <App />
    </div>
  </div>,root
)
