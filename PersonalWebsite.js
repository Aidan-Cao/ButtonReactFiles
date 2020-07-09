import React from 'react';
//import logo from './logo.svg';
//import Counter from './Counter.js'

function returnrandom() {
    var responses = ["It is certain!",
"It is decidedly so",
"Without a doubt!",
"Yes definitely!",
"You may rely on it",
"As I see it, yes.",
"Most likely",
"Outlook good",
"Yes!",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is NO!",
"My sources say no",
"Outlook not so good",
"Very doubtful",
"Yes, in due time",
"Definitely not",
"You will have to wait",
"I have my doubts",
"Outlook so so",
"Looks good to me",
"Who knows?",
"Looking good!",
"Probably",
"Are you kidding?",
"Go for it!",
"Don't bet on it",
"Forget about it."]
    render() {
        return (<p>Math.round(Math.random() * responses.length</p>)

    }
    
}
