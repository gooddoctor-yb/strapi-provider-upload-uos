module.exports = {
  init: (providerOptions) => {
    console.log(
      "🚀 ~ file: index.js ~ line 3 ~ init ~ providerOptions",
      providerOptions
    );
    // init your provider if necessary

    return {
      upload: async (file) => {
        console.log("🚀 ~ file: index.js ~ line 2222123121 ~ upload ~ file", file);
        console.log(
          "🚀 ~ file: index.js ~ line 20 ~ upload: ~ providerOptions",
          providerOptions
        );

        // if (
        //   config.thumbnails &&
        //   IMAGE_EXTENSIONS.includes(file.ext.toLowerCase()) &&
        //   new RegExp(STRAPI_IMAGE_PREFIXES.join("|")).test(file.hash) === false
        // ) {
        //   const thumbs = await generateImages(file, config);

        //   thumbs.forEach((images) => {
        //     images.forEach((image) => {
        //       S3Upload(S3)(
        //         image,
        //         `${image.name}_${file.hash}${image.ext}`,
        //         config
        //       );
        //     });
        //   });
        // }

        // return S3Upload(S3)(file, `${file.hash}${file.ext}`, config);

        // upload the file in the provider
      },
      delete(file) {
        console.log("🚀 ~ file: index.js ~ line 15 ~ delete ~ file", file);
        // delete the file in the provider
      },
    };
  },
};
