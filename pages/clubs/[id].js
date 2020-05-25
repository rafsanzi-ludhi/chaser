import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import { useRouter } from 'next/router';
import Page404 from 'pages/404';
import PageLoading from 'components/page-loading';
import Heading from 'components/heading';

import Layout from 'containers/layout';
import Meta from 'components/meta';
import { Box, Flex, Grid } from 'components/layout';
import Type, { TYPES } from 'components/club-type';
import { rem } from 'styles/theme';
import { getBlogTags } from 'modules/prismic';
import { BLOG_MIN_HEIGHTS } from 'styles/hero-heights';

import FacebookIcon from 'public/images/facebook.svg';
import TwitterIcon from 'public/images/twitter.svg';
import InstagramIcon from 'public/images/instagram.svg';
import YoutubeIcon from 'public/images/youtube.svg';

const IconContainer = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  z-index: 3;
`;

const Icon = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.box};

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    height: 200px;
    width: 200px;
  }
`;

const SocialIcon = styled.a`
  ${space};

  svg {
      color: ${({ theme }) => theme.colors.greyDark};
      height: 30px;
      width: 30px;
    }

    &:hover {
      svg {
        color: ${({ featuredColor }) => featuredColor};
      }
    }
`;

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
`;

const TableData = styled.td`
  padding: ${({ theme }) => theme.space[1]};
`;

const TableRow = styled.tr`
  border-collapse: separate;
  border-spacing: 0;
`;

const Support = styled.p`
  color: ${({ theme }) => theme.colors.greyDark};
  font-size: ${({ theme }) => theme.fontSizes.bodyCard};
`;

const Tabs = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  margin: 0;
  width: 100%;
`;

const Tab = styled.li`
  ${color};
  ${border};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-radius: ${({ theme }) => theme.radius[0]};
  display: block;
  margin-right: ${({ theme }) => theme.space[2]};
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[5]};
`;

const UNSPEAKABLES = {
  uuid: '789e0d73-af14-4a35-a37f-8c854728c9b9',
  name: 'London Unspeakables Quidditch',
  slug: 'london-unspeakables-quidditch',
  type: 'Community',
  location: { type: 'POINT', coordinates: ['-0.148176', '51.453825'] },
  images: ['https://images.prismic.io/chaser/475578b7-a77c-4abc-90f2-de1547bbacf2_72886220_1438371239645635_5936997713475272704_o.jpg?auto=compress,format'],
  venue: 'Clapham Common, London',
  featuredColor: '#381e51',
  textColor: '#ffffff',
  icon: 'https://images.prismic.io/chaser/98cc10fb-4840-40ac-a973-1bc54e7d86c5_unspeakables.png?auto=compress,format',
  tags: ['London Unspeakables Quidditch', 'Unspeakables', 'Unbreakables'],
  trainings: 'Saturdays 12-4PM',
  leaderPosition: 'President',
  leader: 'John Morris',
  officialWebsite: 'https://www.facebook.com/UnspeakablesLDN/',
  status: 'active',
  social_facebook: 'https://www.facebook.com/UnspeakablesLDN/',
  social_twitter: 'https://twitter.com/UnspeakablesLDN',
  social_youtube: 'https://www.youtube.com/user/UnspeakablesLDN',
  social_instagram: 'https://www.instagram.com/londonunspeakables',
  teams: [{
    uuid: '789e0d73-af14-4a35-a37f-8c854728c9b1',
    name: 'Unspeakables',
  },
  {
    uuid: '789e0d73-af14-4a35-a37f-8c854728c9b2',
    name: 'Unstoppables',
  },
  {
    uuid: '789e0d73-af14-4a35-a37f-8c854728c9b3',
    name: 'Unbreakables',
  }],
};

const ACTIVE_STATUS = 'active';

const ClubPage = ({ club, posts }) => {
  console.log(posts);
  const router = useRouter();

  if (router.isFallback) {
    return (<PageLoading />);
  }

  if (!club) {
    return <Page404 />;
  }

  return (
    <Layout>
      <Meta
        description={`Club page of ${club.name} with all their latest news, results and details`}
        subTitle={club.name}
        image={club.images[0]}
      />
      <Box
        as="section"
        position="relative"
        backgroundImage={`url(${club.images[0]})`}
        backgroundColor="primary"
        backgroundSize="cover"
        backgroundPosition="center"
        px={{ _: 'gutter._', s: 'gutter.s', m: 'gutter.m' }}
        minHeight={BLOG_MIN_HEIGHTS}
      >
        <Box
          position="absolute"
          right="0"
          padding={{ _: 'gutter._', s: 'gutter.s', m: 'gutter.m' }}
        >
          <Type fontWeight="bold" fontSize={[rem(10), rem(16)]} bg={TYPES[club.type]}>{club.type}</Type>
        </Box>
      </Box>
      <Box
        as="section"
        position="relative"
        backgroundColor={club.featuredColor}
        color={club.textColor}
        px={{ _: 'gutter._', s: 'gutter.s', m: 'gutter.m' }}
        py="0"
        height="130px"
      >
        <Flex justifyContent="flex-start" alignItems="center" top={{ _: 0, m: '-50px' }} position="relative">
          <IconContainer><Icon src={club.icon} alt={`${club.name} logo`} /></IconContainer>
          <Flex flexDirection="column">
            <Heading as="h2" fontSize={[3, 4, 5]} py="0" my="0">{club.name}</Heading>
            <p>{club.venue}</p>
          </Flex>
        </Flex>
      </Box>

      <Box
        bg="greyLight"
        py={0}
        px={0}
      >

        <Grid
          gridTemplateColumns={{ _: '1fr', m: '1fr 3fr' }}
          gridGap={{ _: 'gutter._', m: 'gutter.m' }}
          mt={0}
        >
          <Box bg="white" py={{ _: 6, m: 10 }} color={club.featuredColor} px={{ _: 'gutter._', s: 'gutter.s', m: 'gutter.m' }}>
            <Heading as="h3" fontSize={[2, 2, 3]} isBody>Club Details</Heading>
            <Table>
              <tbody>
                <TableRow>
                  <TableData><strong>Trainings</strong></TableData>
                  <TableData>{club.trainings}</TableData>
                </TableRow>

                <TableRow>
                  <TableData><strong>League</strong></TableData>
                  <TableData>{club.type}</TableData>
                </TableRow>

                <TableRow>
                  <TableData><strong>{club.leaderPosition}</strong></TableData>
                  <TableData>{club.leader}</TableData>
                </TableRow>

                <TableRow>
                  <TableData><strong>Official Website</strong></TableData>
                  <TableData><a href={club.officialWebsite} rel="noopener noreferrer" target="_blank">{club.officialWebsite}</a></TableData>
                </TableRow>
              </tbody>
            </Table>

            <Flex justifyContent={{ _: 'center', m: 'flex-start' }} mt={5}>
              {club.social_facebook && (
                <SocialIcon
                  aria-label={`Like ${club.name} on Facebook`}
                  href={club.social_facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  featuredColor={club.featuredColor}
                >
                  <FacebookIcon />
                </SocialIcon>
              )}

              {club.social_twitter && (
                <SocialIcon
                  aria-label={`Follow ${club.name} on Twitter`}
                  href={club.social_twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  pl={{ _: 5, m: 3 }}
                  featuredColor={club.featuredColor}
                >
                  <TwitterIcon />
                </SocialIcon>
              )}

              {club.social_instagram && (
                <SocialIcon
                  aria-label={`Follow ${club.name} on Instagram`}
                  href={club.social_instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  pl={{ _: 5, m: 3 }}
                  featuredColor={club.featuredColor}
                >
                  <InstagramIcon />
                </SocialIcon>
              )}

              {club.social_youtube && (
                <SocialIcon
                  aria-label={`Subscribe to ${club.name} Youtube Channel`}
                  href={club.social_youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  pl={{ _: 5, m: 3 }}
                  featuredColor={club.featuredColor}
                >
                  <YoutubeIcon />
                </SocialIcon>
              )}
            </Flex>

            {club.status !== ACTIVE_STATUS && <Support>This club is currently inactive, if you are interested in restarting it contact our <a href={`mailto:teams@quidditchuk.org?subject=${club.name}`}>Teams Director</a></Support>}
          </Box>

          <Box py={{ _: 6, m: 10 }}>
            <Box>
              <nav>
                <Tabs>
                  <Tab bg="white" borderColor="white">Overview</Tab>
                  {club.teams.map((team) => (
                    <Tab key={team.uuid} bg="greyDark" color="white">{team.name}</Tab>
                  ))}
                </Tabs>
              </nav>
            </Box>

            <Box bg="white" py={6} />
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};

// eslint-disable-next-line no-unused-vars
export const getServerSideProps = async ({ params: { id } }) => {
  const club = UNSPEAKABLES;
  const posts = await getBlogTags(club.tags, { orderings: '[my.post.date desc]', pageSize: 3 });

  return {
    props: { club, posts },
  };
};

ClubPage.propTypes = {
  club: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    venue: PropTypes.string,
    icon: PropTypes.string,
    featuredColor: PropTypes.string,
    textColor: PropTypes.string,
    type: PropTypes.string,
    leader: PropTypes.string,
    leaderPosition: PropTypes.string,
    officialWebsite: PropTypes.string,
    trainings: PropTypes.string,
    status: PropTypes.string,
    social_facebook: PropTypes.string,
    social_twitter: PropTypes.string,
    social_youtube: PropTypes.string,
    social_instagram: PropTypes.string,
    teams: PropTypes.array,
  }).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ClubPage;
