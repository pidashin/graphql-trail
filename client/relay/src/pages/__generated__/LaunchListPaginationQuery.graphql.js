/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type launches_launches$ref = any;
export type LaunchListPaginationQueryVariables = {|
  count?: ?number,
  cursor?: ?string,
  id: string,
|};
export type LaunchListPaginationQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: launches_launches$ref
  |}
|};
export type LaunchListPaginationQuery = {|
  variables: LaunchListPaginationQueryVariables,
  response: LaunchListPaginationQueryResponse,
|};
*/


/*
query LaunchListPaginationQuery(
  $count: Int = 20
  $cursor: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...launches_launches_1G22uz
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

fragment launches_launches_1G22uz on LaunchPlan {
  launches(first: $count, after: $cursor) {
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
    "defaultValue": 20,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LaunchListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              }
            ],
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LaunchListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
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
                          (v3/*: any*/),
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
                              (v3/*: any*/),
                              (v5/*: any*/)
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
                              (v5/*: any*/),
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
                          (v2/*: any*/)
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
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "launches_launches_launches",
                "kind": "LinkedHandle",
                "name": "launches"
              }
            ],
            "type": "LaunchPlan",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e51d48a3ba2c8f0653369b41838c3f66",
    "id": null,
    "metadata": {},
    "name": "LaunchListPaginationQuery",
    "operationKind": "query",
    "text": "query LaunchListPaginationQuery(\n  $count: Int = 20\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...launches_launches_1G22uz\n    id\n  }\n}\n\nfragment launchTile_launch on Launch {\n  id\n  isBooked\n  rocket {\n    id\n    name\n  }\n  mission {\n    name\n    missionPatch\n  }\n}\n\nfragment launches_launches_1G22uz on LaunchPlan {\n  launches(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...launchTile_launch\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '69e5bacb7ba8643b323ee57c0fe36c8e';

module.exports = node;
