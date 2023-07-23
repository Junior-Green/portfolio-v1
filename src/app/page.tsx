'use client'

import FollowCursor from "@/components/follow-cursor/follow-cursor"
import { EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon, RightArrowIcon } from "@/components/svgs"
import Link from "next/link"
import styles from "./Home.module.css"
import { Metadata } from "next"
import { ParticlesBackground } from "@/components/particles-background/particles-background"
import { useState } from "react"
import Project from "@/components/project/project"



export default function Home() {
  const [isLoaded, setLoaded] = useState(false)
  const iconSize = 20
  const phoneNumber = "6475718450"
  const email = "juniorgreen9185@hotmail.com"
  const title = "Graduate Engineer"
  const name = "Junior Green"
  const desc = "Highly skilled Graduate Engineer adept at building robust, modern software."

  return (
    <main className="w-full h-full leading-relaxed tracking-wide flex md:flex-row px-[8%] sm:flex-col">
      <ParticlesBackground onLoad={() => { }} />
      <div className="md:sticky md:top-0 py-[8%] md:h-[100vh] sm:auto md:w-1/2 sm:w-full flex flex-col justify-between items-start ">
        <div className="h-full w-full">
          <Link href={"/"} className="font-semibold text-6xl text-white">{name}</Link>
          <h1 className="font-normal text-white text-xl mt-2">{title}</h1>
          <p className="font-light text-theme-gray-light text-base mt-2 mb-16 w-3/4">{desc}</p>
          <div className={`flex flex-row items-center justify-start ${styles.container} cursor-pointer mb-6 w-min`}>
            <div className={`h-px bg-theme-gray-dark rounded-lg mr-5 ${styles.line}`} />
            <span className="text-sm font-medium text-theme-gray-light">ABOUT</span>
          </div>
          <div className={`flex flex-row items-center justify-start ${styles.container} cursor-pointer mb-6 w-min`}>
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
      <div className=" h-auto md:w-1/2 sm:w-full py-[8%] flex flex-col">
        <p className="text-theme-gray-light font-light">
          I remember my first time creating my first program back in 2017 when I took a highschool class where we made games using a legacy version of <Link href={"https://gamemaker.io/en"} className="text-white font-medium hover:text-theme-green-light transition-colors">GameMaker Creator</Link>. I am very fortunate that I discovered my career path at a very young age. Now I am on my way to graduate from <Link href={"https://carleton.ca/about/"} className="text-white font-medium hover:text-theme-green-light transition-colors">Carleton University</Link> in Computer Science, and pursue a longlasting career in Software Engineering.
          <br />
          <br />
          I don&apos;t like labelling myself as specific type of developer, because I believe a great developer has the capacity to learn and use every tool in their toolbox, but I do favor front-end and mobile development the most. The most enjoyable experience I have had creating a application was using <Link href={"https://flutter.dev/"} className="text-white font-medium hover:text-theme-green-light transition-colors">Flutter</Link> and <Link href={"https://dart.dev/"} className="text-white font-medium hover:text-theme-green-light transition-colors">Dart</Link> to make <Link href={"https://github.com/Junior-Green/hangr"} className="text-white font-medium hover:text-theme-green-light transition-colors">Hangr</Link>.
          <br />
          <br />
          When I am not typing away at my computer, I am either at the <span className="text-white font-medium hover:text-theme-green-light cursor-dumbbell transition-colors">gym</span>  trying to break a new PR, watching random videos on <Link href={"https://www.youtube.com/"} className="text-white font-medium hover:text-red-600 transition-colors">Youtube</Link>, or trying to attain the rank of Grand Champion in <span className="text-white font-medium hover:text-theme-green-light cursor-ball transition-colors">Rocket Leauge</span>.
        </p>
        <div className={`mt-5 flex flex-row items-center ${styles.arrow} hover:underline hover:decoration-theme-green-light w-min mb-28`}>
          <a href="/resume.pdf" className={` decoration-transparent whitespace-nowrap underline-offset-4 font-medium ${styles.underline} mr-1`}>View Résumé</a>
          <RightArrowIcon width={14} height={14} className="fill-white transition-transform" />
        </div>
        <Project imgSrc={"/trakit-thumbnail.png"} projectName={"TrakIt"} desc={"A web application that allows you to effortlessly store, analyze, and visualize your personal sports statistics. It provides a comprehensive dashboard that provides a visual overview of your sports performance."} languagesAndFrameworks={['Next.js', 'Tailwind CSS', 'MongoDB', 'Vercel','TypeScript']} link={""} />
        <Project imgSrc={"/trakit-thumbnail.png"} projectName={"TrakIt"} desc={"A web application that allows you to effortlessly store, analyze, and visualize your personal sports statistics. It provides a comprehensive dashboard that provides a visual overview of your sports performance."} languagesAndFrameworks={[]} link={""} />
        <div className={`mt-5 flex flex-row items-center ${styles.arrow} hover:underline hover:decoration-theme-green-light w-min `}>
          <a href="/projects" className={` decoration-transparent whitespace-nowrap underline-offset-4 font-medium ${styles.underline} mr-1`}>View All Projects</a>
          <RightArrowIcon width={14} height={14} className="fill-white transition-transform" />
        </div>
        <p className="font-extralight text-sm text-theme-gray-dark w-5/6 mt-10">
          This website was developed in
          <Link href={"https://code.visualstudio.com"} className="text-theme-gray-light font-light hover:text-theme-green-light transition-colors"> Visual Studio Code
          </Link> using
          <Link href={"https://nextjs.org"} className="text-theme-gray-light font-light hover:text-theme-green-light transition-colors"> Next.js
          </Link> and
          <Link href={"https://tailwindcss.com"} className="text-theme-gray-light font-light hover:text-theme-green-light transition-colors"> Tailwind CSS
          </Link> frameworks, alongside the assistance of
          <Link href={"https://openai.com/gpt-4"} className="text-theme-gray-light font-light hover:text-theme-green-light transition-colors"> GPT-4
          </Link>. Deployed using
          <Link href={"https://vercel.com"} className="text-theme-gray-light font-light hover:text-theme-green-light transition-colors"> Vercel
          </Link> under my own domain. Layout and web design inspired by
          <Link href={"https://brittanychiang.com/"} className="text-theme-gray-light font-light hover:text-theme-green-light transition-colors"> Brittany Chiang
          </Link>.
        </p>
      </div>
      <FollowCursor />
    </main>
  )
}
