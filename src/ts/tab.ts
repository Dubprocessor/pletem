const tabsClass = "tabs";
const tabClass = "tab";
const tabButtonClass = "tab-button";
const activeClass = "active";

/* Activates the chosen tab and deactivates the rest */
function activateTab(chosenTabElement: Node) {
  if (chosenTabElement.parentNode) {
    const tabList = chosenTabElement.parentNode.querySelectorAll(`.${tabClass}`);
    for (let i = 0; i < tabList.length; i++) {
      const tabElement = tabList[i];
      if (tabElement.isEqualNode(chosenTabElement)) {
        tabElement.classList.add(activeClass);
      } else {
        tabElement.classList.remove(activeClass);
      }
    }
  }
}

/* Initialize each tabbed container */
const tabbedContainers = document.body.querySelectorAll(`.${tabsClass}`);
for (let i = 0; i < tabbedContainers.length; i++) {
  const tabbedContainer = tabbedContainers[i];

  /* List of tabs for this tabbed container */
  const tabList = tabbedContainer.querySelectorAll(`.${tabClass}`);

  /* Make the first tab active when the page loads */
  activateTab(tabList[0]);

  /* Activate a tab when you click its button */

  for (let i = 0; i < tabList.length; i++) {
    const tabElement = tabList[i];
    const tabButton = tabElement.querySelector(`.${tabButtonClass}`);
    if (tabButton) {
      tabButton.addEventListener("click", event => {
        event.preventDefault();
        interface Etarget extends EventTarget {
          parentNode: Node;
        }
        const eTarget = <Etarget>event.target;

        activateTab(eTarget.parentNode);
      });
    }
  }
}
