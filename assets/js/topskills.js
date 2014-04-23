/*!
 * Toptal Top"skill"s List
 * for toptal screening test
 * 
 */

 $(document).ready(function(){


getData();


function getData() {
	var letter = new Array(".","#","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
	var data = new Array(".NET Programmers","3DS MAX Engineers","Administrtive","Advertising Consultants","AJAX Programmers","Amazon Web Services Engineers","Android Programmers","Animators","Article Writers","ASP Programmers","ASP.NET Programmers","Blog Writers","Business Writers","C Programmers","Cocoa Programmers","Content Writers","Copyright Attorneys","Creative Writers","CSS Programmers","Customer Service Representatives","Data Entry Experts","DHTML Programmers","French Translators","Google App Engineers","Graphic Designers","HTML Programmers","HTML5 Programmers","Illustrator Designers","InDesign Designers","iPhone Programmers","Java Programmers","JavaScript Programmers","Joomla Programmers","LAMP Programmers","Linux Programmers","Logo Designers","Mac OS Programmers","Magento Programmers","Microsoft Excel Experts","Microsoft Sharepoint Administrators","Mobile Programmers","MySQL Programmers","Newsletter Writers","Office Administrators","Online Writers","Oracle Programmers","osCommerce Programmers","Palm Programmers","PayPal Programmers","Photoshop Designers","PHP Programmers","Ruby on Rails Programmers","Salesforce.com Programmers","SAP Programmers","SEM Consultants","SEO Consultants","Software Testing Programmers","Spanish Translators","SQL Programmers","Transcriptionists","Dot Net Nuke Programmers","Drupal Programmers","Flash Developers","Foursquare Programmers");
	
	makeList(letter,data);
	
}

function makeList(letter, data) {

//alert(data[0]);
    
	for ( var i=0; i < letter.length; i++ ) {
		
		//eval("var section"+i+" = new Array();");
		//var sections[i] = new Array();
		if (i==0) {
			var tstpat=new RegExp("\\.");
			var srcpat=new RegExp("\\.");
			var cssName = "sym";
		} else if (i==1) {
			var tstpat=new RegExp("[0-9]");
			var srcpat=new RegExp("[0-9]");
			var cssName = "num";
		} else {
			var tstpat=letter[i];
			eval("var srcpat=/"+letter[i]+"/i;");
			var cssName = letter[i];
		}
		
		var newSection=true;

		for ( var k=0; k < data.length; k++) {
			var skillText = data[k];
			if(data[k].search(srcpat)==0) {
				//eval("section"+i+".push(data[k]);");
				if (data[k].length > 25 ) {
						skillText = data[k].substring(0,25)+"...";
					} else {

					}

				if( newSection ) {

					

					/*$('<p/>', {
					    class: cssName,
					    text: data[k]
					}).appendTo('#topskills');*/
					console.log(i+", "+k);
					 
					

					$('<p class="letter">'+letter[i]+'</p><p class="skill">'+skillText+'</p><br>').appendTo('#topskills');
				} else {
					$('<p class="letter">&nbsp;</p><p class="skill">'+skillText+'</p><br>').appendTo('#topskills');
				}

				newSection=false;
			
			}

		}

	}

	//alert(section3);
}


});
