	let who = ['the dog','my granma','his turtle','my bird'];
	let what = ['eat','pissed','crushed','broked'];
	let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

	 whoa= Math.floor(Math.random(who) * who[0].length);
	 whata=Math.floor(Math.random(what) * what[0].length);
	 whena=Math.floor(Math.random(when) * when[0].length);

	let excuse = who[whoa] + " " + what[whata] + " " + when[whena];

	
document.querySelector ('#excuse').innerHTML = (excuse);