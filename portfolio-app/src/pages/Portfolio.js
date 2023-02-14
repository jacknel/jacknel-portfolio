import React from 'react';
import Project from '../components/Project';
import ProjectTwo from '../components/ProjectTwo';
import ProjectThree from '../components/ProjectThree';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio Page</h1>
        <div style = {
            {
                display: 'flex',
                alignItems: 'center',
                padding: '9px'
            }
        }>
        <Project />
        <ProjectTwo />
        <ProjectThree />
      </div>
    </div>
  );
};

export default Portfolio;
