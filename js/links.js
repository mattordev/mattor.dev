// Gets all the data corrosponding to the master-page
let indexpage = fetch("/templates/master.json")
  .then((response) => response.json())
  .then((json) => generateMain(json));

// generates a html main from json
function generateMain(data) {
  element = document.getElementById("head");
  element.innerHTML += `
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MATTORDEV</title>
        <link rel="stylesheet" href="/css/links.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href=${data.Main.favicon}>                  
    `;

  element = document.getElementById("title");
  element.innerHTML = data.Main.title + element.innerHTML;
}
