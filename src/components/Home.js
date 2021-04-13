import React from "react"
import ice from "../ice10.jpg";

export default function Home() {
    return (
        <main>
            <img src={ice} alt="waterfall" className="absolute object-cover w-full h-full mt-0" />
            <section className="relative flex justify-center min-h-screen md:pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-300 font-bold cursive leading-none lg:leading-snug home-name">
                    Hello. I'm Levon.</h1>
            </section>
        </main>
    )
}

