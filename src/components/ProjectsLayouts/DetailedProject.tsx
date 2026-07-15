import { useParams } from "react-router-dom";
import s from "./detailedProject.module.css";
import DataProjects from "../../data/project_data.json";
import Navbar from "../CommontLayouts/Navbar";

export default function DetailedProject() {
  const { id } = useParams();
  const project = DataProjects.projects.find((item) => item.id === id);

  if (!project) {
    return <h2>404 Not Found</h2>;
  }

  const technology = project.detail?.flatMap((d) => d.technology ?? []) ?? [];
  const allLibraries = project.detail?.flatMap((d) => d.library ?? []) ?? [];

  return (
    <section className={s.article}>
      <Navbar ttl={`: ${project.id}`} nav={true} backTo={"/"} />
      <div className={s.con_article}>
        <div className={s.header}>
          <h1>{project?.name}</h1>
          <h3>{project?.type}</h3>
        </div>
        <main>
          <div className={s.con_sticky}>
            <div className={s.sticky}>
              <div className={s.con_sticky_content}>
                <div
                  className={s.img}
                  style={{
                    background: `url(${project?.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <h3>{project?.header_desc}</h3>
                <span className={s.cross}></span>
                <h3>Languages Program</h3>
                <div className={s.con_lang}>
                  {project?.language.map((language) => (
                    <p key={language.language_name}>
                      <span className={`red ${s.red}`}>{"["}</span>
                      {language.language_name}
                      <span className={`red ${s.red}`}>{"]"}</span>
                    </p>
                  ))}
                </div>
              </div>
              <a href={project?.link}>{project?.textBtn}</a>
            </div>
          </div>
          <div className={s.con_main}>
            <div className={s.details}>
              <p>{project.short_desc}</p>
            
              {technology.length > 0 && (
                <div className={s.technology}>
                  <h2>
                    <span className="red">[</span>
                    Technology Used
                    <span className="red">]</span>
                  </h2>
                  <ol>
                    {technology.map((technology, i) => (
                      <li key={i}>{technology.technology_name}</li>
                    ))}
                  </ol>
                </div>
              )}
            
              {allLibraries.length > 0 && (
                <div className={s.library}>
                  <h2>
                    <span className="red">[</span>
                    Library
                    <span className="red">]</span>
                  </h2>
                  <ol>
                    {allLibraries.map((library, i) => (
                      <li key={i}>{library.library_detail}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}