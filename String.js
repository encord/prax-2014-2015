/**
 *Funkcia obráti string.
 *
 *Funkcia obráti string , takže čo bolo na 1 pozícii je na poslednej.
 *@param{string} string tento parameter sa má obrátiť
 *@return{string}
 */
function reverse(string)
{
	var s = '';

	for(var i = string.length -1; i >= 0; i--)
	{
		s += string[i];
	}
	return s ;
}

var string = 'ABCDEF';
var rever = reverse(string);
process.stdout.write('reverse(): ' + string + ' -> ' + rever + '\n');

/**
 *Funkcia spojí dva stringy dokopy.
 *
 *Funkcia spojí dva stringy spôsobom že cik-cak .
 *@param{string} s1 prvý string
 *@param{string} s2 druhý string
 *@return{string}
 */ 
function mix(s1,s2)
{
	var mi = '';
	var par = 0 ;
	var nepar = 0;
	var pocet = s1.length + s2.length;
	for(var i = 0; i < pocet ; i++)
	{
		if(i%2 === 0)
		{
			mi+=s1[par];
			par++;		
		}
		else
		{
			mi+=s2[nepar];
			nepar++;
		}
	}
	return mi;
}

var s1 = 'Hlowrd';
var s2 = 'el ol';
var mixx = mix(s1,s2);
process.stdout.write('mix(): ' + s1+ ' ' + s2 + ' -> ' + mixx + '\n');
