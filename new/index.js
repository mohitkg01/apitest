const myForm=document.querySelector('#form-id');
const titleInput=document.querySelector('#title');
const descInput=document.querySelector("#desc");
const remainingList=document.querySelector("#remaining")
const doneList=document.querySelector("#done")

//Adding Event Listner
myForm.addEventListener('submit',onSubmit);
remainingList.addEventListener('click',deleteData);


window.addEventListener('DOMContentLoaded', retrieve);

function onSubmit(e){
    e.preventDefault();
    if(titleInput==='' || descInput===''){
       // alert('plese enter all');
    }else{
        axios.post("https://crudcrud.com/api/117593adb627461eaf96a051c59ff9db/todo",{
            title:titleInput.value,
            desc:descInput.value
        })
        .then((res)=>{
            //console.log(res);
            showonSreen(res.data);
        })
        .catch((err)=>console.log(err))
    }
    titleInput.value='';
    descInput.value='';
}
// adding delete btn
function deleteData(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            //const li=e.target.parentElement;
            const li = e.target.closest('li');
            const itemId = li.getAttribute('data-id');
            axios
            .delete(`https://crudcrud.com/api/117593adb627461eaf96a051c59ff9db/todo/${itemId}`)
            .then((res)=>{
                    //removing data from UI
                    li.remove();
            })
            .catch((err)=>console.log(err));
        }console.debug(object);
    }
    else if (e.target.classList.contains('done')) {
        const li = e.target.parentElement;
        //const itemId = li.id;
        doneList.appendChild(li);
        li.querySelector('.done').remove();
        li.querySelector('.delete').remove();
      }
    }

function retrieve(){
    axios
    .get('https://crudcrud.com/api/117593adb627461eaf96a051c59ff9db/todo')
    .then((res)=>{
        // console.log(res.data);
        if(res.data.length>0){
       res.data.forEach((item)=>{
        showonSreen(item) })}
    })
    .catch((err)=>console.log(err))
}



 function showonSreen(d){
   // console.log(d);
    const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${d.title} : ${d.desc}`
        ));
        const delBtn=document.createElement('button');
        delBtn.className='btn btn-danger btn-sm float-right delete';
        delBtn.appendChild(document.createTextNode('delete'))
        li.appendChild(delBtn);

      
        const doneBtn=document.createElement('button');
        doneBtn.className='btn btn-danger btn-sm float-right done';
        doneBtn.appendChild(document.createTextNode('done'))
        li.appendChild(doneBtn);

        li.setAttribute('data-id', d._id);
        remainingList.appendChild(li);
}

