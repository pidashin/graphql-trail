import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import LaunchTile from '../components/launch-tile'
import Header from '../components/header'
import Button from '../components/button'
import Loading from '../components/loading'

export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
    id
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`

// const GET_LAUNCHES = gql`
//   query Launches($after: String) {
//     launches(after: $after) {
//       cursor
//       hasMore
//       launches {
//         ...LaunchTile
//       }
//     }
//   }
//   ${LAUNCH_TILE_DATA}
// `

const GET_LAUNCHES = gql`
  query Launches($after: String) {
    launches {
      launches(after: $after) {
        edges {
          cursor
          node {
            ...LaunchTile
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`


const Launches = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_LAUNCHES)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <p>ERROR</p>
  }
  if (!data) {
    return <p>Not Found</p>
  }

  return (
    <>
      <Header />
      {
        data.launches &&
        data.launches.launches &&
        data.launches.launches.edges &&
        data.launches.launches.edges.map(({ node: launch }) => (
          <LaunchTile key={launch.id} launch={launch} />
        ))
      }
      {
        data.launches &&
        data.launches.launches &&
        data.launches.launches.pageInfo &&
        data.launches.launches.pageInfo.hasNextPage && (
          <Button
            onClick={() =>
              fetchMore({
                variables: {
                  after: data.launches.launches.pageInfo.endCursor
                },
                updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                  if (!fetchMoreResult) {
                    return prev
                  }

                  return {
                    ...fetchMoreResult,
                    launches: {
                      ...fetchMoreResult.launches,
                      launches: {
                        ...fetchMoreResult.launches.launches,
                        edges: [
                          ...prev.launches.launches.edges,
                          ...fetchMoreResult.launches.launches.edges,
                        ]
                      }
                      // launches: [
                      //   ...prev.launches.launches,
                      //   ...fetchMoreResult.launches.launches,
                      // ]
                    }
                  }
                }
              })
            }
          >
            Load More
          </Button>
        )
      }
    </>
  )
}

export default Launches