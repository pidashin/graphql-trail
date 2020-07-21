/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type launchTile_launch$ref = any;
export type launchDetailsQueryVariables = {|
  launchId: string
|};
export type launchDetailsQueryResponse = {|
  +launch: ?{|
    +id: string,
    +site: ?string,
    +rocket: ?{|
      +type: ?string
    |},
    +$fragmentRefs: launchTile_launch$ref,
  |}
|};
export type launchDetailsQuery = {|
  variables: launchDetailsQueryVariables,
  response: launchDetailsQueryResponse,
|};
*/


/*
query launchDetailsQuery(
  $launchId: ID!
) {
  launch(id: $launchId) {
    id
    site
    rocket {
      type
      id
    }
    ...launchTile_launch
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "launchId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "launchId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "site",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
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
    "name": "launchDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Launch",
        "kind": "LinkedField",
        "name": "launch",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Rocket",
            "kind": "LinkedField",
            "name": "rocket",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "launchTile_launch"
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
    "name": "launchDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Launch",
        "kind": "LinkedField",
        "name": "launch",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Rocket",
            "kind": "LinkedField",
            "name": "rocket",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v2/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "004f864cd2a96f1c0e46dfcb397699dc",
    "id": null,
    "metadata": {},
    "name": "launchDetailsQuery",
    "operationKind": "query",
    "text": "query launchDetailsQuery(\n  $launchId: ID!\n) {\n  launch(id: $launchId) {\n    id\n    site\n    rocket {\n      type\n      id\n    }\n    ...launchTile_launch\n  }\n}\n\nfragment launchTile_launch on Launch {\n  id\n  isBooked\n  rocket {\n    id\n    name\n  }\n  mission {\n    name\n    missionPatch\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '067851fd1aa3d6711279a45e0496ea02';

module.exports = node;
