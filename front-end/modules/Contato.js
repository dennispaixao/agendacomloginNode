import validator from 'validator';

export default class Contato{
    constructor(form_class){
        this.form= document.querySelector(form_class);

    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e=>{
            e.preventDefault();
            this.validate(e);
        });
    }
    validate(e){
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;
        this.removeErrors();

        if (nomeInput.value.length<1 || nomeInput.value.length>30){
            error= true;
            this.insertError(nomeInput,'nome precisa ter de 1 a 30 caracteres ');
        }
        
        if (sobrenomeInput.value.length<1 || sobrenomeInput.value.length>30){
            error= true;
            this.insertError(sobrenomeInput,'sobrenome precisa ter de 1 a 30 caracteres ');
        }
        
        if (telefoneInput.value.length > 20){
            error= true;
            this.insertError(telefoneInput,'telefone invalido ');
        }

        if (emailInput.value.length==0 && telefoneInput.value.length==0){
            error=true;
            this.insertError(emailInput, 'cadastre pelo menos email ou telefone ');
            this.insertError(telefoneInput, 'cadastre pelo menos email ou telefone ');
        }

        if (!validator.isEmail(emailInput.value)){
            error= true;
            this.insertError(emailInput,'E-mail inválido ');
            
        }
       
        if(!error) el.submit();
    
    }
    removeErrors(){
        let errorsBorder = this.form.querySelectorAll('.errorBorder')
        if(errorsBorder !== null)errorsBorder.forEach(e=>e.classList.remove("errorBorder"));

        let errorsMessage = this.form.querySelectorAll('.errorMessage')
        if(errorsMessage !== null)errorsMessage.forEach(e=>{
            e.classList.remove("errorMessage");
            e.textContent="";
    });

    }
    insertError(node, textmessage){
        let parent =  node.parentNode;
        parent.classList.add('errorBorder');
        const message = document.createElement('small');
        message.setAttribute('class', 'errorMessage');
        message.textContent = textmessage;
        parent.insertBefore(message,node);  
    }

}