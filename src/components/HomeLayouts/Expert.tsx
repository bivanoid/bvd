import TripleCircle from "../CommontLayouts/TripleCircle";
import s from "./expert.module.css";

export default function Expert() {
	return (
		<section className={s.expert}>
			<div className={s.con_expertise}>
				<div className={s.title}>
					<h2>What I can do with my skills?</h2>
					<div className={s.con_circle}>
						<TripleCircle ciecleTranslate={40} circleCount={3} circleWidth="5rem"/>
					</div>
					<ul>
						<li>
							<p><span className="red">[</span>Projects<span className="red">]</span></p>
							<h3>07+</h3>
						</li>
						<li>
							<p><span className="red">[</span>Clients<span className="red">]</span></p>
							<h3>05</h3>
						</li>
						<li>
							<p><span className="red">[</span>Experience<span className="red">]</span></p>
							<h3>03+</h3>
						</li>
					</ul>
				</div>
				<div className={s.con_skills}>
					<div className={s.con_skill}>
						<h3>01</h3>
						<h3>Web Development</h3>
						<span></span>
						<p>website development and maintenance</p>
					</div>
					<div className={s.con_skill}>
						<h3>02</h3>
						<h3>UIUX Designer</h3>
						<span></span>
						<p>
							designing the initial design for the website/application
						</p>
					</div>
					<div className={s.con_skill}>
						<h3>03</h3>
						<h3>Graphic Design</h3>
						<span></span>
						<p>creating a poster or graphic asset</p>
					</div>
				</div>
			</div>
		</section>
	);
}
