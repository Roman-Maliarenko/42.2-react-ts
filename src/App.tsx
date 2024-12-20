
import { BrowserRouter, Routes, Route } from "react-router-dom";


//import Lesson10 from "lessons/Lesson10/Lesson10";



import GlobalStyles from "./styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import Home from "components/pages/Home/Home";
import About from "components/pages/About/About";
import Users from "components/pages/Users/Users";
import Clients from "components/pages/Clients/Clients";
import Cola from "components/pages/Clients/components/Cola/Cola";
import Fanta from "components/pages/Clients/components/Fanta/Fanta";
import Sprite from "components/pages/Clients/components/Sprite/Sprite";

// import Lesson06 from "./lessons/Lesson06/Lesson06";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
// import Lesson09 from "lessons/Lesson09/Lesson09";

// import Lesson11 from "lessons/Lesson11/Lesson11";


// import Lesson11 from "lessons/Lesson11/Lesson11";

//import Lesson11 from "lessons/Lesson11/Lesson11";




// import Homework08 from "./homeworks/Homework08/Homework08";
// import Homework11 from "homeworks/Homework11/Homework11";

function App() {
  return (

    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element="Page not found" />
          <Route path="logo" element={<Home />} />
          <Route path="clients" element={<Clients />} />
          <Route path="/clients/cola" element={<Cola />} />
          <Route path="/clients/fanta" element={<Fanta />} />
          <Route path="/clients/sprite" element={<Sprite />} />
        </Routes>
      </Layout>
      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Consultation04 /> */}
      {/* <Homework07 /> */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* <Lesson09 /> */}
      {/* <Lesson11 /> */}
    </BrowserRouter>
    <>
    <GlobalStyles />
    {/* <Lesson06 /> */}
    {/* <Lesson07 /> */}
    {/* <Consultation04 /> */}
    {/* <Homework07 /> */}
    {/* <Lesson08 /> */}
    {/* <Homework08 /> */}
    {/* <Lesson09 /> */}

    {/*<Lesson10 /> */}
    {/* <Lesson11 />  */}
     {/* <Homework11 /> */}

<!--     <Lesson11 /> -->

  </>

  );
}

export default App;
