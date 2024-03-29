import Head from 'next/head';
import Layout from 'src/components/Layout';
import {
  bio,
  bioSubtitle,
  quote,
  quoteCitation,
} from './style.module.css';

// console.log('Thanks for visiting!');

const BioPage = () => {
  
  return (
    <>
      <Head>
        <title>N.E.Lilly: Biography</title>
        <link rel="canonical" href="https://lilly.art/biography/" />
        <meta property="og:title" content="N.E.Lilly: Biography" key="title" />
        <meta property="og:url" content="https://lilly.art/biography/" />
        <meta property="og:description" content="N.E.Lilly: Biography." />
        <meta property="og:image" content="https://lilly.art/images/og/home.webp" />
        <meta property="twitter:image" content="https://lilly.art/images/og/home.webp" />
        <meta name="keywords" content="N.E. Lilly, Nathan E. Lilly, biography, portfolio, development, design, art, illustration" />
        <meta name="description" content="N.E.Lilly: Biography." />
      </Head>
      <Layout>
        <article className={bio}>
          <blockquote className={quote}>
            <p>From time to time I have been asked for a biography, but there has been nothing eventful in my life. There have been ups and downs, but the main thing about it has been my work. What more do you want to know about an artist when you have his work? Even Giotto and Rembrandt were just simple men. There is very little known about Shakespeare. He was so simple they didn’t notice him.</p>
            <p className={quoteCitation}>&mdash; John French Sloane, The Gist of Art</p>
          </blockquote>
          <h1>I’m Nathan E. Lilly</h1>
          <p className={bioSubtitle}>I’ve used my artistic training to become a software developer for Fortune 100 companies in the technology, media, and finance industries.</p>
          <p>I grew up in the Kensington neighborhood of Philadelphia where I attended Mastbaum AVTS to earn a Commercial Art diploma. At Lock Haven University I was a founding student in the Electronic Media program and lab, earning Bachelor of Arts degrees in Fine Art (concentration in Electronic Media) and Philosophy. After college I briefly worked in graphic design before I began building websites &mdash; incrementing my skills from graphics, to coding, to programming, to full-stack development &mdash; at companies ranging from the U.S. Navy Fleet Material Supply Office, JP Morgan Chase, GMAC Mortgage, The Vanguard Group, and Comcast NBCUniversal.</p>
          <p>Since 1998 I have developed applications from concept to completion in a wide variety of disciplines and technologies: Full-Stack Development (AWS/Serverless, MERN, LAMP); User Interface (UI) Engineering and Front-End Development (HTML/CSS/JavaScript/Frameworks); User Experience (UX) Design, Human Factors, and Accessibility (A11Y); CMS Development (Discourse, Drupal, WordPress, etc.), Information Architecture, Content Strategy; Illustration and Visual Design; Interactive Media, Animation and Motion Graphics.</p>
          <p>I’ve been at <strong>Comcast NBCUniversal</strong> for the past seven years where I’ve been primarily working on the customer facing <strong>Xfinity Help and Support</strong> site. On Help and Support I’ve been through several redesigns and re-architectures, from a homebrew framework, to React, to Polymer, and back to React. I was lead on a special project called MARS (My Account Redesign Strategy). I started and have continually been working on ask.comcast.com: a project that is essentially an internal knowledgebase/forum for Comcast Developers and Employees where they can ask questions that they couldn’t or shouldn’t ask in a public forum.</p>
          <p>I worked on a project to build a Microlearning platform for Comcast University’s College of Technologists. There weren’t any developers in the College of Technologists, so I was tasked with choosing the technology stack, doing the graphics, front-end, back-end, data, and devops. I wrote the UI in React, and for the API I chose the Serverless framework with AWS, which I had never used before and wanted to learn (Node, DynamoDB).</p>
          <p>My latest project is a revamp of Comcast’s Open Source Software website, where I worked the entire stack from the graphic design, to the UI, and the architecture, choosing the technologies to use. In this case I decided to go with React and Next.js to build a static site, and use GraphQL to take advantage of GitHub’s API and show the data related to Comcast’s Open Source projects.</p>
        </article>
      </Layout>
    </>
  )
};

export default BioPage
