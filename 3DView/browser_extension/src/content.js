
const body = document.getElementsByTagName('body')[0];

function findStylesOfElement(element) {

    if (element.nodeType === 1) {
        let styles = window.getComputedStyle(element, null);
        let rect = element.getBoundingClientRect();

        let ews = { width: 0, height: 0, x: 0, y: 0, children: [] };
        ews.width = styles['width'];
        ews.height = styles['height'];      
        ews.x = rect['left'];
        ews.y = rect['top'];

        if (element.childNodes && element.childNodes.length > 0) {
            element.childNodes.forEach(childNode => {
                let childWithStyles = findStylesOfElement(childNode);
                if (childWithStyles) {
                    ews.children.push(childWithStyles);
                }
            });
        }
        return ews;
    }
    return null;
}

bodyWithStyles = findStylesOfElement(body);
chrome.runtime.sendMessage({ type: 'dom-styles', content: bodyWithStyles });
