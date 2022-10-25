let button = document.querySelector('.menuSimplest .button');
let brand =  document.querySelector('.menuSimplest .brand');
let ul =  document.querySelector('.menuSimplest ul');
let menu =  document.querySelector('.menuSimplest .menu');
let menuContainer =  document.querySelector('.menuSimplest');
window.addEventListener('resize', ()=>{
 updateMenu();

});

function updateMenu(){
    if (window.innerWidth < 700) {
       ul.style.display = 'none';
       button.style.display = 'flex';
       menuContainer.style.flexDirection="row"; 
       menu.style.flexDirection="row";
       menu.style.justifyContent="flex-end";
       button.style.marginBottom=0;
       
    } else {
       brand.style.marginTop= '0px';
       button.style.display = 'none';
       ul.style.display = 'flex';   
       menuContainer.style.flexDirection="row";  
       menu.style.flexDirection="row";
       menu.style.justifyContent="flex-end";
       brand.style.marginLeft = '24px';
       brand.style.paddingLeft='30px';
    }
}

let buttonflag= true;
button.addEventListener('click', ()=>{
    if(buttonflag){
        brand.style.marginLeft = 0;
        menuContainer.style.flexDirection="column";
        ul.style.display='flex';
        menu.style.flexDirection="column";
        button.style.marginBottom="24px";
        brand.style.marginTop= '24px';
        brand.style.marginLeft = '0px';
        brand.style.paddingLeft='7px';
        buttonflag=false;
    }else{
        brand.style.marginTop= '0px';
        brand.style.marginLeft = '24px';
        brand.style.paddingLeft='30px';
        menuContainer.style.flexDirection="row";
        menu.style.flexDirection="row";
        button.style.marginBottom=0;
        menu.style.justifyContent="flex-end";
        ul.style.display='none';
        buttonflag=true
    }
 
})

updateMenu();