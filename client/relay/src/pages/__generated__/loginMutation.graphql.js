/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type loginMutationVariables = {|
  email: string
|};
export type loginMutationResponse = {|
  +login: ?string
|};
export type loginMutation = {|
  variables: loginMutationVariables,
  response: loginMutationResponse,
|};
*/


/*
mutation loginMutation(
  $email: String!
) {
  login(email: $email)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      }
    ],
    "kind": "ScalarField",
    "name": "login",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "loginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "loginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "de5e79fd07ddde6578edac6c60a310b2",
    "id": null,
    "metadata": {},
    "name": "loginMutation",
    "operationKind": "mutation",
    "text": "mutation loginMutation(\n  $email: String!\n) {\n  login(email: $email)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6e36f77dcb38500caeaf835589a9d69d';

module.exports = node;
