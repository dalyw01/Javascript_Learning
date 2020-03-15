// The classical introductory exercise. Just say "Hello, World!".
// "Hello, World!" is the traditional first program for beginning programming in a new language or environment.

console.log("hello world");
console.log(" - - - - - - - - ")

a = 7
b = ['w' , a , 2 ];
console.log(a);
console.log(b);

for( x=0; x<=b.length; x++)
{
	console.log(b[x]);
}

console.log(" - - - - - - - - ")

x = 0
while(x<=10)
{
    console.log(x);
    x++;
}

console.log(" - - - - - - - - ")

names_array =  [ 'alex' ,'linda', 'bob', 'ross',  'chris', 'daly', 'brendan', 'wiliam', 'michael', 'brian' ];
b_names =[];

for(x=0; x<names_array.length; x++)
{
    if(names_array[x][0] == 'b')
    {
        b_names.push(names_array[x]);
    }
}

for(x=0; x<b_names.length; x++)
{
    console.log(b_names[x]);
}
