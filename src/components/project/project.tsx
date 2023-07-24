'use client'
import { RightArrowIcon } from "../svgs"
import styles from "./Project.module.css"
import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router"


interface ProjectProps {
    imgSrc: string,
    projectName: string,
    desc: string,
    languagesAndFrameworks: string[],
    link: Url
}

const Project = ({ imgSrc, projectName, desc, languagesAndFrameworks, link }: ProjectProps) => {

    return (
        <Link href={link}>
            <div className={` ${styles.container} "w-full min-h-min`}>
                <div className="w-full h-full bg-transparent rounded-lg p-5 flex md:flex-row sm:flex-col-reverse items-start justify-start hover:shadow-xl hover:bg-slate-600 hover:bg-opacity-20 transition-colors hover:border-t-slate-500 border-t-[1px] hover:border-opacity-20 border-t-transparent">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgSrc} alt={"project photo"} className="md:w-1/4 sm:w-1/2 sm:max-w-[150px] md:max-w-none h-auto rounded-md hover:border-theme-gray-light border-2 border-slate-800 mr-4 transition-colors sm:mt-2 lg:mt-0" />
                    <div className="flex flex-col md:w-3/4 sm:w-full h-auto">
                        <div className={`${styles.arrow} hover:text-theme-green-light transition-colors`}>
                            <h1 className="inline-block mr-1">{projectName}</h1>
                            <RightArrowIcon className="-rotate-45 inline-block fill-white transition-transform" width={14} height={14} />
                        </div>
                        <p className="text-theme-gray-light font-light text-sm">{desc}</p>
                        <div className="flex flex-row w-auto h-auto mt-3 overflow-hidden flex-wrap">
                            {languagesAndFrameworks.map((val) => {
                                return (
                                    <div key={val} className="rounded-full px-3 bg-theme-green-dark w-auto h-auto mr-2 mb-2 py-[2px]">
                                        <span className="text-theme-green-light text-xs whitespace-nowrap font-light">{val}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    )
}


export default Project;

