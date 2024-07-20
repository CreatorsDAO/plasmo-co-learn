import type { PlasmoMessaging } from "@plasmohq/messaging"

export type RequestBody = {
    action: string
}


const handler: PlasmoMessaging.MessageHandler = async (req) => {
    // 查询当前的活动tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // 实例化活动tab
        const activeTab = tabs[0];
        // 检查URL是否匹配
        if (activeTab && activeTab.url && activeTab.url.includes('https://app.galxe.com/quest/')) {
            if (req.body.action && req.body.action === "start") {
                // 执行脚本
                chrome.scripting.executeScript({
                    target: { tabId: activeTab.id },
                    func: executeCode
                });
            }
        }
    });
}

export default handler

function executeCode() {
    console.log("开始执行...");

    const elementsToClick = document.querySelectorAll(
        'div[data-state="closed"] .cursor-pointer'
    ),
        refreshButtonClass =
            'button[data-state="closed"] .ml-4.flex.gap-4.items-center',
        waitForClass = 'svg[data-state="closed"] .ml-4.flex.gap-4.items-center',
        successIconClass = '.text-size-14.font-bold',
        claimButtonSelector = 'button.inline-flex.bg-primary:not([disabled])'

    function clickElement(element) {
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        });
        element.dispatchEvent(event);
    }


    function checkClaimButton() {
        const claimButton = document.querySelector(claimButtonSelector);
        if (claimButton && claimButton.textContent.trim() !== 'Explore Now') {
            clickElement(claimButton);
            return true;
        }
        return false;
    }

    function checkConditionsAndRetry() {
        const waitForElements = document.querySelectorAll(waitForClass),
            successIcons = document.querySelectorAll(successIconClass);
        if (waitForElements.length > 0 || successIcons.length !== elementsToClick.length) {
            setTimeout(processElements, 60000);
        } else {
            checkClaimButton();
        }
    }

    function processElements() {
        if (!checkClaimButton()) {
            elementsToClick.forEach((element) => {
                if (element.textContent.trim() !== 'Explore Now') {
                    clickElement(element);
                }
            });
            setTimeout(() => {
                const refreshButtons = document.querySelectorAll(refreshButtonClass);
                refreshButtons.forEach(clickElement);
                setTimeout(checkConditionsAndRetry, 2000);
            }, 2000);
        }
    }

    processElements();
}
