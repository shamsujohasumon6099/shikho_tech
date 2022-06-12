import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createContext } from 'react';
import { CourseTabData, TabData, FerureResult, SolutionCart } from './SiteData/Tabs';
import './App.scss'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Course from "./Pages/Course/Course";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
export const TabContext = createContext();



function App() {
  return (
    <TabContext.Provider value={[TabData, CourseTabData, FerureResult, SolutionCart]}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="course">
              <Route index element={<Course />}  />
              <Route path=":courseId" element={<CourseDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </TabContext.Provider>
  );
}

export default App;
