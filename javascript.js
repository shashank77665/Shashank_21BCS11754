chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install' || details.reason === 'update') {
        // The extension has been installed or updated
        // You can perform any necessary actions here
    }
});
