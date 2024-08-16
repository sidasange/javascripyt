function bclick(val)
{
    console.log(val)
    document.getElementById("screen").value+=val
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function result(){
    var text=document.getElementById("screen").value
    var result =eval(text)
    //console.log(result)
    document.getElementById("screen").value=result
}