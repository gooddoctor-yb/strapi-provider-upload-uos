const md5 = require("md5");

module.exports = {
  decrypt: function (message, key) {
    const digestOfPassword = md5(key.getBytes()); //md5
    const keyBytes = JSON.parse(JSON.stringify(digestOfPassword));
    var j = 0;
    for (var var6 = 16; j < 8; keyBytes[var6++] = keyBytes[j++]) {}

    const secretKey = new SecretKeySpec(keyBytes);
    const iv = new IvParameterSpec(new Array(8));
    const decipher = Cipher.getInstance("DESede/CBC/PKCSSPadding");
    decipher.init(2, secretKey, iv);
    const plainText = decipher.doFinal(message);
    return plainText;
  },
};

String.prototype.getBytes = function () {
  return this.split("").map((x) => x.charCodeAt(0));
};
