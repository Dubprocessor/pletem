"use strict";
var tabsClass = "tabs";
var tabClass = "tab";
var tabButtonClass = "tab-button";
var activeClass = "active";
/* Activates the chosen tab and deactivates the rest */
function activateTab(chosenTabElement) {
    if (chosenTabElement.parentNode) {
        var tabList = chosenTabElement.parentNode.querySelectorAll("." + tabClass);
        for (var i = 0; i < tabList.length; i++) {
            var tabElement = tabList[i];
            if (tabElement.isEqualNode(chosenTabElement)) {
                tabElement.classList.add(activeClass);
            }
            else {
                tabElement.classList.remove(activeClass);
            }
        }
    }
}
/* Initialize each tabbed container */
var tabbedContainers = document.body.querySelectorAll("." + tabsClass);
for (var i = 0; i < tabbedContainers.length; i++) {
    var tabbedContainer = tabbedContainers[i];
    /* List of tabs for this tabbed container */
    var tabList = tabbedContainer.querySelectorAll("." + tabClass);
    /* Make the first tab active when the page loads */
    activateTab(tabList[0]);
    /* Activate a tab when you click its button */
    for (var i_1 = 0; i_1 < tabList.length; i_1++) {
        var tabElement = tabList[i_1];
        var tabButton = tabElement.querySelector("." + tabButtonClass);
        if (tabButton) {
            tabButton.addEventListener("click", function (event) {
                event.preventDefault();
                var eTarget = event.target;
                activateTab(eTarget.parentNode);
            });
        }
    }
}
