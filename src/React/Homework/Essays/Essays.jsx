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
                    <li><b>Web Designer:</b> Answer</li>
                    <li><b>Front End Developer:</b> Answer</li>
                    <li><b>Back End Developer:</b> Answer</li>
                </ul>
            </Essay>
            <Essay q='S6. Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'>
                <p>Answer will go here for Monday.</p>
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;