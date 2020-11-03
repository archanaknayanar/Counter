let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn'); //accessing all items using one class

// Run foreach loop on the nodelist of buttons
//pass in a callback function in foreach
btns.forEach(function(btn){ //this callback function is called against each n every items. ie access every item using parameter
    //add event listner to all the buttons
    btn.addEventListener('click' , function(e){ //access "event" object to check which btn user clicking
    //event obj has property of currentTarget
    
    const styles = e.currentTarget.classList; // classList will fetch all the classes associated to the target 
    //everytime user clicks the classlist element has saved on the styles var
    if(styles.contains('decrease')){
        count--;
    }
    else if(styles.contains('increase')){
        count++;
    }
    else{
        count = 0;
    }
    if(count > 0){
        value.style.color = "green";
    }
    if(count < 0){
        value.style.color = "red";
    }
    if(count == 0){
        value.style.color = "black";
    }

    value.textContent = count;

    });

});  