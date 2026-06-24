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
        textBtn: "see the code",
        image: bicture
    }
];