// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  app_name: "iPORTO (Dev)",
  app_module: "panel",
  app_service: "Delivery de E-mail Transacional e Marketing",
  app_allows_reseller: false,

  // --------------------------------------------------------------------------
  // dev
  api_url: 'http://api.iporto.io/api/',
  api_doc: 'http://api.iporto.io/docs/',
  api_url_auth: 'http://api.iporto.io/api/'
  // --------------------------------------------------------------------------
};
