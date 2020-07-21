import React from 'react'
import { Link } from 'react-router-dom'
import styles from './launch-tile.module.scss'

import galaxy from '../assets/images/galaxy.jpg';
import iss from '../assets/images/iss.jpg';
import moon from '../assets/images/moon.jpg';

const backgrounds = [galaxy, iss, moon];
export const getBackgroundImage = (id) => {
  const _id = isNaN(id) ? atob(id).replace(/launch:/, '') : id

  return `url(${backgrounds[Number(_id) % backgrounds.length]})`;
}

const LaunchTile = ({ launch }) => {
  const { id, mission, rocket } = launch

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