"use client"
// components/SideNav.js
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useState } from "react";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname()
    console.log(pathName, "pathName")
    const menuItem = [{
        name: 'Home',
        href: '/'
    },
    {
        name: 'Work',
        href: '#'
    },
    {
        name: 'About',
        href: '/aboutMe'
    },
    {
        name: 'Contact',
        href: '#'
    },
    {
        name: 'Blogs',
        href: '#'
    }]

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Menu Button */}
            {
                pathName != '/' && <ButtonHover />
            }
            <button
                onClick={toggleMenu}
                className="fixed top-5 right-5 z-[90] size-14 rounded-full bg-white flex justify-center items-center outline-none border-none cursor-pointer"
            >


                <div className="space-y-1 hover:rotate-180 transition-all duration-200">
                    <motion.div
                        className="w-8 h-1 rounded-full bg-black"
                        initial={{ rotate: 0, y: 0 }}
                        animate={{
                            rotate: isOpen ? 45 : 0,
                            y: isOpen ? 9.5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="w-8 h-1 rounded-full bg-black"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="w-8 h-1 rounded-full bg-black"
                        initial={{ rotate: 0, y: 0 }}
                        animate={{
                            rotate: isOpen ? -45 : 0,
                            y: isOpen ? -6 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </div>


            </button>


            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                ></div>
            )}

            {/* Sliding Menu */}
            <AnimatePresence>
                {
                    isOpen && <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            default: { type: "spring", duration: 0.5, },
                        }}
                        className="fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 flex flex-col items-start p-8 space-y-6"
                    >
                        <h2 className="text-2xl font-bold">Menu</h2>
                        <nav className="text-3xl sm:text-4xl md:text-7xl font-extrabold flex flex-col space-y-5">
                            {menuItem.map((item, idx) => {
                                return (
                                    <Link
                                        href={item?.href}
                                    >
                                        <motion.div
                                            key={idx}  // Ensure each item has a unique key
                                            className="cursor-pointer"
                                            initial={{ x: -50 }}
                                            animate={{
                                                x: 0,       // Move to original position
                                            }}
                                            whileHover={{
                                                translateX: 0, // Move upward
                                                translateY: -15, // Move upward
                                                translateZ: 0, // Move upward
                                                rotate: -7.5, // Tilt "Home" on hover
                                                color: "#1D4ED8", // Change text color
                                            }}
                                            transition={{
                                                duration: 0.5,  // Duration of the transition
                                                default: {
                                                    type: 'spring',
                                                    delay: idx * 0.03,
                                                    stiffness: 100,
                                                    mass: 1,
                                                    damping: 2.5,
                                                },
                                            }}
                                        >
                                            {item?.name}
                                        </motion.div>
                                    </Link>
                                );
                            })}
                        </nav>

                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}


const ButtonHover = () => {
    const router = useRouter()
    return (
        <>
            <button
                onClick={() => {
                    router.back()
                }}
                className='fixed top-5 left-5 z-50 group inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full text-black hover:bg-black hover:text-white  font-medium border-2 border-black transition-all duration-300 hover:w-32'>
                <div className='inline-flex whitespace-nowrap opacity-0 font-light group-hover:-translate-x-3 group-hover:opacity-100'>
                    Back
                </div>
                <div className='absolute right-3.5'>
                    <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 rotate-180'
                    >
                        <path
                            d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                            fill='currentColor'
                            fillRule='evenodd'
                            clipRule='evenodd'
                        ></path>
                    </svg>
                </div>
            </button>
        </>
    );
};

