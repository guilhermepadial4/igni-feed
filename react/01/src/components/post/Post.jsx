import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "../avatar/Avatar";
import { Comment } from "../comment/Comment";
import "./post.scss";

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

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
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return <p><a>{line.content}</a></p>;
          }
        })}
      </div>

      <form className="comment__form">
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className="comment__list">
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
