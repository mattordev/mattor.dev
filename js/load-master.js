// Gets all the data corrosponding to the master-page
let masterpage = fetch("/json/master.json")
	.then((response) => response.json())
	.then((json) => parsePageInfo(json));

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
          <div class="social__media">
            <div class="social__media--wrap">
              <div class="social__icons">
              ${buttons}
              </div>
              <p class="website__rights">© Matthew Roberts 2022. All Rights Reserved</p>
            </div>
          </div>
        </div>
    `;
}

// generates a html footer from json
function generateFooterNoLinks(data) {
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
	element = document.getElementById("footer-no-links");
	element.innerHTML = `
        <link rel="stylesheet" href="/css/footer.css">
        <div class="footer__container">
          <div class="footer__links">
            <div class="footer__link--wrapper">
            </div>
            <div class="footer__link--wrapper"></div>
          </div>
          <div class="social__media">
            <div class="social__media--wrap">
              <p class="website__rights">© Matthew Roberts 2022. All Rights Reserved</p>
            </div>
          </div>
        </div>
    `;
}

// Parse the header information into JS
async function parsePageInfo(json) {
	generateHeader(json.Header);
	generateFooter(json.Footer);
	//generateFooterNoLinks(json.Footer);
}
