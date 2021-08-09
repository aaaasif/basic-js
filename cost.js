// function perfectFriend(friendName) {
//     // error masage
//     if ((typeof friendName.length != 5) && (typeof friendName != "object") ) {
//         return "please enter a name which length is 5 & which is object."
//     }
//     // main task
//     for(let i = 0; i <= friendName.length; i++) {
//         let element = friendName[i]
//         if ( element.length == 5) {
//             return element;
//         }
//     }
// }  

// let Friends = [ 1,"shibin", "abdullah", "tanvir", ]
// const bestFriend = perfectFriend(Friends)
// console.log(bestFriend)

//======================================================
// function perfectFriend(friendsName){
//     //check this is array or not!!
//     if (typeof friendsName != "object") {
//         return 'please input a arry name!!!';
//     }
//     else {
//         for (var i = 0; i < friendsName.length; i++) {
//             var element =friendsName[i];
//             if (element.length ==5) {
//                 return element;
//             }
//         }
//     }
//     return 'please enter a name which is 5 latter'; //when you forget to input 5 latter name in array
// }
// var Names = ["shibin", "abdullah", "sarif", "galib", "tanvir"];
// var bestFriend = perfectFriend(Names);
// console.log(bestFriend)

//=============================================================
function perfectFriend(friendsName) {
    // main task calculations:
    if (Array.isArray(friendsName)) {
        for (var i = 0; i < friendsName.length; i++) {
            var theName = friendsName[i];
    
            if (theName.length == 5) {
                return theName;
            }
        }
    } else {
        return "You have to insert an array of names!!!";
    } 
}

// // calling the function
var result = perfectFriend(["asif", "abdullah", "Modon", "galib", "authy", "shorif"]);
console.log(result);

