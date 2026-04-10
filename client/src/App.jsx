import React from 'react'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/createpost' element={<CreatePost/>}></Route>
          <Route path='/about' element={<h1>hellll</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
