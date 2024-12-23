"use client"

import * as React from "react"
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const websiteLinks = [
  {
    id: 1,
    title: "Personal Blog",
    url: "https://myblog.com",
    description: "My thoughts on web development and design"
  },
  {
    id: 2,
    title: "Project Showcase",
    url: "https://myprojects.com",
    description: "A collection of my best work"
  },
  {
    id: 3,
    title: "Photography Portfolio",
    url: "https://myphotos.com",
    description: "Capturing moments through my lens"
  },
  {
    id: 4,
    title: "Tech Tutorials",
    url: "https://mytutorials.com",
    description: "Step-by-step guides on various technologies"
  },
  {
    id: 5,
    title: "Design Inspirations",
    url: "https://mydesigns.com",
    description: "Showcasing my UI/UX design work"
  },
]

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
}

export function ProjectDrawer() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="text-black z-50 bg-white hover:bg-gray-800 absolute top-5 ">View Portfolio</Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh] bg-black text-white">
        <div className="mx-auto w-full max-w-4xl px-4">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold">My Portfolio</DrawerTitle>
            <DrawerDescription className="text-gray-400">Explore my various web projects and showcases.</DrawerDescription>
          </DrawerHeader>
          <div className="custom-scrollbar overflow-y-auto max-h-[calc(80vh-12rem)] pr-2">
            <motion.div
              className="grid grid-cols-2 gap-4 pb-4"
              variants={gridVariants}
              initial="hidden"
              animate={isOpen ? "show" : "hidden"}
            >
              {websiteLinks.map((link) => (
                <motion.div key={link.id} className="border border-gray-700 rounded-lg p-3 bg-gray-900" variants={itemVariants}>
                  <h3 className="text-base font-medium flex items-center justify-between mb-1">
                    {link.title}
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="ml-2">
                      <ExternalLink className="h-4 w-4 text-gray-400 hover:text-white" />
                    </a>
                  </h3>
                  <p className="text-xs text-gray-400 mb-1 line-clamp-2">{link.description}</p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-white hover:underline truncate block"
                  >
                    {link.url}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" className="text-white bg-gray-800 hover:bg-gray-700">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4a4a4a;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #5a5a5a;
        }
      `}</style>
    </Drawer>
  )
}

const ButtonHover = () => {
  return <Button variant="outline" className="text-black z-50 bg-white hover:bg-gray-800 absolute top-5 ">View Portfolio</Button>
}