import React, { useEffect, useState } from "react"
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import forest from "../forest-bathing.jpg"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>;

    return (
        <main >
            <img src={forest} alt="forest" className="absolute object-cover w-full h-full" />
            <div className="pt-3 md:p-10 lg:pt-20 container mx-auto relative">
                <section className="bg-red-700 bg-opacity-80 rounded-lg shadow-2xl lg:flex p-5 lg:p-20">
                    <img
                        src={urlFor(author.authorImage).url()}
                        className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                        alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-gray-900 mb-4">
                            Hey there! I'm{" "}
                            <span className="text-gray-900">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent
                                blocks={author.bio}
                                projectId="py8fplf0"
                                dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

/* 
image source: https://time.com/5259602/japanese-forest-bathing/ 
*/