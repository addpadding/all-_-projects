

import React from 'react';
import './MainContent.css';

const MainContent = ({ pageName, designer }) => {
    return (

        <main>

            {pageName} page

            <br />

            Created By {designer}

        </main >

    );
}

export default MainContent;
