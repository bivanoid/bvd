import s from "./certificates.module.css";
import freeCodeCamp from "../../../public/certificatelogo/freecodecamp.webp";
import dicoding from "../../../public/certificatelogo/dicoding.webp";
import duniacoding from "../../../public/certificatelogo/duniacoding.webp";
import aiaseanclass from "../../../public/certificatelogo/aseanlogo.webp";

interface Cfprops {
	id: number;
	img: string;
	title: string;
	from: string;
	link: string;
}

export default function Certificates() {
	const certificatesItem: Cfprops[] = [
		{
			id: 1,
			img: dicoding,
			title: "Belajar Dasar AI",
			from: "Dicoding",
			link: "https://www.dicoding.com/certificates/MEPJ2O37LP3V",
		},
		{
			id: 2,
			img: freeCodeCamp,
			title: "Responsive Web Design",
			from: "FreeCodeCamp",
			link: "https://www.freecodecamp.org/certification/fcc-9dab380d-2e89-4caa-800f-776b1e15b068/responsive-web-design",
		},
		{
			id: 3,
			img: duniacoding,
			title: "Workshop UI/UX + AI",
			from: "Dunia Coding",
			link: "https://www.duniacoding.id/certificate/E-WO80-0004",
		},
		{
			id: 4,
			img: aiaseanclass,
			title: "AI Learning",
			from: "AI Class ASEAN",
			link: "https://drive.google.com/file/d/1s2tM8Z49HHpEAPhX3oBcYmxVrvOUNjXp/view?usp=drive_link",
		}
		// {
		// 	id: 5,
		// 	img: freeCodeCamp,
		// 	title: "Hour of Code",
		// 	from: "Code AI",
		// 	link: "https://studio.code.org/certificates/eyJuYW1lIjoiRmlyZGhhbiBBYml2YW5keWEiLCJjb3Vyc2UiOiJvY2VhbnMiLCJkb25vciI6bnVsbH0",
		// },
	];

	return (
		<section className={s.certificates}>
			<div className={s.con_ttl}>
				<h2>
					My Certificates <span className="red">★</span>.
				</h2>
			</div>

			<div className={s.con_items}>
				{certificatesItem.map((certificate) => (
					<div className={s.item} key={certificate.id}>
						<img
							className={s.img_items}
							src={certificate.img}
							alt={certificate.title}
						/>
						<h3>{certificate.title}</h3>
						<p>{certificate.from}</p>
						{certificate.link ? <a href={certificate.link}>Verificate</a> : ""}
					</div>
				))}
			</div>
		</section>
	);
}
