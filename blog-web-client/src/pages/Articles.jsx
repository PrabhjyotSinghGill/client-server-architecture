import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "./Content.jsx";
import NotFound from "./NotFound.jsx";
import axios from "axios";
import CommentsList from "../components/CommentsList.jsx";

const Articles = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams(); //used from react-router-dom library

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/articles/${articleId}`
      );
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    loadArticleInfo();
  }, []);

  const article = articles.find((article) => article.name === articleId);
  if (!article) {
    return <NotFound></NotFound>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>his article has {articleInfo.upvotes} upvote(s)</p>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments}></CommentsList>
    </div>
  );
};

export default Articles;
