import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

function ProjectCard() {
    return (
        <div className='size-96'>
            <div className="w-[75%] max-h-[320px] group mx-auto dark:bg-[#252525] p-2 bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black">
                <figure className="w-full h-52 group-hover:h-48 transition-all duration-300 dark:bg-[#0a121a] bg-[#f0f5fa] p-1 rounded-md relative overflow-hidden">
                    <div
                        style={{
                            background:
                                'linear-gradient(123.9deg, #0B65ED 1.52%, rgba(0, 0, 0, 0) 68.91%)',
                        }}
                        className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 transition-all duration-300"
                    ></div>
                    <Image
                        src={'/HotHouse.png'}
                        alt="shoes"
                        width={400}
                        height={400}
                        className="absolute -bottom-1 group-hover:-bottom-3 right-0 h-40 w-[70%] group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300"
                    />
                </figure>

            </div>
        </div>
    );
}



export default ProjectCard;
