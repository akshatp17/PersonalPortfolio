import React from 'react'
import { useRef } from 'react'
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'
import ProjectsList from './ProjectsList'

const ProjectSection = (props) => {
    return (
        <div className="flex flex-col w-full">
            <p className="font-bold text-xl text-center scrollbar-hide">{props.domain} Projects:</p>
            <div className="flex items-center gap-3">
                {props.showNav && (
                    <button onClick={() => props.onScroll(props.ref, "left")} className="hover:cursor-pointer hover:scale-[1.15] transition-all">
                        <CircleChevronLeft size={35} />
                    </button>
                )}

                <ProjectsList domain={props.domain} scrollRef={props.ref} />

                {props.showNav && (
                    <button onClick={() => props.onScroll(props.ref, "right")} className="hover:cursor-pointer hover:scale-[1.15] transition-all">
                        <CircleChevronRight size={35} />
                    </button>
                )}
            </div>
        </div>

    )
}

export default ProjectSection
