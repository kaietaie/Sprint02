let quest1 = "Is this a planet in the solar system?",
    quest2 = "Does this planet have a ring system?",
    quest3 = "Does this planet have a satellite?",
    quest4 = "Do people live on this planet?";

function init() {
   
        //while(  answer == "yes" || answer == "no") {
            answer1 = prompt( quest1 );
            answer2 = prompt( quest2 );
            answer3 = prompt( quest3 );
            answer4 = prompt( quest4 );
      //  }
        if( answer1 == "yes" && answer2 == "no" &&
            answer3 == "yes" && answer4 == "yes") {alert("This is Earth"); }
        else if( answer1 == "yes" && answer2 == "no" &&
            answer3 == "no" && answer4 == "no") alert("This is Venus")
        else if( answer1 == "yes" && answer2 == "yes" &&
            answer3 == "yes" && answer4 == "no") alert("This is Saturn")
        else alert("Didn't recognize!")
    }

init()