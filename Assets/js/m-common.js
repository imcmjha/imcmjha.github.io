M.AutoInit();

let urls = {
  "home_httpsEverywhere": "https://www.eff.org/https-everywhere",
  "chrome_httpsEverywhere": "https://chrome.google.com/webstore/detail/gcbommkclmclpchllfjekcdonpmejbdp",
  "opera_httpsEveryWhere": "https://addons.opera.com/extensions/details/https-everywhere/",
  "ff_httpsEveryWhere": "https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/",
  "home_decentraleyes": "https://decentraleyes.org/",
  "chrome_decentraleyes": "https://chrome.google.com/webstore/detail/decentraleyes/ldpochfccmkkmhdbclfhpagapcfdljkj",
  "opera_decentraleyes": "https://addons.opera.com/extensions/details/decentraleyes/",
  "ff_decentraleyes": "https://addons.mozilla.org/firefox/addon/decentraleyes/",
  "home_uBlock": "https://github.com/gorhill/uBlock",
  "chrome_uBlock": "https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm",
  "opera_uBlock": "https://addons.opera.com/extensions/details/ublock/",
  "ff_uBlock": "https://addons.mozilla.org/addon/ublock-origin/",
  "home_adblocker": "https://adblockplus.org/en/",
  "chrome_adblock": "https://chrome.google.com/webstore/detail/cfhdojbkjhnklbpkdaibdccddilifddb",
  "opera_adblock": "https://addons.opera.com/en/extensions/details/adblock-plus/",
  "ff_adblock": "https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/",
}

$(document).ready(function(){
    $("#chrome .adblock-plus").attr("href", urls["chrome_adblock"]);
    $("#chrome .u-block").attr("href", urls["chrome_uBlock"]);
    $("#chrome .decentraleyes").attr("href", urls["chrome_decentraleyes"]);
    $("#chrome .https-everywhere").attr("href", urls["chrome_httpsEverywhere"]);
    $("#opera .adblock-plus").attr("href", urls["opera_adblock"]);
    $("#opera .u-block").attr("href", urls["opera_uBlock"]);
    $("#opera .decentraleyes").attr("href", urls["opera_decentraleyes"]);
    $("#opera .https-everywhere").attr("href", urls["opera_httpsEveryWhere"]);
    $("#firefox .adblock-plus").attr("href", urls["ff_adblock"]);
    $("#firefox .u-block").attr("href", urls["ff_uBlock"]);
    $("#firefox .decentraleyes").attr("href", urls["ff_decentraleyes"]);
    $("#firefox .https-everywhere").attr("href", urls["ff_httpsEveryWhere"]);
});
