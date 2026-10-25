import s from "./tripleCircle.module.css";

interface Props {
	circleCount: number;
	circleWidth: string;
	ciecleTranslate: number;
}

export default function TripleCircle({ circleCount, circleWidth, ciecleTranslate }: Props) {
	return (
		<div className={s.con_circle}>
			{Array.from({ length: circleCount }).map((_, i) => (
				<div
					key={i}
					style={{
						width: circleWidth,
						transform: `translateX(${i * -ciecleTranslate}%)`,
					}}
					className={s.circle}
				/>
			))}
		</div>
	);
}