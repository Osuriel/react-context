import React, { useContext } from 'react';
import { useUserData } from '../context/userContext';


const UserInfoComponent = () => {
  const { userData } = useUserData();

  if(!userData){
    return 'not log in'
  }

  return 'hi, ' + userData.name;
}

export default UserInfoComponent;