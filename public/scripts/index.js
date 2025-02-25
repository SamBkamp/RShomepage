const cardPerRow = 3;

function normaliseCardData(cardData){ //to turn card list into multiple of 3
    //(3-(5%3))%3;
    if(cardData.length % cardPerRow != 0 || cardData.length == cardPerRow){
	var toAdd = (cardPerRow-(cardData.length%cardPerRow));
	for(var i = 0; i < toAdd; i++) cardData.push(cardData[i]);
    }

    return cardData;
}



$(document).ready(()=>{
    var cardData = [
	{"ctitle":"Acid Barrel Hammer",
	 "ctext":"HKD$21.20",
	 "btext":"Buy",
	 "mlink":"https://store.reefstudio.com.hk/wp-content/uploads/2024/03/hammer-300x300.jpg",
	 "blink":"https://store.reefstudio.com.hk/product/acid-barrel-hammer-1-head/"},
	{"ctitle":"Sunkist Zoa",
	 "ctext":"HKD$100",
	 "btext":"Buy",
	 "mlink":"https://store.reefstudio.com.hk/wp-content/uploads/2024/03/zoa.jpg",
	 "blink":"https://store.reefstudio.com.hk/product/zoanthid-sunkist/"},
	{"ctitle":"24k Torch",
	 "ctext":"HKD$100",
	 "btext":"Buy",
	 "mlink":"https://store.reefstudio.com.hk/wp-content/uploads/2024/03/24k-scaled.jpg",
	 "blink":"https://store.reefstudio.com.hk/product/24k-torch-coral-1-head/"},
	{"ctitle":"Poison Mushroom",
	 "ctext":"HKD$100",
	 "btext":"Buy",
	 "mlink":"https://store.reefstudio.com.hk/wp-content/uploads/2024/03/green_shroom.png",
	 "blink":"https://store.reefstudio.com.hk/product/green-mushroom-frag/"}
    
    ];

    cardData = normaliseCardData(cardData);

    //INIT
    var curRow = $("<div class=\"row justify-content-center\" style=\"width: 85% !important; margin: auto;\"></div>")
    var citem = $("<div class=\"carousel-item citem active\"></div>");
    curRow.appendTo(citem);

    //main logic
    for(var i = 0; i < cardData.length; i++){
	if(i % cardPerRow == 0 && i > 0){ //create new slide every 3 items	    
	    citem.prependTo(".carousel-inner");	    
	    citem = $("<div class=\"carousel-item citem\"></div>");
	    curRow = $("<div class=\"row justify-content-center\" style=\"width: 85% !important; margin: auto;\"></div>")
	    curRow.appendTo(citem);
	}
	
	//create slide card
	var column = $("<div class=\"col\"></div>");
	var card = $("<div class=\"card\" style=\"width: 90%; margin: auto;\"></div>");
	$('<img src="'+cardData[i].mlink+'" class="card-img-top card-img-sizing" alt="...">').appendTo(card);
	var cbody = $('<div class="card-body"></div>');
	$('<h5 class="card-title">'+cardData[i].ctitle+'</h5>').appendTo(cbody);
	$('<p class="card-text">'+cardData[i].ctext+'</p>').appendTo(cbody);
	$('<a href="'+cardData[i].blink+'" class="btn cl-btn">'+cardData[i].btext+'</a>').appendTo(cbody);

	cbody.appendTo(card);
	card.appendTo(column);
	column.appendTo(curRow);
		
    }
    citem.prependTo(".carousel-inner");	    
    
});


