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
 })