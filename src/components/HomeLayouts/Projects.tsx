import s from "./projects.module.css";
import { Link } from "react-router-dom";
import DataProjects from "../../data/project_data.json";
import { getGithub, type GithubStats } from "../../lib/getGithub";
import { useEffect, useState } from "react";
import TripleCircle from "../CommontLayouts/TripleCircle";

export default function Projects() {
	const projects = DataProjects.projects;
	const [stats, setStats] = useState<GithubStats | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getGithub()
			.then(setStats)
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <p className={s.error}>Loading...</p>;
	if (error) return <p className={s.error}>{error}</p>;
	if (!stats) return null;

	return (
		<section id="project" className={s.projects}>
			<div className={s.con_ttl}>
				<h2>
					Here are some selected projects I’ve worked on, both individually
					and in groups
				</h2>
			</div>
			<div className={s.con_items_github}>
				<div className={s.con_items}>
					{projects.map((item) => (
						<Link
							to={`/projects/${item.id}`}
							key={item.id}
							className={s.item}
						>
							<div className={s.con_img}>
								<img src={item.image} />
							</div>
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
				<div className={s.con_github}>
					<div className={s.github}>
						<h2>Visit More Project on Github /bivanoid</h2>
						<div className={s.con_circle}>
							<TripleCircle ciecleTranslate={40} circleCount={3} circleWidth="5rem"/>
						</div>
						<a href="">
							github/bivanoid<span>Link</span>
						</a>
						<ul>
							<li>
								<h4>Following</h4>
								<p>{stats.following}</p>
							</li>
							<li>
								<h4>Followers</h4>
								<p>{stats.followers}</p>
							</li>
							<li>
								<h4>Repository</h4>
								<p>{stats.totalRepo}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
