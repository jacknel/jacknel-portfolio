import React from 'react';

const ProjectTwo = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '300px',
      height: '400px',
      backgroundColor: '#eee',
      borderRadius: '10px',
      padding: '20px'
    }}>
      <img
        src="https://via.placeholder.com/150"
        alt="profile picture"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%'
        }}
      />
      <h3 style={{ marginTop: '20px' }}>Jack Nelson</h3>
      <a href='https://openbook-3.herokuapp.com/'>OpenBook</a>
    </div>
  );
};

export default ProjectTwo;
