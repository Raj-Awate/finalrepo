function fvalidation()
{   let valid="true"
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email =document.getElementById("email").value;
    if (fname === "") 
        {
        alert("First Name cannot be empty");
        valid = "false";
        } 
    else if (fname.length<3) 
        {
        alert("First Name too small");
        valid = "false";
        } 
    else if (fname.length>30) 
    {
        alert("First Name too big");
        valid = "false";
    } 
    if (lname === "") 
    {
        alert("Last Name cannot be empty");
        valid = "false";
    }
     else if (lname.length<3) 
    {
        alert("Last Name too small");
        valid = "false";
    }
    else if (lname.length>30)
    {
        alert("Last Name too big");
        valid = "false";
    }
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf("."); 
    if (email === "") 
     {
        alert("Email id cannot be empty");
        valid = "false";
    } 
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    {  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        valid = "false";  
    }
    return valid;
}
function regist()
{  
    if (fvalidation()=="true")
{   alert("form submitted");
    let k=document.getElementById("Question");
    k.style.display="none";
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let table = document.getElementById("myTable");
    let row = table.insertRow(table.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    var c=document.getElementById("partic");
    c.style.display='block';

}
}

function gback()
{
    let d=document.getElementById("partic");
    d.style.display="none";
    let k=document.getElementById("Question");
    k.style.display="block";
    let b=document.getElementById("naire");
    b.reset();

}
