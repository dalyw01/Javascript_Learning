// https://exercism.io/my/tracks/javascript


// Two-fer or 2-fer is short for two for one. One for you and one for me.
// Given a name, return a string with the message:
// One for X, one for me.
// Where X is the given name.
// However, if the name is missing, return the string:
// One for you, one for me.

function twoFer(x)
{
	if (x == "") 
	{
		console.log("One for you, one for me")
	}
	else
	{
		console.log(`One for ${x}, one for me`)
	}
}

twoFer("");
twoFer("ALEX");

console.log(" - - - - - - - - ")

// These colors are encoded as follows:

//     Black: 0
//     Brown: 1
//     Red: 2
//     Orange: 3
//     Yellow: 4
//     Green: 5
//     Blue: 6
//     Violet: 7
//     Grey: 8
//     White: 9

const object1 = 
{
  	"Black": 0,
  	Brown: 1,
    Red: 2,
    Orange: 3,
    Yellow: 4,
    Green: 5,
    Blue: 6,
    Violet: 7,
    Grey: 8,
	White: 9,
	test: "TEST"
};

for (let [key, value] of Object.entries(object1)) 
{
  console.log(`${key}: ${value}`);
}

function getValues(color_1,color_2,color_3)
{
	for (let [key, value] of Object.entries(object1)) 
	{
		if(key == color_1 || key == color_2 || key == color_3)
		{
	  		console.log(`${value}`);
	  	}
	}
}

getValues("Black","Brown","Grey");


// Techies love their TLA (Three Letter Acronyms)!

// Help generate some jargon by writing a program that converts a long name like Portable Network Graphics 
// to its acronym (PNG).

function acroCreator(a,b,c)
{
	console.log(a[0] + b[0] + c[0])
}

acroCreator("Hello" , "World" , "Derp")


console.log("-------------------------------------------------")

// Palindrome e.g civic

function checkPal( new_string )
{
	console.log(new_string.length)
	x = new_string.length;
	for( let i=0; i<new_string.length; i++ )
	{
		// console.log(i)
		console.log(`${i} and ${x}`);
		if(new_string[i] != new_string[i.length])
		{
			console.log(`${i} and ${x}` )
			x--;
		}
	}
}

checkPal("civic")
checkPal("DERP")









