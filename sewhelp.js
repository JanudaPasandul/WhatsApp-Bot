/* Codded by @Januda Pasandul
Neo Pilot-Bot
*/

function successfullMessage(msg) {
    return "🇱🇰 *NeoPilot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🥴 *NeoPilot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "😁 *NeoPilot*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
