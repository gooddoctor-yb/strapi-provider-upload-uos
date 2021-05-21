const axios = require("axios");
const qs = require("qs");
const fs = require("fs");
const path = require("path");

const url = "http://srv.test.gooddoctor.co.id/uos";

module.exports = {
  init: (providerOptions) => {
    console.log("🚀 ~ file: index.js ~ line 3 ~ init ~ providerOptions", providerOptions);
    // init your provider if necessary

    return {
      upload: async (file) => {
        console.log("🚀 ~ file: index.js ~ line 14 ~ upload: ~ file", file);

        // const filepath = path.resolve(__dirname + "/1.png");
        // console.log(filepath);
        // fs.readFile(filepath, function (err, data) {
        //   if (err) throw err;
        const buf = Buffer.from(file);

        // Encode to base64
        // var encodedImage = new Buffer.from(data, "binary").toString("base64");

        // Decode from base64
        // var decodedImage = new Buffer.from(encodedImage, "base64").toString("binary");

        const queryParams = qs.stringify({
          p: "cms",
          s: "0.33737177",
          h: "b85b3a15ab21807d60aef04cd226cddaa53fbc57",
          m: "u",
          q: "12398ada3c16b3c7",
        });
        var options = {
          method: "post",
          url: url + "?" + queryParams,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: buf,
        };

        return axios(options)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
        // });

        // let buffer = Buffer.from(file);

        // var formData = new FormData();
        // var imagefile = document.querySelector("#file");
        // formData.append("image", file);
      },
      delete(file) {
        console.log("🚀 ~ file: index.js ~ line 15 ~ delete ~ file", file);
        // delete the file in the provider
      },
    };
  },
};
