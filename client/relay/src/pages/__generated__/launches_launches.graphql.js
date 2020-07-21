/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type launchTile_launch$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type launches_launches$ref: FragmentReference;
declare export opaque type launches_launches$fragmentType: launches_launches$ref;
export type launches_launches = {|
  +launches: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: launchTile_launch$ref,
      |}
    |}>
  |},
  +id: string,
  +$refType: launches_launches$ref,
|};
export type launches_launches$data = launches_launches;
export type launches_launches$key = {
  +$data?: launches_launches$data,
  +$fragmentRefs: launches_launches$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  "launches"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./LaunchListPaginationQuery.graphql.js'),
      "identifierField": "id"
    }
  },
  "name": "launches_launches",
  "selections": [
    {
      "alias": "launches",
      "args": null,
      "concreteType": "LaunchConnection",
      "kind": "LinkedField",
      "name": "__launches_launches_launches_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "launchTile_launch"
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
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "LaunchPlan",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '69e5bacb7ba8643b323ee57c0fe36c8e';

module.exports = node;
