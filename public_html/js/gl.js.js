"use strict";
var gl = (function () {
    
    //Get all inputs
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
            
            /*var getInputs = el[i].querySelectorAll('input');
            if(getInputs.length > 0){
                console.log(getInputs);
                for(var b = 0; b > getInputs.length; b++){
                    getInputs[b].addEventListener('click', function(){
                        gl.forms.click(this);
                    });
                }
            }*/
            
        }
    }
    
    
    return {
        addClass: function(el, className) {
            var isRadio = gl.hasClass(el, 'form--input-radio');
            if(isRadio){
                console.log(el.querySelectorAll('input')[0]);
                return el.querySelectorAll('input')[0].classList.add(className);
            } else {
                return el.classList.add(className);
            }
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
            var customDiv = me.parentElement.querySelectorAll('div')[0]
            if(me.checked){
                gl.addClass(customDiv, 'checked');
            } else {
                gl.removeClass(customDiv, 'checked');
            }
        },
        
        ischecked: function(el) {
            
            var checkInput = el.querySelectorAll('input');
            if(el.querySelectorAll('input').length > 0){
                var isChecked = checkInput[0].checked;
                if(isChecked){

                }
            }
            
            
        }
    }
    
})();
