import React from "react";

export default function About() {
  return (
    <div className="section__container">
      <header className="about__header">
        <h2>About Us</h2>
        <article className="mission">
          <p>
            The Moonbase team is dedicated to securing transactions in different
            blockchains by creating independent nodes for individuals and
            companies interested in leasing their cryptocurrencies. We believe
            in decentralization and proof of stake as it allows individuals the
            autonomy and option to stake their coins and gain rewards. Our team
            is made up of engineers, educators, and entrepreneurs. Together,
            we’re working to broaden people’s knowledge on the world of
            cryptocurrency and creating nodes to allow individuals to
            participate in consensus from anywhere in the world.
          </p>
        </article>
      </header>
      <div className="grid grid--2x2">
        <article className="member about__left card">
          <header className="about__memeber-header">
            <h3 className="about__member-name">Thomas Barbagallo</h3>
          </header>
          <div className="about__member">
            <p className="about__member-info">
              Thomas works as a chess instructor at a school in NYC. He prepares
              scholars from kindergarten through 4th grade to compete in
              tournaments both at the state and national level. Thomas
              cultivates new business partnerships and oversees daily business
              operations for the MoonBase Node. For any Node or LTO questions,
              updates, suggestions please don’t hesitate to reach out.
            </p>
            <img
              src="https://lto-moonbase.s3.amazonaws.com/staff1.jpg"
              srcSet= "https://lto-moonbase.s3.amazonaws.com/staff1.webp, https://lto-moonbase.s3.amazonaws.com/staff1.jpg"
              alt="member image"
              className="about__member-img"
            />
          </div>
        </article>
        <article className="member card">
          <header className="about__memeber-header">
            <h3 className="about__member-name">Zak Hubner</h3>
          </header>
          <div className="about__member">
          <img
              src="https://lto-moonbase.s3.amazonaws.com/staff2.jpg"
              srcSet= "https://lto-moonbase.s3.amazonaws.com/staff2.webp, https://lto-moonbase.s3.amazonaws.com/staff2.jpg"
              alt="member image"
              className="about__member-img"
            />
            <p className="about__member-info">
              Zak works as a Cyber Security Analyst with several years of
              experience in the field. He has a Master’s in Information Security
              with several certifications, specializes in active SOC threat
              detection/engineering and is always working on his penetration
              testing skills. Zak built MoonBase Node with all its security
              features and live threat detection. Any security questions or
              suggestions please reach out; Zak can talk security for hours.
            </p>
          </div>
        </article>
        <article className="member about__left card">
          <header className="about__memeber-header">
            <h3 className="about__member-name">Nicolas Kim</h3>
          </header>
          <div className="about__member">
            <p className="about__member-info">
              Nicolas is a returned Peace Corps Volunteer who worked with local
              government organizations to design and implement sustainable
              community based programs across education and economic
              development. Nicolas brings his experience in advertisement sales
              to the MoonBase Node as a part of the business development team.
              Please feel free to reach out from all backgrounds as he is fluent
              in English, Korean, and Spanish.
            </p>
            <img
              src="https://lto-moonbase.s3.amazonaws.com/staff3.jpg"
              srcSet= "https://lto-moonbase.s3.amazonaws.com/staff3.webp, https://lto-moonbase.s3.amazonaws.com/staff3.jpg"
              alt="member image"
              className="about__member-img"
            />
          </div>
        </article>
        <article className="member card">
          <header className="about__memeber-header">
            <h3 className="about__member-name">Nicholas Buzzerio</h3>
          </header>
          <div className="about__member">
          <img
              src="https://lto-moonbase.s3.amazonaws.com/staff4.jpg"
              srcSet= "https://lto-moonbase.s3.amazonaws.com/staff4.webp, https://lto-moonbase.s3.amazonaws.com/staff4.jpg"
              alt="member image"
              className="about__member-img"
            />
            <p className="about__member-info">
              Nicholas is a full-stack software engineer with a strong
              background in JavaScript. He is currently pursuing a Master’s in
              Data Science. Nicholas is the man when it comes to all things
              development for the MoonBase Node. He is always looking for
              newfound optimizations and efficiencies. Please contact him for
              project updates, suggestions, or software partnerships.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
