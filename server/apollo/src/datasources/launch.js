const { RESTDataSource } = require('apollo-datasource-rest')
const {toGlobalId, fromGlobalId} = require('../utils')
const { launch } = require('../resolvers/Query')

class LaunchAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.spacexdata.com/v2/'
  }
  
  async getAllLaunches() {
    const response = await this.get('launches')
    return Array.isArray(response)
      ? response.map(launch => this.launchReducer(launch))
      : []
  }

  launchReducer(launch) {
    return {
      id: toGlobalId('Launch', launch.flight_number),
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
    };
  }

  async getLaunchById({ launchId }) {
    const {id} = fromGlobalId(launchId)
    const response = await this.get('launches', { flight_number: id });
    return this.launchReducer(response[0]);
  }
  
  getLaunchesByIds({ launchIds }) {
    return Promise.all(
      launchIds.map(launchId => this.getLaunchById({ launchId })),
    );
  }
}

module.exports = LaunchAPI