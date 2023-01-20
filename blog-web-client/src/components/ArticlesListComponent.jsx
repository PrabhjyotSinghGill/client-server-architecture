import { Link } from "react-router-dom";

const ArticlesListComponent = ({articles}) => {
  return (
    <>
      {articles.map((article) => (
        <div>
          <Link
            classname="article-list-item"
            key={article.name}
            to={`/articles/${article.name}`}
          >
            <h3>{article.title}</h3>
          </Link>
          <p>{article.content[0].substring(0, 150)}...</p>
        </div>
      ))}
    </>
  );
};

export default ArticlesListComponent;
