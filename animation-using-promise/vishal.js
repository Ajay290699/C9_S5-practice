var header=document.getElementById("myheader");

function drawBox()
{
    header.style.width="600px";
    header.style.height="100px";
    header.style.border="2px solid black";
}

function changeColor()
{
    header.style.backgroundColor="green";
}

function changeBorder()
{
    header.style.borderRadius="50px";
}

function createPromise()
{
return  new Promise ( (resolve, reject)=>
{
setTimeout ( ()=> {  drawBox();resolve() }, 1000)
})

}
var mypromise=createPromise();

mypromise.then(  ()=>
{

    return  new Promise ( (resolve, reject)=>
    {
    setTimeout ( ()=> {  changeColor();resolve() }, 1000)
    })
    


}
).then(  ()=>
{

    return  new Promise ( (resolve, reject)=>
    {
    setTimeout ( ()=> {  changeBorder();resolve() }, 1000)
    })
    


}
)