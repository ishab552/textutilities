import './App.css';
import React, { useState } from 'react'       //imrs
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';

// import{
//   BrowserRouter,
//   Routes,
//   Route,
//   // createRoot,
//   // Link,
//   // NavLink
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //state variable which tells dark mode is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      // setInterval( ()=>{
      //   document.title = 'Textutils is amazing';
      // }, 2000);
      // setInterval( ()=>{
      //   document.title = 'Installed Textutils now';
      // }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}

      {/* <BrowserRouter> */}

      <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path ="/about" element={<About/>} /> */}
          {/* <Route exact path ="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze " mode={mode}/>} /> */}
        {/* </Routes> */}

        <TextForm showAlert={showAlert} heading="Enter the text to analyze " mode={mode}/>
        {/* <Navbar/> */}
        {/* <About/> */}

      </div>

      {/* </BrowserRouter> */}
    </>
  );
}
export default App;
