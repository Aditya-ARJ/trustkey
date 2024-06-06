import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import About from "./Screens/About";
import ContactUs from "./Screens/ContactUs";
import Services from "./Screens/Services";
import ArticlePage from "./Screens/Article";
import ArticleDetals from "./Screens/ArticleDetails";
import OurClient from "./Screens/OurClient";
import AddAritcle from "./Screens/AddArticle";

export default function App() {
  
  return (
    <BrowserRouter >
      <Routes >
        <Route  path="/" element={<HomeScreen />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />}/>
        {/* <Route path="/pages" element={<About />}/> */}
        <Route path="/services" element={<Services />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/articleDetails" element={<ArticleDetals />} />
        <Route path="/ourclient" element={<OurClient />} />
        <Route path="/admin" element={<AddAritcle />} />







       

      </Routes>
    </BrowserRouter>
  );
}
