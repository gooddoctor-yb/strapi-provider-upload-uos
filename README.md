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

For more details, please see: https://strapi.io/documentation/v3.x/plugins/upload.html#using-a-provider

# Usage

### Strapi version > 3.0.0

With a stable release of Strapi 3.0.0, the configuration was moved to a JavaScript file. Official documentation [here](https://strapi.io/documentation/v3.x/plugins/upload.html#using-a-provider).

To enable the provider, create or edit the file at `./config/plugins.js`.

```javascript
module.exports = ({ env }) => ({
  upload: {
    provider: "uos",
    providerOptions: {
      accessKeyId: env("ACCESS_KEY_ID"),
      accessKeySecret: env("ACCESS_KEY_SECRET"),
      region: env("REGION"),
      bucket: env("BUCKET"),
      uploadPath: env("UPLOAD_PATH"),
      baseUrl: env("BASE_URL"),
      timeout: env("TIMEOUT"),
    },
  },
});
```

See below table for description of each provider option.

### Strapi Beta or alpha

The description for each fields to fill in strapi's configuration UI are as follows:

| Field                                        | value       |
| -------------------------------------------- | ----------- |
| **AccessKeyId token**                        |             |
| **AccessKeySecret token token**              |             |
| **Region**                                   |             |
| **Bucket**                                   | bucket name |
| **Upload Path**                              |             |
| **Base URL to access**                       |             |
| **timeout**                                  |             |
| **Automatically generate thumbnails** (Beta) |             |

Example:

# OSS Region reference

# Troubleshooting

<!-- Q: getting "The bucket you are attempting to access must be addressed using the specified endpoint. Please send all future requests to this endpoint."

A: Check if the OSS region is correct for the bucket you're using -->

# Contribution

<!-- This repo is maintained periodically, any contribution is highly welcomed -->
