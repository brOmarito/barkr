import {
  Flex,
  Heading,
  Text
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILES } from '../../../utils/queries';
import ProfileCard from './ProfileCard';

const ExploreContainer = ({ clickHandler }) => {
  const {loading, data} = useQuery(QUERY_PROFILES);
  console.log(data);
  return (
    <Flex flex='4' flexDirection='column' alignItems='center' mt={2}>
      <Heading>Explore</Heading>
      <Text>Time to make some dog friends</Text>
      <Flex flex='3' justifyContent='space-evenly' flexWrap="wrap">
        {/* <ProfileCard clickHandler={clickHandler} />
        <ProfileCard clickHandler={clickHandler} />
        <ProfileCard clickHandler={clickHandler} />
        <ProfileCard clickHandler={clickHandler} />
        <ProfileCard clickHandler={clickHandler} />
        <ProfileCard clickHandler={clickHandler} /> */}
        {/* {data.profiles.map((profile) => (
          <ProfileCard clickHandler={clickHandler} profile={profile} />
        ))} */}
      </Flex>
    </Flex>
  )
}

export default ExploreContainer