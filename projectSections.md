### Create a mock up for a portfolio website

## Divide the site in sections:

    1. Hero section:
        * Two subsection: left side to show the specialization, a legend and a "Get in contact button", right side: 3 smallcards to show facts about experience, knowledge and location
    2. Featured Projects:

        MAKE FEATURE REUSABLE COMPONENT FOR THESE, USE IMAGE AS REFERENCE.
        
        What to include: 3 of your absolute best personal/academic projects.

        How to present them: Don't just show screenshots. Each project card needs:

            The Problem & Solution: 2–3 lines on what the app actually does (e.g., "A POS & inventory management system handling multi-currency and raw material tracking").

            Tech Stack Badges: TypeScript React Python PostgreSQL

            Key Technical Challenges Solved: Bullet points highlighting complex logic (e.g., "Implemented optimistic updates with TanStack Query," "Architected relational database schema using Prisma," or "Packaged web application into a desktop executable using Electron").

            Links: Live Demo + GitHub Repository (clean READMEs are required).
        3. Technical Skills (Grouped, Not Rated)

        What to include: Group your skills logically into categories:

            Frontend: React, Next.js, TypeScript, Tailwind CSS, Zustand

            Backend & Databases: Python, Django, NestJS, PostgreSQL, Prisma

            Tools & Environment: Git, Linux/WSL2, Docker, Postman

        Rule: Never use percentage bars or "8/10" ratings for skills. Categories make you look organized and realistic.

        4. Education & Background

            What to include: Systems Engineering degree, graduation date, relevant coursework, and thesis project summary if it involved real software development.

        5. Contact / Footer

            What to include: Direct email address, GitHub link, LinkedIn, and a clear call to action ("Open to junior full-stack & backend developer roles").

## INCLUDE A HAMBURGUER COMPONENT FIXED A THE TOP

* Use a shadcn drawer component with a slide in animation 
* Add two section within the drawer, one for direct scroll for a main section in the page and another for social media links

## COLORING:

Here is the breakdown of that exact color palette:

    Primary Background (#0a192f): Deep Navy Slate / Dark Ocean Blue. A dark, saturated navy with strong cyan/green undertones rather than a neutral charcoal or pure black.

    Secondary Background / Surface (#112240): Navy Blue. A slightly lighter, muted slate blue used for cards, popups, and tab backgrounds to create subtle visual depth.

    Accent Color (#64ffda): Bright Mint Teal / Cyan-Green. This is the key "greenish" highlight used for links, section numbers, buttons, border glows, and interactive hover states.

    Primary Text (#ccd6f6): Ice White / Cool Slate. A very soft, off-white hue with a subtle cool blue tint that prevents harsh contrast against the dark background.

    Secondary / Body Text (#8892b0): Muted Steel Gray. A desaturated blue-gray used for paragraphs, subheaders, and body text to establish a clear visual hierarchy.

**IMPORTANT** : USE SEMANTIC HTML FOR EACH SECTION AND DIVIDE EACH SECTION INTO ITS OWN REACT COMPONENTS
