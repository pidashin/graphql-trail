/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type launchTile_launch$ref: FragmentReference;
declare export opaque type launchTile_launch$fragmentType: launchTile_launch$ref;
export type launchTile_launch = {|
  +id: string,
  +isBooked: boolean,
  +rocket: ?{|
    +id: string,
    +name: ?string,
  |},
  +mission: ?{|
    +name: ?string,
    +missionPatch: ?string,
  |},
  +$refType: launchTile_launch$ref,
|};
export type launchTile_launch$data = launchTile_launch;
export type launchTile_launch$key = {
  +$data?: launchTile_launch$data,
  +$fragmentRefs: launchTile_launch$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "launchTile_launch",
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/),
        (v1/*: any*/)
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
        (v1/*: any*/),
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
  "type": "Launch",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '68a101a264b7b140f025ee83fa1ceb9a';

module.exports = node;
