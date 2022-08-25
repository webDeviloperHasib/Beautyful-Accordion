let head = document.querySelectorAll('.accordion_head');
let body = document.querySelectorAll('.accordionBody');


for(let i = 0; i < head.length; i++){
    head[i].addEventListener('click',function(){
        for(let j = 0; j < head.length; j++){
            if(i === j){
                if(head[j].classList.contains('active')){
                   head[j].classList.remove('active')
                   body[j].classList.remove('active')
                }
                else{
                   head[j].classList.add('active')
                   body[j].classList.add('active')
                }
            }else{
                head[j].classList.remove('active')
                body[j].classList.remove('active')
            }
        }
    })
}