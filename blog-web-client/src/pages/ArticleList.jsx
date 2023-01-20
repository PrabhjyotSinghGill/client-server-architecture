import articles from "../pages/Content.jsx";
import ArticlesListComponent from "../components/ArticlesListComponent.jsx";

const ArticleListPage = () => {
  return (
    <div>
      <h1>Articles</h1>
      <ArticlesListComponent articles={articles}></ArticlesListComponent>
    </div>
  );
};

export default ArticleListPage;
