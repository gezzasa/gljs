var gl = (function () {
    var el = document.getElementsByClassName('form--input');
    
    //Check for form elements
    if(el.length > 0){
        //Creating listeners for the form elements
        for(var i = 0; i < el.length; i++){
            el[i].addEventListener('click', function(){
                gl.forms.click(this);
            });
            el[i].addEventListener('focusin', function(){
                gl.forms.onfocus(this);
            });
            el[i].addEventListener('focusout', function(){
                gl.forms.focusout(this);
            });
        }
    }
    
    
    return {
        addClass: function(el, className) {
            return el.classList.add(className);
        },

        removeClass: function(el, className) {
            console.log()
            return el.classList.remove(className);
        },

        toggleClass: function(el, className) {
            return el.classList.toggle(className);
        },

        hasClass: function(el, className) {
            return el.classList.contains(className);
        },

        hasValue: function(el, inputType) {
           
            if(inputType == 'text' || inputType == 'email' || inputType == 'number'){
                var hasValue = el.getElementsByTagName('input')[0].value.length;
            }
            
            return (hasValue > 0);
            
        }
    }
})();

gl.forms = (function () {
    var lastFocus;
    var inputType;
    return {
        click: function(el) {
            gl.addClass(el, 'focused');
        },
        onfocus: function(el) {
            inputType = el.getAttribute('data-type');
            console.log(inputType);
            gl.addClass(el, 'focused');
        },
        focusout: function(el) {
            if(!gl.hasValue(el, inputType)){
                gl.removeClass(el, 'focused');
                gl.removeClass(el, 'hasContent');
            } else {
                gl.addClass(el, 'hasContent');
            }
            
            lastFocus = el;
        }
    }
    
})();
