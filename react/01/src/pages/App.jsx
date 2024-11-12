import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Post } from "../components/post/Post";

import "../styles/reset.scss";
import "../styles/global.scss";
import "../styles/app.scss";

export function App() {
  return (
    <>
      <Header />

      <div className="wrapper">
        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}
