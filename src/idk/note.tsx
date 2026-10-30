import s from "./note.module.css";

export default function Hi() {
	const NOMOR_WA = import.meta.env.VITE_WA;
	function linkWA(pesan) {
		return `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;
	}
	return (
		<div className={s.con}>
			<p>
				Hi, ini aku, yang dulunya selalu bikin kamu kesel, kecewa, sering
				mengabaikan tanggapanmu, dan selalu membatasi kebebasanmu.
			</p>

			<p>
				maaf aku mengganggumu lagi, aku hanya mau mengeluarkan unek-unekku
				selama ini, sekarang aku engga punya siapa-siapa lagi buat ungkapin
				perasaanku, aku juga bingung mau keluhin kesiapa, rasanya hal ini
				sensitif untuk ku ceritain ke temenku, dan ahkirnya aku berfikir ke
				kamu aja, tapii yaa, keknya harus aku pikir-pikir ulang deh,
				sekarang udah lost interest kamunya. dan ahkirnya aku kepikiran buat
				ini web biar bisa ngeringkas semua kayak yappingan biasanya.
			</p>

			<p>
				aku bener-bener engga tau kenapa ahkir-ahkir ini berat banget, baik
				apa yang terjadi kepadaku maupun apa yang aku yang selalu aku
				pikirkan. dannn aku engga nyangka aja kejadian kemaren bener-bener
				terjadi, hal yang selalu aku takutin dari dulu beneran kejadian,
				kamu punya seorang pasangan dalam diam dan dengan cara
				menyembunyikannya dariku. di malem itu aku bener-bener engga tidur
				sampe subuh, saking aku engga percaya dan kehabisan kata-kata untuk
				itu, bahkan sampai sekarang aku masih ga nyangka. sakit banget
				rasanya, dan ini pertama kalinya sesakit ini.
			</p>

			<p>
				tapi memang pilihanmu, kamu memilih seseorang yang memang kamu
				pengenin banget kayak, dia suka maen keluar, komunikasinya engga
				kaku, ganteng, dan effort tinggi. dia mungkin akan jadi pendengar
				yang baik dariku, apalagi kalian "sekelas" mungkin?, aku ga tau
				pastinya, jadi untuk ngobrol secara langsung juga enak toh karena
				bisa ketemuan. maaf aku engga sesempurna itu, maaf atas banyaknya
				kekurangan di dalam diriku, dan maaf aku sudah{" "}
				<b>menaruh hatiku ke kamu sejak lama.</b>
			</p>

			<p>
				iyahh, maaf, aku sejak dulu suka sama kamu (maaf disaat yang ga
				tepat ngomonginnya). aku jatuh hati ke kamu karena kamu selalu ada
				buatku, kamu selalu dengerin aku, dan aku ngerasa kita kek apayahh,
				kita kayak saling melengkapi gitu dan selalu ada satu sama lain
				(sudut pandangku), kamu selalu ngeshare keseharianmu, kadang pap,
				ngirim stiker kamu, trus cerita keseharianmu di setiap hari, rasanya
				berbunga-bunga karena ada orang yang mau seintens itu sama aku
				selama ini. bahkan ketika kamu membicarakan kekuranganmu, masalahmu
				atau apapun itu yang terkait dengan hal negatif tentang dirimu, aku
				malah nambah luluh, aku pengen disisimu lali perbaikin itu
				bareng-bareng atau biarkan itu dan aku terbiasa dengan sikap baperan
				dan emosianmu.
			</p>

			<p>
				lalu aku juga pengen usahain jadi yang erbaik buat kamu, pengen
				ekonomiku stabil, badan yang bagus, pengen jadi sosok pasangan yang
				bener-bener ada buat pasangan maupun keluarga (aku belajar banyak
				dari kamu hidupmu). tapi ya memang langkahku lambat, nyari kerja
				susah, udah kemana-mana sering aja ga dapet, karena aku gaada bakat
				dibidangnya mungkin, aku pengennya tuh nyari kerja buat bikin sim
				terus jadi driver ojol buat income tambahan, tapi yah kenapa ga
				dapet-dapet. trus klo uda ada uang aku pengen perbaikin diriku lalu
				nemuinmu di pwt sana naik kereta yang harganya 200k an. dulu kamu
				pengen ketemuan sama aku kan di jogja, dan aku nolak?. yah, karena
				aku engga pd sama diriku, aku engga mau kamu malu didepan
				temen-temenmu, walaupun sebenernya aku pengen banget fotbar sama
				kamu.
			</p>

			<p>
				sekarang kamu mulai memahami kenapa dulu aku sering bersikap
				berlebihan kepadamu, seperti pas kamu keluar-keluar ga pake hijab
				aku langsung tegur karena aku tau mata orang lelaki ke perempuan itu
				gimana, trus ketika kamu bicarain orang yang kamu suka sikapku jadi
				beda karena aku cemburu (aku cemburuan emng), dan banyak konflik
				terjadi karena aku menahan pengungkapan rasa suka ke kamu, saking
				banyaknya kita konflik sampai aku lupa, chat wa ku sama kamu engga
				pernah kosong sejak 15 April 2023, bahkan di second accountmu.
			</p>

			<p>
				makasih ya buat semuanya, ada rasa bahagia, ada rasa sakit, lalu
				banyak hal-hal yang kita udah lalui bersama, dan aku kagum kita bisa
				sampai disini, di ahkir, ahkir dari semua. dan kamu sudah mempunyai
				sosok baru dihidupmu, semoga dia lebih baik dariku dan selalu
				ngejaga kamu dan ngearahin kamu ke hal-hal yang baik, bikin kamu
				senyum terus dan merasa disayangi olehnya. makasih atas perjalanan
				panjanganya, mungkin setelah ini kamu ada hal buat ditanyakan?,
				silahkan tanya, namun jika sudah dirasa cukup aku akan hapus
				semuanya dan memblokir sebagian komunikasi diantara kitanya, namun
				jika kamu ada apa-apa, aku masih ada nomor satunya yang masih
				terhubung dan terbuka buatmu. terimakasih
			</p>
			<p>
				makasih atas effortmu yaa karena udh baca sampai ahkir
			</p>
			<a
				className={s.link}
				href={linkWA("aku udh baca bang")}
				target="_blank"
				rel="noopener noreferrer"
			>
				Link wa
			</a>
		</div>
	);
}
