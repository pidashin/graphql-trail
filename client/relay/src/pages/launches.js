import React, { useTransition } from 'react'
import { useLazyLoadQuery, usePaginationFragment } from 'react-relay/hooks'
import graphql from 'babel-plugin-relay/macro'

import LaunchTile from '../components/launch-tile'
import Header from '../components/header'
import Button from '../components/button'
import Loading from '../components/loading'

const { Suspense } = React

const GET_LAUNCHES = graphql`
  query launchesQuery {
    launches {
      ...launches_launches
    }
  }
`

const LaunchlistPaginationQuery = graphql`
  fragment launches_launches on LaunchPlan
    @argumentDefinitions(
      cursor: { type: "String" }
      count: { type: "Int", defaultValue: 20 }
    )
    @refetchable(queryName: "LaunchListPaginationQuery") {
      launches (first: $count, after: $cursor)
      @connection(key: "launches_launches_launches") {
        edges {
          node {
            id
            ...launchTile_launch
          }
        }
      }
    } 
`

const Launches = ({launches}) => {
  const [startTransition] = useTransition()
  const { data, loadNext, hasNext } = usePaginationFragment(LaunchlistPaginationQuery, launches)

  const handleLoadMore = () => {
    startTransition(() => {
      loadNext(20)
    })
  }

  return (
    <>
      {
        data.launches &&
        data.launches.edges &&
        data.launches.edges.map(edge => {
          const launch = edge.node
          return (
            <LaunchTile key={launch.id} launch={launch} />
          )
        })
      }
      {
        hasNext ? (
          <Button onClick={handleLoadMore}>
            Load More
          </Button>
        ) : null
      }
    </>
  )
}

const LaunchesRoot = () => {
  const rootData = useLazyLoadQuery(GET_LAUNCHES)
  const { launches } = rootData

  return <Launches launches={launches} />
}

const LaunchesPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <LaunchesRoot />
      </Suspense>
    </>
  )
}

export default LaunchesPage