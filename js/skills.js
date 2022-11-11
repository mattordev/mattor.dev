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
        <link rel="stylesheet" href="/css/skills.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href=${data.Main.favicon}>
        <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">            
    `;

  element = document.getElementById("title");
  element.innerHTML = data.Main.title + element.innerHTML;
}
