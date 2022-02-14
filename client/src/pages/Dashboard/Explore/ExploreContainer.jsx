import {
  Flex,
  Heading,
  Text
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../../../utils/queries';
import ProfileCard from './ProfileCard';
import { useState, useEffect } from 'react';

const ExploreContainer = ({ clickHandler, currentProfile }) => {
  const {loading, data} = useQuery(QUERY_PROFILES);
  const [profiles, setProfiles] = useState([]);

  // Get all profiles and filter out current user
  // TODO: Add a message for no users found
  useEffect(() => {
    if (loading) return null
    let profiles = data.profiles;
    let  filtered = profiles.filter(profile => profile.userId !== currentProfile.userId);
    setProfiles(filtered)
  })

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