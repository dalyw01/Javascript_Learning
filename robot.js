// The first time you boot them up, 
// a random name is generated in the format of two uppercase letters followed by three digits,
//  such as RX837 or BC811.

 function makeid() {
    var result           = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '1234567890';
    var charactersLength = 5;
    
    for ( var i = 0; i < 2; i++ ) 
    {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    for ( var i = 0; i < 3; i++ ) 
    {
       result += numbers.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
 }
 
 console.log(makeid());
