import { Environment, Network, RecordSource, Store } from 'relay-runtime'


const fetchQuery = async (text, variables) => {
  const response = await fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      // authorization: localStorage.getItem(AUTH_TOKEN),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  })

  return await response.json()
}

const fetchRelay = (params, variables) => {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`)
  return fetchQuery(params.text, variables)
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})