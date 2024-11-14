import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "../avatar/Avatar";
import { Comment } from "../comment/Comment";
import "./post.scss";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post bacana"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (evt) => {
    evt.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (evt) => {
    setNewCommentText(evt.target.value);
  };

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  };

  return (
    <article className="post">
      <header>
        <div className="author">
          <Avatar src={author.avatarUrl} />

          <div className="author__info">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="content">
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className="comment__form">
        <strong>Deixe seu feedback</strong>

        <textarea name="comment" onChange={handleNewCommentChange} value={newCommentText} placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className="comment__list">
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />;
        })}
      </div>
    </article>
  );
}
