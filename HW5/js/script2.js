 $(document).ready(function(){       
     
     // ***SECTION 1 OF 3 THE SPIN FUNCTIONS***
     
     /* The main spin function, calls 5 other functions, the first removes the previous classes,
     the next 3 get a class for all thing input boxes and the final one display winner or loser, this function also calls the winning picture function as well as the winning sound effect function
     */
      
     function spin() {
        removeClasses();
         getInputOneColor();
         getInputTwoColor();
         getInputThreeColor();
         displayText(); 
         changePic();
         winningSound();
     }
     
     // The remove class function removes the old class value
      function removeClasses() {
           $( "#inputOne" ).removeClass();
            $( "#inputTwo" ).removeClass();
            $( "#inputThree" ).removeClass();
      }
    
     // This function display winner or loser
     function displayText() {
         if ($("#inputOne").hasClass("one")
          &&($("#inputTwo").hasClass("one"))
          &&($("#inputThree").hasClass("one")))
             {
               $("#msg").text("Congratulations, you won!");  
             }
         else if ($("#inputOne").hasClass("two")
          &&($("#inputTwo").hasClass("two"))
          &&($("#inputThree").hasClass("two")))
         {
               $("#msg").text("Congratulations, you won!");  
         }
            else if ($("#inputOne").hasClass("three")
          &&($("#inputTwo").hasClass("three"))
          &&($("#inputThree").hasClass("three")))
         {
               $("#msg").text("Congratulations, you won!");  
         }
         else {
           $("#msg").text("sorry, try again");  
         } 
     }
     
     // This function changes the image based if the user wins
     function changePic(){
         if ($("#inputOne").hasClass("one")
          &&($("#inputTwo").hasClass("one"))
          &&($("#inputThree").hasClass("one")))
             {
                 $("#thepic").attr("src","media/winner.gif");
             }
         else if ($("#inputOne").hasClass("two")
          &&($("#inputTwo").hasClass("two"))
          &&($("#inputThree").hasClass("two")))
         {
                 $("#thepic").attr("src","media/winner.gif");
         }
            else if ($("#inputOne").hasClass("three")
          &&($("#inputTwo").hasClass("three"))
          &&($("#inputThree").hasClass("three")))
         {
                 $("#thepic").attr("src","media/winner.gif");
         }
         
         else {
               $("#thepic").attr("src","media/slot.png");
         }
         
     }
     
    // This function plays a sound
     
     var x = document.getElementById("buzzer"); 

     function playAudio() { 
        x.play(); 
        }
     
     // function that calls the winning sound effect function if the user wins
     
         function winningSound(){
         if ($("#inputOne").hasClass("one")
          &&($("#inputTwo").hasClass("one"))
          &&($("#inputThree").hasClass("one")))
             {
                 playAudio();
             }
         else if ($("#inputOne").hasClass("two")
          &&($("#inputTwo").hasClass("two"))
          &&($("#inputThree").hasClass("two")))
         {
                 playAudio();
         }
            else if ($("#inputOne").hasClass("three")
          &&($("#inputTwo").hasClass("three"))
          &&($("#inputThree").hasClass("three")))
         {
                 playAudio();
         }
         
         else {
               $("#thepic").attr("src","media/slot.png");
         }
         
     }
     
     // Event listener that calls the spin function when the user clicks spin
     $('#btn').click(function() {spin();}); 
     
     // Function to get random color of input box 1
     
    function getInputOneColor() {
    var numOne = Math.floor(Math.random() * 10)
    if (numOne == 0 || numOne > 3) {
       return getInputOneColor()
    } if (numOne == 1) {
        $("#inputOne").addClass("one")
    }  if (numOne == 2) {
        $("#inputOne").addClass("two")
    } if (numOne == 3) {
        $("#inputOne").addClass("three")
        }
    console.log(numOne);
}
     
    // Function to get random color of input box 2
     
    function getInputTwoColor() {
    var numTwo = Math.floor(Math.random() * 10)
    if (numTwo == 0 || numTwo > 3) {
       return getInputTwoColor()
    } if (numTwo == 1) {
        $("#inputTwo").addClass("one")
    }  if (numTwo == 2) {
        $("#inputTwo").addClass("two")
    } if (numTwo == 3) {
        $("#inputTwo").addClass("three")   
    } 
        console.log(numTwo);           
}
     
    // Function to get random color of input box 3
     
    function getInputThreeColor() {
    var numThree = Math.floor(Math.random() * 10)
    if (numThree == 0 || numThree > 3) {
       return getInputThreeColor()
    } if (numThree == 1) {
        $("#inputThree").addClass("one")
    }  if (numThree == 2) {
        $("#inputThree").addClass("two")
    } if (numThree == 3) {
        $("#inputThree").addClass("three")
    }
            console.log(numThree);              
}   
     
     
     
     // ***SECTION 2 OF 3 THE BUTTON HOVER FUNCTIONS***

         // This function groups all of my hover functions together
    function hover() {
        changeBackground();
        changeFontSize();
        changeText();
} 
     
      // This function changes the btn background color when the user hovers over it
     
     function changeBackground() {
        $("#btn").hover(function(){
        $(this).css("background", "darkgreen");
    },
    function(){
        $(this).css("background", "lightgreen");
    });   
     }
     
     // This function changes the btn font size when the user hovers over it
     function changeFontSize(){
        $("#btn").hover(function(){
        $(this).css("font-size", "25px");
    },
    function(){
        $(this).css("font-size", "20px");
    });    
     }
     
     // This function changes the btn text when the user hovers over it
        function changeText() {
     $("#btn").hover(function(){
    $("#btn").text("SPIN NOW!");
     },
    function(){
        $(this).text("SPIN AGAIN");
  });  
     }
     
     // Call the hover function
         hover(); 
     
     
     
     
     
     
     // ***SECTION 3 OF 3 THE END GAME FUNCTION AND FUNCTION CALL***
     
     // This function fades everything out when the game is over and says bye
     function quitGame () {
          $("#btn2").click(function(){
    $("h1, input, img, #msg, .buttonStyle").fadeOut(2000);
     $( "#gameover" ).slideUp( 300 ).delay(2000).fadeIn( 2000 ).text("GOODBYE");
  });
     } 
     
     // Call the quit game function
         quitGame();     

        });



    
    
    










