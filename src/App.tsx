import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import Home from "components/pages/Home/Home";
import About from "components/pages/About/About";
import Users from "components/pages/Users/Users";
import Clients from "components/pages/Clients/Clients";
import FirstComponent from "components/pages/Clients/components/FirstComponent/FirstComponent";
import SecondComponent from "components/pages/Clients/components/SecondComponent/SecondComponent";
import ThirdComponent from "components/pages/Clients/components/ThirdComponent/ThirdComponent";

// import Lesson06 from "./lessons/Lesson06/Lesson06";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
// import Lesson09 from "lessons/Lesson09/Lesson09";
// import Lesson11 from "lessons/Lesson11/Lesson11";

// import Homework08 from "./homeworks/Homework08/Homework08";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="path" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element="Page not found" />
          <Route path="logo" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </Layout>

      {/* <Route path="/firstComponent" element={<FirstComponent />}/>
      <Route path="/secondComponent" element={<SecondComponent />}/>
      <Route path="/thirdComponent" element={<ThirdComponent />}/> */}
      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Consultation04 /> */}
      {/* <Homework07 /> */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* <Lesson09 /> */}
      {/* <Lesson11 /> */}
    </BrowserRouter>
  );
}

export default App;
