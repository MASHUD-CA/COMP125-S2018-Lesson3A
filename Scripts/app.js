/* Custom JS goes here */
// This is a closure; IIFE = Immediately Invoked Function Expression
//Anonymous self executing function
let app = (function () {
    "use strict"
    //function scope
    //let AboutButton;



    //Two ways to do functions (Named way + )
    // function HomeContent(){ } // HomeContent function. HomeContent -> Identifier
    // let HomeContent = function(){ }  // Anonymas function refer to name HomeContent
    //Two types of EVENT (event handler + event listener)
    //About Button Click event handler
    function AboutButtonClick() {
        console.log("About Button clicked");
    }
    //another way of function calling (we will not do it though it faster)
    /*
    let AboutButtonClick = function(){
        console.log("About Button Clicker");
    }
    */
    function AboutButtonOver(event) {
        //AboutButton.style.opacity = 0.3 // If we declare AboutButton top.
        event.currentTarget.style.opacity = 0.3;
    }

    function AbooutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }
    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        //Some browser do not like innerText but others do. textContent is standard. User textContent
        //AboutButton.innerText = "About";
        AboutButton.textContent = "About"

        //About Button event listener (Call back function)
        // addEventListener = built in js function 2 part = event type (click) + event handler(AboutButtonClick) enent handler called call back function
        AboutButton.addEventListener("click", AboutButtonClick); //
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AbooutButtonOut);

    }
    function ReturnPI() {
        return Math.PI;
    }
    function Aboutcontent() {
        let myNumber = ReturnPI();
        console.log("My Funky Number: " + myNumber);

        let paragraph = document.getElementById("paragraph");

        //Some browser do not like innerText but others do. textContent is standard. User textContent
        //paragraph.innerText = "We will be changing the content of this paragraph one day";
        //paragraph.textContent = "We will be changing the content of this paragraph one day";

        let mySentence = "";
        paragraph.textContent = mySentence;
        
        /*// How to create array
        let myArray = []; // means create an empty array container / how to create empty array
        myArray[0] = "Hello World! ";
        myArray[1] = 5;
        myArray[2] = true;
        myArray.push("Here is another element: ")
        */
       /*
       let myArray = new Array(); // equevalent to let myArray = [];
       */

        let myArray = [
          
          /*  "My First String",
            "My Second String",
            "My Third String",
            "My Fourth String"
            */
           // OR Array of an objects
           {name: "Mashud_1", are: 25},
           {name: "Mashud_2", are: 35},
           {name: "Mashud_3", are: 45},
           {name: "Mashud_4", are: 55},
           {name: "Mashud_5", are: 65},
               
        ];
       // myArray.push(5);
       // myArray[20] = "okay this is weird"; // length turned to 6 to 20 that not possible in C# or C++
       myArray.push({name: "Mashud_6", are: 75});
       myArray.unshift({name: "Ahmed_1", are: 20}); // we will get Ahmed_1 as first line



        //Print more than one paragraph
        let content = document.getElementsByClassName("content"); // array of elements not string
        //  console.log(content); //html collection coz more than one element/content available/ display
        //  console.log(content[0]); //return elements but not string ( return array of element)
        //  console.log(content[0].textContent);// to get the string / array of string 
        //   console.log(content[1].textContent);
        console.log(myArray);
        console.log("myArray length: " + myArray.length);
    }

    function Start() {
        //local variable
        // var title = document.title;
        let title = document.title; // we need to use "use strict" above
        console.log("App Started!");
        console.log("--------------------------------");
        console.log("Title: " + title);

        switch (title) {
            case "COMP125 - Home":
                HomeContent();
                break;

            case "COMP125 - About":
                Aboutcontent();
                break;

            default:
                break;
        }
    }

    /* Learning different way of calling functions
    function outer(){
        let myOuterVariable = 30;
        function inner(){
            function deepInner(){
                let deepInnerVariable = true;
                function reallyDeepInside(){
                    function OKThisIsReallyDeep(){
                       // let myInnerVariable = 10;
                        let myOuterVariable = "Hello"; // save variable but different value
                    }
                }
            }
        }
    }
    */
    //Start(); // or below
    // window.onload = Start;
    window.addEventListener("load", Start); //asyncronous. fire their own time. I m returning my title before my listener trigger.

    //return 0;
    // return window;
    return {
        // Below all are properties
        //  title: title, // it is not working coz  
        title: document.title,
        myFavouriteNumber: 5
    }; // Braces in js is called an Object;

})();