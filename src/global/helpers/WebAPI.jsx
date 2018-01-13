import axios from "axios";
import assert from "assert";
import { setupCache } from "axios-cache-adapter";
import { SharepointVars } from "__GLOBAL__/constants";

const cache = setupCache({
  maxAge: SharepointVars.cacheMaxAge * 60 * 1000
});
export const api = axios.create({
  adapter: cache.adapter
});
// todo: add global error handle, post, etc...

const WebAPI = (url, callback) => {
  assert.notEqual(
    SharepointVars.webAPI(),
    "",
    "missing hiddenfield webAPI value"
  );
  const urlToCall =
    url.indexOf("http://") > -1 || url.indexOf("https://") > -1
      ? url
      : SharepointVars.webAPI() + url;
  return api
    .get(urlToCall)
    .then(res => {
      if (res.data && res.data.length > 0) {
        if (callback) {
          callback(res.data);
        }
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export default WebAPI;
