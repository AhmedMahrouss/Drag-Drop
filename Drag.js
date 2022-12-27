let btn = document.getElementById('addBtn');
let input = document.querySelector('input[type="text"]');
let boxs = document.querySelectorAll('.box');
let title = document.querySelectorAll('h2')

btn.onclick = ()=>{
    if(input.value !==''){
     boxs[0].innerHTML += `<p class='item' draggable="true">${input.value}</p>`;
     input.value='';
     input.placeholder='';
    }else{
        input.placeholder='Please Enter a Text'
    }
    DragItem();
}

function DragItem(){
    let items = document.querySelectorAll('.item');
    let drag = null;
    items.forEach(item=>{
        item.addEventListener('dragstart',()=>{
            drag = item;
            item.style.opacity='0.5';
        })
        item.addEventListener('dragend',()=>{
            drag = null;
            item.style.opacity='1';
        })
    })
    boxs.forEach(box=>{
        box.addEventListener('dragover',(e)=>{
         e.preventDefault();
         box.style.background = 'green'
         box.style.color = 'white'

        })
        box.addEventListener('dragleave',()=>{
         box.style.background = 'white'
         box.style.color = 'black'
        })
        box.addEventListener('drop',()=>{
            box.appendChild(drag);
            box.style.background = 'white'
            box.style.color = 'black'
        
           })
     })

}









