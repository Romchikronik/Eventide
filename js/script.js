window.addEventListener('load', function(){
    var tabsHeader = document.querySelector('.tabs-header');
    tabsHeader.addEventListener('click', function(e){
        if(e.target.classList.contains('tab')){
            var tabs = document.querySelectorAll('.tab');
            for(var i = 0; i < tabs.length; i++){
                tabs[i].classList.remove('active');
            }
            
           e.target.classList.add('active');  
           var dataTab = e.target.getAttribute('data-tab');
           var content = document.querySelectorAll('.content');
           for(var j = 0; j < content.length; j++){
               if(dataTab == j){
                   content[j].style.display = 'flex';
                   content[j].classList.add('content-active');
               }
               else{
                content[j].style.display = 'none';
                content[j].classList.remove('content-active');
               }
           }
        }
       
    });
    
    var register = document.querySelector('.register');
    var discover = document.querySelector('.discover');
    var cross = document.querySelectorAll('.cross');
    var modal1 = document.querySelector('.modal1');
    var modal2 = document.querySelector('.modal2');
    var over = document.querySelector('.overlay');
    
    var body = document.querySelector('body')
    body.addEventListener('click', function(e){
        if(e.target == over){
            modal1.classList.remove('modal-open1');
            modal2.classList.remove('modal-open2');
            over.style.display = 'none';
        }
    })
    
    register.addEventListener('click', function(event){
        event.preventDefault();
        over.style.display = 'block';
        modal1.classList.add('modal-open1');
    })
    discover.addEventListener('click', function(event){
        event.preventDefault();
        over.style.display = 'block';
        modal2.classList.add('modal-open2');
    })
    for(var i = 0; i < cross.length; i++){
        cross[i].addEventListener('click', function(){
            modal1.classList.remove('modal-open1');
            modal2.classList.remove('modal-open2');
            over.style.display = 'none';
        })
    }
})