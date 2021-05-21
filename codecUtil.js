const TripleDESUtil = require("./TripleDESUtil.js");

module.exports = {
  decode: function (cipher, key, salt, hmac) {
    const equal = HMacUtil.assertEqualSha1(cipher, key, salt, hmac);
    if (equal) {
      const byteChiper = HexString.toBytes(cipher);
      const qs = null;
      try {
        qs = TripleDESUtil.decrypt(byteCipher, key);
      } catch (error) {}

      if (qs != null) {
        return fromString(qs);
      }
    }
  },
};
