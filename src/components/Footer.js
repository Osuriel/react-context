import React from 'react';
import { useUserData } from '../context/userContext';

const Footer = (props) => {
  const { userData } = useUserData();

  return (
  <div style={{
    backgroundColor: '#bebeff',
    width: '100%',
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '200px',
    boxSizing: 'border-box',
    }}>
    {
      userData && (
        <div>
          this is the footer and the user name is: {userData.name}
        </div>
      )
    }
  </div>
  )
}

export default Footer;