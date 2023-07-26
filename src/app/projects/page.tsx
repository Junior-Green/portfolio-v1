import FollowCursor from "@/components/follow-cursor/follow-cursor";
import { ParticlesBackground } from "@/components/particles-background/particles-background";
import { RightArrowIcon } from "@/components/svgs";
import styles from './Projects.module.css'
import Link from "next/link";

interface ProjectData {
    year: number,
    projectName: string,
    placeMade: string,
    toolsUsed: string[],
    link: string
}

export default function Projects() {
    const projects: ProjectData[] = [
        {
            year: 2023,
            projectName: 'TrakIt',
            placeMade: '',
            toolsUsed: ['Next.js', 'Vercel', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
            link: 'trakit-two.vercel.app'
        },
        {
            year: 2023,
            projectName: 'Heart Rate Variability Analyzer',
            placeMade: 'Carleton',
            toolsUsed: ['C++', 'Qt Creator'],
            link: ''
        },
        {
            year: 2023,
            projectName: 'Portfolio Website',
            placeMade: '',
            toolsUsed: ['Next.js', 'Vercel', 'TypeScript', 'Tailwind CSS'],
            link: 'juniorgreen.ca'
        },
        {
            year: 2022,
            projectName: 'Hangr',
            placeMade: '',
            toolsUsed: ['Dart', 'Flutter', 'Firebase', 'TypeScript', 'Ruby', 'Swift'],
            link: 'testflight.apple.com/join/IZZbNveU'
        },
        {
            year: 2019,
            projectName: 'Gacha 4',
            placeMade: '',
            toolsUsed: ['Dart', 'Flutter', 'Firebase', 'TypeScript'],
            link: 'github.com/Junior-Green/Gacha-Simulator'
        },
        {
            year: 2018,
            projectName: 'Fortnite Tournament Team Generator',
            placeMade: '',
            toolsUsed: ['Java', 'CSS', 'Java FX'],
            link: 'github.com/Junior-Green/Fortnite-Team-Generator'
        },
        {
            year: 2018,
            projectName: 'Mastermind',
            placeMade: '',
            toolsUsed: ['Java', 'CSS', 'Java FX'],
            link: 'github.com/Junior-Green/Mastermind-Game'
        },
        {
            year: 2018,
            projectName: '1942',
            placeMade: '',
            toolsUsed: ['Java', 'CSS', 'Java FX'],
            link: 'github.com/Junior-Green/1942-Game'
        },

    ]

    projects.sort((a, b) => b.year - a.year)

    return (
        <div className="md:px-20 md:py-24 sm:px-5 sm:py-10">
            <ParticlesBackground />
            <div className={` ${styles.arrow} mb-2 w-min flex items-center justify-center`}>
                <div className="transition-transform">
                    <RightArrowIcon width={14} height={14} className="fill-theme-green-light transition-transform rotate-180" />
                </div>
                <a href="/" className={`whitespace-nowrap font-medium ml-1 transition-all text-theme-green-light`}>Home</a>
            </div>
            <h1 className="text-5xl tracking-normal font-bold"> Projects</h1>
            <div className="w-full flex flex-row items-start mt-16 mb-3 font-medium text-sm">
                <span className="w-[8%] mr-2">Year</span>
                <span className="md:w-[28%] sm:w-[46%]">Project</span>
                <span className="w-[18%] sm:hidden md:block">Made at</span>
                <span className="w-[28%] sm:hidden md:block">Tech Stack</span>
                <span className="md:w-[20%] sm:w-[46%]">Link</span>
            </div>
            {projects.map(({ year, projectName, placeMade, toolsUsed, link }) => {
                return (
                    <div className="w-full flex flex-row items-start mb-2 border-t-[0.5px] border-t-theme-gray-dark border-opacity-40 pt-3" key={projectName}>
                        <span className="w-[8%] text-sm font-light text-theme-gray-light mr-2">{year}</span>
                        <span className="md:w-[28%] sm:w-[46%] pr-5 font-medium">{projectName}</span>
                        <span className="w-[18%] sm:hidden md:block font-light pr-5 text-theme-gray-light">{placeMade}</span>
                        <div className="w-[28%] flex sm:hidden md:flex flex-row flex-wrap pr-5">
                            {toolsUsed.map((val) => {
                                return (
                                    <div key={val} className="rounded-full px-3 bg-theme-green-dark w-auto h-auto mr-2 mb-2 py-[4px]">
                                        <span className="text-theme-green-light text-xs whitespace-nowrap font-light">{val}</span>
                                    </div>
                                )
                            })}
                        </div>
                        {link !== "" && <Link className={`${styles.arrowDiagonal} transition-colors md:w-[20%] sm:w-[46%] text-sm font-medium pr-5 text-theme-gray-light hover:text-theme-green-light`} href={`https://${link}`}>
                            <h1 className="inline-block mr-1">{link}</h1>
                            <RightArrowIcon className="-rotate-45 inline-block fill-theme-gray-light transition-transform" width={14} height={14} />
                        </Link>}
                    </div>
                )
            })}

            <FollowCursor />
        </div>
    )
}