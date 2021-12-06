import React from 'react';
import {
    about, education, date, location, honours,
    experience, role, publication, link, interest, check,
    skills
} from './Emojis';
import { educationList } from '../lists/EducationList';
import { experienceList } from '../lists/ExperienceList';
import { publicationsList } from '../lists/PublicationsList';
import { interestsList } from '../lists/InterestsList';
import { skillsList } from '../lists/SkillsList';

const About = () => {
    return (
        <section>
            <div className="main">
                <h2 className="center">A little bit of information about myself!</h2>
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{about} About Me</h3>
                <div className="info" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <p>Hello .. My name is <span>Amal Aljabri</span> and I am from Madina, a peaceful city in the west part of Saudi Arabia.
                    I am a developer and researcher in computer science.
                    I have a passion for coding and get most enjoyment from solving problems and building things all by myself.
                    I love learning so I'm every day, I strive to learn and increase my knowledge, skills, and experience in the fields of computer science!</p>
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{education} Education</h3>
                <div className="info" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    {
                        educationList.map(
                            (education, index) =>
                                <div key={index}>
                                    {
                                        education.name && <p><strong>{education.name}</strong></p>
                                    }
                                    {
                                        education.date && <p className="text">{date} {education.date}</p>
                                    }

                                    {education.location && <p className="text">{location} {education.location}</p>
                                    }
                                    {
                                        education.honours && <p className="text">{honours} {education.honours}</p>
                                    }
                                </div>
                        )
                    }
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{experience} Experience</h3>
                <div className="info" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    {
                        experienceList.map((experience, index) =>
                            <div key={index}>
                                {
                                    experience.name && <p><strong>{experience.name}</strong></p>
                                }
                                {
                                    experience.date && <p className="text">{date} {experience.date}</p>
                                }
                                {
                                    experience.location && <p className="text">{location} {experience.location}</p>
                                }
                                {
                                    experience.role && <p className="text">{role} {experience.role}</p>
                                }
                            </div>
                        )
                    }
                </div>

                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{publication} Publications</h3>
                <div className="info" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    {
                        publicationsList.map((publication, index) =>
                            <div key={index}>
                                {
                                    publication.name && <p><strong>{publication.name}</strong></p>
                                }
                                {
                                    publication.date && <p className="text">{date} {publication.date}</p>
                                }
                                {
                                    publication.publisher && <p className="text">{location} {publication.publisher}</p>
                                }
                                {
                                    publication.DOI && <p className="text">{link} DOI: <a href='https://ieeexplore.ieee.org/document/9450783'>{publication.DOI}</a></p>
                                }

                            </div>
                        )
                    }
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{interest} Interests</h3>
                <div className="info" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    {
                        interestsList.map((interest, index) =>
                            <div key={index}>
                                <p><strong>{check} {interest}</strong></p>
                            </div>
                        )
                    }
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{skills} My Skills</h3>
                <div className="info" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    {
                        skillsList.map((skill, index) =>
                            <div key={index}>
                                <p>
                                    <strong>{skill.name}</strong>
                                </p>
                                <div>
                                    {
                                        (skill.links).map((link, index) =>
                                            <img key={index} className="space" src={link} alt='img-skill' />
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