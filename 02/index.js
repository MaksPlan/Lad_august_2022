var formElement = document.forms['formElement'];
formElement.addEventListener("focus", () => focused(event), true);
formElement.addEventListener("blur", () => blured(event), true);


 function focused(evt) {
    var activeElement = formElement.querySelector('.focused');
    var activeElement = formElement;
    
    for (let i = 0; i < 2; i++) {
        if (activeElement[i]) {
            activeElement[i].classList.remove('focused');
          
        }
       evt.target.classList.add('focused');
    } 
};

function blured(evt) {
	var activeElement = formElement.querySelector('.focused');
    for (let i = 0; i < 2; i++) {
        if (activeElement[i]) {
            activeElement[i].classList.remove('focused');   
       }
    }
};

