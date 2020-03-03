# Microsoft Edge DevTools 3D View

This is sample code of a very early prototype for the 3D View feature of Microsoft Edge Developer Tools.
This code helped as a proof of concept. 

You can learn more about the real feature with this [explainer](https://docs.google.com/document/d/16xsQbr1YjjuoxHJlCsAaIzK-s4Ogd6fEuhrSajdVivA/edit), or reading the [blog](https://blogs.windows.com/msedgedev/2020/01/23/debug-z-index-3d-view-edge-devtools/).


# Setup
### Get the code
1) Clone this repo
2) Get the latest version of Babylon.js from https://cdn.babylonjs.com/babylon.js. Copy that file and paste into `/browser_extension/src/babylon.js`

### Install the extension
1) Open Edge browser
2) Navigate to `edge://extensions`
3) Enable developer mode
4) Click on 'Load unpacked'
5) Select the folder `browser_extension`

This will load the extension in your browser, you should see an icon appear in the right side of the toolbar. Clicking on it won't display any UI since this is a devtools extension. 

### To use it
1) Navigate to any website you want to inspect.
2) Launch the DevTools by pressing `F12` or by right clicking the page and selecting "Inspect".
3) DevTools will launch with a new tab called "3D View (Prototype)"
4) Select the tab and reload the website.


