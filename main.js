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
    title: "SnakeJS",
    tags: ["JavaScript", "HTML5 Canvas", "Arcade", "Web Game"],
    image: "./assets/Snake.png",
    url: "https://gabutgaming.itch.io/snakejs",
    desc: "My Little Exercises with JS. A recreation of the classic arcade Snake game built natively with vanilla JavaScript and HTML5 Canvas, featuring smooth grid-based movement, keyboard input, and real-time score tracking.",
    tech: "JavaScript (ES6+), HTML5 Canvas, CSS3"
  },
  {
    title: "PongJS",
    tags: ["JavaScript", "HTML5 Canvas", "Physics", "Arcade"],
    image: "./assets/Pong.png",
    url: "https://gabutgaming.itch.io/pong",
    desc: "Little Experiment with JS. A fast-paced interactive web adaptation of the classic Pong arcade title featuring paddle-to-ball velocity reflection physics and responsive controls.",
    tech: "JavaScript, HTML5 Canvas, 2D Collision Physics"
  },
  {
    title: "reels-u",
    tags: ["Unity", "C#", "Interactive Fiction", "Casual Sim"],
    image: "./assets/reels-u.png",
    url: "https://gabutgaming.itch.io/reels-u",
    desc: "DOOMSCROLLING GAME. An experimental reel-spinning interactive narrative experience built in Unity featuring procedural reel pacing, dynamic visual rewards, and immersive audio feedback.",
    tech: "Unity, C#, UI Animation Architecture, Windows"
  },
  {
    title: "AR test web",
    tags: ["WebXR", "AR", "JavaScript", "HTML5"],
    image: "https://img.itch.zone/aW1nLzI5NDIxMjc4LnBuZw==/315x250%23c/sDoRZD.png",
    url: "https://gabutgaming.itch.io/ar-test",
    desc: "Web-based Augmented Reality interactive prototype exploring camera tracking, WebXR APIs, and 3D spatial anchoring directly in modern browsers.",
    tech: "WebXR, JavaScript, HTML5, WebGL"
  },
  {
    title: "Simple Clicker (unpolished)",
    tags: ["Unity", "C#", "Idle Game", "Incremental"],
    image: "./assets/clicker.png",
    url: "https://gabutgaming.itch.io/simple-clicker",
    desc: "An addictive incremental idle clicker prototype built with scalable number progression mechanics, automated clickers, upgrade tiers, and persistent player reward loops.",
    tech: "Unity 2D, C#, Incremental Economy Design, UI Animations"
  },
  {
    title: "Root Path",
    tags: ["Unity", "C#", "Global Game Jam 2023", "Puzzle"],
    image: "https://img.itch.zone/aW1nLzExMjgyODAxLnBuZw==/315x250%23c/MJ7zvY.png",
    url: "https://gabutgaming.itch.io/root-path",
    desc: "Game about rerouting the roots. Strategic puzzle game developed for Global Game Jam 2023 where players command expanding root networks through environmental obstacles under resource constraints.",
    tech: "Unity, C#, Procedural Branch Generation, Custom Pathfinding"
  },
  {
    title: "A Week Before",
    tags: ["Unity", "C#", "Thesis Final Project", "Role Playing"],
    image: "https://img.itch.zone/aW1hZ2UvMTY0NzA0NC85Njg5ODQ1LnBuZw==/250x600/R9O3jj.png",
    url: "https://gabutgaming.itch.io/a-week-before",
    desc: "The culmination of my Bachelor Thesis research. An atmospheric story-driven 3D game exploring interactive narrative mechanics, cinematics, and emotional player engagement.",
    tech: "Unity 3D, C#, Shader Graph, Custom Cinematic Controller, Blender"
  },
  {
    title: "Yower",
    tags: ["Unity", "C#", "GEO Jam", "Strategy"],
    image: "https://img.itch.zone/aW1nLzU1MjI5MTAucG5n/315x250%23c/%2Bg6782.png",
    url: "https://gabutgaming.itch.io/yower",
    desc: "Use Magical Bucket To Destroy Interdimensional Triangle That Trying To Invade Sea. Fast-action arcade game created for GEO Jam focusing on geometric physics interactions and high-score survival loops.",
    tech: "Unity 2D Physics, C#, Custom UI Shader Effects"
  },
  {
    title: "Retro Night Fukin",
    tags: ["Unity", "C#", "Rhythm", "Retro Jam"],
    image: "https://img.itch.zone/aW1hZ2UvOTU0NzY0LzU0MTI0OTUucG5n/250x600/2bctq7.png",
    url: "https://gabutgaming.itch.io/retro-night-fukin",
    desc: "Made For Retro Jam. A fast-paced retro rhythm game featuring custom rhythm map parsing, dynamic audio synchronization, and classic pixel aesthetic.",
    tech: "Unity, C#, FMOD Audio, Pixel Art Graphics"
  },
  {
    title: "Losing The Treasure",
    tags: ["Unity", "C#", "Global Game Jam 2021", "Interactive Fiction"],
    image: "https://img.itch.zone/aW1nLzUyODUwOTkucG5n/315x250%23c/jrVPvi.png",
    url: "https://gabutgaming.itch.io/losing-the-treasure",
    desc: "Created during Global Game Jam 2021 around the theme 'Lost & Found'. Players navigate challenging puzzle hazards to recover ancient lost artifacts.",
    tech: "Unity 2D, C#, Custom Tilemap Engine, Particle Systems"
  },
  {
    title: "My Task",
    tags: ["JavaScript", "HTML5", "Casual", "Puzzle"],
    image: "https://img.itch.zone/aW1nLzI4NDczMzIucG5n/315x250%23c/4KKAaq.png",
    url: "https://gabutgaming.itch.io/my-task",
    desc: "A casual task-oriented interactive web game exploring procedural goal fulfillment and UI state interactions.",
    tech: "JavaScript, HTML5, CSS3"
  }
];

const SectionPages = {
  projects: `
    <hr class="retro-hr">
    <div id="pt">Select a project icon below to inspect details!</div>
    <div id="proj-button-section">
      <div id="proj-btn-0" class="proj-button" onclick="LoadProject(this, 0)" title="SnakeJS">
        <img class="proj-button-img" src="./assets/Snake.png" alt="SnakeJS">
      </div>
      <div id="proj-btn-1" class="proj-button" onclick="LoadProject(this, 1)" title="PongJS">
        <img class="proj-button-img" src="./assets/Pong.png" alt="PongJS">
      </div>
      <div id="proj-btn-2" class="proj-button" onclick="LoadProject(this, 2)" title="reels-u">
        <img class="proj-button-img" src="./assets/reels-u.png" alt="reels-u">
      </div>
      <div id="proj-btn-3" class="proj-button" onclick="LoadProject(this, 3)" title="AR test web">
        <img class="proj-button-img" src="https://img.itch.zone/aW1nLzI5NDIxMjc4LnBuZw==/315x250%23c/sDoRZD.png" alt="AR test web">
      </div>
      <div id="proj-btn-4" class="proj-button" onclick="LoadProject(this, 4)" title="Simple Clicker (unpolished)">
        <img class="proj-button-img" src="./assets/clicker.png" alt="Simple Clicker (unpolished)">
      </div>
      <div id="proj-btn-5" class="proj-button" onclick="LoadProject(this, 5)" title="Root Path">
        <img class="proj-button-img" src="https://img.itch.zone/aW1nLzExMjgyODAxLnBuZw==/315x250%23c/MJ7zvY.png" alt="Root Path">
      </div>
      <div id="proj-btn-6" class="proj-button" onclick="LoadProject(this, 6)" title="A Week Before">
        <img class="proj-button-img" src="https://img.itch.zone/aW1hZ2UvMTY0NzA0NC85Njg5ODQ1LnBuZw==/250x600/R9O3jj.png" alt="A Week Before">
      </div>
      <div id="proj-btn-7" class="proj-button" onclick="LoadProject(this, 7)" title="Yower">
        <img class="proj-button-img" src="https://img.itch.zone/aW1nLzU1MjI5MTAucG5n/315x250%23c/%2Bg6782.png" alt="Yower">
      </div>
      <div id="proj-btn-8" class="proj-button" onclick="LoadProject(this, 8)" title="Retro Night Fukin">
        <img class="proj-button-img" src="https://img.itch.zone/aW1hZ2UvOTU0NzY0LzU0MTI0OTUucG5n/250x600/2bctq7.png" alt="Retro Night Fukin">
      </div>
      <div id="proj-btn-9" class="proj-button" onclick="LoadProject(this, 9)" title="Losing The Treasure">
        <img class="proj-button-img" src="https://img.itch.zone/aW1nLzUyODUwOTkucG5n/315x250%23c/jrVPvi.png" alt="Losing The Treasure">
      </div>
      <div id="proj-btn-10" class="proj-button" onclick="LoadProject(this, 10)" title="My Task">
        <img class="proj-button-img" src="https://img.itch.zone/aW1nLzI4NDczMzIucG5n/315x250%23c/4KKAaq.png" alt="My Task">
      </div>
    </div>
  `,

  career: `
    <hr class="retro-hr">
    <div id="pt">Browse my professional experience, education, and certifications!</div>
    <div class="buttons_career">
      <div class="button_career_container">
        <div id="work-Button" class="btn-career-5 btn-career-5-active" onclick="LoadCareer(this, 0)">Work Experience</div> 
        <div id="education-Button" class="btn-career-5" onclick="LoadCareer(this, 1)">Education &amp; Certifications</div> 
      </div>
    </div>
  `,

  skills: `
    <hr class="retro-hr">
    <div id="pt">Technical Skills &amp; Domain Expertise</div>
    
    <div id="skill-chart-title">Game Engines &amp; Platforms</div>
    <div class="chart-parent chart-horizontal">
      <div class="metric" style="width:90%">Unity Engine <span class="metric-value">90%</span></div>
      <div class="metric" style="width:85%">Roblox Studio <span class="metric-value">85%</span></div>
      <div class="metric" style="width:80%">Unreal Engine <span class="metric-value">80%</span></div>
      <div class="metric" style="width:75%">Godot Engine <span class="metric-value">75%</span></div>
      <div class="metric" style="width:75%">ASP.NET Core &amp; Web <span class="metric-value">75%</span></div>
    </div>

    <div id="skill-chart-title">Programming &amp; Scripting Languages</div>
    <div class="chart-parent chart-horizontal">
      <div class="metric" style="width:90%">C# <span class="metric-value">90%</span></div>
      <div class="metric" style="width:85%">Lua / Luau <span class="metric-value">85%</span></div>
      <div class="metric" style="width:80%">JavaScript <span class="metric-value">80%</span></div>
      <div class="metric" style="width:80%">HTML5 / CSS3 <span class="metric-value">80%</span></div>
      <div class="metric" style="width:75%">GLSL &amp; Shader Graph <span class="metric-value">75%</span></div>
      <div class="metric" style="width:75%">SQL (SQL Server) <span class="metric-value">75%</span></div>
      <div class="metric" style="width:75%">C / C++ <span class="metric-value">75%</span></div>
    </div>

    <div id="skill-chart-title">3D / 2D Art &amp; Design Tools</div>
    <div class="chart-parent chart-horizontal">
      <div class="metric" style="width:85%">Blender (3D Modeling) <span class="metric-value">85%</span></div>
      <div class="metric" style="width:85%">Aseprite (Pixel Art) <span class="metric-value">85%</span></div>
      <div class="metric" style="width:80%">Adobe Illustrator &amp; Inkscape <span class="metric-value">80%</span></div>
      <div class="metric" style="width:75%">Krita &amp; Affinity <span class="metric-value">75%</span></div>
    </div>

    <div id="skill-chart-title">Key Specialties &amp; Competencies</div>
    <div class="chart-parent chart-horizontal">
      <div class="metric" style="width:90%">Gameplay Mechanics &amp; AI Systems <span class="metric-value">90%</span></div>
      <div class="metric" style="width:85%">Mobile Shader &amp; 60 FPS Optimization <span class="metric-value">85%</span></div>
      <div class="metric" style="width:85%">Multiplayer Networking &amp; VR Experience <span class="metric-value">85%</span></div>
      <div class="metric" style="width:85%">CI/CD Pipelines &amp; Git Versioning <span class="metric-value">85%</span></div>
      <div class="metric" style="width:80%">System Integration (SIT) &amp; UAT Testing <span class="metric-value">80%</span></div>
    </div>

    <div id="skill-chart-title">Spoken Languages</div>
    <div class="chart-parent chart-horizontal">
      <div class="metric" style="width:100%">Indonesian (Native) <span class="metric-value">100%</span></div>
      <div class="metric" style="width:90%">English (Professional Working) <span class="metric-value">90%</span></div>
    </div>
  `,

  contact: `
    <hr class="retro-hr">
    <div id="pt">Get In Touch &amp; Connect</div>
    <div class="contact-container text-center">
      <p class="mb-4 text-muted">Based in <strong style="color: var(--neon-green);">Bandung, Indonesia</strong> (Willing to relocate: Anywhere). Available for freelance and full-time opportunities.</p>
      <div class="d-flex flex-wrap justify-content-center gap-3 mb-4">
        <a href="mailto:str.rnl.kom@protonmail.com" class="contact-badge">
          <i class="fa fa-envelope"></i> str.rnl.kom@protonmail.com
        </a>
        <a href="https://wa.me/628812730902" target="_blank" class="contact-badge">
          <i class="fa fa-phone"></i> +62 881 2730 902
        </a>
        <a href="https://github.com/reandlyarahdian" target="_blank" class="contact-badge">
          <i class="fa fa-github"></i> GitHub: reandlyarahdian
        </a>
        <a href="https://www.linkedin.com/in/renaldy-rahadiansyah-40413a210" target="_blank" class="contact-badge">
          <i class="fa fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://gabutgaming.itch.io" target="_blank" class="contact-badge">
          <i class="fa fa-gamepad"></i> itch.io
        </a>
        <a href="https://discordapp.com/users/375842508711919617" target="_blank" class="contact-badge">
          <i class="fa fa-comments"></i> Discord
        </a>
      </div>
    </div>
  `
};

const CareerPages = [
  // 0: Work Experience
  `
  <div class="career-card">
      <div class="career-role">
        Roblox Game Developer
        <span class="career-badge">Roblox / Luau</span>
      </div>
      <div class="career-org">Satu Visi Digital — Jakarta</div>
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
      <div class="career-role">
        Game Programmer
        <span class="career-badge">Roblox / Luau</span>
      </div>
      <div class="career-org">GU Studio — Bandung</div>
      <div class="career-period">September 2025 to May 2026</div>
      <ul>
        <li>Developed Roblox game titled <strong>"Fish Life"</strong>, featuring interactive aquatic environments, custom NPC behaviors, and engaging core gameplay mechanics.</li>
        <li>Built and scripted NPC systems, enabling dynamic interactions and AI-driven behaviors that enhanced player immersion.</li>
        <li>Designed and implemented gameplay mechanics for a sushi restaurant tycoon game, including progression systems, resource management, and player reward loops.</li>
        <li>Created and optimized core game systems such as automation, player interactions, task management, and in-game economy mechanics.</li>
        <li>Developed monetization and progression systems for a ski-themed brainrot tycoon game, including premium purchases, VIP features, upgrade systems, and dynamic income multipliers generating 120% boost.</li>
        <li>Optimized gameplay systems and scripting architecture to support scalability, maintainability, and performance across Roblox experiences.</li>
        <li>Collaborated with designers, artists, and developers to transform game concepts into polished player experiences.</li>
      </ul>
    </div>

    <div class="career-card">
      <div class="career-role">
        Game Programmer
        <span class="career-badge">Unity / Unreal / Godot / VR</span>
      </div>
      <div class="career-org">Faswork ID — Remote</div>
      <div class="career-period">July 2024 to January 2026</div>
      <ul>
        <li>Successfully completed <strong>10+ game development projects</strong> for various international clients.</li>
        <li>Proficient in Unity, Unreal Engine, and Godot for end-to-end multiplatform game development.</li>
        <li>Designed and implemented gameplay mechanics, AI systems, and multiplayer networking architecture.</li>
        <li>Developed an immersive <strong>VR experience</strong> for an events company, enhancing interactive engagement.</li>
        <li>Created 3D assets using Blender and 2D assets with Aseprite &amp; Adobe Illustrator.</li>
        <li>Delivered high-quality projects within deadlines while maintaining clear communication with stakeholders.</li>
      </ul>
    </div>

    <div class="career-card">
      <div class="career-role">
        Programmer
        <span class="career-badge">ASP.NET Core / JS / SQL</span>
      </div>
      <div class="career-org">Datacaraka Solusindo — Jakarta</div>
      <div class="career-period">May 2024 to July 2024</div>
      <ul>
        <li>Developed interactive Calculator and Form tools using JavaScript to enhance user functionality.</li>
        <li>Designed and implemented Form pages with backend integration utilizing ASP.NET Core and DevExpress Framework for seamless data management.</li>
        <li>Connected web form pages to SQL Server, ensuring high-performance data storage and retrieval.</li>
      </ul>
    </div>

    <div class="career-card">
      <div class="career-role">
        Customer Engineer
        <span class="career-badge">SQL / SIT / UAT</span>
      </div>
      <div class="career-org">NawaData Solution — Jakarta</div>
      <div class="career-period">August 2023 to February 2024</div>
      <ul>
        <li>Iteratively tested and refined SQL code and matched processed data from User Acceptance Testing (UAT) with client datasets.</li>
        <li>Managed System Integration Testing (SIT) and User Acceptance Testing (UAT) using smoke and usability testing methods.</li>
        <li>Acquired comprehensive domain knowledge in finance, accounting, and banking regulations.</li>
      </ul>
    </div>

    <div class="career-card">
      <div class="career-role">
        Technical Artist
        <span class="career-badge">Shaders / 60+ FPS Optimization / CI-CD</span>
      </div>
      <div class="career-org">Agate International — Bandung</div>
      <div class="career-period">August 2022 to February 2023</div>
      <ul>
        <li>Developed environment components using custom shaders and deepened pipeline graphics optimization.</li>
        <li>Optimized mobile graphics performance, ensuring consistent <strong>60+ FPS</strong> execution on mid-end Android devices.</li>
        <li>Created, tested, and implemented a CI/CD pipeline for automated testing in the alpha stage and app versioning.</li>
        <li>Conducted real-time stress testing and destructive testing to explore player limits and device stability.</li>
      </ul>
    </div>

    <div class="career-card">
      <div class="career-role">
        Programmer
        <span class="career-badge">Game Reskin / Ads / VFX</span>
      </div>
      <div class="career-org">Miracle Gates Entertainment — Yogyakarta</div>
      <div class="career-period">March 2022 to June 2022</div>
      <ul>
        <li>Revitalized several games (<em>Merge Master</em>, <em>Spray Can</em>, <em>Bowling</em>, <em>Lighter</em>, <em>Siren</em>) through comprehensive reskinning and gameplay polish.</li>
        <li>Crafted environment art and visual effects (VFX) for company titles.</li>
        <li>Integrated mobile game advertising systems (Google Ads, Unity Ads) and SEO for user acquisition.</li>
      </ul>
    </div>

    <div class="career-card">
      <div class="career-role">
        Game Programmer
        <span class="career-badge">Unity / Visual Novel / Itch.io</span>
      </div>
      <div class="career-org">Extralife Entertainment — Tangerang</div>
      <div class="career-period">June 2021 to December 2021</div>
      <ul>
        <li>Created story and mechanics for a visual novel using Whimsical and Unity aligned with company vision.</li>
        <li>Spearheaded development and successful launch of a visual novel on itch.io over six months of development.</li>
        <li>Deconstructed casual game systems, providing critical insights for future internal production.</li>
      </ul>
    </div>
  `,

  // 1: Education & Certifications
  `
    <div class="career-card">
      <div class="career-role">
        Unity Certified Associate: Programmer
        <span class="career-badge">Certification</span>
      </div>
      <div class="career-org">Unity Technologies</div>
      <div class="career-period">August 2024 to August 2027</div>
      <ul>
        <li>Official industry certification validating expertise in core Unity game development, C# programming, physics engines, UI integration, asset management, and debugging.</li>
      </ul>
    </div>

    <div class="career-card">
      <div class="career-role">
        Bachelor of Mathematics (B.Math)
        <span class="career-badge">Current Degree</span>
      </div>
      <div class="career-org">Universitas Terbuka — Bandung</div>
      <div class="career-period">March 2026 to Present</div>
      <ul>
        <li>Specializing in higher mathematics, linear algebra, discrete mathematics, and computational algorithms that reinforce game physics, procedural generation, and graphics mathematics.</li>
      </ul>
    </div>

    <div class="career-card">
      <div class="career-role">
        Bachelor of Applied Science (B.App.Sc) — Game Technology
        <span class="career-badge">Degree</span>
      </div>
      <div class="career-org">Sekolah Tinggi Multimedia "MMTC" — Sleman</div>
      <div class="career-period">August 2018 to July 2023</div>
      <ul>
        <li>Comprehensive training in gameplay architecture, C# / C++ performance design, OpenGL graphics programming, algorithm optimization, and SQL database management.</li>
        <li>Completed thesis on 3D interactive narrative mechanics and custom gameplay controller architecture.</li>
      </ul>
    </div>
  `
];

// ------------------------------------------
// 3. MAIN SECTION TAB NAVIGATION
// ------------------------------------------
let lastTabName = "";

function selectTab(tabName, forceOpen = false) {
  const selectionArea = document.getElementById("data_selection_area");
  const projectArea = document.getElementById("project_data_area");
  const buttons = document.querySelectorAll(".btn-5");

  // Remove active highlight from all main buttons
  buttons.forEach(btn => btn.classList.remove("active-tab"));

  if (!forceOpen && lastTabName === tabName) {
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
      // Auto-load work experience by default
      LoadCareer(document.getElementById('work-Button'), 0);
    } else {
      projectArea.innerHTML = "";
      projectArea.style.opacity = "0";
    }

    if (forceOpen) {
      setTimeout(() => {
        selectionArea.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
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
        <p class="fs-5 mb-3" style="color: var(--text-main);">${data.desc}</p>
        <p class="mb-4" style="color: var(--text-muted);"><strong style="color: var(--cyber-cyan);">Technologies Used:</strong> <span style="color: var(--text-main);">${data.tech}</span></p>
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
