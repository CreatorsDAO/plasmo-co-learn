export {}

const rules: chrome.declarativeNetRequest.Rule = {
  id: 1,
  priority: 1,
  action: {
    type: chrome.declarativeNetRequest.RuleActionType.REDIRECT,
    redirect: {
      //url :''
      transform: {
        host: "localhost",
        scheme: "http",
        port: "8000"
      }
    }
  },
  condition: {
    urlFilter: "*://suiobject/*",
    resourceTypes: [chrome.declarativeNetRequest.ResourceType.MAIN_FRAME]
  }
}

chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [rules],
  removeRuleIds: [1]
})
