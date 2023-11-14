function checkAnswers() {
    let score = 0 ;
    let result = 0;
    let quiz = document.forms.quiz.elements;
    let answer1 = quiz.colour.value;
    if (answer1 == "pink") {

        score = score + 1;
    }
        else if (answer1 == "yellow") {score = score + 2;}
        else if (answer1 == "green") { score = score + 3 ;}
        else {score = score + 4;}

        let answer2 = quiz.colour.value;
        if (answer2 == "red-panda") {
    
            score = score + 1;
        }
            else if (answer2 == "giraffe") {score = score + 2;}
            else if (answer2 == "jaguar") { score = score + 3 ;}
            else {score = score + 4;}

            let answer3 = quiz.colour.value;
            if (answer3 == "pop") {
        
                score = score + 1;
            }
                else if (answer3 == "metal") {score = score + 2;}
                else if (answer3 == "rap") { score = score + 3 ;}
                else {score = score + 4;}

                let answer4 = quiz.colour.value;
                if (answer4 == "exercise") {
            
                    score = score + 1;
                }
                    else if (answer4 == "go for a walk") {score = score + 2;}
                    else if (answer4 == "listen to music") { score = score + 3 ;}
                    else {score = score + 4;}
                    if (score < 6 ) {result= "Python";}
                    else if (score < 10) { result ="javascript";}
                    else if (score < 13) {result ="python";}
                    else {result = "java";}

                    alert ("The programing language you should learn is " + result);

                    



    }


    
