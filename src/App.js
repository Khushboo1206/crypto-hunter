// import { BrowserRouter, Route } from 'react-router-dom';
// import './App.css';
// import Header from "./Components/Header"
// import Homepage from './Pages/Homepage';
// import Coinpage from './Pages/Coinpage';

// function App() {
//   return (
//     <BrowserRouter>
//      <div>
//       <Header/>
//       <Route path="/" component={Homepage}/>
//       <Route path="/Coins/:id" component={Coinpage}/>
//      </div>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from "@material-ui/core/styles";



  const useStyles= makeStyles(()=> ({
    App: {
     backgroundColor: '#14161a',
     color: "white",
     minHeight: "100vh"
    },
  }));
  function App() {
   const classes = useStyles()

  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<Coinpage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
