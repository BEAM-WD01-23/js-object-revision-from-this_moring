//revision on Object
//what is object:
        //-Object is a data type
        //-Primitive (immutable) vs Object (mutable)
        //-Object can take all data types {4, true, 'string', ['one', 'two'], ...}
        //Object is a (key = value pair)

//3, 6, .5, -54, 
//'10' +10
//true, false
let myArray = ['one', 7, true];
let myObject={
    name: 'Marko',//property
    age: 30
}
//ES5 function
//ES6 class
//i
class books {
    constructor(author, pageSize, genre, price, year){//parameter
        this.author = author;
        this.pageSize = pageSize;
        this.genre = genre;
        this.price = price;
        this.year = year
    }
    //iii creating a method ...
    bookDescription(){
               return `This book is written by ${this.author} it costs ${this.price} it was published in ${this.year}`;
    }
    //vi more methode ...
    calculateSomething(val1, val2){//parameters
            return val1 * val2
    }
}
//ii instantiate
let bookOne = new books('Piter', 100, 'commics', '5€', 2010);
//console.log(bookOne);//books {author: 'Piter',pageSize: 100,genre: 'commics',price: '5€',year: 2010}
//iv call/get method
//console.log(bookOne.bookDescription());//This book is written by Piter it costs 5€ it was published in 2010
//v
let bookTwo = new books('Marko', 200, 'crime', '8€', 2017);
let editBookGenre = bookTwo.genre = 'romantic';//to change values
//console.log(editBookGenre);
console.log(bookTwo)
let bookThree = new books('Katarina', 150, 'romance', '8€', 2021);
//console.log(bookThree);
//console.log(bookThree.calculateSomething(3, 10));//30
//
//today's class
//New topics
//extends/sub-class..
//used to inherit all that is inside books object and add something we want to add on the new object as below ...
//vi
//ex: to add bookName only inside bookFour

class subBook extends books{
    constructor(author, pageSize, genre, price, year, bookName){
        super(author, pageSize, genre, price, year)
            this.bookName = bookName
    }
}
//vii instantiation
let bookFour = new subBook('Martha', 300, 'fiction', '10€', 2015, 'loving jungle');
// console.log(bookOne);
// console.log(bookTwo);
// console.log(bookThree);
console.log(bookFour);//all info plus bookName
