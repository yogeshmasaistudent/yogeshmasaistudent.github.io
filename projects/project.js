const Projects = [
  {
    name: "Miniminds",
    about:
      "I played a pivotal role in crafting Child Education Hub's course page, showcasing diverse online, offline, and outdoor learning experiences. Our platform fosters curiosity, critical thinking, and a passion for learning, enriching children's educational journey beyond traditional boundaries.",
    img: "https://github.com/vaibhavsingh326/algorithm-samrat-7890/raw/main/frontend/images/landing.png",
    gitrepo: "https://github.com/yogeshmasaistudent/algorithm-samrat-7890",
    tech_stack: "HTML | CSS | JAVASCRIPT | API's",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
    ],
    project_link: "https://65ae0a3a32bdb7f45c486224--willowy-crepe-4809ab.netlify.app/html/",
    project_type: "Group Project",
    category: ["all", "html"]
  },

  {
    name: "Portfolio website",
    about:
      "My collaborative effort focused on the contact section of our portfolio website. Designed with care, it offers seamless interaction and functionality, reflecting our dedication to user experience and communication.",
    img: "https://private-user-images.githubusercontent.com/104707355/280658940-f86bb066-7b8d-4f87-a21e-48da371fb3a9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDgxMTEwNjksIm5iZiI6MTcwODExMDc2OSwicGF0aCI6Ii8xMDQ3MDczNTUvMjgwNjU4OTQwLWY4NmJiMDY2LTdiOGQtNGY4Ny1hMjFlLTQ4ZGEzNzFmYjNhOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIxNlQxOTEyNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OTRiZjVhNGQ0OGRmN2QxMjgxZjcxYzRiNDJkNzBhYjI2YzA3OGM4OGFkODUyN2FhNGY0YmYyZDM0M2Q4NzdhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.mbWG1P7Z0JB3yzyJQ6wPw3FzALDn3ACzfhPjpx3U1cw",
    gitrepo: "https://github.com/yogeshmasaistudent/CW-Project-WEB204",
    tech_stack: "HTML | CSS",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
    ],
    project_link: "https://654794a3ffce144d4168ef3b--adorable-pie-00114a.netlify.app/",
    project_type: "Group Project",
    category: ["all", "html"]
  },
];

let projects__container = document.getElementById("projects--container");

let all_projects = document.querySelector(".all_projects");

let mern_projects = document.querySelector(".mern_projects");
// let other_projects = document.querySelector(".other_projects");
let html_projects = document.querySelector(".html_projects");

all_projects.classList.add("active_tech_project");

all_projects.addEventListener("click", () => {
  filterProjects("all");
  all_projects.classList.add("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  mern_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  html_projects.classList.remove("active_tech_project");
});
mern_projects.addEventListener("click", () => {
  filterProjects("mern");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  mern_projects.classList.add("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  html_projects.classList.remove("active_tech_project");
});

html_projects.addEventListener("click", () => {
  filterProjects("html");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  mern_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  html_projects.classList.add("active_tech_project");
});

function filterProjects(basis) {
  let filtered = Projects.filter((el) => {
    return el.category.includes(basis);
  });
  displayProjectData(filtered);
}

function displayProjectData(Projects) {
  projects__container.innerHTML = null;
  Projects.reverse().forEach((pro) => {
    let main = document.createElement("div");
    main.setAttribute("class", "portfolio-item padd-15");
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>
     
      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack}
      </div>
	  <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
      
    </div>
  </div>
    `;
    projects__container.append(main);
  });
}

displayProjectData(Projects);

// TODO    Project images

// image_website = "https://github.com/KManishY/imageWebApp/blob/master/imageProject.png?raw=true"

// bonsai_image = "https://github.com/KManishY/hello_Bonsai_Clone/blob/master/BonsaiImage.png?raw=true"

// nykaa_image = "https://github.com/tanuk11/Nykaa_Clone/blob/main/Nykaa_image.png?raw=true"

// calculater_image = "https://github.com/KManishY/Calculater-js/blob/master/calculater.png?raw=true"
