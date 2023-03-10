import React from 'react';
import "./index.css";
import Defaultlayout from '../layout/Defaultlayout';

function App() {
  return (
    <>
      <h1>hello world</h1>
      <Test/>
      <Defaultlayout>
        hello my nmae is vy sengtray so today is so good that to meet u
      </Defaultlayout>
    </>
  );
}
const Test: React.FC = ()=>{
  return(
    <h2>sengtray</h2>
  );
}
export default App;
