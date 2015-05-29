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
process.stdout.write('mix(): ' + s1 + ' ' + s2 + ' -> ' + mixx + '\n');

/**
 *Funkcia rot13 ma zaúlohu zakryptovať slovo pomocou algoritmu rot13.
 *
 *@param{String} slovo slovo ktoré chceme zakryptovať
 *@retun{String}
 */
function rot13(slovo)
{
	var m1 = 'ABCDEFGHIJKLM';
	var m2 = 'NOPQRSTUVWXYZ';
	var pismeno;
	var crypt = '';

	for(var i = 0; i < slovo.length; i++)
	{
		pismeno = _zistiPoziciu(slovo[i],m1,m2);

		if(pismeno[0] == 1)
		{
			crypt += m2[(pismeno[1])];
		}
		else if(pismeno[0] == 2)
		{
		 	crypt += m1[(pismeno[1])];
		}
		else if(pismeno.length == 0)
		{
		 	crypt += slovo[i];
		}

	}
	return crypt;	
}

/**
 *Funkcia _zistiPoziciu ma zaúlohu zistiť na ktorej pozicii sa písmeno nachádza.
 *
 *Funkcia _zistiPoziciu ma zaúlohu zistiť na ktorej pozicii sa písmeno nachádza a v ktorej mape . 
 *@param{String} písmeno pismeno ktorého chceme zistiť pozíciu
 *@param{String} m1 mapa1
 *@param{String} m2 mapa2
 *@retun{Array<Number>}
 */
function _zistiPoziciu(pismeno,m1,m2)
{
	var pozicia = [];
	for(var i = 0;i < m1.length ; i++)
	{
		if(pismeno == m1[i])
		{
			pozicia.push(1,i);	
		}
		else if(pismeno == m2[i])
		{
			pozicia.push(2,i);
		}			
	}
	return pozicia;
}
var slovo = 'HELLO WORLD!'
var cr = rot13(slovo);
process.stdout.write('rot13(): ' + slovo + ' -> '+ cr + '\n');
