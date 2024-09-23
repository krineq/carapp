import Header from "./components/Header";
import "./assets/css/style.css"
import NewsPage from "./components/NewsPage";
import PostDetailPage from "./pages/PostDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import PostsByCategoryPage from "./pages/PostsByCategoryPage";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<NewsPage/>}/>
          <Route path="/post/:id" element={<PostDetailPage/>}/>
          <Route path="/categories" element={<CategoriesPage/>}/>
          <Route path="/category/news/:id" element={<PostsByCategoryPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
