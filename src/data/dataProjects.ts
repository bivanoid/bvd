import bicture from "../assets/img/bicture_umb.webp";

interface Tech {
    lang: string;
}

interface ProjectsType {
    id: string;
    name: string;
    desc: string;
    link: string;
    type: string;
    tech: Tech[];
    detail: string[];
    textBtn: string;
    image: string;
}

export const DataProjects: ProjectsType[] = [
    {
        id: "bicture",
        name: "Bicture",
        link: "https://github.com/bivanoid/bicture-app",
        desc: "Mini Social Media Apps",
        type: "Application",
        tech: [
            { lang: "JAVA" },
            { lang: "XML" },
            { lang: "FIREBASE" }
        ],
        detail: [
            "Bicture is a mini social media application built with Java, XML, and Firebase. ",
            "The app allows users to share photos (JPG, PNG, and GIF), interact through likes and comments, follow other users, bookmark posts, and explore profiles. It also includes features such as post editing and deletion, profile customization, user search, and light/dark theme support.",
            "Firebase is used to handle authentication, data storage, and real-time updates across the platform.",
        ],
        textBtn: "see website",
        image: bicture
    },
    {
        id: "doit",
        name: "DoIt",
        link: "https://bivanoid.github.io/DoIt/",
        desc: "Website Todolist Sederhana",
        type: "Website",
        tech: [
            { lang: "React" },
            { lang: "TSX" },
            { lang: "Weather API Intergration" },
        ],
        detail: [
            "Website ini dibuat untuk penggunaan personal, dimana hal-hal didalamnya secara harcode ditulis untuk dan kemudahan bagi saya sendiri",
            "Dengan menggunakan Teknologi React + TSX serta dapat meyimpan data di dalam cache browser",
            "Web ini memiliki fitur seperti pemilihan level prioritas task dan deadline untuk memudahkan pengguna dalam mengelola task"
        ],
        textBtn: "see the code",
        image: bicture
    },
    {
        id: "riyadh",
        name: "Riyadh Learning",
        link: "https://github.com/bivanoid/Riyadh-Al-quran",
        desc: "Website Pembelajaran Al-Quran",
        type: "Website",
        tech: [
            { lang: "PHP" },
            { lang: "MYSQL" },
            { lang: "Kemenag API" },
        ],
        detail: [
            "Website pembelajaran Al-Quran ini dikembangkan secara berkelompok yang dimana ini salah satu tugas proyek dalam ujian ahkir semester",
            "Memiliki beberapa fitur seperti Ayat-ayat Al-Quran, daftar huruf Hijaiyah, angka arab, jadwal sholat, serta pengumuman"
        ],
        textBtn: "see the code",
        image: bicture
    },
    {
        id: "loomnyarn",
        name: "Loom & Yarn",
        link: "https://github.com/bivanoid/Loom-Yarn",
        desc: "Website UMKM Boneka Rajut",
        type: "Website",
        tech: [
            { lang: "PHP" },
            { lang: "MYSQL" },
        ],
        detail: [
            "Website ini membantu UMKM dalam menjualkan hasil karyanya, mereka menyambut positif penggunaan teknologi dalam kehidupan sehari-hari",
            "dengan adanya website ini para pembeli dapat melihat katalog barang apa yang dijual dan mengetahui harga secara langsung serta dapat memilih opsi beli beberapa barang sekaligus"
        ],
        textBtn: "see the code",
        image: bicture
    }
];