import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import { useState } from 'react'
import axios from 'axios'
// import New from './New'
// layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import ResultAnalysis from './pages/ResultAnalysis'
import StackedBarCharts from './pages/Components/stackedbarchart'
import HorizontalBarCharts from './pages/Components/barchart'
import BasicTable from './pages/Components/table'
import ParamPopup from './pages/Components/ParamPopup'
// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="ra" element={<ResultAnalysis />} />
      {/* <Route path="new" element={<New/>}/> */}
      {/* <Route path="pop" element={<ParamPopup />} /> */}
      {/* <Route path="stacked" element={<StackedBarCharts />} />
      <Route path="horizon" element={<HorizontalBarCharts />} />
      <Route path="table" element={<BasicTable />} /> */}
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

// import React, { useState, useEffect } from "react";


// function App() {
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() => {
//     fetch("/time")
//       .then((res) => res.json())
//       .then((data) => {
//         setCurrentTime(data.time);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         ... no changes in this part ...
//         <p>The current time is {currentTime}.</p>
//       </header>
//     </div>
//   );
// }

// export default App;