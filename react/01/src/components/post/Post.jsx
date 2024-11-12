import { Avatar } from "../avatar/Avatar";
import "./post.scss";

export function Post() {
  return (
    <>
      <article className="post">
        <header>
          <div className="author">
            <Avatar src="https://github.com/guilhermepadial4.png" />

            <div className="author__info">
              <strong>Guilherme Padial</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="12 de novembro às 8:53h" dateTime="2024-11-12 08:53:26">
            Públicado há 1h
          </time>
        </header>

        <div className="content">
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
            DoctorCare 🚀
          </p>
          <p>
            👉 <a href="#">jane.design/doctorcare</a>
          </p>

          <p>
            <a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a>
          </p>
        </div>
      </article>
    </>
  );
}
