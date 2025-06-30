import { AutoplayContextProvider } from "./context/Autoplay";
import MovieContextProvider from "./context/MovieContext";
import { PlayContextProvider } from "./context/PlayContext";
import { Broadcast } from "./pages/Broadcast";
import Log from "./pages/Log";
import Movie from "./pages/Movie";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import LoginContextProvider from "./context/LoginContext";



function App() {
  return (
    <MovieContextProvider>
      <PlayContextProvider>
        <AutoplayContextProvider>
          <LoginContextProvider>
            <div className="site-body">
              <Router>
                <Routes>
                  <Route path="/" element={<Movie />} />
                  <Route path="/welcome" element={<Movie />} />
                  <Route path="/broadcast" element={<Broadcast />} />
                  <Route path="/log" element={<Log />} />
                  <Route path="/signup" element={<SignUp />} />
                </Routes>
              </Router>
            </div>
          </LoginContextProvider>    
        </AutoplayContextProvider>  
      </PlayContextProvider>
    </MovieContextProvider>
  );
}



export default App;

