import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const skillsData = [
  {
    title: "Bioinformatics and Genomic Analysis",
    skills: [
      "Differential splicing analysis (Leafcutter, DEXSeq)",
      "Gene expression analysis (DESeq2, DEXSeq)",
      "SNP annotation and functional impact (PLINK, VEP)",
      "Variant calling and interpretation",
    ],
  },
  {
    title: "Statistical Analysis and Visualization",
    skills: [
      "Generalized Linear Models (GLM)",
      "Data visualization (ggplot2, R)",
      "Volcano plots, PCA plots",
      "Hypothesis testing and p-value calculation",
      "Statistical modeling and data fitting",
      "Correlation and regression analysis",
      "Multivariate analysis",
    ],
  },
  {
    title: "Data Exploration and Interpretation",
    skills: ["Genomic data visualization (IGV)", "Multi-omics data analysis"],
  },
  {
    title: "Programming and Data Manipulation",
    skills: ["Python", "R", "Bash", "Linux", "MySQL"],
  },
  {
    title: "Omics Data Analysis",
    skills: ["Galaxy Pipelines", "Chip-Seq", "ATAC-Seq"],
  },
  {
    title: "Molecular and Structural Analysis",
    skills: ["PyMOL", "Chimera", "AutoDock"],
  },
  {
    title: "Database Management and Annotation",
    skills: ["GenBank", "Ensembl", "NCBI Gene", "OMIM", "dbSNP"],
  },
  {
    title: "Laboratory Techniques",
    skills: [
      "PCR",
      "RT-qPCR",
      "ELISA",
      "Western blotting",
      "Chromatography",
      "DNA/RNA extraction",
      "Electrophoresis",
      "Immunofluorescence",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Communication",
      "Adaptability",
      "Teamwork",
      "Time Management",
      "Problem Solving",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>
      <div className="container experience_container">
        {skillsData.map((category, index) => (
          <div key={index} className="experience_back">
            <h3>{category.title}</h3>
            <div className="experience_content">
              {category.skills.map((skill, idx) => (
                <article key={idx} className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{skill}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
