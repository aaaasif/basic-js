// problem 1
// seerToMon

function seerToMon(seer) {
    //check if the input is negative
    if ( seer < 0) {
        return "unit must be in positive number!";
    }
    else{
        var mon = seer / 40;      //1 seer = 40 mon
        return mon;
    }

}

var mySeer = 100;
var mons = seerToMon(mySeer);
console.log(mons);

//problem 2
//totalSales Function
function totalSales(shirt,pant,shoes){
    //check if inputs are negative
    if((shirt < 1) || (pant < 1) || (shoes < 1) ) {
        return "please input poitive value & enter only number!!";
    }
    //total sales
    else{
        var total = 0;
        var shirtPrice = 100 * shirt;
        var pantPrice = 200 * pant;
        var shoesPrice = 500 * shoes ;
        total = shirtPrice + pantPrice + shoesPrice;
        return total;

    }

}
var totalAmount = totalSales(5,4,3);
console.log(totalAmount);

//========================================//
// problem 3
//total deliveryCost
function deliveryCost(products) {
    const first100DeliveryCost = 100;
    const second100DeliveryCost = 80;
    const after200DeliveryCost = 50;
    //check if input are valueless
    if ( products < 1) {
        return "please don't input the valueless value.";
    }
    //100 product delivery cost
    else if (products <= 100) {
        const count = products * first100DeliveryCost;
        return count;
    }
    //200 product delivery cost
    else if (products <= 200) {
        const firstAmountOfCost = 100 * first100DeliveryCost;
        const restCost = products - 100;
        const secondAmountOfCost = restCost * second100DeliveryCost;
        const totalDeliveryCost = firstAmountOfCost + secondAmountOfCost;
        return totalDeliveryCost;
    }
    //200+ product delivery cost
    else {
        const firstAmountOfCost = 100 * first100DeliveryCost;
        const secondAmountOfCost = 100 * second100DeliveryCost;
        const restCost = products - 200;
        const after200AmountOfCost = restCost * after200DeliveryCost;
        const totalDeliveryCost = firstAmountOfCost + secondAmountOfCost + after200AmountOfCost;
        return totalDeliveryCost;
    }
}

const totalDeliveryCost = deliveryCost(500);
console.log(totalDeliveryCost);

// problem 4
//perfectFriend

function perfectFriend(friendsName) {
    // main task 
    if (Array.isArray(friendsName)) {
        for (var i = 0; i < friendsName.length; i++) {
            var theName = friendsName[i];
    
            if (theName.length == 5) {
                return theName;
            }
        }
    } else {
        return "You have to insert an array of names!!!";  // error text
    } 
}

// // calling the function
var bestFriend = perfectFriend(["asif", "abdullah", "Modon", "galib", "authy", "shorif"]);
console.log(bestFriend);