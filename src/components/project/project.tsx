'use client'

import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router"
import PanelInfo from "../panel-info/panel-info"
import styles from "./Project.module.css"


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
            <div className={`${styles.parent} arrow-parent w-full min-h-min`}>
                <div className="w-full h-full bg-transparent rounded-lg p-5 flex md:flex-row sm:flex-col-reverse items-start justify-start hover:shadow-xl hover:bg-slate-600 hover:bg-opacity-20 transition-colors hover:border-t-slate-500 border-t-[1px] hover:border-opacity-20 border-t-transparent">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgSrc} alt={"project photo"} className="md:w-1/4 sm:w-1/2 sm:max-w-[150px] md:max-w-none h-auto rounded-md hover:border-theme-gray-light border-2 border-slate-800 mr-4 transition-colors sm:mt-2 lg:mt-0" />
                    <PanelInfo header={projectName} desc={desc} languagesAndFrameworks={languagesAndFrameworks} />
                </div>
            </div>

        </Link>
    )
}


export default Project;

