const axios = require("axios");

const tfsURL = "https://static.test.gooddoctor.co.id/v1/tfs";

module.exports = {
  init: (providerOptions) => {
    // init your provider if necessary

    return {
      upload: async (file) => {
        ext = file.ext;
        var options = {
          method: "post",
          url: tfsURL,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: file,
        };
        return axios(options)
          .then(function (response) {
            const url = tfsURL + "/" + response.data.TFS_FILE_NAME + file.ext;
            console.log("🚀 ~ file: index.js ~ line 44 ~ url", url);
            file.url = url;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      delete(file) {
        console.log("🚀 ~ file: index.js ~ line 15 ~ delete ~ file", file);
      },
    };
  },
};
