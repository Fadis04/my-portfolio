import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container center">
        <article className="service">
          <div className="service_head">
            <h3>BIOINFORMATICS & GENOMIC ANALYSIS
</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Conducting advanced differential splicing analysis using tools like Leafcutter and DEXSeq
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Performing gene expression analysis with DESeq2 and DEXSeq to uncover molecular insights
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Annotating SNPs and evaluating their functional impact with tools like PLINK and VEP
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Providing in-depth analysis of genomic variants and interpreting results for functional studies
              </p>
            </li>
          </ul>
        </article>
      </div>
      <div className="container services_container center">
        <article className="service">
          <div className="service_head">
            <h3>OMICS DATA ANALYSIS

</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Leveraging Galaxy Pipelines for RNA-Seq and DNA-Seq data processing and analysis

              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Conducting comprehensive transcriptomic and splicing variant analyses to identify differential expression

              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Integrating multi-omics data for a holistic view of biological systems
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Performing pathway analysis and gene ontology enrichment to understand gene functions
              </p>
            </li>
          </ul>
        </article>
      </div>
      <div className="container services_container center">
        <article className="service">
          <div className="service_head">
            <h3>PROGRAMMING & DATA MANIPULATION
</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Writing custom scripts in Python, R, and Bash for data processing and automation
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Implementing bioinformatics pipelines and workflows in Linux environments
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Visualizing large-scale biological data using ggplot2, R, and Python libraries
              </p>
            </li>
          </ul>
        </article>
      </div>
      <div className="container services_container center">
        <article className="service">
          <div className="service_head">
            <h3>MOLECULAR AND STRUCTURAL ANALYSIS
</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Visualizing and analyzing molecular structures using tools like PyMOL and Chimera
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Conducting protein docking and simulation studies using AutoDock              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Providing functional annotation of genes and proteins to understand structure-function relationships
              </p>
            </li>
          
          </ul>
        </article>
      </div>
      <div className="container services_container center">
        <article className="service">
          <div className="service_head">
            <h3>GENOMIC DATABASE MANAGEMENT
</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Managing and analyzing genomic data with key databases such as Ensembl, OMIM, and dbSNP
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Performing variant annotation, gene expression analysis, and integrating external datasets for in-depth research
              
            </p>
            </li>
            
          
          </ul>
        </article>
      </div>

    </section>
  );
};

export default Services;
