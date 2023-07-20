'use client'

import FollowCursor from "@/components/follow-cursor/follow-cursor"
import { EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon } from "@/components/svgs"
import Link from "next/link"
import styles from "./Home.module.css"

export default function Home() {
  const iconSize = 20
  return (
    <main className="w-full h-full">
      <div className="w-full h-full flex flex-row overflow-y-scroll pt-24 pb-24">
        <div className="sticky overflow-hidden top-0 pl-24 h-full w-1/2 flex flex-col justify-between items-start">
          <div className="h-full w-full">
            <Link href={"/"} className="font-semibold text-6xl text-white">Junior Green</Link>
            <h1 className="font-normal text-white text-xl mt-2">Jr. Software Engineer</h1>
            <p className="font-light text-theme-gray-light text-base mt-2 mb-16 w-3/4">Highly skilled Junior Engineer adept at building robust, modern software.</p>
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
            <a href={"tel:647518450"} className="transition-all m-3 fill-theme-gray-light hover:fill-white">
              <PhoneIcon width={iconSize} heigt={iconSize} />
            </a>
            <a href={"mailto:juniorgreen9185@hotmail.com"} className="transition-all m-3 fill-theme-gray-light hover:fill-white">
              <EmailIcon width={iconSize} heigt={iconSize} />
            </a>
          </div>
        </div>
        <div className="overflow-x-hidden h-full w-1/2">
          <p className="text-theme-gray-light font-light">Hello my name</p>

        </div>
      </div>
      <FollowCursor />
    </main>
  )
}
