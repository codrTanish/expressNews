import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import React, { useState } from 'react';
import Home from './components/Home';
const App = ()=> {
  const pageSize = 6;
  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_API_KEY
  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={4}
        />
        <Navbar />
        <Switch>
          <Route exact path="/"><Home/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
