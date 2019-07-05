/*chrome.browserAction.onClicked.addListener(buttonClicked);
function callme(msg)
{
	alert(msg);
    console.log(tabison);
    //chrome.tabs.sendMessage(tab.id, msg);
}

function buttonClicked(tab){
    console.log('called');
	let msg = {
		txt: "hello"
	}
    tabison = tab;
	//chrome.tabs.sendMessage(tab.id, msg);

}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        console.log(request.msg);
        if(request.msg)
        {
        	callme(request.msg);
        }
    }
);
*/