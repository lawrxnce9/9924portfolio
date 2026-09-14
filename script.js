const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
}));

const projects = [
    {
        number: '01', title: '9924 Baker Boy - Republic Series', category: 'creative', categoryLabel: 'Creative & Fashion', year: '2025',
        blurb: 'The first major release from 9924 Baker Boy. The campaign, product presentation, packaging, e-commerce, influencer seeding, and launch strategy came together in a sold-out first release.',
        role: 'Creative direction, campaign development, brand presentation, launch strategy',
        challenge: 'Build a complete world around the first 9924 Baker Boy release and make the product feel ready for a wider audience.',
        process: 'Directed the NYC photoshoot, shaped the campaign language, developed packaging and e-commerce touchpoints, and coordinated influencer seeding.',
        outcome: 'The Republic Series sold out.', cover: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85'
    },
    {
        number: '02', title: 'CUPS & COPS', category: 'justice', categoryLabel: 'Justice & Community', year: '2025',
        blurb: 'A campus police-community engagement concept designed to create more open, informal interaction between students and law enforcement.',
        role: 'Concept development, community engagement, public safety perspective',
        challenge: 'Create a more approachable setting for students and police to connect outside formal or crisis-driven interactions.',
        process: 'Developed from experience working with a police department during a Fall 2025 internship, focusing on the student and police experience.',
        outcome: 'A proposal for a repeatable campus engagement format with potential community impact.', cover: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85'
    },
    {
        number: '03', title: 'International Week 2026', category: 'media', categoryLabel: 'Media & Production', year: '2026',
        blurb: 'Planning, public relations, and creative involvement across International Week programming, including the Fake African Wedding and Cups & Bass.',
        role: 'Event planning, public relations, creative production',
        challenge: 'Shape event concepts and communicate them in a way that makes students want to participate.',
        process: 'Helped develop programming, event communication, social content, and the visual moments students encountered before and during each event.',
        outcome: 'A connected set of culturally focused events with a clear student-facing identity.', cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85'
    },
    {
        number: '04', title: 'Media & Sports Production', category: 'media', categoryLabel: 'Media & Production', year: '2024-2026',
        blurb: 'Selected production experience across the Grambling State University TV Center and live sports broadcasts.',
        role: 'Technical production and event-day roles',
        challenge: 'Support live productions where timing, communication, and technical precision have to work together in real time.',
        process: 'Built experience through the Grambling State University TV Center and production work connected with ESPN, CBS Sports, Bounce Multimedia, and Program Productions.',
        outcome: 'A growing foundation in broadcasting, live production, and sports media.', cover: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?auto=format&fit=crop&w=1200&q=85'
    },
    { number: '', title: '9924 Baker Boy - Next Release', category: 'creative', categoryLabel: 'Creative & Fashion', year: 'In development', blurb: "The next chapter of 9924 Baker Boy, moving beyond the first jersey release into coordinated pieces and more universal artistic storytelling.", role: 'Brand development and creative direction', challenge: 'Expand the product world while retaining the identity that made the first release distinct.', process: 'Developing coordinated pieces, broader storytelling, and a more universal visual language.', outcome: 'An evolving 9924 Baker Boy system.', cover: '' },
    { number: '', title: 'Ahyensode Creative Agency', category: 'creative', categoryLabel: 'Creative & Fashion', year: 'Ongoing', blurb: 'The creative platform behind branding, content, events, and visual projects, including the development of 9924 Baker Boy.', role: 'Creative direction and entrepreneurship', challenge: 'Build a flexible platform for ideas that cross branding, content, events, and culture.', process: 'Connecting projects, collaborators, and visual work under one creative practice.', outcome: 'A growing platform for independent creative work.', cover: '' },
    { number: '', title: 'Campus Safety & Engagement Work', category: 'justice', categoryLabel: 'Justice & Community', year: 'Ongoing', blurb: 'Work developed from police internship experience around campus safety, student engagement, and police-community relations.', role: 'Research, engagement, and public safety perspective', challenge: 'Think about campus safety as a relationship and communication issue as well as an enforcement issue.', process: 'Building from field experience and interest in student-facing public safety work.', outcome: 'A developing body of ideas around safer, more connected campus communities.', cover: '' },
    { number: '', title: 'Criminal Justice Research & Legal Work', category: 'justice', categoryLabel: 'Justice & Community', year: 'Ongoing', blurb: 'Selected criminal justice research, legal writing, and academic projects reflecting interests in law, justice, due process, and policy.', role: 'Research, legal writing, and analysis', challenge: 'Examine how systems, policy, and lived experience shape justice outcomes.', process: 'Developing research and writing across criminal justice coursework and legal interests.', outcome: 'A growing academic foundation in law, justice, due process, and policy.', cover: '' }
];

const projectList = document.getElementById('projectList');
const projectTabs = document.getElementById('projectTabs');
const projectLightbox = document.getElementById('projectLightbox');
const projectLightboxInner = document.getElementById('projectLightboxInner');
const projectPrevious = document.getElementById('projectPrevious');
const projectNext = document.getElementById('projectNext');
const projectClose = document.getElementById('projectClose');
let activeProjectIndex = 0;

function renderProjects(category = 'all') {
    const visibleProjects = projects.map((project, index) => ({ project, index })).filter(({ project }) => category === 'all' || project.category === category);
    projectList.innerHTML = visibleProjects.map(({ project, index }) => `
        <article class="project-card ${project.number ? 'flagship' : 'additional'}">
            <${project.number ? 'a' : 'div'} class="project-card-link" ${project.number ? `href="case-study.html?project=${index}"` : ''}>
                <div class="project-card-cover ${project.cover ? '' : 'project-placeholder'}" ${project.cover ? `style="background-image:url('${project.cover}')"` : ''}>
                    <span>${project.number || 'WORK'}</span><span class="project-card-arrow">↗</span>
                </div>
                <div class="project-card-meta"><span>${project.categoryLabel}</span><span>${project.year}</span></div>
                <h3>${project.title}</h3>
                <p>${project.blurb}</p>
            </${project.number ? 'a' : 'div'}>
        </article>
    `).join('');
}

function openProject(project) {
    activeProjectIndex = projects.indexOf(project);
    projectLightbox.classList.add('open');
    projectLightbox.setAttribute('aria-hidden', 'false');
    renderProjectCaseStudy();
}

function renderProjectCaseStudy() {
    const project = projects[activeProjectIndex];
    projectLightboxInner.innerHTML = `
        <div class="case-study ${project.cover ? 'has-cover' : ''}">
            <div class="case-study-cover ${project.cover ? '' : 'project-placeholder'}" ${project.cover ? `style="background-image:url('${project.cover}')"` : ''}>
                <span>${project.number || 'PROJECT'}</span>
            </div>
            <div class="case-study-copy">
                <p class="case-study-kicker">${project.categoryLabel} / ${project.year}</p>
                <h2>${project.title}</h2>
                <p class="case-study-overview">${project.blurb}</p>
                <dl class="case-study-sections">
                    <div><dt>My Role</dt><dd>${project.role}</dd></div>
                    <div><dt>Challenge / Idea</dt><dd>${project.challenge}</dd></div>
                    <div><dt>Process</dt><dd>${project.process}</dd></div>
                    <div><dt>Outcome / Impact</dt><dd>${project.outcome}</dd></div>
                </dl>
                <p class="case-study-note">Visuals for this case study can be added to the project's <code>cover</code> field and media assets.</p>
            </div>
        </div>`;
    projectPrevious.hidden = activeProjectIndex === 0;
    projectNext.hidden = activeProjectIndex === projects.length - 1;
}

function closeProject() {
    projectLightbox.classList.remove('open');
    projectLightbox.setAttribute('aria-hidden', 'true');
    projectLightboxInner.innerHTML = '';
}

projectTabs.addEventListener('click', event => {
    const tab = event.target.closest('.project-tab');
    if (!tab) return;
    projectTabs.querySelectorAll('.project-tab').forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    renderProjects(tab.dataset.category);
});
projectPrevious.addEventListener('click', () => { if (activeProjectIndex > 0) { activeProjectIndex -= 1; renderProjectCaseStudy(); } });
projectNext.addEventListener('click', () => { if (activeProjectIndex < projects.length - 1) { activeProjectIndex += 1; renderProjectCaseStudy(); } });
projectClose.addEventListener('click', closeProject);
projectLightbox.addEventListener('click', event => { if (event.target === projectLightbox) closeProject(); });
document.addEventListener('keydown', event => {
    if (!projectLightbox.classList.contains('open')) return;
    if (event.key === 'Escape') closeProject();
    if (event.key === 'ArrowLeft') projectPrevious.click();
    if (event.key === 'ArrowRight') projectNext.click();
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
contactForm.addEventListener('submit', event => {
    event.preventDefault();
    formStatus.textContent = 'Thank you. We will be in touch shortly.';
    contactForm.reset();
});

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.style.animation = 'reveal .8s forwards';
        revealObserver.unobserve(entry.target);
    }
}), { threshold: .12 });
document.querySelectorAll('.section-heading,.service-item,.work-card,.custom-image,.studio-grid > *').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(25px)';
    revealObserver.observe(element);
});

renderProjects();
