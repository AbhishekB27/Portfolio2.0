import Image from "next/image";

// components/AboutMe.js
export default function AboutMe() {
    return (
        <section className="h-screen flex justify-center items-center bg-white text-black py-16 px-8">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* About Me Content */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold mb-4">About Me</h2>
                    <blockquote className="text-5xl font-roboto font-light italic text-gray-600 mb-6">
                        "Transforming ideas into impactful digital experiences."
                    </blockquote>

                    <p className="text-xl font-roboto leading-relaxed mb-4">
                        Hi, I'm Abhishek, a passionate developer with a love for solving
                        complex problems and building intuitive web applications. With a focus
                        on MongoDB, Prisma, and Next.js, I strive to create seamless user
                        experiences and scalable back-end architectures. In my spare time, I
                        enjoy exploring new technologies and contributing to open-source projects.
                    </p>
                    <p className="text-lg font-roboto">
                        My expertise lies in crafting efficient, scalable, and maintainable
                        systems that empower businesses to grow. I believe in writing clean,
                        reusable code and working collaboratively to bring ideas to life. Let's
                        build something amazing together!
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <Image
                        src="/MyImg.png"
                        alt="Profile Image"
                        className="rounded-full shadow-lg"
                        width={500} // Specify the width of the image (adjust to your needs)
                        height={500} // Specify the height of the image (adjust to your needs)
                        objectFit="cover" // Ensures the image covers the area, similar to `object-cover` in CSS
                    />
                </div>
            </div>
        </section>
    );
}
