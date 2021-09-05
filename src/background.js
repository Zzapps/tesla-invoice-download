chrome.browserAction.onClicked.addListener(function (tab) { 
    if (tab.url.indexOf("https://www.tesla.com/teslaaccount/charging") != -1) { // Inspect whether the place where user clicked matches with our list of URL
        chrome.tabs.executeScript(tab.id, {
            "file": "contentscript.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });
    } else {
        alert("You are not on the invoices page")
    }
});