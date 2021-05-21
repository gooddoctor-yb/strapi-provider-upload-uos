const axios = require("axios");
const qs = require("qs");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto-js");
const AES = require("crypto-js/aes");

const CodecUtil = require("./codecUtil.js");

const url = "http://srv.test.gooddoctor.co.id/uos";

module.exports = {
  init: (providerOptions) => {
    console.log("🚀 ~ file: index.js ~ line 3 ~ init ~ providerOptions", providerOptions);
    // init your provider if necessary

    return {
      upload: async (file) => {
        // const buf = Buffer.from(file.buffer);

        const config = {
          p: "cms",
          s: "0.33737177",
          h: "b85b3a15ab21807d60aef04cd226cddaa53fbc57",
          m: "u",
          q: "12398ada3c16b3c7",
        };

        const queryParams = qs.stringify(config);
        var options = {
          method: "post",
          url: url + "?" + queryParams,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: file,
        };

        return axios(options)
          .then(function (response) {
            file.url = "http://srv.test.gooddoctor.co.id/uos?cid=" + response.data.cid;

            const encrypt = qs.parse(response.data.content);

            const key = "26b294d83c0157a1704243b83bd473ac";

            const cipher = encrypt.d;
            const salt = encrypt.s;
            const hmac = encrypt.h;

            const map = CodecUtil.decode(cipher, key, salt, hmac);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      delete(file) {
        console.log("🚀 ~ file: index.js ~ line 15 ~ delete ~ file", file);
        // delete the file in the provider
      },
    };
  },
};
