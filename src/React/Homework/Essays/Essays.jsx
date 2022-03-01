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
            <Essay q='S7. What is the difference between jpg, gif, png and SVG images?'>
                <ul>
                    <li><b>JPG:</b> Millions of color: Joint Photographic Experts Group: Lossy compression, s, can make for small files at the expense of quality</li>
                    <li><b>GIF:</b> Indexed Color: Logos, graphics - Graphic Interface Format: 256 total colors, animation is supported, transparency</li>
                    <li><b>PNG:</b> Millions of Colors and Indexed Color: Lossless Compression, Portable Network Graphics: Transparency</li>
                    <li><b>SVG:</b> Scaleable Vector Graphics: Animation, Lighter files due to vector, can also add images if necessary, without images scale without loss of quality.</li>
                </ul>
            </Essay>
            <Essay q='S8. Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'>
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
            <Essay q='S9. What is considered the right size for an image or video asset?'>
                <p>Trick question, whatever size will give us the fastest download without compromising quality.</p>
            </Essay>
            <Essay q='S10. What does it mean for a company to be Agile? What are the pros and cons of being agile?'>
                <h4>Agile Means</h4>
                <p>Methodology allowing for more flexible rapid sprints - using an interative process. Adjust and change requirements as they shift in real time.</p>

                <h4>Pros and Cons</h4>
                <ul>
                    <li>More predictable</li>
                    <li>Turnaround and flexibility is is easier to manage</li>
                    <li>Consistent team - managing process - keeping on sprints and deadlines.</li>
                </ul>
            </Essay>
            <Essay q='S11. What are testing environments? What is the difference between Local, Dev, QA and Production?'>
                <p>A testing environment is: Space developers deploy there work for testing their work.</p>

                <ul>
                    <li><b>Local:</b> Developer's Machine - to build and test your own code on your computer.</li>
                    <li><b>Dev:</b> Dev Testing Server: Dev Paired Code reviews.</li>
                    <li><b>QA:</b> Quality Assurance Testing Server for QA team.</li>
                    <li><b>UAT:</b> User Acceptance Testing Server for Customer to test.</li>
                    <li><b>Production:</b> Live website for users to access - public domain</li>
                </ul>
            </Essay>
            <Essay q='S12. Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?'>
                <p>Printable is good in HTML, CSS by default is off - as background image.</p>
                <p>HTML if image is related to content</p>
            </Essay>
            <Essay q="S13. What is the difference between ID's, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)">
                <ul>
                    <li id="timbuktu"><b>ID:</b> Label: We use pound sign (#) in CSS and JS, Singular - should only label one HTML element on a page.</li>
                    <li id="timbukthree" className="myBorder"><b>Classes:</b> Label: We use the period (.) in CSS and JS, Defines a series; Multiple HTML elements.</li>
                    <li className="myBorder secondaryClass"><b>Tag:</b> Any HTML tag in the HTML language. </li>
                    <li className="myBorder"><b>Specificity:</b> Determines which selector and rule applies to an element. </li>
                </ul>

            </Essay>
            <Essay q="S14. What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?">
                <p>Answer will go here for Thursday.</p>
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;

/* 
    #timbukthree {
        background-color: orange;
    }

    li {
        background-color: purple;
    }
    li {
        background-color: yellow;
    }

    .myBorder { border: solid 2px red; } */

`;