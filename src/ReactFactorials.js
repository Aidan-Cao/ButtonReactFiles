/*
import React, {Component} from 'react'
render(){
        return(


        )
    }

factorial(){
    this.setState({counter: 1})
    var size = document.getElementById('factorial').value
    var ret = 1
    for(var i = 0;i<size;i++ ){
        ret = ret * (i+1)
    }
    this.setState({flag: true, counter: ret})
} 
*/
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);