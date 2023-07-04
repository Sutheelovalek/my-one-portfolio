import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black 
    text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bole inline border-b-4 border-gray-500">
            About
          </p>
          <p className="text-xl mt-20">
            I am a passionate learner from TechUp’s Software Development
            Bootcamp, relentlessly pursuing my dream of becoming a proficient
            software developer. With a strong foundation in Agile scrum
            methodology and expertise in HTML, CSS, JavaScript, React, and
            Node.js, I have developed robust technical skills that enable me to
            tackle complex software development challenges.
          </p>
          <br />
          <p className="text-xl">
            In addition to my technical proficiency, I possess a well-rounded
            set of soft skills and a growth mindset that align perfectly with
            the dynamic nature of the tech industry. Effective communication,
            collaboration, and teamwork are second nature to me, allowing me to
            thrive in fast-paced environments.
          </p>
          <br />
          <p className="text-xl">
            My prior work experience as a full-time trader honed my analytical
            skills and taught me how to make data-driven decisions. I have a
            keen eye for detail, and I excel at analyzing market trends and
            identifying opportunities for optimization. These experiences have
            equipped me with advanced analytical capabilities and the ability to
            approach challenges with a strategic mindset.
          </p>
          <br />
          <p className="text-xl">
            I am now eagerly applying my previous work experiences and newly
            developed technical skills to embark on a rewarding career in the
            tech sector. I am driven by a passion for continuous learning and
            strive to stay up-to-date with the latest industry trends and
            advancements. As I embark on this new chapter, I am excited to
            collaborate with experienced professionals, contribute my expertise
            to innovative projects, and make a significant impact in the
            software development field
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
