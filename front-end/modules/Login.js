import validator from 'validator';

export default class Login{
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
        const emailInput = el.querySelector('input[name="email"]');
        const senhaInput = el.querySelector('input[name="senha"]');
        let error = false;
        this.removeErrors();

        if (!validator.isEmail(emailInput.value)){
            error= true;
            this.insertError(emailInput,'E-mail inválido');
        }
        if (senhaInput.value.length<3 || senhaInput.value.length>40){
            error= true;
            this.insertError(senhaInput,'senha inválida');
        }

        if(!error) el.submit();
    
    }
    removeErrors(){
        let errorsBorder = this.form.querySelectorAll('.errorBorder')
        if(errorsBorder !== null)errorsBorder.forEach(e=>e.classList.remove("errorBorder"));

        let errorsMessage = this.form.querySelectorAll('.errorMessage')
        if(errorsMessage !== null)errorsMessage.forEach(e=>{
            e.remove();
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