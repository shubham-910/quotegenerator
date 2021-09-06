function generate() 
{
	var quotes=
	{
		"-Albert Einstain" :
		'"Freedom, in any case, is only possible by constantly struggling for it."',
		"–Robert Frost" :
		'"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference. "',
		"–Amelia Earhart" :
		'"The most difficult thing is the decision to act, the rest is merely tenacity. "',
		"–Babe Ruth":
		'"Every strike brings me closer to the next home run. "',
		"–W. Clement Stone" :
		'" Definiteness of purpose is the starting point of all achievement."' ,
		"–Kevin Kruse" :
  		'"Life isnt about getting and having, its about giving and being. "',
		"–John Lennon" :
		'" Life is what happens to you while you’re busy making other plans. "',
		"–Earl Nightingale" :
		'"We become what we think about."' 

	}

	var auth=Object.keys(quotes);
	var auth1=auth[Math.floor(Math.random()*auth.length)];
	var q=quotes[auth1];

	document.getElementById("quote").innerHTML=q;
	document.getElementById("author").innerHTML=auth1;
}