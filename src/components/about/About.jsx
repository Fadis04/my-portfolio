import React, { useState } from "react";
import "./about.css";
import ME from "../../assets/IMG_0938.jpg";
import { BsCalendarDate, BsArrowReturnRight } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { FaUniversity , FaLanguage } from "react-icons/fa";

const About = () => {
  const [section, setSection] = useState("experience");
  const [job, setJob] = useState("LBBE");
  const IPT_tasks = [
    "Identification of rare genetic diseases in Tunisia",
    "Analysis of high-throughput sequencing data via the Galaxy pipeline",
    "Analysis of DNA chip genotyping data using the PLINK tool and SNP annotation via VEP to assess functional impact",
  ];
  const IPT_tasks1 = [
    "Characterization of Alternative splicing variants based on NGS data",
    "Quantification and differential analysis of splicing variants",
    "Annotation of AS Variants linked to the sterility observed in F1 hybrid Flycatchers"
  ];
  const IPT_tasks2 = [
    "Research on viruses and bacteria of economic and medical importance, including isolation, characterization, typing, pathogenicity, prevention, and modeling",
    "Epidemiological surveillance and prevention methods",
  ];
  const enactus_tasks = [
    "Male infertility analyses",
    "Morphological and molecular cytogenetic analysis",
    "Molecular Genetics Analysis"
  ];
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="buttons">
            <ul className="sections">
              <li
                onClick={() => setSection("experience")}
                className={section === "experience" ? "active" : ""}
              >
                Work Experience
              </li>
              <li
                onClick={() => setSection("info")}
                className={section === "info" ? "active" : ""}
              >
                Personal Info
              </li>
            </ul>
          </div>
          {section === "experience" ? (
            <div className="experience">
              <div className="experience-header">
                <BsArrowReturnRight
                  size={30}
                  color="rgb(214, 99, 12)"
                  className="arrow"
                />
                <ul className="jobs">
                  <li
                    onClick={() => setJob("LBBE")}
                    className={job === "LBBE" ? "active-job" : ""}
                  >
                    LBBE
                  </li>
                  <li
                    onClick={() => setJob("IPT")}
                    className={job === "IPT" ? "active-job" : ""}
                  >
                    IPT
                  </li>
                  <li
                    onClick={() => setJob("LABGEN")}
                    className={job === "LABGEN" ? "active-job" : ""}
                  >
                    LABGEN
                  </li>
                </ul>
              </div>
              <div className="experiences_container">
                <article className="experience_box">
                  <div className="experience_head">
                    <h3>
                      {job === "LBBE"
                        ? "Bioinformatics Engineer (Internship)"
                        : job === "IPT"
                        ? "Bioinformatics Engineer (Internship)"
                        :"Intern in Medical Genetics"
                        }
                    </h3>
                  </div>
                  <div className="date">
                    {job === "LBBE"
                      ? "February 2024 - July 2024"
                      : job === "IPT"
                      ? "June 2023 - September 2023"
                      : "July 2021 - August 2021"}
                  </div>
                  <ul className="experience_list">
                    {job === "IPT"
                      ? IPT_tasks.map((item,key) => {
                          return (
                            <li>
                              <BiCheck className="experience_list-icon" key={key}/>
                              <p className="task">{item}</p>
                            </li>
                          );
                        })
                      : job === "IPT"
                      ? IPT_tasks1.map((item,key) => {
                          return (
                            <li>
                              <BiCheck className="experience_list-icon" key={key}/>
                              <p className="task">{item}</p>
                            </li>
                          );
                        })
                      : job === "LABGEN" ? enactus_tasks.map((item,key) => {
                          return (
                            <li>
                              <BiCheck className="experience_list-icon" key={key}/>
                              <p className="task">{item}</p>
                            </li>
                          );
                        }): IPT_tasks1.map((item,key) => {
                          return (
                            <li>
                              <BiCheck className="experience_list-icon" key={key}/>
                              <p className="task">{item}</p>
                            </li>
                          );
                        })}
                  </ul>
                  {job === "IPT" && (
                    <>
                      <div className="experience_head">
                        <h3>Intern in Veterinary Epidemiology and Microbiology</h3>
                      </div>
                      <div className="date">July 2022 - August 2022</div>
                      <ul className="experience_list">
                        {IPT_tasks2.map((item,key) => {
                          return (
                            <li>
                              <BiCheck className="experience_list-icon" key={key}/>
                              <p className="task">{item}</p>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </article>
              </div>
            </div>
          ) : (
            <div className="info">
              <div className="about_cards">
                <article className="about_card">
                  <BsCalendarDate className="about_icon" />
                  <h5>DATE OF BIRTH</h5>
                  <small>17/04/2000</small>
                </article>

                <article className="about_card">
                  <FaUniversity className="about_icon" />
                  <h5>INSAT</h5>
                  <small>Insutrial Bioengineering</small>
                </article>

                <article className="about_card">
                  <FaLanguage className="about_icon" />
                  <h5>LANGUAGES</h5>
                  <ul>
                    <li>
                      <small>*Arabic</small>
                    </li>
                    <li>
                      <small>*Frensh</small>
                    </li>
                    <li>
                      <small>*English</small>
                    </li>
                  </ul>
                </article>
              </div>

              <p className="content-p">
              Hello, my name is Fadi Slimi, and I am a freshly graduated Industrial Bioengineer specializing in Bioinformatics.

                <br />
                <br />
                I am passionate about leveraging computational tools to address complex biological challenges, with a strong focus on data analysis and genomics.
<br />
                <br />
                Driven and adaptable, I excel in both independent and collaborative environments, always aiming for innovative and efficient solutions.

                <br />
                <br />
                As a bioinformatics specialist, I am eager to apply my skills to impactful projects that bridge biology and technology.


                <br />
                <br />
                For further information , you can reach out to me on my website, Linkedin or email.
              </p>
              <div id="contactBtn">
                <a href="#contact" className="btn btn-primary">
                  Let's Talk
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
