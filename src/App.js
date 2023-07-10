import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Herader';
import Images from './components/Images';
// import List from './components/List';
import TODO from './components/TODO';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<TODO />} />
        <Route path="/assignment2" element={<Images />} />
      </Routes>
      {/* <TODO/> */}
    </div>
  );
}

export default App;
