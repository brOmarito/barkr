// import React, { useState, useContext } from 'react';
// import { QUERY_SINGLE_PROFILE } from './queries'
// import Auth from './auth';

// const ProfileContext = React.createContext();

// const {loading, data} = useQuery(QUERY_SINGLE_PROFILE, {
//   variables: { userId: Auth.getProfile().data._id}
// });

// export const ProfileProvider = ({children}) => {
//   const [currentProfile, setCurrentProfile] = useState({
//     ...data.profile
//   })

//   return (
//     <ProfileContext.Provider value={ {currentProfile: currentProfile}} {...props}/>
//   )
// }

