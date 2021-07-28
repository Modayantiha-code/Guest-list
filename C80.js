studentsarry=[];
function submit() {
 var displaystudentsarry=[];
 for(var m=1; m<5; m++)
 {var studentnames=document.getElementById("input"+m).value;
 studentsarry.push(studentnames);
 }
console.log(studentsarray);
document.getElementById("displaynames").innerHTML=studentsarray;
}
function sorting() {
    sortedstudentsarray=[];
    for(var y=1; y<5; y++)
    {sortedstudentsarray.push(studentsarray[y]);
        document.getElementById("displaynames").innerHTML=sortedstudentsarray;
    } 
}