chrome.runtime.onMessage.addListener(gotMessage);
arrayIntervalos = [];
contador = 0;
function gotMessage(message, sender, sendResponse){
	console.log(message);
	if(message)
	{
		if(message.hora && message.par && message.status && message.par != "Moeda" && message.status != "Status")
		{
			var oneClick = true;
			arrayIntervalos.push(
				setInterval( go => {
					var data = new Date();
					var hora = data.getHours();
					const stop = contador;
					if(hora < 10)
					{
						hora = `0${hora}`;
					}
					var minuto = data.getMinutes();
					if(minuto < 10)
					{
						minuto = `0${minuto}`;
					}
					compHora = `${hora}:${minuto}`;
					console.log(message.hora,compHora);
					if(compHora == message.hora && oneClick)
					{
						oneClick = false;
						clearInterval(arrayIntervalos[stop]);
						if(message.status == "Comprar")
						{
							document.getElementById(`pm-v1-${message.par}`).click();
							(document.querySelectorAll('#opcion > div.platform-block.platform-block_top > div > div.trade-frame.trade-frame_count-1.trade-frame_no-multigraph > div > div.trade-frame__form > div > div.deal-form > div.state-block.deal-form__item.deal-form__risk-free > div > div > div.deal-buttons__item.deal-buttons__item_up > button')[0]).click();
						}
						else
						{
							document.getElementById(`pm-v1-${message.par}`).click();
							(document.querySelectorAll('#opcion > div.platform-block.platform-block_top > div > div.trade-frame.trade-frame_count-1.trade-frame_no-multigraph > div > div.trade-frame__form > div > div.deal-form > div.state-block.deal-form__item.deal-form__risk-free > div > div > div.deal-buttons__item.deal-buttons__item_down > button')[0]).click();
						}
						
					}
			},500))
			contador++;
		}
	}
}