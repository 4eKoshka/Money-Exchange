// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var obj ={
		
	};
	if (currency <= 0){
		
		return obj;
	}
	if(currency > 10000){
		obj.error= "You are rich, my friend! We don't have so much coins for exchange";
		return obj;
	}
	
			
	if (currency >= 50) {
			obj.H= Math.floor(currency/50);
			currency = currency % 50;
		}	
	if (currency >= 25 && currency<50) {
			obj.Q= Math.floor(currency/25);
			currency = currency%25;
		}	
	if (currency>= 10 && currency<25){
			obj.D= Math.floor(currency/10);
			currency = currency%10;
		}
	if (currency>= 5 && currency<10){
			obj.N= Math.floor(currency/5);
			currency = currency % 5;
		}
	if (currency <5 && currency >0) {
			obj.P= currency;
		}
	
		
	return obj;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}