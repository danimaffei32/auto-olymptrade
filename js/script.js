document.getElementById("formEnv").addEventListener("submit", a=>{
	a.preventDefault();
	hora = $('#hora').val();
	par = $('#par').val();
	status = $('#status').val();
	if(hora && par && status)
	{
		document.getElementById('bodyTable').innerHTML += `<tr id="item-${stop}">
		      <th scope="row">${par}</th>
		      <td>${hora}</td>
		      <td>${status}</td>
		    </tr>`;
	}
	msg = {hora:hora,par:par,status:status};
	chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    	var activeTab = tabs[0];
    	chrome.tabs.sendMessage(activeTab.id, msg);
   });
});