var boxes = document.querySelectorAll('.box');
var targetList = document.querySelectorAll('.target');

var currentTarget = null;
targetList.forEach(target=>{
    target.addEventListener('dragstart',function(e){
        this.classList.add('dragging');
        currentTarget=this;
    })
    target.addEventListener('dragend',function(e){
        this.classList.remove('dragging');
        currentTarget = null;
    })
})


boxes.forEach(box=>{
    //dragover
    box.addEventListener('dragover',function(e){
        e.preventDefault();
    })
    //drop
    box.addEventListener('drop',function(e){
        e.preventDefault();
        if (!this.querySelector('.target')) { 
            this.appendChild(currentTarget);
        }
    })
})


