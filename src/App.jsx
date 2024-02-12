// libraries
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';

// components
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Home />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;