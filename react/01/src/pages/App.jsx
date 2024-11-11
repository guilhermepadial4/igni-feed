import { Header } from "../components/header/header";
import { Sidebar } from "../components/sidebar/sidebar";

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
          <p>test</p>
        </main>
      </div>
    </>
  );
}
