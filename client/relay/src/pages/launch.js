import React, { Fragment, Suspense } from 'react'
// import { useQuery } from '@apollo/react-hooks'
// import gql from 'graphql-tag'
// import { LAUNCH_TILE_DATA } from './launches'
import { useLazyLoadQuery } from 'react-relay/hooks'
import graphql from 'babel-plugin-relay/macro'

import { useParams } from 'react-router-dom'

import Loading from '../components/loading'
import Header from '../components/header'
import LaunchDetail from '../components/launch-detail'
// import ActionButton from '../containers/action-button'

// export const GET_LAUNCH_DETAILS = gql`
//   query LaunchDetails($launchId: ID!) {
//     launch(id: $launchId) {
//       isInCart @client
//       site
//       rocket{
//         type
//       }
//       ...LaunchTile
//     }
//   }
//   ${LAUNCH_TILE_DATA}
// `

export const GET_LAUNCH_DETAILS = graphql`
  query launchDetailsQuery($launchId: ID!) {
    launch(id: $launchId) {
      id
      site
      rocket {
        type
      }
      ...launchTile_launch
    }
  }
`

const Launch = () => {
  const { launchId } = useParams()
  const data = useLazyLoadQuery(GET_LAUNCH_DETAILS, { launchId })
  console.log(launchId, data)

  return (
    <Fragment>
      <Header
        image={
          data.launch && data.launch.mission && data.launch.mission.missionPatch
        }
      >
        {data && data.launch && data.launch.mission && data.launch.mission.name}
      </Header>
      <LaunchDetail {...data.launch} />
      {/* <ActionButton {...data.launch} /> */}
    </Fragment>
  )
}

const LaunchPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Launch />
    </Suspense>
  )
}

export default LaunchPage