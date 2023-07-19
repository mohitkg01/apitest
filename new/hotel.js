const myForm=document.querySelector("#form-id");
const expense=document.querySelector("#cash");
const orderItem=document.querySelector("#order");
const options=document.querySelector("#option");
const orderList=document.querySelector("#list");

myForm.addEventListener('submit',onSubmit);
orderList.addEventListener('click',deleteOrder);
window.addEventListener('DOMContentLoaded',retrive);

function onSubmit(e){
    e.preventDefault();
    // axios.post("https://crudcrud.com/api/f0bccf21297c4c26984c372e2275e60c/hotel",{
    //     cash:expense,
    //     order:orderItem,
    //     table:options
    // })
    // .then((res)=>{
    //     showonSreen(res);
    // }).catch((err)=>console.log(err));
    const postData=async()=>{
        try
        {const res=await axios
            .post("https://crudcrud.com/api/2f40edd318794e77a3a137eb6fa7cc27/hotel",{
            cash:expense.value,
            order:orderItem.value,
            table:options.value
        });
        showonSreen(res.data);
        //console.log(res);
    }catch(err){console.log(err)}
    
    }
    postData();
}

function deleteOrder(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Deleting Order')){
            const li=e.target.closest('li');
            const itemId=li.getAttribute('data-id');
            
            // axios
            // .delete(`https://crudcrud.com/api/f0bccf21297c4c26984c372e2275e60c/hotel/${itemId}`)
            // .then((res)=>
            // {li.remove()})
            // .catch((err)=>console.log(err));
            const dele=async()=>{
                try{
                    const del=await axios
                    .delete(`https://crudcrud.com/api/2f40edd318794e77a3a137eb6fa7cc27/hotel/${itemId}`)
                    li.remove(del);
                }catch(err){
                    console.log(err);
                }
            }
            dele();
        }
    }
}


function showonSreen(d){
    //console.log(d);
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(` ${d.table} :${d.order} : ${d.cash}`));

        const delBtn=document.createElement('button');
        delBtn.className='btn btn-danger btn-sm float-right delete';
        delBtn.appendChild(document.createTextNode('Delete order'))
        li.appendChild(delBtn);
        li.setAttribute('data-id', d._id);

        orderList.appendChild(li);

}

function retrive(){
    const retr=async()=>{
        try{
            const re=await axios
            .get("https://crudcrud.com/api/2f40edd318794e77a3a137eb6fa7cc27/hotel")
            if(re.data.length>0){
                re.data.forEach((item)=>{
                    showonSreen(item);
                   // console.log(item);
                })
            }
        }catch(err){
            console.log(err);
        }
         }
         retr();
}