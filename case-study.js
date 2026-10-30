const projects = [
    {
        number: '01', title: '9924 Baker Boy - Republic Series', category: 'Creative & Fashion', year: '2025',
        blurb: 'The first major release from 9924 Baker Boy. I led the development of the product and brand presentation, including campaign direction, an NYC photoshoot, packaging, e-commerce, influencer seeding, and launch strategy.',
        role: 'Creative direction, campaign development, brand presentation, launch strategy',
        challenge: 'Build a complete world around the first 9924 Baker Boy release and make the product feel ready for a wider audience.',
        process: 'Directed the NYC photoshoot, shaped the campaign language, developed packaging and e-commerce touchpoints, and coordinated influencer seeding.',
        outcome: 'The first release sold out.',
        cover: '9924.img/9924jersey.JPG'
    },
    {
        number: '02', title: 'CUPS & COPS', category: 'Justice & Community', year: '2025',
        blurb: 'A campus police-community engagement concept created to encourage more open, informal interaction between students and law enforcement.',
        role: 'Concept development, community engagement, public safety perspective',
        challenge: 'Create a more approachable setting for students and police to connect outside formal or crisis-driven interactions.',
        process: 'Developed from experience working with a police department during a Fall 2025 internship, focusing on the student and police experience.',
        outcome: 'A proposal for a repeatable campus engagement format with potential community impact.',
        cover: '9924.img/cups-and-cops.png'
    },
    {
        number: '03', title: 'International Week 2026', category: 'Media & Production', year: '2026',
        blurb: 'Planning, public relations, and creative involvement in International Week programming, including the Fake African Wedding and Cups & Bass.',
        role: 'Event planning, public relations, creative production',
        challenge: 'Shape event concepts and communicate them in a way that makes students want to participate.',
        process: 'Helped develop programming, event communication, social content, and the visual moments students encountered before and during each event.',
        outcome: 'A connected set of culturally focused events with a clear student-facing identity.',
        cover: '9924.img/fake.png'
    },
    {
        number: '04', title: 'Media & Sports Production', category: 'Media & Production', year: '2024-2026',
        blurb: 'Selected production experience across the Grambling State University TV Center and live sports broadcasts.',
        role: 'Technical production and event-day roles connected with ESPN, CBS Sports, Bounce Multimedia, and Program Productions.',
        challenge: 'Support live productions where timing, communication, and technical precision have to work together in real time.',
        process: 'Built experience through the Grambling State University TV Center and production work connected with live sports and broadcast partners.',
        outcome: 'A growing foundation in broadcasting, live production, and sports media.',
        cover: '9924.img/media&sports.png'
    }
];

const content = document.getElementById('caseStudyContent');
const requestedIndex = Number(new URLSearchParams(window.location.search).get('project'));
const project = projects[Number.isInteger(requestedIndex) && requestedIndex >= 0 && requestedIndex < projects.length ? requestedIndex : 0];

document.title = `${project.title} | 9924`;
content.innerHTML = `
    <article class="dedicated-case-study">
        <div class="dedicated-case-hero" style="background-image:url('${project.cover}')">
        </div>
        <div class="dedicated-case-body">
            <p class="case-study-kicker">${project.category} / ${project.year}</p>
            <h1>${project.title}</h1>
            <section class="case-section case-overview"><p class="case-label">Overview</p><p>${project.blurb}</p></section>
            <div class="dedicated-case-grid">
                <section><p class="case-label">Challenge / Idea</p><p>${project.challenge}</p></section>
                <section><p class="case-label">My Role</p><p>${project.role}</p></section>
                <section><p class="case-label">Process</p><p>${project.process}</p></section>
            </div>
            <section class="case-section case-outcome"><p class="case-label">Outcome / Impact</p><p>${project.outcome}</p></section>
        </div>
    </article>
`;
