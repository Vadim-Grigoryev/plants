function show() {
    show1()
    show2()
    show3()
    show4()
    show5()
}

function show1() {
    let buter=document.getElementById("buter");
    buter.classList.toggle("look")
    }

    function show2() {
        let lines = document.getElementById("lines");
        if (lines.style.opacity === '0') {
            lines.style.opacity = '1'
        } else {
            lines.style.opacity = '0'
        }
    }
    
    function show3() {
        let cross = document.getElementById("cross");
        if (cross.style.opacity === '1') {
            cross.style.opacity = '0'
        } else {
            cross.style.opacity = '1'
        }
    }
    
    const popup=document.querySelector('.pop-up');
    const show4=()=>{
      popup.classList.toggle('hidePop') 
      document.body.classList.toggle('noscroll') 
    }
    
   
    const show5=()=>{
        document.body.classList.toggle('noscroll')
    }
    
    const home= document.getElementById('abouthome1')
    const about= document.getElementById('about11')
    const service= document.getElementById('service11')
    const price= document.getElementById('price11')
    const contact= document.getElementById('contact11')
     
    home.addEventListener('click', show)
    about.addEventListener('click', show)
    service.addEventListener('click', show)
    price.addEventListener('click', show)
    contact.addEventListener('click', show)

    home.addEventListener
    
    popup.addEventListener('click', ()=>{
    popup.classList.add('hidePop') 
    buter.classList.remove('look')
    cross.style.opacity=0 
    lines.style.opacity=1
    })

const buttonGardens=document.querySelector('.buttongardens');
const garden=document.querySelectorAll('.allGarden');



const buttonLawns=document.querySelector('.buttonlawn');
const lawn=document.querySelector('.allLawn');

const buttonPlantings=document.querySelector('.buttonplanting');
const planting=document.querySelectorAll('.allPlanting');

const toggleActiveColor=(element)=> {
    element.classList.toggle('activeColor')
}

const toggleBlurGarden=()=>{
lawn.classList.toggle('fading') ;
    planting.forEach(value=>value.classList.toggle('fading'));
}
const toggleBlurLawn=()=>{
  garden.forEach(value=>value.classList.toggle('fading'));
    planting.forEach(value=>value.classList.toggle('fading'));
}
const toggleBlurPlanting=()=>{
  garden.forEach(value=>value.classList.toggle('fading'));
   lawn.classList.toggle('fading') ;
}
const activateGardensButton=(event) =>{
  const element=event.target;   
    toggleActiveColor(element);
    toggleBlurGarden();
   }
const activateLawnButton=(event) => {
    const element=event.target;   
    toggleActiveColor(element);
    toggleBlurLawn();
   }
const activatePlantingButton=(event) => {
    const element=event.target;   
    toggleActiveColor(element);
    toggleBlurPlanting();
   }
buttonGardens.addEventListener('click', activateGardensButton);

buttonLawns.addEventListener('click', activateLawnButton)

buttonPlantings.addEventListener('click', activatePlantingButton)
