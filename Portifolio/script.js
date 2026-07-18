gsap.from(".skill", {
    y: -20,
    opacity: 0,
    duration: 1.3
});

gsap.from(".descricao02", {
    x: -50,
    opacity: 0,
    duration: 1.3
});

gsap.from(".descricao01", {
    x: -25,
    opacity: 0,
    duration: 1.2
});

gsap.from(".contato", {
    scale: 0,
    duration: 0.7,
    delay: 1.2
});

gsap.from(".skill", {
    opacity: 0,
    y: 30,
    duration: 0.7
});

gsap.to(".fotodeperfil", {
    scale: 0,
    opacity: 0,
    duration: 1
});

gsap.from(".titulo", {
    x: 40,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

const translations = {

    pt: {
        title: "Desenvolvimento Web com Foco em Performance e Design",
        subtitle: "Desenvolvedor em Formação",
        about: "Estou iniciando minha jornada no mundo do desenvolvimento, buscando aprender e evoluir a cada dia. Atualmente, curso Análise e Desenvolvimento de Sistemas pela Estácio, onde venho adquirindo sólidos conhecimentos teóricos e práticos na área da tecnologia. Além da faculdade, dedico-me intensamente ao estudo de tecnologias essenciais para a web, como HTML, CSS, Javascript, Typescript. Desenvolvo projetos práticos constantemente para fortalecer minhas habilidades técnicas e entregar soluções de qualidade. Meu objetivo atual é atuar como Desenvolvedor Freelancer. aplicando meus conhecimentos para criar sites modernos, funcionais e ajudar clientes a tirarem suas ideias do papel, Este site representa o início da minha caminhada e, ao longo do tempo, estarei aprimorando meus conhecimentos e adicionando novos projetos",
        project: "PROJETO",
        description: "Landing Page moderna para barbearia desenvolvida com HTML, CSS e JavaScript. Possui design responsivo, modo escuro, animações e interface intuitiva. O projeto está hospedado na Vercel e disponivel no GitHub, com planos de evolução para um sistema completo de agendamento utilizando backend e banco de dados.",
        contact: "CONTATO",
        projectbutton: "Ver Projeto",
        skills: "Habilidades e Competências"
    },

    en: {
        title: "Web Development Focused on Performance and Design",
        subtitle: "Aspiring Developer",
        about: "I am beginning my journey in the world of software development, constantly striving to learn and improve every day. I am currently pursuing a degree in Systems Analysis and Development at Estácio, where I have been building a solid foundation of both theoretical and practical knowledge in technology. In addition to my university studies, I am dedicated to learning essential web technologies such as HTML, CSS, JavaScript, TypeScript. I consistently develop practical projects to strengthen my technical skills and deliver high-quality solutions. My current goal is to work as a Freelance Web Developer, applying my knowledge to create modern, functional websites and help clients turn their ideas into reality. This website represents the beginning of my journey, and over time I will continue expanding my knowledge while adding new projects to showcase my growth and experience.",
        project: "PROJECT",
        description: "A modern landing page for a barbershop built with HTML, CSS, and JavaScript. It features a responsive design, dark mode, smooth animations, and an intuitive user interface. The project is deployed on Vercel and available on GitHub, with future plans to evolve it into a complete appointment booking system powered by a backend and database.",
        contact: "CONTACT ME",
        projectbutton: "View Project",
        skills: "Skills & Expertise",
    }

};

function changeLanguage(language) {

    const elements =
    document.querySelectorAll("[data-translate]");

    elements.forEach((element) => {

        const Key =
     element.dataset.translate;

        element.textContent =
     translations[language][Key];

    });

}

const ptbutton =
document.getElementById("pt");
const enbutton =
document.getElementById("en");

ptbutton.addEventListener("click", () => 
    {
        changeLanguage("pt");
    });

enbutton.addEventListener("click", () => 
    {
        changeLanguage("en");
    });   