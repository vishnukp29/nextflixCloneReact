import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import {originals,actions,comdey,horror,romance,documentaries} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={actions} title='Action Movies' isSmall/>
      <RowPost url={comdey} title='Comedy Movies' isSmall/>
      <RowPost url={horror} title='Horror Movies' isSmall/>
      <RowPost url={romance} title='Romance Movies' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
