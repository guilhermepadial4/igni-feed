import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../avatar/Avatar";

import "./comment.scss";

export function Comment({ content, onDeleteComment }) {
  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  return (
    <div className="comment">
      <Avatar hasBorder={false} src="https://github.com/guilhermepadial4.png" />

      <div className="comment__box">
        <div className="comment__content">
          <header>
            <div className="author__and_time">
              <strong>Guilherme Padial</strong>
              <time title="12 de novembro às 8:53h" dateTime="2024-11-12 08:53:26">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <div className="test">
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </div>
      </div>
    </div>
  );
}
