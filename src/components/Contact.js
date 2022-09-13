import React from "react";
import data from "../data/data.json";

const Contact = () => {

    const contactList = data["contact"]

    return (
        <section className="bg-[#f6f8fa] dark:bg-[#010409] dark:text-[#c9d1d9] text-[#24292f]">
            <div className="container mx-auto px-4">

                <h2 className="text-center text-lg font-bold mb-8">
                    I am available for work and open to any ideas of cooperation, get in touch with me 🫱🏻‍🫲🏼!
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-2">
                    {
                        contactList.map((contact, index) =>
                            <a key={index} href={contact.link}>
                                <img className="rounded-md" alt={contact.name} src={contact.image} />
                            </a>
                        )
                    }
                </div>

            </div>
        </section>
    );
}

export default Contact;
