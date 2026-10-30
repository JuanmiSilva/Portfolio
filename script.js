const T = {
    es: {
        n_about: "Sobre mí",
        n_path: "Trayectoria",
        n_proj: "Proyectos",
        n_contact: "Contacto",
        h_title: "Hola, soy Juanmi. Desarrollo para la web.",
        h_text:
            "Desarrollador junior de Benacazón (Sevilla) con base sólida en PHP y programación orientada a objetos. Técnico superior en DAM y ahora cursando DAW.",
        h_cta1: "Ver proyectos",
        h_cta2: "Contactar",
        a_title: "Sobre mí",
        a_text:
            "Organizado, con buena capacidad de aprendizaje y ganas de crecer en un equipo técnico. Me gusta entender todo el proyecto, del diseño de la base de datos a la interfaz que ve el usuario.",
        s_title: "Tecnologías",
        t_title: "Trayectoria",
        t1_when: "Actualmente",
        t1_h: "2º Desarrollo de Aplicaciones Web (DAW)",
        t2_when: "Experiencia",
        t2_h: "Desarrollador junior en formación",
        t2_d: "Mantenimiento correctivo y evolutivo de sistemas de gestión de campañas publicitarias y ventas de Vodafone, MasMóvil y Orange.",
        t3_when: "2024",
        t3_h: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
        p_title: "Proyectos",
        f_all: "Todos",
        p1_d: "Lector de EPUB multiplataforma con audio sincronizado con el texto. App de escritorio en Electron y app Android nativa en Kotlin (RecyclerView, gestión de listas y búsqueda).",
        p2_h: "Aplicación de gestión",
        p2_d: "CRUD completo con interfaz gráfica, conexión a MySQL y validaciones. Desarrollada en grupo con Git para el control de versiones.",
        p3_h: "Web dinámica con PHP",
        p3_d: "Registro e inicio de sesión de usuarios con sesiones, consultas parametrizadas y diseño con HTML/CSS. Me permitió entender el flujo de una web dinámica.",
        p4_h: "Scripts de automatización",
        p4_d: "Scripts en Python para automatizar tareas.",
        l_title: "Idiomas",
        l_es: "Español",
        l_es_lv: "Nativo",
        l_en: "Inglés",
        l_fr: "Francés",
        l_fr_lv: "Nivel medio",
        i_title: "Intereses",
        i1: "Cine",
        i2: "Lectura",
        i3: "Tecnología",
        c_title: "Contacto",
        c_mail: "Correo",
        c_tel: "Teléfono",
        c_loc: "Ubicación",
        c_btn: "Escríbeme",
        c_lic: "Carnet de conducir",
        c_car: "Coche propio",
        c_trav: "Disponibilidad para viajar",
        foot: "Hecho a mano con HTML, CSS y JavaScript.",
        c_cv: "Descargar CV", c_li: "LinkedIn",
    },
    en: {
        n_about: "About",
        n_path: "Experience",
        n_proj: "Projects",
        n_contact: "Contact",
        h_title: "Hi, I'm Juanmi. I build for the web.",
        h_text:
            "Junior developer from Benacazón (Seville) with a solid base in PHP and object-oriented programming. Higher technician in cross-platform development (DAM), now studying web development (DAW).",
        h_cta1: "See projects",
        h_cta2: "Get in touch",
        a_title: "About me",
        a_text:
            "Organised, quick to learn and keen to grow in a technical team. I like understanding the whole project, from database design to the interface users see.",
        s_title: "Tech stack",
        t_title: "Experience & education",
        t1_when: "Currently",
        t1_h: "Web Application Development (DAW), year 2",
        t2_when: "Experience",
        t2_h: "Junior developer in training",
        t2_d: "Corrective and evolutive maintenance of advertising campaign and sales management systems for Vodafone, MasMóvil and Orange.",
        t3_when: "2024",
        t3_h: "Cross-Platform Application Development (DAM)",
        p_title: "Projects",
        f_all: "All",
        p1_d: "Cross-platform EPUB reader with audio synced to the text. Electron desktop app and native Android app in Kotlin (RecyclerView, list management and search).",
        p2_h: "Management app",
        p2_d: "Full CRUD with a graphical interface, MySQL connection and validations. Built as a team using Git for version control.",
        p3_h: "Dynamic PHP website",
        p3_d: "User registration and login with sessions, parameterised queries and HTML/CSS design. It taught me how a dynamic website works end to end.",
        p4_h: "Automation scripts",
        p4_d: "Python scripts that automate everyday tasks.",
        l_title: "Languages",
        l_es: "Spanish",
        l_es_lv: "Native",
        l_en: "English",
        l_fr: "French",
        l_fr_lv: "Intermediate",
        i_title: "Interests",
        i1: "Film",
        i2: "Reading",
        i3: "Technology",
        c_title: "Contact",
        c_mail: "Email",
        c_tel: "Phone",
        c_loc: "Location",
        c_btn: "Write to me",
        c_lic: "Driving licence",
        c_car: "Own car",
        c_trav: "Willing to travel",
        foot: "Handmade with HTML, CSS and JavaScript.",
        c_cv: "Download CV", c_li: "LinkedIn",
    },
};
const root = document.documentElement;
function setLang(l) {
    document.querySelectorAll("[data-i]").forEach((e) => {
        const v = T[l][e.dataset.i];
        if (v) e.textContent = v;
    });
    root.lang = l;
    document.getElementById("lang").textContent = l === "es" ? "EN" : "ES";
    document.title =
        l === "es" ? "Juanmi · Desarrollador web" : "Juanmi · Web developer";
    try {
        localStorage.setItem("lang", l);
    } catch (e) { }
}
let lang = "es";
try {
    lang =
        localStorage.getItem("lang") ||
        (navigator.language || "es").slice(0, 2);
} catch (e) { }
if (!T[lang]) lang = "es";
setLang(lang);
document.getElementById("lang").onclick = () => {
    lang = lang === "es" ? "en" : "es";
    setLang(lang);
};

try {
    const t = localStorage.getItem("theme");
    if (t) root.dataset.theme = t;
} catch (e) { }
document.getElementById("theme").onclick = () => {
    const dark = root.dataset.theme
        ? root.dataset.theme === "dark"
        : matchMedia("(prefers-color-scheme:dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try {
        localStorage.setItem("theme", root.dataset.theme);
    } catch (e) { }
};

document.querySelectorAll(".filters button").forEach(
    (b) =>
    (b.onclick = () => {
        document
            .querySelectorAll(".filters button")
            .forEach((x) => x.setAttribute("aria-pressed", x === b));
        document.querySelectorAll(".card").forEach((c) => {
            c.hidden = !(
                b.dataset.f === "all" ||
                c.dataset.cat.split(" ").includes(b.dataset.f)
            );
        });
    }),
);