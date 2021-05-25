const axios = require("axios");

module.exports = {
  provider: "uos",
  name: "Gooddoctor tfs",
  auth: {
    baseUrl: {
      label: "Base URL to access",
      type: "text",
    },
  },
  init: (config) => {
    // init your provider if necessary
    return {
      upload: async (file) => {
        return new Promise((resolve, reject) => {
          const ext = file.ext;
          // const path = file.path;
          var options = {
            method: "post",
            url: config.baseUrl,
            headers: {
              "Content-Type": file.mime,
            },
            data: new Buffer.from(file.buffer),
          };
          axios(options)
            .then(function (response) {
              const url = config.baseUrl + "/" + response.data.TFS_FILE_NAME + ext;
              file.url = url;
              resolve();
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      },
      delete(file) {
        return new Promise((resolve, reject) => {
          // not support delete file on tfs bucket
          resolve();
        });
      },
    };
  },
};
