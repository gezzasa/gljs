"use strict";
var gl = (function () {
    
    //Get all inputs
    var el = document.getElementsByClassName('form--input');
    
    //Check for form elements
    if(el.length > 0){
        //Creating listeners for the form elements
        for(var i = 0; i < el.length; i++){
            el[i].addEventListener('click', function(){
                this.click(this);
            });
            el[i].addEventListener('focusin', function(){
                gl.forms.onfocus(this);
            });
            el[i].addEventListener('focusout', function(){
                gl.forms.focusout(this);
            });
            
            var getInputs = el[i].querySelectorAll('input');
            if(getInputs.length > 0){
                getInputs[0].addEventListener('change', function(){
                    gl.forms.change(this);
                });
            }
            
        }
    }
    
    
    return {
        addClass: function(el, className) {
            return el.classList.add(className);
        },

        removeClass: function(el, className) {
            return el.classList.remove(className);
        },

        toggleClass: function(el, className) {
            return el.classList.toggle(className);
        },

        hasClass: function(el, className) {
            return el.classList.contains(className);
        },

        hasValue: function(el, inputType) {
           
            if(inputType == 'text' || inputType == 'email' || inputType == 'number' || inputType == 'password'){
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
            console.log(event);
            gl.addClass(el, 'focused');
            
            //If checkbox, toggle custom check
            if(inputType === 'checkbox'){
                this.ischecked(el);
            }
        },
        
        onfocus: function(el) {
            inputType = el.getAttribute('data-type');
            gl.addClass(el, 'focused');
            
            
        },
        
        focusout: function(el) {
            if(!gl.hasValue(el, inputType)){
                gl.removeClass(el, 'hasContent');
            } else {
                gl.addClass(el, 'hasContent');
            }
            gl.removeClass(el, 'focused');
            lastFocus = el;
           
        },
        
        change: function(me) {
            if(me.checked){
                gl.addClass(me.parentElement, 'checked');
            }
        },
        
        ischecked: function(event, el) {
            var checkInput = el.querySelectorAll('input');
            console.log(checkInput[0]);
            
        }
    }
    
})();
