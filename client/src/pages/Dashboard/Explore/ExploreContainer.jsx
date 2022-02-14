import {
  Flex,
  Heading,
  Text
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../../../utils/queries';
import ProfileCard from './ProfileCard';
import { useState, useEffect, useCallback } from 'react';
import Auth from "../../../utils/auth"

const ExploreContainer =  ({ clickHandler, currentProfile }) => {
  const {loading, data} = useQuery(QUERY_PROFILES);
  const [profiles, setProfiles] = useState([]);
  console.log(Auth.getProfile().data._id)
  // Get all profiles and filter out current user
  // TODO: Add a message for no users found
 
  useEffect(() => {
    if (loading === false && data) {
    let profiles = data.profiles;
    let  filtered = profiles.filter(profile => profile.userId !== currentProfile.userId);
    setProfiles(filtered)
    }
  },[loading, data])

  return (
    <Flex flex='4' flexDirection='column' alignItems='center' mt={2}>
      <Heading>Explore</Heading>
      <Text>Time to make some dog friends</Text>
      <Flex flex='3' justifyContent='space-evenly' flexWrap="wrap">
        {profiles.map((profile) => (
          <ProfileCard clickHandler={clickHandler} profile={profile} />
        ))}
      </Flex>
    </Flex>
  )
}

export default ExploreContainer