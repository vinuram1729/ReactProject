import React from 'react';
import ReactDOM from 'react-dom/client';
import ListItem  from './List/ListItem'
const arr = ["one", "two", "three"]
const disabled = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
const obj = {
  backgroundColor:"green",
  padding:"5px",
  color:"white",
  borderRadius:"2px",
  fontWeight:"bold",
  
}
const buttonStyle ={
  padding:'10px'

}
function myClick(){
  alert('clicked')
}
// creating components

// root.render(
//   <div id="my-hello" className={disabled ? 'is-disabled':'is-enabled'}> Hello</div >
// );
// inline styling and array iteration
// root.render(
//   <div style={obj}> {arr.map(function(item){
//     return <label key={item}><h1>{item}</h1></label>
//   })}
//   <button style ={buttonStyle}onClick={myClick}>Click</button>
//   <br>
// </br>

//   </div >
// );
root.render (
  <div>
<ListItem />
  </div>
);
