import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import HomeDetails from './Home/Details/HomeDetails';
const HomeRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details" element={<HomeDetails />} />
    </Routes>
  );
};

export default HomeRoutes
