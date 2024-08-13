"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { NextjsLine } from "devicons-react";
import { ReactOriginalWordmark } from "devicons-react";
import { AngularOriginal } from "devicons-react";
import { PythonOriginalWordmark } from "devicons-react";
import { TypescriptOriginal } from "devicons-react";
import { PostgresqlPlainWordmark } from "devicons-react";
import { SequelizeOriginal } from "devicons-react";
import { JavascriptPlain } from "devicons-react";
import { GatsbyOriginal } from "devicons-react";
import { JestPlain } from "devicons-react";
import { ExpressOriginal } from "devicons-react";
import { NodejsPlainWordmark } from "devicons-react";
import { FlaskOriginalWordmark } from "devicons-react";
import CCNY from "../../../public/images/education/ccny.png";
import Farmingdale from "../../../public/images/education/farmingdale.png";
import AWS from "../../../public/images/certs/aws.png";
import Data from "../../../public/images/certs/data.png";
import Google from "../../../public/images/certs/google.png";
import PowerBi from "../../../public/images/certs/powerbi.png";

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "1rem",
    listStyleType: "none",
    padding: 0,
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    padding: ".5rem",
  },
  darkIconStyle: {
    padding: ".5rem",
    fill: "white",
    color: "white",
  },
  educationItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },
  educationText: {
    marginLeft: "1rem",
    fontSize: "1rem",
    color: "white",
    fontWeight: "bold",
  },
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul style={styles.gridContainer}>
        <li style={styles.icon}>
          <ReactOriginalWordmark size={70} style={styles.iconStyle} />
        </li>
        <li style={styles.icon}>
          <AngularOriginal size={70} style={styles.iconStyle} />
        </li>
        <li style={styles.icon}>
          <PythonOriginalWordmark size={70} style={styles.iconStyle} />
        </li>
        <li style={styles.icon}>
          <TypescriptOriginal size={70} style={styles.iconStyle} />
        </li>
        <li style={styles.icon}>
          <PostgresqlPlainWordmark size={70} style={styles.iconStyle} />
        </li>
        <li style={styles.icon}>
          <SequelizeOriginal size={70} style={styles.iconStyle} />
        </li>
        <li style={styles.icon}>
          <JavascriptPlain size={70} style={styles.iconStyle} />
        </li>
        <li style={styles.icon}>
          <GatsbyOriginal size={70} style={styles.iconStyle} />
        </li>
        <li style={styles.icon}>
          <JestPlain size={70} style={styles.iconStyle} />
        </li>
        <li style={styles.icon}>
          <ExpressOriginal size={70} style={styles.darkIconStyle} />
        </li>
        <li style={styles.icon}>
          <NodejsPlainWordmark size={70} style={styles.darkIconStyle} />
        </li>
        <li style={styles.icon}>
          <FlaskOriginalWordmark size={70} style={styles.darkIconStyle} />
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul style={styles.gridContainer}>
        <li style={styles.educationItem}>
          <Image src={CCNY} alt="CCNY" width={50} height={50} />
          <span style={styles.educationText}>
            City College of New York || 3.2 GPA
          </span>
        </li>
        <li style={styles.educationItem}>
          <Image src={Farmingdale} alt="Farmingdale" width={50} height={50} />
          <span style={styles.educationText}>
            Farmingdale State College || 3.5 GPA
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul style={styles.gridContainer}>
        <li style={styles.icon}>
        <Image src={AWS} alt="AWS" width={90} />
        </li>
        <li style={styles.icon}>
        <Image src={Google} alt="Google" width={90} />
        </li>
        <li style={styles.icon}>
        <Image src={PowerBi} alt="PowerBi" width={90} />
        </li>
        <li style={styles.icon}>

        </li>
        
      </ul>
    ),
  },
];

const Personal = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpeg"
          alt="About Me"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;