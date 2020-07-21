const { fetchLaunchByIds } = require('../spaceApi')

const trips = async (user, _, { prisma }) => {
  const trips = await prisma.user.findOne({
    where: { id: user.id }
  }).trips()

  return trips.length > 0 ? fetchLaunchByIds(trips.map(trip => trip.launchId)) : []
}

module.exports = {
  trips
}