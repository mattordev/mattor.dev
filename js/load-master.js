// Gets all the data corrosponding to the master-page
let masterpage = fetch("/templates/master.json")
  .then((response) => response.json())
  .then((json) => parsePageInfo(json));

// generates a html main from json
function generateMain(data) {
  element = document.getElementById("head");
  element.innerHTML += `
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MATTORDEV</title>
        <link rel="stylesheet" href="/css/index.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href=${data.favicon}>                  
    `;

  element = document.getElementById("title");
  element.innerHTML = data.title + element.innerHTML;
}

// generates a html header from json
function generateHeader(data) {
  // Gets the header ID from html files
  element = document.getElementById("header");
  element.innerHTML = `
        <link rel="stylesheet" href="/css/header.css">        
    `;
  // Iterates through each page and appends it onto the html element
  let buttons = "";
  for (let i = 0; i < data.sitepages.length; i++) {
    buttons += `
            <li class="navbar__btn">
                <a href=${data.sitepages[i].redirect} class="button">${data.sitepages[i].pagename}</a>
            </li>
        `;
  }

  // Initialises the main part of the header
  element.innerHTML += `
      <!-- Navbar Section -->
      <nav class="navbar">
        <div class="navbar__container">
          <a href="/" id="navbar__logo"><img src = "${data.siteicon}" alt="Home Page" width=60" height="60">MATTORDEV</a>
          <div class="navbar__toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class="navbar__menu">
            ${buttons}
          </ul>
        </div>
      </nav>
    `;

  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar__menu");

  menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  });
}

// generates a html footer from json
function generateFooter(data) {
  let buttons = "";
  for (let i = 0; i < data.sitesocials.length; i++) {
    if (!data.sitesocials[i].showinfooter) {
      continue;
    }
    buttons += `
          <a href=${data.sitesocials[i].link} target="_blank" rel="noopener noreferrer" id="social__icons" class = "${data.sitesocials[i].icon}"></a>
        `;
  }

  // Gets the header ID from html files
  element = document.getElementById("footer");
  element.innerHTML = `
        <link rel="stylesheet" href="/css/footer.css">
        <div class="footer__container">
          <div class="footer__links">
            <div class="footer__link--wrapper">
              <div class="footer__link--items">
                <h2>Contact Me</h2>
                <a href="/contact-me.html">Contact</a>
                <a href="/">Something isn't working right</a>
              </div>
            </div>
            <div class="footer__link--wrapper"></div>
          </div>
          <div class="social__media">
            <div class="social__media--wrap">
              <div class="footer__logo">
                <a href="/" id="footer__logo"><img src = "${data.siteicon}" alt="Home Page" width=60" height="60"></i>MATTORDEV</a>
              </div>
              <p class="website__rights">© Matthew Roberts 2022. All Rights Reserved</p>
              <div class="social__icons">
              ${buttons}
              </div>
            </div>
          </div>
        </div>
    `;
}

// Parse the header information into JS
async function parsePageInfo(json) {
  generateMain(json.Main);
  generateHeader(json.Header);
  generateFooter(json.Footer);
}
