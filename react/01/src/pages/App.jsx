import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Post } from "../components/post/Post";

import "../styles/reset.scss";
import "../styles/global.scss";
import "../styles/app.scss";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/guilhermepadial4.png",
      name: "Guilherme Padial",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-11-14 8:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className="wrapper">
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  );
}
