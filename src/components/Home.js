import React from "react"
import image from "../forest-bathing.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="forest" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Hello. I'm Levon.</h1>
            </section>
        </main>
    )
}

/* 
image source: https://time.com/5259602/japanese-forest-bathing/ 
*/