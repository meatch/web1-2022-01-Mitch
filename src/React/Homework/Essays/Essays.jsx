import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='S2. What is the difference between Git, Github and Heroku?'>
                <ul>
                    <li>Git: Version control system, manage and edit code on their system. Free. Merge branches in once approved.</li>
                    <li>Github: A Place for our Git Repos- remote server - leveraging Git. Teamwork, code reviews, sharing.</li>
                    <li>Heroku: Cloud Based Web (App) Server with the ability to deploy apps, without having a DevOps degree.</li>
                </ul>
            </Essay>
            <Essay q='S3. Explain the difference between HTML, CSS and JS.'>
                <ul>
                    <li>HTML: Mark Up Language for tag based hierarchy and semantic definition.</li>
                    <li>CSS: The Skin (appearance/visual aesthetics), CSS Selectors - to select html elements</li>
                    <li>JS: Programming Language for Interactive Features of the site (Behavior) Slideshows, scrolling </li>
                </ul>
            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
                <ul>
                    <li>Single Page: Does not have to reload like multi-page (less repetition)</li>
                    <li>Faster load times, more efficient.</li>
                </ul>
            </Essay>
            <Essay q='S5. What is the difference between Web Designer, Front End Developer and Back End Developer?'>
                <ul>
                    <li><b>Web Designer/UX Designer:</b> Focus on designing the look of the website, mock ups, features for the Web Developer to translate</li>
                    <li><b>Front End Developer:</b> Programmer: Client Side: User interaction (HTML, JS CSS), User Interface, Colors, Responsive - for all devices.</li>
                    <li><b>Back End Developer:</b> Programmer: Server Side: Data, Database (SQL), (Node.js, Python, PHP, JAVA )</li>
                </ul>
            </Essay>
            <Essay q='S6. Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'>
                <ul>
                    <li><b>Site Relative: URL relates from the root of the website</b> </li>
                    <li><b>Document Relative:</b> Link to resources relative to the document writing the link.</li>
                    <li><b>Absolute Paths:</b> Fully resolved URL to a resource.</li>
                </ul>
            </Essay>
            <Essay q='What is the difference between jpg, gif, png and SVG images?'>
                <ul>
                    <li><b>JPG:</b> Millions of color: Joint Photographic Experts Group: Lossy compression, s, can make for small files at the expense of quality</li>
                    <li><b>GIF:</b> Indexed Color: Logos, graphics - Graphic Interface Format: 256 total colors, animation is supported, transparency</li>
                    <li><b>PNG:</b> Millions of Colors and Indexed Color: Lossless Compression, Portable Network Graphics: Transparency</li>
                    <li><b>SVG:</b> Scaleable Vector Graphics: Animation, Lighter files due to vector, can also add images if necessary, without images scale without loss of quality.</li>
                </ul>
            </Essay>
            <Essay q='Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'>
                <ul>
                    <li><b>Project Manager:</b> Responsible for the entire project. Scope/Goals, and Orchestrating the team to meet deadlines. </li>
                    <li><b>Business Analyst:</b> Works with client to defined deliverables, understanding client. They make the promises. </li>
                    <li><b>Scrum Master:</b> Manages the agile process, unblocking teams and keeping the ball moving forward. </li>
                    <li><b>UX Designer:</b> User Experience Designer: Design User Stories, Characters to visually implement the site. </li>
                    <li><b>Web Developer/Engineer:</b> Build and maintains the website. Translating UX Designs.  </li>
                    <li><b>Quality Assurance Tester:</b> Test and find bugs in the app, working with developers to resolve before release. Automated testing. </li>
                    <li><b>DevOps:</b> Managing hardware and deployment of software. </li>

                </ul>
            </Essay>
            <Essay q='What is considered the right size for an image or video asset?'>
                <p>Answer will go here for Thursday.</p>
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;