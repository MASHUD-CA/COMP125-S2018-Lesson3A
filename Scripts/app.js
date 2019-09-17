/* Custom JS goes here */
// This is a closure; IIFE = Immediately Invoked Function Expression
//Anonymous self executing function
(function () {
    "use strict"
    //function scope
    //let AboutButton;
    //Two ways to do functions (Named way + )
    // function HomeContent(){ } // HomeContent function. HomeContent -> Identifier
    // let HomeContent = function(){ }  // Anonymas function refer to name HomeContent

    //About Button Click event handler
    function AboutButtonClick() {
        console.log("About Button clicked");
    }
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
        AboutButton.addEventListener("click", AboutButtonClick);
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

        let mySentence = "This is About Page / About Page / About Page ";
        paragraph.textContent = mySentence;
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
    window.addEventListener("load", Start);

})();