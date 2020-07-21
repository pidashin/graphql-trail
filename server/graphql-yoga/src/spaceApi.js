const fetch = require('node-fetch')
const baseUrl = 'https://api.spacexdata.com/v2/'

const parseLaunch = (launch) => {
  if (!launch) {
    return null
  }

  const buff = new Buffer(`launch:${launch.flight_number}`)
  const base64LaunchId = buff.toString('base64')

  return {
    id: base64LaunchId,
    cursor: `${launch.launch_date_unix}`,
    site: launch.launch_site && launch.launch_site.site_name,
    mission: {
      name: launch.mission_name,
      missionPatchSmall: launch.links.mission_patch_small,
      missionPatchLarge: launch.links.mission_patch,
    },
    rocket: {
      id: launch.rocket.rocket_id,
      name: launch.rocket.rocket_name,
      type: launch.rocket.rocket_type,
    },
  }
}

const fetchLaunches = () => {
  return fetch(baseUrl + 'launches')
    .then(res => res.json())
    .then(data => {
      return Array.isArray(data)
        ? data.map(launch => parseLaunch(launch))
        : []
    })
}

const fetchLaunchById = id => {
  const buff = new Buffer(id, 'base64')
  const parsedLaunchId = buff.toString('ascii').replace(/launch:/, '')
  return fetch(`${baseUrl}launches?flight_number=${parsedLaunchId}`)
    .then(res => res.json())
    .then(data => parseLaunch(data[0]))
}

const fetchLaunchByIds = ids => {
  return Promise.all(ids.map(id => fetchLaunchById(id)))
}

module.exports = {
  fetchLaunches,
  fetchLaunchById,
  fetchLaunchByIds
}