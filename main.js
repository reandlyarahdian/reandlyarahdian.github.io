/* ==========================================
   M RENALDY RAHADIANSYAH - PORTFOLIO LOGIC
   Adapting & Elevating kney-delach.github.io Architecture
   ========================================== */

// ------------------------------------------
// 1. LETTERER.JS ENTRANCE ANIMATION
// ------------------------------------------
function letterer(element) {
  if (!element || !document.createTreeWalker) return false;
  
  var letter, letterElm, parent, wordElm, letters, walker, node,
      supportsTrim = String.prototype.trim;
      
  walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);

  while (node = walker.nextNode()) {
    if (node.nodeType == 3) {
      if (supportsTrim ? node.nodeValue.trim() : node.nodeValue) {
        letters = node.nodeValue.split('').reverse();
        wordElm = document.createElement('word');
        node.nodeValue = '';
        parent = node.parentNode;
        
        while (letter = letters.pop()) {
          letterElm = document.createElement('letter');
          letterElm.className = 'initial'; // Trigger transition class
          letterElm.innerHTML = letter;
          
          if (letter == ' ') {
            parent.insertBefore(wordElm, node);
            wordElm = document.createElement('word');
            parent.insertBefore(letterElm, node);
          } else {
            wordElm.appendChild(letterElm);
          }
        }
        parent.insertBefore(wordElm, node);
      }
    }
  }
}

function initTitleAnimation() {
  var lettersWrap = document.getElementById('title');
  if (!lettersWrap) return;
  
  letterer(lettersWrap);
  lettersWrap.style.display = 'block';
  
  var letters = lettersWrap.getElementsByTagName('letter');
  var totalLetters = letters.length;
  var delay = 0;
  var delayJump = 30;

  for (var i = 0; i < totalLetters; i++) {
    (function(el, d) {
      setTimeout(function() {
        el.removeAttribute('class');
      }, d);
    })(letters[i], delay);

    delay += delayJump;
    if (letters[i].innerHTML == ' ') {
      delay += delayJump * 2;
    }
  }
}

// ------------------------------------------
// 2. DYNAMIC CONTENT DATA (Projects, Career, Skills, Contact)
// ------------------------------------------

const ProjectsData = [
  {
    title: "Retro Night Funkin",
    tags: ["Unity", "C#", "Rhythm", "Retro Jam"],
    image: "https://img.itch.zone/aW1hZ2UvOTU0NzY0LzU0MTI0OTUucG5n/250x600/2bctq7.png",
    url: "https://gabutgaming.itch.io/retro-night-fukin",
    desc: "A fast-paced retro rhythm game developed for the Retro Game Jam. Features custom rhythm map parsing, dynamic audio synchronization, and classic pixel aesthetic.",
    tech: "Unity, C#, FMOD Audio, Pixel Art Graphics"
  },
  {
    title: "Losing The Treasure",
    tags: ["Unity", "C#", "Global Game Jam 2021", "Puzzle Adventure"],
    image: "https://img.itch.zone/aW1nLzUyODUwOTkucG5n/315x250%23c/jrVPvi.png",
    url: "https://gabutgaming.itch.io/losing-the-treasure",
    desc: "Created during Global Game Jam 2021 around the theme 'Lost & Found'. Players navigate challenging puzzle hazards to recover ancient lost artifacts.",
    tech: "Unity 2D, C#, Custom Tilemap Engine, Particle Systems"
  },
  {
    title: "Root Path",
    tags: ["Unity", "C#", "Global Game Jam 2023", "Strategy"],
    image: "https://img.itch.zone/aW1nLzExMjgyODAxLnBuZw==/315x250%23c/MJ7zvY.png",
    url: "https://gabutgaming.itch.io/root-path",
    desc: "Strategic puzzle game developed for Global Game Jam 2023. Command expanding root networks through environmental obstacles under resource constraints.",
    tech: "Unity, C#, Procedural Branch Generation, Custom Pathfinding"
  },
  {
    title: "Yower",
    tags: ["Unity", "C#", "GEO Jam", "Arcade Action"],
    image: "https://img.itch.zone/aW1nLzU1MjI5MTAucG5n/315x250%23c/%2Bg6782.png",
    url: "https://gabutgaming.itch.io/yower",
    desc: "Fast-action arcade game created for GEO Jam focusing on geometric physics interactions, smooth mechanical controls, and high-score survival loops.",
    tech: "Unity 2D Physics, C#, Custom UI Shader Effects"
  },
  {
    title: "A Week Before",
    tags: ["Unity", "C#", "Thesis Final Project", "Narrative 3D"],
    image: "https://img.itch.zone/aW1hZ2UvMTY0NzA0NC85Njg5ODQ1LnBuZw==/250x600/R9O3jj.png",
    url: "https://gabutgaming.itch.io/a-week-before",
    desc: "The culmination of my Bachelor Thesis research. An atmospheric story-driven 3D game exploring interactive narrative mechanics and emotional player engagement.",
    tech: "Unity 3D, C#, Shader Graph, Custom Cinematic Controller, Blender"
  }
];

const SectionPages = {
  projects: `
    <hr class="retro-hr">
    <div id="pt">Select a project icon below to inspect details!</div>
    <div id="proj-button-section">
      <div id="proj-btn-0" class="proj-button" onclick="LoadProject(this, 0)" title="Retro Night Funkin">
        <img class="proj-button-img" src="https://img.itch.zone/aW1hZ2UvOTU0NzY0LzU0MTI0OTUucG5n/250x600/2bctq7.png" alt="Retro Night Funkin">
      </div>
      <div id="proj-btn-1" class="proj-button" onclick="LoadProject(this, 1)" title="Losing The Treasure">
        <img class="proj-button-img" src="https://img.itch.zone/aW1nLzUyODUwOTkucG5n/315x250%23c/jrVPvi.png" alt="Losing The Treasure">
      </div>
      <div id="proj-btn-2" class="proj-button" onclick="LoadProject(this, 2)" title="Root Path">
        <img class="proj-button-img" src="https://img.itch.zone/aW1nLzExMjgyODAxLnBuZw==/315x250%23c/MJ7zvY.png" alt="Root Path">
      </div>
      <div id="proj-btn-3" class="proj-button" onclick="LoadProject(this, 3)" title="Yower">
        <img class="proj-button-img" src="https://img.itch.zone/aW1nLzU1MjI5MTAucG5n/315x250%23c/%2Bg6782.png" alt="Yower">
      </div>
      <div id="proj-btn-4" class="proj-button" onclick="LoadProject(this, 4)" title="A Week Before">
        <img class="proj-button-img" src="https://img.itch.zone/aW1hZ2UvMTY0NzA0NC85Njg5ODQ1LnBuZw==/250x600/R9O3jj.png" alt="A Week Before">
      </div>
    </div>
  `,

  career: `
    <hr class="retro-hr">
    <div id="pt">Browse my education and work experience below!</div>
    <div class="buttons_career">
      <div class="button_career_container">
        <div id="education-Button" class="btn-career-5 btn-career-5-active" onclick="LoadCareer(this, 0)">Education</div> 
        <div id="work-Button" class="btn-career-5" onclick="LoadCareer(this, 1)">Work Experience</div> 
      </div>
    </div>
  `,

  skills: `
    <hr class="retro-hr">
    <div id="pt">Self-evaluated Technical Skills & Proficiency</div>
    
    <div id="skill-chart-title">Programming Languages</div>
    <div class="chart-parent chart-horizontal">
      <div class="metric" style="width:85%">C# <span class="metric-value">85%</span></div>
      <div class="metric" style="width:80%">HTML / CSS <span class="metric-value">80%</span></div>
      <div class="metric" style="width:80%">JavaScript <span class="metric-value">80%</span></div>
      <div class="metric" style="width:75%">C / C++ <span class="metric-value">75%</span></div>
      <div class="metric" style="width:70%">SQL (SQL Server) <span class="metric-value">70%</span></div>
      <div class="metric" style="width:65%">GLSL (Shaders) <span class="metric-value">65%</span></div>
      <div class="metric" style="width:65%">Lua <span class="metric-value">65%</span></div>
    </div>

    <div id="skill-chart-title">Engines & Tools</div>
    <div class="chart-parent chart-horizontal">
      <div class="metric" style="width:90%">Unity Engine <span class="metric-value">90%</span></div>
      <div class="metric" style="width:85%">Blender (3D Modeling) <span class="metric-value">85%</span></div>
      <div class="metric" style="width:85%">Aseprite (Pixel Art) <span class="metric-value">85%</span></div>
      <div class="metric" style="width:85%">Git / Version Control <span class="metric-value">85%</span></div>
      <div class="metric" style="width:75%">Unreal Engine <span class="metric-value">75%</span></div>
      <div class="metric" style="width:70%">Godot Engine <span class="metric-value">70%</span></div>
      <div class="metric" style="width:75%">Inkscape / Krita / Affinity <span class="metric-value">75%</span></div>
    </div>

    <div id="skill-chart-title">Spoken Languages</div>
    <div class="chart-parent chart-horizontal">
      <div class="metric" style="width:100%">Indonesian (Native) <span class="metric-value">100%</span></div>
      <div class="metric" style="width:90%">English (Full Professional) <span class="metric-value">90%</span></div>
    </div>
  `,

  contact: `
    <hr class="retro-hr">
    <div id="pt">Get In Touch & Connect</div>
    <div class="contact-container text-center">
      <p class="mb-4 text-muted">Feel free to send me an email, check out my GitHub repos, or reach out on Discord / LinkedIn!</p>
      <div class="d-flex flex-wrap justify-content-center gap-3 mb-4">
        <a href="mailto:str.rnl.kom@protonmail.com" class="contact-badge">
          <i class="fa fa-envelope"></i> str.rnl.kom@protonmail.com
        </a>
        <a href="https://github.com/reandlyarahdian" target="_blank" class="contact-badge">
          <i class="fa fa-github"></i> reandlyarahdian
        </a>
        <a href="https://www.linkedin.com/in/renaldy-rahadiansyah-40413a210" target="_blank" class="contact-badge">
          <i class="fa fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://discordapp.com/users/375842508711919617" target="_blank" class="contact-badge">
          <i class="fa fa-gamepad"></i> Discord (ID: 375842508711919617)
        </a>
      </div>
    </div>
  `
};

const CareerPages = [
  // 0: Education
  `
    <div class="career-card">
      <div class="career-role">Bachelor of Applied Science (B.App.Sc)</div>
      <div class="career-org">Computer Science / Software Engineering & Game Development</div>
      <div class="career-period">Specialized Thesis: Interactive Narrative & 3D Gameplay Architecture</div>
      <p>Focused on advanced game programming, graphics rendering with OpenGL & GLSL, object-oriented software engineering in C# / C++, algorithm optimization, and DBMS management.</p>
    </div>
  `,
  // 1: Work Experience
  `
    <div class="career-card">
      <div class="career-role">Roblox Game Developer</div>
      <div class="career-org">Satu Visi Digital | Jakarta</div>
      <div class="career-period">Juli 2026 hingga September 2026</div>
      <ul>
        <li><strong>UI &amp; Frontend Development:</strong> Engineered modular, responsive front-end UI systems across mobile and desktop Roblox clients, structuring HUDs, shop interfaces, and inventory layouts using Roact/Fusion frameworks for maximum layout adaptivity.</li>
        <li><strong>UI Logic &amp; Tween Animations:</strong> Scripted client-side interface state machines and rich visual transitions via TweenService, integrating dynamic popups, interactive upgrade menus, and sound-cued HUD alerts to enhance UX feedback loops.</li>
        <li><strong>Branded Experience Delivery (Paddle Pop):</strong> Optimized gameplay loops, bug-fixed client-server bottlenecks, and finalized production builds to successfully launch a branded promotional game for Paddle Pop, driving player retention and smooth cross-platform performance.</li>
        <li><strong>Dynamic Weather System:</strong> Developed an environmental controller managing dynamic day-night cycles, volumetric lighting transitions, atmospheric effects, and server-replicated weather conditions (rain, storms, clear skies) with zero frame-drop impact.</li>
        <li><strong>Alien Event &amp; Cinematic Sequences:</strong> Programmed scripted world event sequences featuring an alien encounter, orchestrating synchronized camera choreography via CurrentCamera manipulation, lighting shifts, sound cues, and multi-actor cutscene timings.</li>
        <li><strong>Character Animation Implementation:</strong> Integrated character animation controllers and state blenders, implementing custom rigs, action-triggered KeyframeSequences, and emote loops using the Animator API to deliver fluid avatar interactions.</li>
      </ul>
    </div>
    <div class="career-card">
      <div class="career-role">Game & Fullstack Developer</div>
      <div class="career-org">2+ Years Active Development</div>
      <div class="career-period">Independent & Team Collaborations</div>
      <p>• Engineered complete game loops, mechanics, dynamic physics, and custom toolsets in Unity (C#) and Unreal Engine.<br>
      • Developed cross-platform web features and database integrations using HTML, CSS, JavaScript, and SQL Server.<br>
      • Led multi-disciplinary development teams, managed project timelines, and designed 3D assets in Blender & 2D sprites in Aseprite.</p>
    </div>
  `
];

// ------------------------------------------
// 3. MAIN SECTION TAB NAVIGATION
// ------------------------------------------
let lastTabName = "";

function selectTab(tabName) {
  const selectionArea = document.getElementById("data_selection_area");
  const projectArea = document.getElementById("project_data_area");
  const buttons = document.querySelectorAll(".btn-5");

  // Remove active highlight from all main buttons
  buttons.forEach(btn => btn.classList.remove("active-tab"));

  if (lastTabName === tabName) {
    // Collapse if clicking the same tab twice
    selectionArea.style.opacity = "0";
    projectArea.style.opacity = "0";
    setTimeout(() => {
      selectionArea.innerHTML = "";
      projectArea.innerHTML = "";
      selectionArea.style.minHeight = "0px";
    }, 300);
    lastTabName = "";
    return;
  }

  // Highlight active button
  const currentBtn = document.getElementById(`${tabName}-Button`);
  if (currentBtn) currentBtn.classList.add("active-tab");

  // Load new content
  selectionArea.style.opacity = "0";
  projectArea.style.opacity = "0";

  setTimeout(() => {
    selectionArea.innerHTML = SectionPages[tabName] || "";
    selectionArea.style.minHeight = "200px";
    selectionArea.style.opacity = "1";

    if (tabName === 'projects') {
      // Auto-load first project by default
      LoadProject(document.getElementById('proj-btn-0'), 0);
    } else if (tabName === 'career') {
      // Auto-load education by default
      LoadCareer(document.getElementById('education-Button'), 0);
    } else {
      projectArea.innerHTML = "";
      projectArea.style.opacity = "0";
    }
  }, 250);

  lastTabName = tabName;
}

// ------------------------------------------
// 4. PROJECT LOADER FUNCTION
// ------------------------------------------
function LoadProject(buttonEl, index) {
  const projButtons = document.querySelectorAll(".proj-button");
  projButtons.forEach(btn => btn.className = "proj-button");

  if (buttonEl) {
    buttonEl.className = "proj-button proj-button-active";
  }

  const projArea = document.getElementById("project_data_area");
  const data = ProjectsData[index];
  if (!data) return;

  projArea.style.opacity = "0";
  setTimeout(() => {
    const tagsHTML = data.tags.map(t => `<span class="project-tag">${t}</span>`).join("");
    projArea.innerHTML = `
      <div class="project-detail-card">
        <div class="project-detail-title">${data.title}</div>
        <div class="mb-3">${tagsHTML}</div>
        <img class="project-img-preview" src="${data.image}" alt="${data.title}">
        <p class="fs-5 text-main mb-3">${data.desc}</p>
        <p class="text-muted mb-4"><strong>Technologies Used:</strong> ${data.tech}</p>
        <a href="${data.url}" target="_blank" class="btn-action-primary">
          <i class="fa fa-play-circle"></i> Play Game on itch.io
        </a>
      </div>
    `;
    projArea.style.opacity = "1";
  }, 200);
}

// ------------------------------------------
// 5. CAREER LOADER FUNCTION
// ------------------------------------------
function LoadCareer(buttonEl, index) {
  const careerBtns = document.querySelectorAll(".btn-career-5");
  careerBtns.forEach(btn => btn.className = "btn-career-5");

  if (buttonEl) {
    buttonEl.className = "btn-career-5 btn-career-5-active";
  }

  const projArea = document.getElementById("project_data_area");
  projArea.style.opacity = "0";
  setTimeout(() => {
    projArea.innerHTML = CareerPages[index] || "";
    projArea.style.opacity = "1";
  }, 200);
}

// ------------------------------------------
// 6. INITIALIZATION & SCROLL EVENTS
// ------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Run title letter entrance animation
  initTitleAnimation();

  // Scroll navbar styling
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar-custom");
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    }
  });

  // Mobile menu close on click
  const navLinks = document.querySelectorAll(".nav-link");
  const menuToggle = document.getElementById("navbarSupportedContent");
  if (menuToggle && typeof bootstrap !== 'undefined') {
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992) {
          bsCollapse.hide();
        }
      });
    });
  }
});
