import s from "./projects.module.css";
import { Link } from "react-router-dom";
import DataProjects from "../../data/project_data.json";

export default function Projects() {
  const projects = DataProjects.projects;

  return (
    <section className={s.projects}>
      <div className={s.con_ttl}>
        <h2>
          Here are some selected projects I’ve worked on{" "}
          <span className="red">★</span>, both individually and in groups
        </h2>
      </div>
      <div className={s.con_items}>
        {projects.map((item) => (
          <Link to={`/projects/${item.id}`} key={item.id} className={s.item}>
            <div className={s.con_name}>
              <h3>{item.name}</h3>
              <p>{item.header_desc}</p>
              <div className={s.con_lang}>
                {item.language.map((language) => (
                  <p key={language.language_name}>
                    <span className={`red ${s.red}`}>{"["}</span>
                    {language.language_name}
                    <span className={`red ${s.red}`}>{"]"}</span>
                  </p>
                ))}
              </div>
            </div>
            <h3 className={s.type}>{item.type}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}