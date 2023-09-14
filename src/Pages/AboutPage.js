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
            href="https://drive.google.com/u/0/uc?id=1KWXC2M5pIIyakUhg7DFweppqP27IF3o4&export=download"
            download
          >
            <img src="/image/downloadCV.png" alt="CV download link" />
          </a>
        </div>

        <h3>Program Skills</h3>
        <p className="aboutMe">
          In my exploration of web development, I've nurtured a versatile skill
          set that equips me to turn concepts into digital realities. I hold
          proficiency in programming languages like JavaScript, C#, and Python,
          enabling the creation of interactive web applications, adaptable
          software solutions, and engaging user interfaces. My expertise extends
          to HTML/CSS, allowing the crafting of visually appealing and
          well-structured web content. I'm also well-versed in the efficient
          management of data using SQL, which equips me to handle relational
          databases effectively. I possess the flexibility to work across
          various operating systems, including Windows, Raspberry Pi, and Linux.
          In terms of data organization, I excel with MySQL. These skills
          showcase my commitment to continuous learning and hands-on experience,
          preparing me for the ever-evolving field of web development.
        </p>
        <h3>Programming Languages and Platforms</h3>
        <ul className="aboutList">
          <li>
            <span className="listBold">Programming Languages: </span>{" "}
            JavaScript, C#, Python
          </li>
          <li>
            <span className="listBold"> Markup and Styling Languages: </span>
            HTML/CSS
          </li>
          <li>
            <span className="listBold"> Query Language: </span>
            SQL (Structured Query Language)
          </li>
          <li>
            <span className="listBold"> Operating Systems: </span>
            Windows, Raspberry Pi, Linux
          </li>
          <li>
            <span className="listBold"> Database Management System: </span>
            MySQL
          </li>
        </ul>
        <h3>Education</h3>
        <h4>Web Development & Internet Applications Diploma</h4>
        <li>Algonquin College, (Ottawa, Canada), 2023 - Present</li>
        <dl className="aboutList">
          <span className="listBold"> Chosen Academic Course works: </span>Web
          programming , Web Design , Computer Programming, Database Design and
          Administration , Networking Operating Systems , Graphics Technologies;
        </dl>
        <dl className="aboutList">
          <span className="listBold"> Achievement: </span>I feel privileged to
          have maintained a consistent presence on the Dean's Honors list
          throughout my academic journey.
        </dl>
        <h4>
          Master of Science in Petroleum Drilling and Extraction Engineering
        </h4>
        <li>
          Science and Research Azad University, (Tehran, Iran), 2011 - 2014
        </li>
        <dl>
          My graduation project was related to a feasibility study of managed
          pressure drilling (MPD) technique for the Parsi Oilfield.
        </dl>

        <h4>
          Bachelor of Science in Petroleum Drilling and Extraction Engineering
        </h4>
        <li>Omidiyeh Azad University, (Khuzestan, Iran), 2005 - 2009</li>
        <dl className="aboutList">
          My graduation project was related to bit selection and optimization.
        </dl>
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
        <h4>Operations Manager</h4>
        <div className="workList">
          <dl>Global Wellbore Solution, (Tehran, Iran), Sep 2018 - Sep 2022</dl>
          <dl>
            • Managed procurement and logistics for drilling and remedial
            equipment for 15 wells, with a total value of €4,097,091.
          </dl>
        </div>
        <h4>Operation and Warehouse Manager</h4>
        <dl>
          Certified Oilfield Rentals, (Kish Island, Iran), Jan 2017 - Mar 2018
        </dl>
        <div className="workList">
          <dl>
            • Oversaw procurement and logistics for drilling and remedial
            equipment for 39 wells, with a total value of €23,250,000.
          </dl>
          <dl>
            • Developed and delivered training courses aimed at enhancing skills
            of fellow staff members.
          </dl>
        </div>
        <h4>Workshop Supervisor and Drilling Engineer</h4>
        <dl>
          Certified Oilfield Rentals, (Kish Island, Iran), May 2016 - Jan 2017
        </dl>
        <div className="workList">
          <dl>
            • Ensured high quality and functionality of provided drilling and
            fishing/remedial equipment for efficient operations.
          </dl>
        </div>
        <h4>Drilling Engineer</h4>
        <dl>Certified Oilfield Rentals, (Tehran, Iran), Jun 2013 - May 2016</dl>
        <div className="workList">
          <dl>
            • Observed and evaluated the company's services, offering feedback
            to top management regarding outcomes and adherence to company
            regulations in implementing these services.
          </dl>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
