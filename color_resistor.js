// https://exercism.io/my/tracks/javascript



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













