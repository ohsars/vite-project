import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Add from './components/Add'
import Edit from './components/Edit'

function App() {

  return (
    <>
        <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Add />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </Router>
    </>
  )
}

export default App