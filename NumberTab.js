/**
 *Funkcia hlavna má za úlohu zavolat v sebe generuj pole a tabulka
 *
 *Funkcia hlavna v sebe zavolá dalšie dve funkcie . Prvú generuj pole čím vygeneruje pole a druhú tabulka čím vytvorí tabulku. 
 */
function hlavna() 
{
  var multipole = generujPole();
  var tabulka =tlacTabulku(multipole); 
}

/**
 *Funkcia ma za ulohu vygenerovat nahodne cislo
 *
 *Funkcia nahodne cisco pomocou dvoch parametrov vytvori nahodne cislo
 *@param{Number} min spodna hranica intervalu
 *@param{Number} max horna hranica intervalu
 *@return{Number} funkcia vracia nahodne cislo spomedz intervalu
 */
function nahodnecislo(min,max) 
{
	var cislo ;
	cislo = Math.floor(Math.random()*(max-min+1)+min);
	return cislo;
}
/**
 *Funkcia ma za ulohu vytvorit pole
 *
 *Funkcia ma pomocou nahodných čísel vytvoriť pole
 *@param{Number} nah nahodne cislo
 *@return{Array<Number>} 
 */
function vytvorpole(nah)  
{
	 var pole = [];

	 for (var i = 0; i < nah;i++)
	 {
		 var rozsah = nahodnecislo(1,70);
         pole.push(rozsah);	
	 }	 
	return pole;
}

/**
 *Funkcia ma za ulohu vygenerovať multidimenzionalne pole
 *
 *Funkcia vytvorí multidimenzionalne pole pre ktore vieme určiť veľkost
 *@return{Array<Array<Number>>}
 */
function generujPole()  
{ 
 	var cisco = nahodnecislo(3,10);
   	var multipole = [];
	var dlzka = nahodnecislo(3,10);

	for(var i = 0 ; i < dlzka ; i++)
		{
			 var vp = vytvorpole(cisco);
			 multipole.push(vp);
		}		
	return multipole;
}

/**
 *Funkcia ma za ulohu vypis tabuky
 *
 *Funkcia pomocou vytvorených fukcii vypísať tabulku na obrazovku
 *@param{Array<Array<Number>>} multipole mutidimenzionalne pole
 */
function tlacTabulku(multipole)  
{        
    var dlzkaPola = multipole.length;    	
	var stlpce = sirkaStlpcov(multipole);
	var riadok = suctyRiadkov(multipole); 
	for(var j = 0 ; j < dlzkaPola ; j++)
	{
		if(j == 0 )
		{
			tlacZnaky(stlpce);
			tlacHlavicku(stlpce);
			tlacZnaky(stlpce);
		}
		tlacRiadok(multipole[j],stlpce,(j+1),(riadok[j]));
		tlacZnaky(stlpce);

		if(j == dlzkaPola-1)
		{
			tlacZnaky(stlpce);
			tlacSucetStlpca(multipole,stlpce)
			tlacZnaky(stlpce);
		}
	}                      
}

/**
 *Funkcia ma za ulohu vypis jedneho riadka
 *
 *Funkcia pomocou vstupných parametrov vypíše jeden riadok
 *@param{<Array<Number>}  pole ktore obsahuje hodnoty ktore sa maju vypisat
 *@param{<Array<Number>} pole ktore obsahuje sirku riadkov
 *@param{Number} pozicia hodnout v tabulke
 *@param{Number} poziciaX pozicia celkoveho suctu riadka
 */
function tlacRiadok(pole,sirkaStlpcov,pozicia,poziciaX)
{
	var dlzkariadka = pole.length;
	var sirkaStlpca;
	var hodnotaNaPozici;
	var medzery;
	var medzeryOcislovanie;
	var medzeraX;
	
	for(var i = 0 ; i < dlzkariadka ; i++ )
	{
		hodnotaNaPozici = pole[i];
		sirkaStlpca = sirkaStlpcov[i+1];
		medzery = sirkaStlpca - (hodnotaNaPozici + '').length;

			if(i == 0)
			{
				process.stdout.write('| '); 
			 	process.stdout.write(pozicia + ' '); 
				medzeryOcislovanie = sirkaStlpcov[0] - (pozicia + '').length;

				for(var k = 0 ; k <medzeryOcislovanie ; k++)
				{
			 		process.stdout.write(' ');			
				}
			}
		process.stdout.write('| '); 
		process.stdout.write(hodnotaNaPozici + ' ');
		
		for(var j = 0 ; j <medzery ; j++)
		{
			process.stdout.write(' ');			
		}

		if(i == dlzkariadka-1)
		{			 
			process.stdout.write('|| '); 
			process.stdout.write(poziciaX + ' ');
			medzeraX = sirkaStlpcov[sirkaStlpcov.length-1]-(poziciaX + ' ').length;
			
			for(var k = 0 ; k <=medzeraX ; k++)
			{
				process.stdout.write(' ');			
			}
		}
	}		 
	process.stdout.write('|\n');
} 

/**
 *Funkcia ma za ulohu vypis jedneho riadka znakov
 *
 *Funkcia pomocou vstupneho parametra vypíše jeden riadok znakov
 *@param{<Array<Number>}  sirkaStlpcov pole ktore obsahuje hodnoty sirky kazdeho stlpca
 */     
function tlacZnaky(sirkaStlpcov)
{
	var pocetznakov = 0 ;
	var polohahviezdy = [];
	var pocitadlo = 0;
	for(var j = 0; j < sirkaStlpcov.length ; j++)
	{
		polohahviezdy.push(pocetznakov);
		pocetznakov = pocetznakov + sirkaStlpcov[j] + 2  ;	
	}

	for(var i = 0 ; i < pocetznakov ; i++)
	{  
		if(polohahviezdy[pocitadlo] == i)
		{
			process.stdout.write("+");
			pocitadlo++;
		}
		if(polohahviezdy[polohahviezdy.length-1] == i)
		{
			process.stdout.write("+");
		}
		process.stdout.write("-");
	}
	process.stdout.write('+\n');
} 

/**
 *Funkcia ma za ulohu vypocitat sirku stlpca
 *
 *Funkcia pomocou vstupneho parametra vypocita sirku kazdeho stlpca
 *@param{<Array<<Array<Number>>}  multipole pole ktore obsahuje hodnoty 
 *@return{<Array<Number>} 
 */
function sirkaStlpcov(multipole)
{
	var sirkaStlpca = [];
	var sucetSirky;
	var sirkaOcislovania; 
	var stlpce = suctyStlpcov(multipole);
	var sucet = celkovySucet(multipole);
	sirkaOcislovania = (multipole.length + '').length;
	sirkaStlpca.push(sirkaOcislovania);

	for(var i = 0 ; i < stlpce.length ; i++)
	{
		sucetSirky = 0 ;
		sucetSirky = (stlpce[i] + '').length;
		sirkaStlpca.push(sucetSirky);
	}		
	sirkaStlpca.push((sucet+'').length);
	return sirkaStlpca;
}

/**
 *Funkcia ma za ulohu tlacit hlavicku
 *
 *Funkcia pomocou vstupneho parametra vypise na obrazovku hlavicku 
 *@param{<Array<Number>}  sirkaStlpcov obsahuje vsetky sirky stlpcov
 */
function tlacHlavicku(sirkaStlpcov)
{
	var abc = [' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z'];
	var medz = sirkaStlpcov[sirkaStlpcov.length-1];

	for(var i = 0 ; i < sirkaStlpcov.length ; i++)
	{
		if(i<(sirkaStlpcov.length -1))
		 {	
			var pismenoNaPozici = abc[i];
			medzery = sirkaStlpcov[i] - (abc[i] + '').length;
			process.stdout.write('| '); 
			process.stdout.write(pismenoNaPozici + ' ');

			for(var j = 0 ; j <medzery ; j++)
			{
				process.stdout.write(' ');			
			}
	 	}
		else
		{
			var vysledky = abc[0];
		 	process.stdout.write('||'); 
			process.stdout.write(vysledky + ' ');
			
			for(var k = 0 ; k <medz ; k++)
			{
				process.stdout.write(' ');			
			}
		}
	}	 
	process.stdout.write('|\n');
}

/**
 *Funkcia ma za ulohu vypisat sucet stlpca
 *
 *Funkcia pomocou vstupnych parametrov vypise sucet kazdeho stlpca
 *@param{<Array<<Array<Number>>}  multipole pole ktore obsahuje hodnoty 
 *@param{<Array<Number>} sirkaStlpcov pole ktore obsahuje velkost sirkyStlpcov
 */
function tlacSucetStlpca(multipole,sirkaStlpcov)
{
	var stlpce = suctyStlpcov(multipole);
	stlpce.unshift(' ');
	var sucet = celkovySucet(multipole);
	for(var i = 0 ; i < stlpce.length ; i++)
	{
		var cisloNaPozici = stlpce[i];
		medzery = sirkaStlpcov[i] - (stlpce[i] + '').length;
		process.stdout.write('| '); 
		process.stdout.write(cisloNaPozici + ' ');

		for(var j = 0 ; j <medzery ; j++)

		{
			process.stdout.write(' ');			
		}
		if(i==(stlpce.length)-1)
		{
			process.stdout.write('|| '); 
			process.stdout.write(sucet + ' ');	
		}
	}	 
	process.stdout.write('|\n');
}

/**
 *Funkcia ma za ulohu vypocitat sucet stlpca
 *
 *Funkcia pomocou vstupnych parametrov vypocita sucet kazdeho stlpca
 *@param{<Array<<Array<Number>>}  multipole pole ktore obsahuje hodnoty 
 *@return{<Array<Number>} sv
 */
function suctyStlpcov(multipole)
{
	var sucetStlpcov = [];
	var sucetStlpca ;
	for(var i = 0 ; i < multipole[1].length; i++)
	{
		sucetStlpca = 0;
		for(var j = 0 ; j < multipole.length ; j++)
		{
			sucetStlpca= sucetStlpca + multipole[j][i];
		}
		sucetStlpcov.push(sucetStlpca);	
	}
	return sucetStlpcov;
}

/**
 *Funkcia ma za ulohu vypocitat sucet riadka
 *
 *Funkcia pomocou vstupnych parametrov vypodita sucet kazdeho riadka
 *@param{<Array<<Array<Number>>}  multipole pole ktore obsahuje hodnoty 
 *@return{<Array<Number>} 
 */
function suctyRiadkov(multipole)
{ 
	var sucetRiadkov = [];
	var sucetRiadka;

	for(var i = 0 ; i < multipole.length; i++)
	{
		sucetRiadka = 0;
		for(var j = 0 ; j < multipole[1].length ; j++)
		{
			sucetRiadka= sucetRiadka + multipole[i][j];
		}
		sucetRiadkov.push(sucetRiadka);	
	}
	return sucetRiadkov;
 }

/**
 *Funkcia ma za ulohu vypocitat celkovy sucet hodnot
 *
 *Funkcia pomocou vstupnych parametrov vypodita sucet vsetkych hodnot
 *@param{<Array<<Array<Number>>}  multipole pole ktore obsahuje hodnoty 
 *@return{<Array<Number>} 
 */
function celkovySucet(multipole)
{
	var sucet = 0;
	
	for(var i = 0 ; i < multipole.length ; i++ )
	{
		for(var j = 0 ; j <multipole[1].length ; j++)
		{
			sucet = sucet + multipole[i][j];
		}
	}
	return sucet;
} 

hlavna();
