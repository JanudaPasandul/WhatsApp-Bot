/* Codded by @Januda Pasandul

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Neo Pilot - Januda Pasandul


*/

function successfullMessage(msg) {
    return "🇱🇰 *Neo Pilot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🥴 *Neo Pilot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "❄ *Neo Pilot*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
