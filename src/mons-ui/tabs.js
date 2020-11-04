import './styles/Tabs.css';


class Tabs{
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }

    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click',e =>{
               this.toggleTab(e);
               this.toggleContent(e);
            });
        });
    }

    toggleTab(e){
        //remove active class from all triggers
        this.tabs.forEach(tab =>{
            tab.classList.remove('active');
        })
        //add active class to the clicked trigger
        e.target.classList.add('active');
    } 
    toggleContent(e){
        //remove current active class from all contents
        const ids = this.container.querySelectorAll('.content');
        ids.forEach(id =>{
            id.classList.remove('active');
        })
        //add active class to the clicked content
        const clicked = e.target.getAttribute('data-target');
        const content = this.container.querySelector(clicked);
        content.classList.add('active');
    }

}

export{Tabs as default};