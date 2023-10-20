import React from "react";
const AboutPage = () => {
  return (
    <>
      <div className="about">
        <h1>About me!</h1>
        <p className="aboutMe">
          On this page, you'll find more about my background and experiences,
          offering insights into the path that led me to the dynamic field of
          web development.
        </p>
        <div className="downloadCV">
          <a
            href="https://drive.google.com/uc?export=download&id=1O3LJgRHQJySzM4zNGHV4fCAxuk3t6CyI"
            download
          >
            <img src="/image/downloadCV.png" alt="CV download link" />
          </a>
        </div>

        <h3>Program Skills</h3>
        <p className="aboutMe">
          I've cultivated a diverse skill set that empowers me to transform
          ideas into digital realities. My proficiency encompasses a wide array
          of programming languages, including JavaScript, C#, ASP.NET (Razor
          Page), PHP, and Python, enabling me to create interactive web
          applications, versatile software solutions, and captivating user
          interfaces. I also specialize in crafting visually appealing and
          structurally sound web content using HTML and CSS.
        </p>
        <p className="aboutMe">
          To enhance the user experience and streamline development, I leverage
          the React JavaScript library and the Bootstrap front-end framework.
          This combination allows me to build dynamic and responsive web
          applications efficiently. In terms of data management, I am adept at
          working with SQL for efficient handling of relational databases. My
          expertise extends to the use of MySQL as a database management system,
          ensuring data organization and retrieval are seamless and efficient.
        </p>
        <h3>Programming Languages and Platforms</h3>
        <ul className="aboutList">
          <li>
            <span className="listBold">Programming Languages: </span>{" "}
            JavaScript, C#, ASP.net (Razor page), PHP, and Python
          </li>
          <li>
            <span className="listBold"> Markup and Styling Languages: </span>
            HTML/CSS
          </li>
          <li>
            <span className="listBold"> JavaScript: </span>
            React
          </li>
          <li>
            <span className="listBold"> Front-End Framework: </span>
            Bootstrap
          </li>
          <li>
            <span className="listBold"> Query Language: </span>
            SQL
          </li>
          <li>
            <span className="listBold"> Operating Systems: </span>
            Windows, Raspberry Pi, Linux
          </li>
          <li>
            <span className="listBold"> Database Management System: </span>
            MySQL
          </li>
          <li>
            <span className="listBold"> Design and Graphic Software: </span>
            Figma, Illustrator, Photoshop
          </li>
        </ul>
        <h3>Education</h3>
        <h4>Web Development & Internet Applications Diploma</h4>
        <li>Algonquin College, (Ottawa, Canada), 2023 - Present</li>
        <dl className="aboutList">
          <span className="listBold"> Chosen Academic Course works: </span>
          Web programming (HTML, CSS, JavaScript, C# and ASP.net Razor page),
          Web Applications Development (PHP), Web Design, Computer Programming
          (Python), Database Design and Administration, Networking Operating
          Systems, Graphics Technologies.
        </dl>
        <dl className="aboutList">
          <span className="listBold"> Achievement: </span>I feel privileged to
          have maintained a consistent presence on the Dean's Honors list
          throughout my academic journey.
        </dl>

        <h4>
          Bachelor of Science in Petroleum Drilling and Extraction Engineering
        </h4>
        <li>Azad University, (Khuzestan, Iran)</li>
        <h3>Certificate</h3>
        <div className="certification">
          <dl>• JavaScript Essential Training</dl>
          <dl>• React: Creating and Hosting a Full-Stack Site</dl>
          <dl>• Verified International Academic Qualifications (WES)</dl>
        </div>
        <h3>Work Experience</h3>
        <h4>Perpetual Inventory Clerk</h4>
        <div className="workList">
          <dl>Loblaw Company, (Ottawa, Canada), Jan 2023 - Present</dl>
          <dl>
            • Monitoring and upholding procedures to guarantee precise inventory
            control.
          </dl>
          <dl>
            • Collaborating with management to report inventory-related
            concerns.
          </dl>
        </div>
        <h4>Operation Data Analyst</h4>
        <div className="workList">
          <dl>Global Wellbore Solution, (Tehran, Iran), Sep 2018 - Sep 2022</dl>
          <dl>
            • Aggregate data from multiple sources within the operation,
            encompassing databases, logs, sensors, and external APIs.
          </dl>
          <dl>
            • Examine data to discover trends, patterns, and irregularities that
            could potentially influence the operation's effectiveness.
          </dl>
        </div>
        <h4>Operation Coordinator</h4>
        <dl>
          Certified Oilfield Rentals, (Kish Island, Iran), Jan 2017 - Mar 2018
        </dl>
        <div className="workList">
          <dl>
            • Ensured high quality and functionality of provided equipment for
            efficient operations.
          </dl>
          <dl>
            • Observed and evaluated the company's services, offering feedback
            to top management regarding outcomes and adherence to company
            regulations in implementing these services.
          </dl>
        </div>
        <h3>Academic Projects</h3>
        <div className="academicProjects">
          <dl>
            • Using JavaScript, HTML, and CSS, to create a Pokedex by
            dynamically sorting Pokémon alphabetically and categorizing it by
            type.
          </dl>
          <dl>
            • Design and develop a web application using JavaScript, HTML, and
            CSS to allow users to request Astronomy Pictures of the Day by date
            using the NASA APOD API.
          </dl>
          <dl>
            • Creating a website utilizing JavaScript, HTML, and CSS enables
            users to search for various food recipes.
          </dl>
          <dl>
            • Created a student registration project using ASP.NET, enabling
            users to enter their names and select their study programs.
            Depending on the program's term requirements, users can then choose
            their courses.
          </dl>
          <dl>
            • Developed a PHP web application with session-based data input,
            validation, and regex checks for accurate and secure data storage,
            including customer details. The application performs banking-related
            calculations.
          </dl>
          <dl>
            • Created an ASP.NET Razor Pages application for student course
            registration, grade input, and user-friendly sorting by columns.
            Utilized secure session management for data storage.
          </dl>
          <dl>• Developed a bank console application using C#.</dl>
          <dl>
            • Created a Python program to calculate cone volumes, generate
            secure passwords, and count vowel characters in inputs.
          </dl>
        </div>
        <h3>Additional Qualifications</h3>
        <div className="qualifications">
          <dl>
            • Proficient in Microsoft Office Suite, with a strong focus on Word,
            Excel, PowerPoint, and Outlook.
          </dl>
          <dl>
            • Proficient in using Git for code version control and facilitating
            collaborative work, enhancing code/data management, and sharing.
          </dl>
          <dl>
            • The ability to collaborate successfully with diverse teams in
            demanding situations, resulting in the consistent achievement of
            project objectives.
          </dl>
          <dl>
            • Strong communication and interpersonal skills in working with team
            managers, supervisors, and colleagues from diverse backgrounds and
            disciplines.
          </dl>
          <dl>
            • Utilize efficient time management techniques to effectively
            schedule tasks and ensure prompt completion of work within specified
            deadlines.
          </dl>
          <dl>
            • Effective problem-solving abilities to address customer concerns
            and ensure timely resolution.
          </dl>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
