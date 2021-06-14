import React, { Component } from 'react';
import './index.css';

let Footer = () => {
    return (
        <div>
            <div className="about_text about bold" id="about">About us</div>
            <p className="paragraph">
            The pandemic has led to job losses in every sector and an estimated 6 crore Indians out of 60 crores who
                go to work (or one in 10) are at the risk of losing their jobs before autumn breaks in India, with
                businesses under the lockdown facing severe challenges to resume. Although the future is unpredictable
                and anything could happen, the hiring/employment scenario will most likely look like this post-Covid-19.
                But all hope is not lost, there has been an increase in hiring for a handful of industries including:
                Corporate services, Legal Services, Public Safety, Software and IT services and corporates are hiring
                talent to select roles that require specialized certifications in niche skills across business segments.
                But are facing problem in finding appropriate employees with the required skill set<br/>
                    We are going to make a job profile web site which serves the dual purpose as on one hand it provides
                    jobs to the candidates and on the other hand it has a database of the registered candidates profiles
                    which is useful for the companies to shortlist. A candidate can find a job suiting their skill,
                    industry, position, role, location, and even based on company name. It also provides a personalized job
                    search to the candidates on the basis of their past job history that makes sense for the candidates. And
                    meanwhile recruiters can search over the candidate database for specific jobs based on educational
                    qualification, skill, location, experience, industry etc as recruiters are very selective when it comes
                    to searching for candidates for specific jobs. The recruiters would also like certain candidates and may
                    be interested in more candidates similar to selected candidates. The main purpose of this site is
                    to ensure proper communication of job seekers and Industry.
            </p>
            <hr/>
            <footer className="footer">
        made with ❤ in India!<br/>
        ©Team Dream Achievers
            </footer>
        </div>
    );
}

export default Footer;

