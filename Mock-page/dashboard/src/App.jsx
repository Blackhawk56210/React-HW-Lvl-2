import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Section from './components/section';
import SixCards from './components/six-cards';
import Footer from './components/footer';

function App() {
  const [apiData, setApiData] = useState(null);
  const [count, setCount] = useState(0);

  async function getApiData() {
    const response = await fetch("url")
    const data = await res.json();

    setApiData(data);
  }


  useEffect(() => {
    generateRandomNumber();
  }, [count]);

  return (
    <div className="w-full flex flex-col gap-3 bg-white text-black">
      {data.name}
    </div>
  )
}

export default App


// class App extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   // first render of page
//   componentDidMount() {

//   }

//   // did something change in state, if so re render/ update the page
//   componentDidUpdate() {

//   }

//   // when we leave the page do some clean up work
//   componentWillUnmount() {

//   }

//   render() {

//     return (
//       <div>stuff in here</div>
//     )
//   }
// }




