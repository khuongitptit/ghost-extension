// When the button is clicked, inject setPageBackgroundColor into current page
trigger.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    const overlay = document.createElement("div")
    overlay.style="width:100%;height:0;padding-bottom:100%;position:absolute;top:0;bottom:0;left:0;right:0;z-index:9999"
overlay.innerHTML =`<iframe src="https://giphy.com/embed/13aBrTKXzLxw9a" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>` 

    document.body.appendChild(overlay)
  });
}