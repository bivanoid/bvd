import s from "./dashboard.module.css";
import Logo from "../../assets/icon.svg?react";
export default function Dashboard() {
  return (
    <section className={s.hero}>
      <div className={s.con_content}>
        <Logo />
        <div className={s.btm}>
          <h1>
            Welcome to <br />
            My Portfolio
          </h1>
        </div>
      </div>
    </section>
  );
}
