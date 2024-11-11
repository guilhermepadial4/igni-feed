import "./header.scss";

import igniteLogo from "../../assets/ignite-simbol.svg";

export function Header() {
  return (
    <>
      <div className="container__header">
        <img src={igniteLogo} alt="Logotipo do Ignite" />
        <p>Iginite Feed</p>
      </div>
    </>
  );
}
