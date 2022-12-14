let string="The quick brown fox quickly jumps over the lazy dog.",
modification;
/*Символысиндексами0и1.*/
string[0]+string[1]


string.indexOf("quick")<:5

string.indexOf("Quick")<:-1

string.lastIndexOf("quick")<:21

modification=string.replace("quick","slow");
string
modification

let splited=string.split(" ");
splited

splitted.join("-")

let start=17,length=3;
string.substr(start,length)

string.toLowerCase()
string.toUpperCase()

let array=[1,2,3,4,5];
array.map(function(х){
    return x*2;
})