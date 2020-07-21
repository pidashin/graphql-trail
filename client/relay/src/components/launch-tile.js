import React from 'react'
import { Link } from 'react-router-dom'
import styles from './launch-tile.module.scss'
import { useFragment } from 'react-relay/hooks'
import graphql from 'babel-plugin-relay/macro'

import galaxy from '../assets/images/galaxy.jpg';
import iss from '../assets/images/iss.jpg';
import moon from '../assets/images/moon.jpg';

const launchFragment = graphql`
  fragment launchTile_launch on Launch {
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

const backgrounds = [galaxy, iss, moon];
export const getBackgroundImage = (id) => {
  const _id = isNaN(id) ? atob(id).replace(/Launch:/, '') : id

  return `url(${backgrounds[Number(_id) % backgrounds.length]})`;
}

const LaunchTile = ({ launch }) => {
  const {id, mission, rocket} = useFragment(launchFragment, launch)

  return (
    <Link
      className={styles.link}
      to={`/launch/${id}`}
      style={{
        backgroundImage: getBackgroundImage(id),
      }}
    >
      <h3>{mission.name}</h3>
      <h5>{rocket.name}</h5>
    </Link>
  )
}

export default LaunchTile