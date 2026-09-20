import s from "./dashboard.module.css";
import Logo from "../../assets/icon.svg?react";
import { useLenis } from "lenis/react";
import FloatingIcon from "../CommontLayouts/FloatingIcon";
export default function Dashboard() {
	const lenis = useLenis();
	const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

	function toAbout() {
		lenis?.scrollTo("#sidebar", {
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
			<FloatingIcon positionAbsolute={true} rotateIcon="90deg"/>
			<div className={s.con_content}>
				<div className={s.con_logo}>
					<Logo />
				</div>
				<div className={s.btm}>
					{/*<p>Hii Visitors,</p>*/}
					<h1>
						<span>Welcome to </span><br />
						My Portfolio
					</h1>
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
