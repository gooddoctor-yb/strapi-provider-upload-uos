# strapi-provider-upload-oss

A provider for strapi server to upload file to Gooddoctor UOS

# Requirements

- Node.js >= 10
- npm > 6

# Installation

```bash
$ npm install strapi-provider-upload-uos --save
```

or

```bash
$ yarn add strapi-provider-upload-uos --save
```

For more details, please see: https://strapi.io/documentation/developer-docs/latest/development/plugins/upload.html#using-a-provider

# Usage

### Strapi version > 3.0.0

With a stable release of Strapi 3.0.0, the configuration was moved to a JavaScript file. Official documentation [here](https://strapi.io/documentation/developer-docs/latest/development/plugins/upload.html#using-a-provider).

To enable the provider, create or edit the file at `./config/plugins.js`.

```javascript
module.exports = ({ env }) => ({
  upload: {
    provider: "uos",
    providerOptions: {
      baseUrl: env("TFS_UPLOAD_URL")
    },
  },
});
```


