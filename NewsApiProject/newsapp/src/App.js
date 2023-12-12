import React from 'react';
import SignUp from './sign-up/SignUp';
import SignIn from './SignIn/SignIn';
import HomePage from "./HomePage/HomePage";
import Getnews from './Categories/getnews';
import Gettechnologynews from './Categories/gettechnologynews';
import Getentertainmentnews from './Categories/getentertainmentnews';
import  Getbusinessnews from './Categories/getbusinessnews';
import Getfavouritenews from './Categories/getfavouritenews';
import  Gethealthnews from './Categories/gethealthnews';
import  Getsciencenews from './Categories/getsciencenews';
import  Getsportsnews from './Categories/getsportsnews';
import Forgetpassword from './SignIn/ForgotPassword';
import Profile from './Profile/profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './HomePage/Search';
import { NewsContext} from './Context/context';
function App() {
  const [getfun,setfun]=React.useState("")
  return (
    <div>
      <BrowserRouter>
      <NewsContext.Provider value={{getfun,setfun}}>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Forgetpassword" element={<Forgetpassword />} />
          <Route path="/Profile" element={<Profile/>} />
<Route path="/" element={<HomePage />}>
<Route path="" element={<Getnews/>}/>
<Route path="search" element={<Search />}/>
<Route path="favourite" element={<Getfavouritenews/>}/>
<Route path="business" element={<Getbusinessnews/>}/>
<Route path="sports" element={<Getsportsnews />}/>
<Route path="science" element={<Getsciencenews/>}/>
<Route path="technology" element={<Gettechnologynews/>}/>
<Route path="health" element={<Gethealthnews/>}/>
<Route path="entertainment" element={<Getentertainmentnews/>}/>
</Route>
        </Routes>
        </NewsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
