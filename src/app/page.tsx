'use client'

import FollowCursor from "@/components/follow-cursor/follow-cursor"
import { EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon, RightArrowIcon } from "@/components/svgs"
import Link from "next/link"
import styles from "./Home.module.css"
import { Metadata } from "next"
import { ParticlesBackground } from "@/components/particles-background/particles-background"
import { RefObject, useRef, useState } from "react"
import Project from "@/components/project/project"
import ListView from "@/components/list-view/list-view"



export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const iconSize = 20
  const phoneNumber = "6475718450"
  const email = "juniorgreen9185@hotmail.com"
  const title = "Jr. Full Stack Engineer"
  const name = "Junior Green"
  const desc = "Full Stack Engineer proficient in crafting robust, modern software solutions."

  function scrollToRef(ref: RefObject<HTMLDivElement>) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className="w-full h-full leading-relaxed tracking-wide flex md:flex-row md:px-[8%] sm:px-[4%] sm:flex-col">
      <ParticlesBackground />
      <div className="md:sticky md:top-0 py-[8%] md:h-[100vh] md:w-1/2 sm:w-full flex flex-col justify-between items-start ">
        <div className="h-full w-full">
          <Link href={"/"} className="font-semibold md:text-6xl sm:text-5xl text-white pr-5">{name}</Link>
          <h1 className="font-normal text-white text-xl mt-2">{title}</h1>
          <p className="font-light text-theme-gray-light text-base mt-2 mb-16 w-3/4">{desc}</p>
          <div className={`flex flex-row items-center justify-start ${styles.container} cursor-pointer mb-6 w-min`} onClick={() => scrollToRef(aboutRef)}>
            <div className={`h-px bg-theme-gray-dark rounded-lg mr-5 ${styles.line}`} />
            <span className="text-sm font-medium text-theme-gray-light">ABOUT</span>
          </div>
          <div className={`flex flex-row items-center justify-start ${styles.container} cursor-pointer mb-6 w-min`} onClick={() => scrollToRef(projectsRef)}>
            <div className={`h-px bg-theme-gray-dark rounded-lg mr-5 ${styles.line}`} />
            <span className="text-sm font-medium text-theme-gray-light">PROJECTS</span>
          </div>
        </div>
        <div className="flex flex-row">
          <Link href={"https://github.com/Junior-Green"} className="transition-all m-3 fill-theme-gray-light hover:fill-white">
            <GitHubIcon width={iconSize} heigt={iconSize} />
          </Link>
          <Link href={"https://www.linkedin.com/in/junior-green"} className="transition-all m-3 fill-theme-gray-light hover:fill-white">
            <LinkedInIcon width={iconSize} heigt={iconSize} />
          </Link>
          <a href={`tel:${phoneNumber}`} className="transition-all m-3 fill-theme-gray-light hover:fill-white">
            <PhoneIcon width={iconSize} heigt={iconSize} />
          </a>
          <a href={`mailto:${email}`} className="transition-all m-3 fill-theme-gray-light hover:fill-white">
            <EmailIcon width={iconSize} heigt={iconSize} />
          </a>
        </div>
      </div>
      <div ref={aboutRef} />
      <div className="mb-5 sm:sticky sm:top-0 md:hidden backdrop-blur-sm h-14 w-full flex items-center justify-start">
        <h2 className="font-semibold tracking-widest text-sm">ABOUT</h2>
      </div>
      <div className=" h-auto md:w-1/2 sm:w-full md:py-[8%] sm:pb-[8%] flex flex-col">
        <p className="text-theme-gray-light font-light">
          My journey into software development started in 2017 during a high school course dedicated to game development,
          where I created my first program using a legacy version of <Link href={"https://gamemaker.io/en"} className="text-white font-medium hover:text-theme-green-light transition-colors">GameMaker Creator</Link>.
          Fortunate to find my passion early on, I am now en route to graduate from <Link href={"https://carleton.ca/about/"} className="text-white font-medium hover:text-theme-green-light transition-colors">Carleton University</Link> with a degree in Computer Science,
          driven by a profound commitment to embark on a career in Software Engineering.
          <br />
          <br />
          Armed with a solid foundation in Computer Science, I am proficient in a diverse range of technologies.
          On the front end, I specialize in <Link href={"https://angular.io/"} className="text-white font-medium hover:text-theme-green-light transition-colors">Angular</Link>, React, and  <Link href={"https://nextjs.org/"} className="text-white font-medium hover:text-theme-green-light transition-colors">Next.js</Link>.
          In back-end development, my expertise spans SQL, Firebase, and MongoDB, providing robust and scalable solutions.
          Additionally, my proficiency in mobile development using  <Link href={"https://flutter.dev/"} className="text-white font-medium hover:text-theme-green-light transition-colors">Flutter</Link> allows me to create dynamic applications across various platforms.
        </p>
        <div className={`mt-5 flex flex-row items-center ${styles.arrow} hover:underline hover:decoration-theme-green-light w-min mb-10 underline-offset-4`}>
          <a href="/resume.pdf" className={`decoration-transparent whitespace-nowrap font-medium mr-1 transition-all`}>View Résumé</a>
          <RightArrowIcon width={14} height={14} className="fill-white transition-transform" />
        </div>

        <div ref={projectsRef} />
        <div className="mb-5 sm:sticky sm:top-0 md:hidden backdrop-blur-sm h-14 w-full flex items-center justify-start">
          <h2 className="font-semibold tracking-widest text-sm" >PROJECTS</h2>
        </div>
        <ListView>
          <Project imgSrc={"/crunchyroll.png"} projectName={"Crunchyroll Clone"} desc={"Clone of crunchyroll.com"} languagesAndFrameworks={['Typescript', 'Angular', 'Tailwind CSS', 'SCSS', 'Firebase']} link={"https://crunchyroll-a7d82.web.app"} />
          <Project imgSrc={"/trakit-thumbnail.png"} projectName={"TrakIt"} desc={"A web application that allows you to effortlessly store, analyze, and visualize your personal sports statistics. It provides a comprehensive dashboard that provides a visual overview of your sports performance."} languagesAndFrameworks={['Next.js', 'Tailwind CSS', 'MongoDB', 'Vercel', 'TypeScript']} link={"https://trakit-two.vercel.app/"} />
          <Project imgSrc={"/portfolio.png"} projectName={"juniorgreen.ca"} desc={"My online portfolio to showcase my highlights, projects and experience."} languagesAndFrameworks={['Next.js', 'Tailwind CSS', 'Vercel', 'TypeScript']} link={"/"} />
          <Project imgSrc={"/hangr.png"} projectName={"Hangr"} desc={"Digital wardrobe and outfit planner for iOS and Android. Seamlessly categorize your clothes by type, color, and occasion making it a breeze to find the perfect piece for any occasion."} languagesAndFrameworks={['Dart', 'Flutter', 'Firebase', 'TypeScript', 'Ruby', 'Swift']} link={"https://testflight.apple.com/join/IZZbNveU"} />
        </ListView>

        <div className={`mt-5 flex flex-row items-center ${styles.arrow} hover:underline hover:decoration-theme-green-light w-min mb-20 underline-offset-4`}>
          <a href="/projects" className={`decoration-transparent whitespace-nowrap font-medium mr-1 transition-all`}>View All Projects</a>
          <RightArrowIcon width={14} height={14} className="fill-white transition-transform" />
        </div>
        <p className="font-light text-sm text-theme-gray-dark w-5/6 mt-10">
          This website was made from scratch in
          <Link href={"https://code.visualstudio.com"} className="text-theme-gray-light hover:text-theme-green-light transition-colors"> Visual Studio Code
          </Link> using
          <Link href={"https://nextjs.org"} className="text-theme-gray-light hover:text-theme-green-light transition-colors"> Next.js
          </Link> and
          <Link href={"https://tailwindcss.com"} className="text-theme-gray-light hover:text-theme-green-light transition-colors"> Tailwind CSS
          </Link> frameworks, alongside the assistance of
          <Link href={"https://openai.com/gpt-4"} className="text-theme-gray-light hover:text-theme-green-light transition-colors"> GPT-4
          </Link>. Deployed using
          <Link href={"https://vercel.com"} className="text-theme-gray-light hover:text-theme-green-light transition-colors"> Vercel
          </Link> under my domain.
        </p>
      </div>
      <FollowCursor />
    </main>
  )
}
