import s from "./dashboard.module.css";
import gw from "../../assets/images/gw.webp"

import { useLenis } from "lenis/react";
export default function Dashboard() {
	const lenis = useLenis();
	const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

	function toAbout() {
		lenis?.scrollTo("#about", {
			duration: 0.5,
			easing: easeOutCubic,
			offset: 0,
		});
	}
	function toProjects() {
		lenis?.scrollTo("#project", {
			duration: 0.5,
			easing: easeOutCubic,
			offset: 0,
		});
	}
	return (
		<section className={s.hero}>
			<div className={s.con_content}>
				<div className={s.con_logo}>
					<img src={gw}/>
				</div>
				<div className={s.btm}>
					{/*<p>Hii Visitors,</p>*/}
					<div className={s.text_header}>
						<h1>Portfolio<br/>Website</h1>
					</div>
					<div className={s.con_link}>
						<p onClick={toAbout}>
							<span className="red">[</span>Scroll
							<span className="red">]</span>
						</p>
						<span className={s.separator}></span>
						<p onClick={toProjects}>
							<span className="red">[</span>to Projects
							<span className="red">]</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
