import React from 'react';
import './App.css';
import Departments from "./Departments.js";
import {Dep1,Dep2,Dep3,Dep4,Dep5} from "./Departments.js";
function App(){
  return(
    <>
    <div className='grid'>
    <div className='grid1'>
    <Departments/>
    <Dep1/>
    </div>
    <div className='grid2'>
    <Dep2/>
    <Dep3/>
    </div>
    <div className='grid3'>
    <Dep4/>
    <Dep5/>
    </div>
    </div>
    </>
  );
}
export default App;
