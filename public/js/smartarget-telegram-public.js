function init_telegram (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_telegram(hash);
}

function insertJs_telegram (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_telegram`;
	document.head.appendChild(script);
}

init_telegram(smartarget_telegram_params.hash);
