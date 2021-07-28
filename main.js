function submit()
{
    var nameone=document.getElementById("inputone").value;
    var nametwo=document.getElementById("inputtwo").value;
    var namethree=document.getElementById("inputthree").value;
    var namefour=document.getElementById("inputfour").value;
    var studentsarray=[""];
    studentsarray.push(nameone);
    studentsarray.push(nametwo);
    studentsarray.push(namethree);
    studentsarray.push(namefour);
    document.getElementById("displaynames").innerHTML=studentsarray
    document.getElementById("submitB").style.display="none";
    document.getElementById("sortingB").style.display="inline-block";
}
function sorting()
{
    studentsarray.sort();
    document.getElementById("displaynames").innerHTML=studentsarray;

}