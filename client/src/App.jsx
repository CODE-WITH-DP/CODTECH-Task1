import { useEffect} from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home/index';
import Loader from "./components/Loader";
import { useSelector, useDispatch } from "react-redux";
// import About from './pages/Home/About';
import { HideLoading, SetPortfolioData, ShowLoading } from "./redux/rootSlice";
import Admin from "./pages/Admin";

function App() {
  const {loading, portfolioData} = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('http://localhost:5000/api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if(!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <BrowserRouter>
    {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
