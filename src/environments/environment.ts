import { KeycloakConfig } from "keycloak-js";

let keycloakConf: KeycloakConfig = {
  clientId: 'yuliancliente',    // Your `clientId` from Keycloak Admin Console
  realm: 'myrealm',               // Your `realm` from Keycloak Admin Console
  url:    'http://localhost:8080/auth/'   // URL of your keycloak installation till `/auth`
}

export const environment = {
  production: false,
  keycloak: keycloakConf
};