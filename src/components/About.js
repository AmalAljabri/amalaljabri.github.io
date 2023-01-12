import React from "react";
import {
    about, education,certifications,
    experience, publication,
    interest, check,
    skills, honours
} from "./Emojis";
import data from "../data/data.json";

const About = () => {
    const educationList = data["education"];
    const certificationsList = data["Certifications & Training Programs"];
    const experienceList = data["experience"];
    const publicationsList = data["publications"];
    const interestsList = data["interests"];
    const skillsList = data["skills"]

    return (
        <section className="bg-[#f6f8fa] dark:bg-[#010409] dark:text-[#c9d1d9] text-[#24292f]">
            <div className="container mx-auto px-4">

                <h2 className="text-center text-lg font-bold mb-8">A little bit of information about myself 👀!</h2>

                <h3 className="mb-4 text-lg font-bold uppercase" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{about} About Me</h3>
                <div className="bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] text-base rounded-md text-[#24292f] dark:text-[#c9d1d9] p-5" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <p>Hello .. My name is <span className="text-[#0969da] dark:text-[#58A6FF] font-bold">Amal</span> and I am from Madina, a peaceful city in the west part of Saudi Arabia 🇸🇦.
                        I am a passionate software engineer and researcher in computer science.
                        I have a passion for coding and get the most enjoyment from solving problems and building things all by myself.
                        Currently, I am seeking new professional challenges in development, artificial intelligence, and data science as it is my passion and aspiration 🎯🫶🏻✨!</p>
                </div>

                <h3 className="my-4 text-lg font-bold uppercase" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{experience} Experience</h3>
                <div className="bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] rounded-md text-[#788089] p-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <ol className="relative border-l border-[#d0d7de] dark:border-[#30363d] mt-6 mr-4 ml-8">
                        {
                            experienceList.map((experience, index) =>
                                <li className="mb-6 ml-7" key={index}>
                                    <span className="absolute flex items-center justify-center w-6 h-6 text-xs rounded-full -left-3 ring-4 ring-[#d0d7de90] bg-[#d0d7de] dark:ring-[#30363d90] dark:bg-[#30363d]">🗓</span>
                                    {
                                        experience.name &&
                                        <h3 className="flex items-center mb-1 text-base font-bold text-[#0969da] dark:text-[#58A6FF]">{experience.name}</h3>}
                                    {
                                        experience.date &&
                                        <time className="mb-1 text-sm font-normal text-[#24292f] dark:text-[#c9d1d9]">{experience.date}</time>
                                    }
                                    {
                                        experience.location &&
                                        <p className="text-sm font-normal text-[#24292f] dark:text-[#c9d1d9]">{experience.location}</p>
                                    }
                                    {
                                        experience.role &&
                                        <p className="text-sm font-normal text-[#24292f] dark:text-[#c9d1d9]">{experience.role}</p>
                                    }
                                </li>
                            )}
                    </ol>
                </div>

                <h3 className="my-4 text-lg font-bold uppercase" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{education} Education</h3>
                <div className="bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] text-base rounded-md text-[#24292f] dark:text-[#c9d1d9] p-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <ol className="relative border-l border-[#d0d7de] dark:border-[#30363d] mt-6 mr-4 ml-8">
                        {
                            educationList.map(
                                (education, index) =>
                                    <li className="mb-6 ml-7" key={index}>
                                        <span className="absolute flex items-center justify-center w-6 h-6 text-xs rounded-full -left-3 ring-4 ring-[#d0d7de90] bg-[#d0d7de] dark:ring-[#30363d90] dark:bg-[#30363d]">🗓</span>
                                        {
                                            education.name &&
                                            <h3 className="flex items-center mb-1 text-base font-bold text-[#0969da] dark:text-[#58A6FF]">{education.name}</h3>}
                                        {
                                            education.date &&
                                            <time className="mb-1 text-sm font-normal text-[#24292f] dark:text-[#c9d1d9]">{education.date}</time>
                                        }
                                        {
                                            education.location &&
                                            <p className="text-sm font-normal text-[#24292f] dark:text-[#c9d1d9]">{education.location}</p>
                                        }
                                        {
                                            education.honours &&
                                            <p className="text-sm font-normal text-[#24292f] dark:text-[#c9d1d9]">{education.honours} {honours}</p>
                                        }
                                    </li>
                            )}
                    </ol>
                </div>

                <h3 className="my-4 text-lg font-bold uppercase" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{certifications} Certifications & Training Programs</h3>
                <div className="bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] text-base rounded-md text-[#24292f] dark:text-[#c9d1d9] p-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <ol className="relative border-l border-[#d0d7de] dark:border-[#30363d] mt-6 mr-4 ml-8">
                        {
                            certificationsList.map(
                                (certification, index) =>
                                    <li className="mb-6 ml-7" key={index}>
                                        <span className="absolute flex items-center justify-center w-6 h-6 text-xs rounded-full -left-3 ring-4 ring-[#d0d7de90] bg-[#d0d7de] dark:ring-[#30363d90] dark:bg-[#30363d]">🗓</span>
                                        {
                                            certification.name &&
                                            <h3 className="flex items-center mb-1 text-base font-bold text-[#0969da] dark:text-[#58A6FF]">{certification.name}</h3>}
                                        {
                                            certification.date &&
                                            <time className="mb-1 text-sm font-normal text-[#24292f] dark:text-[#c9d1d9]">{certification.date}</time>
                                        }
                                        {
                                            certification.location &&
                                            <p className="text-sm font-normal text-[#24292f] dark:text-[#c9d1d9]">{certification.location}</p>
                                        }
                                    </li>
                            )}
                    </ol>
                </div>

                <h3 className="my-4 text-xl font-bold uppercase" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{publication} Publications</h3>
                <div className="bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] rounded-md text-[#788089] p-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <ol className="relative border-l border-[#d0d7de] dark:border-[#30363d] mt-6 mr-4 ml-8">
                        {
                            publicationsList.map((publication, index) =>
                                <li className="mb-6 ml-7" key={index}>
                                    <span className="absolute flex items-center justify-center w-6 h-6 text-xs rounded-full -left-3 ring-4 ring-[#d0d7de90] bg-[#d0d7de] dark:ring-[#30363d90] dark:bg-[#30363d]">🗓</span>
                                    {
                                        publication.name &&
                                        <h3 className="flex items-center mb-1 text-base font-bold text-[#0969da] dark:text-[#58A6FF]">{publication.name}</h3>}
                                    {
                                        publication.date &&
                                        <time className="mb-1 text-sm font-normal text-[#24292f] dark:text-[#c9d1d9]">{publication.date}</time>
                                    }
                                    {
                                        publication.publisher &&
                                        <p className="mb-3 text-sm font-normal text-[#24292f] dark:text-[#c9d1d9]">{publication.publisher}</p>
                                    }
                                    {
                                        publication.DOI &&
                                        <a href={publication.link} className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-[#f6f8fa] dark:bg-[#21262d] text-[#24292f] dark:text-[#c9d1d9] border border-[#1b1f2426] dark:border-[#f0f6fc1a] hover:bg-[#ddf4ff] dark:hover:bg-[#388bfd26] hover:text-[#0969da] dark:hover:text-[#58a6ff] hover:border-[#54aeff66] dark:hover:border-[#388bfd66]">Reed <svg className="w-3 h-3 ml-2 animate-ping" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a>
                                    }
                                </li>
                            )}
                    </ol>
                </div>

                <h3 className="my-4 text-lg font-bold uppercase" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{interest} Interests</h3>
                <div className="bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] rounded-md text-[#788089] p-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <div className="my-6 mx-6 grid gap-3 sm:grid-cols-2 grid-cols-1">{
                        interestsList.map((interest, index) =>
                            <div className="flex items-center w-full p-4 text-[#8b949e] border border-[#d0d7de] dark:border-[#30363d] rounded-md" key={index}>
                                {check}
                                <div className="pl-2 text-base font-bold text-[#0969da] dark:text-[#58A6FF]">{interest}</div>
                            </div>
                        )
                    }
                    </div>
                </div>

                <h3 className="my-4 text-lg font-bold uppercase" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{skills} My Skills</h3>
                <div className="bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] rounded-md text-[#788089] p-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    {
                        skillsList.map((skill, index) =>
                            <div className="my-6 mx-6" key={index}>
                                <h3 className="flex items-center mb-2 text-base font-bold text-[#0969da] dark:text-[#58A6FF] ">{skill.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        (skill.links).map((link, index) =>
                                            <img key={index} className="rounded-md" src={link} alt="Skill" />
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </section>
    );
}

export default About;




