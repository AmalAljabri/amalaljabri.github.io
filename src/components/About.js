import React from 'react';
import {
    about, education, 
    experience, publication, 
    interest, check,
    skills
} from './Emojis';
import data from '../data/data.json';

const About = () => {
    const educationList = data['education'];
    const experienceList = data['experience'];
    const publicationsList = data['publications'];
    const interestsList = data['interests'];
    const skillsList = data['skills']

    return (
        <section>
            <div className='container mx-auto px-4'>
                <h2 className="text-center text-lg font-bold mb-8">A little bit of information about myself 👀!</h2>
                <h3 className='mb-4 text-lg font-bold uppercase' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{about} About Me</h3>
                <div className='bg-[#161B22] border border-[#30363d] text-base rounded-md text-[#c9d1d9] p-5 hover:bg-[#121D2F] hover:border-[#224D87]' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <p>Hello .. My name is <span className='text-[#788089]'>Amal Aljabri</span> and I am from Madina, a peaceful city in the west part of Saudi Arabia.
                        I am a passionate software engineer and researcher in computer science.
                        I have a passion for coding and get the most enjoyment from solving problems and building things all by myself. 
                        Currently, I am seeking new professional challenges in development, artificial intelligence, and data science as it is my passion and aspiration 🫶🏻✨!</p>
                </div>

                <h3 className='my-4 text-lg font-bold uppercase' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{education} Education</h3>
                <div className='bg-[#161b22] border border-[#30363d] rounded-md text-[#788089] mt-2 hover:bg-[#121D2F] hover:border-[#224D87]' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <ol className="relative border-l border-[#30363d] mt-6 mr-4 ml-8">
                        {
                            educationList.map(
                                (education, index) =>
                                    <li className="mb-6 ml-7" key={index}>
                                        <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-4 ring-[#30363d90] bg-[#30363d]">
                                            <svg className="w-3 h-3 text-[#c9d1d9]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                        </span>

                                        {
                                            education.name &&
                                            <h3 className="flex items-center mb-1 text-base font-bold text-[#58A6FF]">{education.name}</h3>}
                                        {
                                            education.date &&
                                            <time className="mb-1 text-sm font-normal text-[#c9d1d9]">{education.date}</time>
                                        }
                                        {
                                            education.location &&
                                            <p className="text-sm font-normal text-[#c9d1d9]">{education.location}</p>
                                        }
                                        {
                                            education.honours &&
                                            <p className="text-sm font-normal text-[#c9d1d9]">{education.honours}</p>
                                        }

                                    </li>
                            )}
                    </ol>
                </div>
                <h3 className='my-4 text-lg font-bold uppercase' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{experience} Experience</h3>
                <div className='bg-[#161b22] border border-[#30363d] rounded-md text-[#788089] mt-2 hover:bg-[#121D2F] hover:border-[#224D87]' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <ol className="relative border-l border-[#30363d] mt-6 mr-4 ml-8">
                        {
                            experienceList.map((experience, index) =>
                                <li className="mb-6 ml-7" key={index}>
                                    <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-4 ring-[#30363d90] bg-[#30363d]">
                                        <svg className="w-3 h-3 text-[#c9d1d9]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>

                                    {
                                        experience.name &&
                                        <h3 className="flex items-center mb-1 text-base font-bold text-[#58A6FF]">{experience.name}</h3>}
                                    {
                                        experience.date &&
                                        <time className="mb-1 text-sm font-normal text-[#c9d1d9]">{experience.date}</time>
                                    }
                                    {
                                        experience.location &&
                                        <p className="text-sm font-normal text-[#c9d1d9]">{experience.location}</p>
                                    }
                                    {
                                        experience.role &&
                                        <p className="text-sm font-normal text-[#c9d1d9]">{experience.role}</p>
                                    }

                                </li>
                            )}
                    </ol>
                </div>

                <h3 className='my-4 text-xl font-bold uppercase' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{publication} Publications</h3>
                <div className='bg-[#161b22] border border-[#30363d] rounded-md text-[#788089] mt-2 hover:bg-[#121D2F] hover:border-[#224D87]' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <ol className="relative border-l border-[#30363d] mt-6 mr-4 ml-8">
                        {
                            publicationsList.map((publication, index) =>
                                <li className="mb-6 ml-7" key={index}>
                                    <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-4 ring-[#30363d90] bg-[#30363d]">
                                        <svg className="w-3 h-3 text-[#c9d1d9]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>

                                    {
                                        publication.name &&
                                        <h3 className="flex items-center mb-1 text-base font-bold text-[#58A6FF]">{publication.name}</h3>}
                                    {
                                        publication.date &&
                                        <time className="mb-1 text-sm font-normal text-[#c9d1d9]">{publication.date}</time>
                                    }
                                    {
                                        publication.publisher &&
                                        <p className="mb-3 text-sm font-normal text-[#c9d1d9]">{publication.publisher}</p>
                                    }
                                    {
                                        publication.DOI &&
                                        <a href={publication.link} className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-[#21262d] text-[#c9d1d9] border border-[#30363d] hover:bg-transparent hover:text-[#58a6ff] hover:border-[#224D87]">Reed <svg className="w-3 h-3 ml-2 animate-ping" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a>

                                    }

                                </li>
                            )}
                    </ol>
                </div>
                <h3 className='my-4 text-lg font-bold uppercase' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{interest} Interests</h3>
                <div className='bg-[#161b22] border border-[#30363d] rounded-md text-[#788089] mt-2 hover:bg-[#121D2F] hover:border-[#224D87]' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">

                    <div className="my-6 mx-6 grid gap-3 sm:grid-cols-2 grid-cols-1 shadow">{
                        interestsList.map((interest, index) =>
                            <div className="flex items-center w-full p-4 text-[#8b949e] border border-[#30363d] rounded-md hover:border-[#224D87]" key={index}>
                                {check}
                                <div className="pl-2 text-base font-bold text-[#58A6FF]">{interest}</div>
                            </div>
                        )
                    }
                    </div>
                </div>
                <h3 className='my-4 text-lg font-bold uppercase' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{skills} My Skills</h3>
                <div className='bg-[#161b22] border border-[#30363d] rounded-md text-[#788089] mt-2 hover:bg-[#121D2F] hover:border-[#224D87]' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    {
                        skillsList.map((skill, index) =>
                            <div className='my-6 mx-6' key={index}>
                                <h3 className="flex items-center mb-2 text-base font-bold text-[#58A6FF] ">{skill.name}</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {
                                        (skill.links).map((link, index) =>
                                            <img key={index} className="rounded-md" src={link} alt='img-skill' />
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