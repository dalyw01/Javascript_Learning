var hash = 
{
    'eggs': 1,
    'peanuts' : 2,
    'shellfish' : 4,
    'strawberries' : 8,
    'tomatoes' : 16,
    'chocolate' : 32,
    'pollen' : 64,
    'cats': 128,
};

function checkScore( new_array )
{
    var score = 0;
    for( let x=0; x<=new_array.length-1; x++)
    {
        console.log(new_array[x]);
        for( const [k,v] of Object.entries(hash))
        {
            if(new_array[x] == k )
            {
                console.log(v);
                score = score + v;
            }
        }
    }
    return score;
}

var array = ['cats' , 'cats' , 'cats' , 'cats'];
checkScore(['eggs','tomatoes']);
checkScore(['shellfish','cats']);
checkScore(array);s

// for( var key in hash)
// {
//     console.log(key);
//     console.log(hash[key]);
// }
