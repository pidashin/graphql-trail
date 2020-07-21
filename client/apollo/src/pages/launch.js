import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { LAUNCH_TILE_DATA } from './launches'
import { useParams } from 'react-router-dom'

import Loading from '../components/loading'
import Header from '../components/header'
import LaunchDetail from '../components/launch-detail'
import ActionButton from '../containers/action-button'

export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      isInCart @client
      site
      rocket{
        type
      }
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`

const Launch = () => {
  const { launchId } = useParams()
  const { data, loading, error } = useQuery(GET_LAUNCH_DETAILS, {
    variables: { launchId }
  })

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <p>ERROR: {error.message}</p>
  }
  if (!data) {
    return <p>Not found</p>
  }

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
      <ActionButton {...data.launch} />
    </Fragment>
  )
}

export default Launch