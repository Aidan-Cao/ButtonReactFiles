<!DOCTYPE html>

<html>
<script>
    function factorial(){
        var input = document.getElementById('number').value;
        var temp = 1;
        var i;
        for(i = input; i > 0; i--){
            temp = temp + i;
        }
        document.getElementById('number').value = "The factorial is " + temp;
    }
</script>
    <input id = "number" placeholder = "Type a number"></input> 
    <button onclick = "factorial()">Calculate factorial</button>
</html>