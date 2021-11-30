import React, { useState, useEffect } from 'react';
import questions from '../questions.json';

const allQuestionIndex = []; 
var numOfQuestions = 40;

function HomeScreen(props) {
    const [count, setCount] = useState(1);

    const nextQuestion = () => {
        if(allQuestionIndex.length === 0){
            alert("finished!");
            return;
        }
        let randNum = allQuestionIndex[Math.floor(Math.random() * allQuestionIndex.length)];
        allQuestionIndex.splice(allQuestionIndex.indexOf(randNum), 1);
        document.getElementById("question").innerHTML = (randNum+1) + ". " + questions.text[randNum];
        setCount(count+1);
        document.getElementById("count").innerHTML = count + "/"+ numOfQuestions;
    }

    useEffect(() => {
        for(let i = 0; i < numOfQuestions; i++){
            allQuestionIndex.push(i);
        }
        nextQuestion();
    }, []);
    
    return (
        
        <div>
            <center style={{"padding":"10px"}}>
                <div style={{"paddingBottom":"50px", "paddingTop":"200px"}} id="count"></div>
                <div style={{"paddingBottom":"50px"}} id="question"></div>
                <button onClick={nextQuestion}>Next</button>
            </center>
            
        </div>

    );
}

export default HomeScreen;