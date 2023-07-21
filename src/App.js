import './App.css';
import React, { useState,  useEffect} from 'react';


function App() {

  const [data,setData]= useState(
    {
      'content':'Here Quote will come',
      'author':'Here Author will come',
      'dateAdded':'Here the date when Quote was added is displayed'    }
  );

  function getQuote(){
    try{
    fetch('https://api.quotable.io/random').then(
      response=>response.json()).then(
        (quote)=>{setData(quote)}
      )}
    catch(e){
      alert(e);
    }}

  return (
    <div className="App">
      <header className="App-header">
      <h2 className='Title'>Random Quote Generator</h2>
        <h3 className='Quote'>Quote: {data.content}</h3>
        <h3 className='Author'>Author: {data.author}</h3>
        <h3 className='Date'>Date Added : {data.dateAdded}</h3>
        <button onClick={getQuote} className='Buttom'>Get New Quote</button>
      </header>
    </div>
  );
}

export default App;
