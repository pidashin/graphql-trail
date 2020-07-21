const { getUserId, paginateResults } = require('../utils')
const { fetchLaunches, fetchLaunchById } = require('../spaceApi')

const launches = async () => {
  const allLaunches = await fetchLaunches()
  allLaunches.reverse()

  // const launches = paginateResults({ after, pageSize, results: allLaunches })

  // return {
  //   launches,
  //   cursor: launches.length ? launches[launches.length - 1].cursor : null,
  //   hasMore: launches.length
  //     ? launches[launches.length - 1].cursor !== allLaunches[allLaunches.length - 1].cursor
  //     : false
  // }
  return {launches: allLaunches}
}

const launch = async (_, { id }, __) => {
  const launch = await fetchLaunchById(id)
  return launch
}

const me = async (_, __, context) => {
  let userId
  try {
    userId = getUserId(context)
  }
  catch (e) {
    console.log('Not login yet!')
  }

  if (!userId) {
    return null
  }

  const { prisma } = context
  const user = await prisma.user.findOne({
    where: {
      id: userId
    }
  })

  return user
}

const trips = async (_, __, context) => {
  const result = await context.prisma.trip.findMany()

  return result
}

module.exports = {  
  launches,
  launch,
  me,
  trips
}