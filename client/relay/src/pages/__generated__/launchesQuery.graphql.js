/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type launches_launches$ref = any;
export type launchesQueryVariables = {||};
export type launchesQueryResponse = {|
  +launches: ?{|
    +$fragmentRefs: launches_launches$ref
  |}
|};
export type launchesQuery = {|
  variables: launchesQueryVariables,
  response: launchesQueryResponse,
|};
*/


/*
query launchesQuery {
  launches {
    ...launches_launches
    id
  }
}

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

fragment launches_launches on LaunchPlan {
  launches(first: 20) {
    edges {
      node {
        id
        ...launchTile_launch
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "launchesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "LaunchPlan",
        "kind": "LinkedField",
        "name": "launches",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "launches_launches"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "launchesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "LaunchPlan",
        "kind": "LinkedField",
        "name": "launches",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "LaunchConnection",
            "kind": "LinkedField",
            "name": "launches",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "LaunchEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Launch",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isBooked",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Rocket",
                        "kind": "LinkedField",
                        "name": "rocket",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Mission",
                        "kind": "LinkedField",
                        "name": "mission",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "missionPatch",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "launches(first:20)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "launches_launches_launches",
            "kind": "LinkedHandle",
            "name": "launches"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3f56945e06a6edafc983489bf1f0c5c1",
    "id": null,
    "metadata": {},
    "name": "launchesQuery",
    "operationKind": "query",
    "text": "query launchesQuery {\n  launches {\n    ...launches_launches\n    id\n  }\n}\n\nfragment launchTile_launch on Launch {\n  id\n  isBooked\n  rocket {\n    id\n    name\n  }\n  mission {\n    name\n    missionPatch\n  }\n}\n\nfragment launches_launches on LaunchPlan {\n  launches(first: 20) {\n    edges {\n      node {\n        id\n        ...launchTile_launch\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5362b0c220f91906c33c15040e7e2f2f';

module.exports = node;
