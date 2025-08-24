// Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1258360
// 
// browser.runtime.sendMessage("mes@dotproto", "example-cross-addon-message");

browser.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  // const {id, url} = sender;
  // console.log("onMessageExternal", { id, url });
  console.log("onMessageExternal", subObj(sender, "id", "url"));
});

