import { useParams } from "react-router-dom";
import articles from "./Content.jsx";
import NotFound from "./NotFound.jsx";

const Articles = () => {
  const { articleId } = useParams(); //used from react-router-dom library
  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotFound></NotFound>;
  }
  
  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Articles;
