document.addEventListener("alpine:init", ()=>{
    Alpine.data("dropdown", ()=> ({
        open : false,
        toggle(){
            this.open = !this.open;
        }
    }))
    
    Alpine.store("customer", ({
        username: 'Exxon',
        posts: ['post1 ', ' post2']
    }))
})