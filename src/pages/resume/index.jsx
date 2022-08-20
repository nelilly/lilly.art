import Head from 'next/head';
import Layout from 'src/components/Layout';
import {
  resume,
  resumeSection,
  cover,
  experienceSection,
  position,
  details,
  employer,
  title,
  location,
  duration,
  description,
} from './style.module.css';

// console.log('Thanks for visiting!');

const ResumePage = () => {
  
  return (
    <>
      <Head>
        <title>N.E.Lilly: Résumé</title>
        <link rel="canonical" href="https://lilly.art/resume/" />
        <meta property="og:title" content="N.E.Lilly: Résumé" key="title" />
        <meta property="og:url" content="https://lilly.art/resume/" />
        <meta property="og:description" content="N.E.Lilly: Résumé." />
        <meta property="og:image" content="https://lilly.art/images/og/home.webp" />
        <meta property="twitter:image" content="https://lilly.art/images/og/home.webp" />
        <meta name="keywords" content="N.E. Lilly, Nathan E. Lilly, resume, portfolio, development, design, art, illustration" />
        <meta name="description" content="N.E.Lilly: Résumé." />
      </Head>
      <Layout>
        <article className={resume}>
          <section className={`${resumeSection} ${cover}`}>
            <h1>Nathan E. Lilly</h1>
            <h2>UX Engineer, Front-End Development, UI Design</h2>
            <p>Software Development, Apps, Web + Mobile</p>
            <p>Nathan E. Lilly used his artistic training to become a software developer for Fortune 100 companies in the technology, media, and finance industries. He is an effective communicator with the ability to explain technical issues in everyday language. He has consistently demonstrated the ability to effectively translate ideas into reality, working on multiple assignments simultaneously, while ensuring that each one meets its deadlines and is of high quality. Skilled in User Interface (UI) Engineering and Front-End Development; Human Factors &amp; Accessibility (A11y); Full-Stack Development (LAMP, MERN, AWS/Serverless), CMS Development; Information Architecture, Content Strategy; User Experience (UX) Design; Illustration and Visual Design; Interactive Media, Animation and Motion Graphics.</p>
          </section>
          <section className={`${resumeSection} ${experienceSection}`}>
            <h2>Experience</h2>
              <section className={position}>
                <h3 className={employer}>Comcast NBCUniversal</h3>
                <div className={details}>
                  <p className={title}>Senior UI/UX Developer</p>
                  <p className={location}>Philadelphia, PA</p>
                  <p className={duration}>6/2021 - Present</p>
                </div>
                <p className={description}>Gather and evaluate user-focused requirements, design graphic elements, and build new software and web applications in collaboration with product managers and engineers in a fast-paced Agile driven environment using HTML5, CSS3, JavaScript (ES6), design software (Adobe CS, Photoshop, Illustrator), wireframe tools, and Javascript UI technologies and frameworks (including React, MERN, JAM, AWS/Serverless) for Comcast NBCUniversal internal development teams. Lead teams/projects and shares expertise. Mentor and train other members of the team and non-technical personnel. Prepare and present drafts, storyboards, process flows, sitemaps, prototypes, and finished applications to internal teams and key stakeholders. Apply comprehensive knowledge of human/computer interaction, web standards, accessibility, responsive device support, browser rendering, and cross-browser support. Integrate knowledge of business and functional priorities. Adhere to corporate style guide standards. Create original graphic elements (e.g. images, figures, sketches, charts, and tables). Identify and troubleshoot potential user experience issues. Conduct adjustments to the application based on user feedback. Assist with tracking performance metrics. Analyze, test, and assist with the integration of new components and applications. Oversee the documentation of all development activity.</p>
                <div className={details}>
                  <p className={title}>UI Engineer</p>
                  <p className={location}>Philadelphia, PA</p>
                  <p className={duration}>4/2016 - 6/2021</p>
                </div>
                <p className={description}>Collaborate with UX designers and back-end developers in a fast-paced Agile driven environment to create and enhance user interfaces, components, and page designs for high-volume, large-scale web applications using HTML5, CSS3, JavaScript (ES6), and Javascript UI technologies and frameworks (including MERN, AWS/Serverless, React.js, Polymer, JQuery, JSON); Work with various CMSs and IDEs; Required intimate knowledge of web standards, accessibility, responsive device support, browser rendering, and cross-browser support.</p>
              </section>
              <section className={position}>
                <h3 className={employer}>The Judge Group <span>for Comcast NBCUniversal</span></h3>
                <div className={details}>
                  <p className={title}>Senior Front-End Developer</p>
                  <p className={location}>Philadelphia, PA</p>
                  <p className={duration}>8/2014 - 4/2016</p>
                </div>
                <p className={description}>Collaborate with UX designers and back-end developers in a fast-paced Agile driven environment to create and enhance user interfaces for high-volume, large-scale web applications; Develop advanced interactive page features using HTML5, JavaScript, JQuery and custom code; Work with Sitecore CMS, Visual Studio, and Team Foundation Server (TFS); Experience rendering page designs for large-scale, public-facing websites using HTML, CSS, and Javascript UI technologies (including JQuery, React.js, Polymer, AJAX, JSON, MVC, MVVM, Knockout.js); Required intimate knowledge of web standards, accessibility, responsive device support, browser rendering, and cross-browser support.</p>
              </section>
              <section className={position}>
                <h3 className={employer}>LiquidHub <span>for The Vanguard Group</span></h3>
                <div className={details}>
                  <p className={title}>Senior UI Designer</p>
                  <p className={location}>Malvern, PA</p>
                  <p className={duration}>1/2010 - 6/2014</p>
                </div>
                <p className={description}>Responsible for User Interaction development (UX), user interface design of website prototypes, and component based design solutions using Dreamweaver, XML, Cascading Style Sheets, JavaScript, HTML, JSF, Photoshop, Illustrator, and RIAs (Rich Internet Applications using tools like AJAX, Flash) in an Agile project management environment for the User Centered Design group of a premier investment management company. Provide senior level user interface design services, which include the analysis of complex user and business workflows and the design and documentation of highly usable interfaces (web, mobile, or client/server), reflecting knowledge of the user’s tasks, information hierarchy and usability best practices. Create detailed user interface designs, including prototyping, for external (web/mobile) and internal (client/server) applications. Support the creation of visual elements, components and templates. Recommend viable, effective design/code solutions which supported underlying performance thresholds. Maintain technical knowledge around company UCD practices, use of templates &amp; components, and prototype process.</p>
              </section>
              <section className={position}>
                <h3 className={employer}>Freelance <span>for various clients</span></h3>
                <div className={details}>
                  <p className={title}>Lead Developer</p>
                  <p className={location}>Philadelphia, PA</p>
                  <p className={duration}>8/1998 - Present</p>
                </div>
                <p className={description}>Design and development on various projects; Work closely with clients to answer questions and understand project expectations. Create and adherence to project budgets. Present specifications, storyboards, wireframes, and design prototypes. Advise and provide guidance to clients through each step of site construction. Quality assurance and testing of all web design projects, including web usability and accessibility. Create and manage Internet and Intranet sites, with key responsibility for creation of web content. Design, develop, and implement web interfaces, graphics, and layouts. Create, optimize, and manipulate images. Create and produce interactive rich media ads. Write, edit and proofread documents in the process of planning and preparing articles for online dissemination.</p>
              </section>
              <section className={position}>
                <h3 className={employer}>GMAC Mortgage</h3>
                <div className={details}>
                  <p className={title}>Web Developer</p>
                  <p className={location}>Fort Washington, PA</p>
                  <p className={duration}>4/2007 - 10/2009</p>
                </div>
                <p className={description}>Work closely with business/marketing staff to answer questions and understand project expectations; Assure code quality and test all projects, including web usability and accessibility; Develop and maintain web sites using HTML, CSS, JavaScript, Dreamweaver, Flash, and XML. Sites included GMAC Mortgage, Ditech, and various internal applications.</p>
              </section>
              <section className={position}>
                <h3 className={employer}>Kelly Professional Services <span>for J.P.Morgan Chase</span></h3>
                <div className={details}>
                  <p className={title}>Web Technician</p>
                  <p className={location}>Wilmington, DE</p>
                  <p className={duration}>5/2005 - 4/2007</p>
                </div>
                <p className={description}>Responsible for development and maintenance of client websites for JPMorgan Chase. Additional responsibilities include creation and maintenance of automation scripts and applications. Develop and maintain web sites using HTML, CSS, JavaScript, Dreamweaver, Flash, and XML. Clients included Disney, United Airlines, Amazon, Starbucks, Universal Studios.</p>
              </section>
              <section className={position}>
                <h3 className={employer}>E-duction, Inc.</h3>
                <div className={details}>
                  <p className={title}>Electronic Media Manager</p>
                  <p className={location}>Blue Bell, PA</p>
                  <p className={duration}>2/2001 - 7/2002</p>
                </div>
                <p className={description}>Creation and implementation of the company’s style guides and visual brand standards. Design and maintain all aspects of the company’s published materials including web sites, desktop publishing, traditional print media, and presentations.</p>
              </section>
              <section className={position}>
                <h3 className={employer}>University of the Arts</h3>
                <div className={details}>
                  <p className={title}>Instructor (Adjunct Faculty)</p>
                  <p className={location}>Philadelphia, PA</p>
                  <p className={duration}>2/2001 - 9/2001</p>
                </div>
                <p className={description}>Instruction of continuing education students in web development methods and technologies, including web graphics, HTML, CSS, JavaScript, Flash, and multimedia, in a university class format.</p>
              </section>
              <section className={position}>
                <h3 className={employer}>JSP Concepts</h3>
                <div className={details}>
                  <p className={title}>Tutor</p>
                  <p className={location}>Camp Hill, PA</p>
                  <p className={duration}>2/1997 - 10/2001</p>
                </div>
                <p className={description}>Private on-on-one instruction with individual students in the use of graphic design applications.</p>
              </section>
              <section className={position}>
                <h3 className={employer}>JFC ProTemps <span>for TSR Inc. &amp; NavSup FMSO</span></h3>
                <div className={details}>
                  <p className={title}>Web Developer</p>
                  <p className={location}>Camp Hill, PA</p>
                  <p className={duration}>10/1999 - 10/2000</p>
                </div>
                <p className={description}>Re-design and maintenance of the 4,000 page United States Navy Supply (Fleet Material Supply Office) website to ensure greater security of the site based on consultations with Navy Marketing Representative and Navy Webmaster.</p>
              </section>
          </section>
          <section>
            <h2>Skills</h2>
              <h3>Development</h3>
              <p>UI Engineering and Front-End Development of applications integrating databases and using server-side scripting languages. E-commerce implementation and support. Database planning, normalization, and integration.</p>
              <dl>
                <dt>Programming:</dt>
                <dd>Javascript, Javascript Frameworks (React, Polymer, Angular), Redux, Functional Programming, Regular Expressions, Object Oriented Programming (OOP); MERN, LAMP, AWS/Serverless;</dd>
                <dt>Server-side Scripting:</dt>
                <dd>Node, PHP, CGI, Perl, ASP, XML;</dd>
                <dt>Web Services:</dt>
                <dd>HTML5 APIs, RSS, RDF;</dd>
                <dt>Networking:</dt>
                <dd>Apache, FTP, SSH;</dd>
                <dt>Databases:</dt>
                <dd>DynamoDB, SQL, MySQL, SQLite, Access;</dd>

                <p>HTML5, CSS3, JavaScript, ES6, React.js, Redux, Polymer, jQuery, DHTML, SVG, Responsive design, Web Performance, Cross-Platform, Cross-Browser, Web Standards compliant design, Search Engine Optimization; Node, PHP, Python, ASP, CGI; Apache; SQL, MySQL; MERN, JAM, LAMP;</p>
              </dl>

              <h3>Design</h3>
              <p>User Experience (UX), Internet consulting, project management for the WWW, web analysis &amp; redesign, and web design &amp; development. Creation of visual, audio, animation, video, and interactive media for the Internet. Search engine optimization, including keyword research/selection, meta tagging, search engine submissions, position tracking.</p>
              <dl>
                <dt>Visual Design:</dt>
                <dd>Adobe Photoshop, Image Ready, Illustrator, CorelDraw, GIMP;</dd>
                <dt>UI Design:</dt>
                <dd>Cross-Platform, Cross-Browser, Web Standards compliant design, Search Engine Optimization, XHTML, HTML, HTML5, Javascript, jQuery, Cascading Style Sheets (CSS-1, CSS-2, CSS-P, CSS3), DHTML, Web Page Editors (Dreamweaver, Adobe GoLive, Microsoft FrontPage);</dd>
                <dt>Media Production</dt>
                <dd>Macromedia Flash (Animation, Video, Actionscript), Streaming Audio and Video, SVG, SMIL, Director, Sound Forge, Premiere; Lightwave, Poser, Bryce;</dd>
                <p>Adobe Photoshop, Illustrator, InDesign, CorelDraw, Flash (Animation, Video, Actionscript), Streaming Audio and Video, Director, Sound Forge, Premiere; Lightwave, Poser, Bryce; </p>
              </dl>
          </section>
          <section>
            <h2>Certifications</h2>
            <dl>
              <dt>International Association of Accessibility Professionals</dt>
              <dd><a href="https://www.accessibilityassociation.org/cpwacertificants#L-R">Certified Professional in Web Accessibility</a> (CPWA), 12/2018</dd>
            </dl>
          </section>
          <section>
            <h2>Volunteering</h2>
            <dl>
              <dt><a href="https://gparsec.com">gPARSEC</a> (Greater Pottstown Area Robotics Science and Engineering Community)</dt>
              <dd>Treasurer, 2019 to present</dd>
              <dd>Mentor, 2016 to present</dd>
              <dt>BSA Troop 4 of Royersford</dt>
              <dd>Webmaster, 2014 to 2016</dd>
              <dt>Philadelphia Science Fiction Society</dt>
              <dd>Secretary, 2003 to 2006</dd>
              <dd>Webmaster, 2002 to 2010</dd>
            </dl>
          </section>
          <section>
            <h2>Education</h2>
            <dl>
              <dt>Berkeley Computer Training Corporation</dt>
              <dd>Internet Technology Certificate, 1998</dd>
              <dt>Lock Haven University</dt>
              <dd>Bachelor of Arts in Fine Art (Electronic Media), 1996</dd>
              <dd>Bachelor of Arts in Philosophy, 1996</dd>
              <dt>Mastbaum (Area Vocational Technical School)</dt>
              <dd>Vocational Technical Diploma, Commercial Art, 1991</dd>
            </dl>
          </section>
          {/* <section>
            <ul>
              <li>LinkedIn</li>
              <li>PDF</li>
              <li>???</li>
            </ul>
          </section> */}
        </article>
      </Layout>
    </>
  )
};

export default ResumePage
