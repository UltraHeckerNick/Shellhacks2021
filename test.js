//let t = [];
var s = new Array();

function prompt()
{
    // Prompts user for website domain to block; proper format is example.com
    let site = window.prompt("What site do you want to block [example.com]?")
    // Prompts user for time to block domain; proper format is hhmm
    //let time = window.prompt("How long do you want this site to be blocked [hHmM]?")
    // User is prompted for rule to be stored for session or indefinitely; defaults to session
    //let opt = window.prompt("Would you like this rule to be saved past this session[Y/N]", "N")
    //if (opt === "Y") {url = localStorage.setItem(site);}
    //else {url = sessionStorage.setItem(site);}
    s.push([site]);
}

function update(s) {
    for (let i = 0; i < s.length; i++);{
        chrome.declarativeNetRequest.updateDynamicRules(
            {
                addRules: [{
                    "id": i,
                    "priority": 1,
                    "action": {"type": "block"},
                    "condition": {"urlFilter": domain, "resourceTypes": ["main_frame"]} }],
            },)
    }
}