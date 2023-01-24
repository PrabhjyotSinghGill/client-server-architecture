import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ArticleList from "./pages/ArticleList.jsx";
import Articles from "./pages/Articles.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navigation from "./Navigation.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation></Navigation>
        <h1>Blog</h1>
        <div className="body" id="page-body">
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route
              exact
              path="/articles"
              element={<ArticleList></ArticleList>}
            ></Route>
            <Route
              path="/articles/:articleId"
              element={<Articles></Articles>}
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

