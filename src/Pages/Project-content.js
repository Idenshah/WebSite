const projects = [
  {
    name: "Pokemon",
    title: "The Pokedex encyclopedia!",
    content: [
      `I successfully created a dynamic Pokédex using provided files. The Pokédex is organized by Pokémon
       types and sorted alphabetically. Leveraging the Pokémon data from the pokedex.js file,
       I meticulously designed an index.html file, style.css file, and script.js file.
       The Pokédex not only displays Pokémon by type but also showcases their essential information,
       including their sprite image, name, and base stats. A responsive navigation bar facilitates easy navigation by Pokémon type.
       My accomplishments involved dynamic data retrieval, sorting, and ensuring a seamless user experience.
       Each Pokémon in the pokedex.js file is now beautifully presented, and clicking on a Pokémon opens
       an official Pokédex page in a new tab or window, offering a comprehensive and engaging user interface.`,
    ],
    link: (
      <div className="LinkWeb">
        <button
          onClick={() => window.open("https://iden-pokemon.netlify.app/")}
        >
          Open Project
        </button>
      </div>
    ),
    code: (
      <div className="codeGit">
        <a href="https://github.com/Idenshah/Project-Pokemon">
          <img src="/image/github.png" alt="git-code" />
        </a>
      </div>
    ),
    lighthouse: (
      <div className="lighthouseImage">
        <a href="/image/PokemonLighthouse.png">lightHouse Report</a>
      </div>
    ),
  },
  {
    name: "AstronomyPictures",
    title: " Astronomy Pictures of the Day ",
    content: [
      `In this project, I've crafted a captivating web application by meticulously designing an HTML file,
       a CSS file, and a JavaScript file. These files seamlessly connect to NASA's APOD API, enabling users
       to embark on a cosmic journey through Astronomy Pictures of the Day (APOD). By inputting a date of interest,
       users unlock the celestial beauty of each day's APOD, presented with its title, date,
       and an enthralling explanation. Clicking on the images reveals high-definition versions,
       adding depth to the experience. To personalize the journey, I've incorporated a feature that
       lets users save their favorite APOD images, stored conveniently in local storage.
       This project not only showcases my web development skills but also offers users an engaging and responsive
       interface for exploring the wonders of the cosmos.`,
    ],
    link: (
      <div className="LinkWeb">
        <button
          onClick={() =>
            window.open("https://iden-astronomy-daily-picture.netlify.app")
          }
        >
          Open Project
        </button>
      </div>
    ),
    code: (
      <div className="codeGit">
        <a href="https://github.com/Idenshah/Daily-Picture">
          <img src="/image/github.png" alt="git-code" />
        </a>
      </div>
    ),
    lighthouse: (
      <div className="lighthouseImage">
        <a href="/image/AstronomyLighthouse.png">lightHouse Report</a>
      </div>
    ),
  },
  {
    name: "Cuisine Table",
    title: " Cuisine Table ",
    content: [
      `Cuisine Table Web Project: A Team Effort in Web Development Excellence.
       Explore the technical brilliance behind Cuisine Table, a collaborative effort by a group of
       dedicated web developers. Dive into the HTML and CSS craftsmanship that brings visually stunning
       web pages to life. Discover the dynamic capabilities of JavaScript, powering an interactive login page.
       Plus, experience our API integration, designed to provide users with culinary insights.
       Witness the synergy of teamwork and web development expertise in action!`,
    ],
    link: (
      <div className="LinkWeb">
        <button
          onClick={() => window.open("https://cuisine-table.netlify.app/")}
        >
          Open Project
        </button>
      </div>
    ),
    code: (
      <div className="codeGit">
        <a href="https://github.com/Idenshah/CuisineTable">
          <img src="/image/github.png" alt="git-code" />
        </a>
      </div>
    ),
    lighthouse: (
      <div className="lighthouseImage">
        <a href="/image/CuisineTable.png">lightHouse Report</a>
      </div>
    ),
  },
];

export default projects;
