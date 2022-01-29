import './App.css';
// import Axios from 'axios';
import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LabelForm } from './elements/labelForm';
import { LabelDisplay } from './elements/labelDisplay';

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/label/entry" element={<LabelForm />} />
        <Route exact path="/label/display" element={<LabelDisplay />} />
      </Routes>
    </Router>


  );
}

export default App;
