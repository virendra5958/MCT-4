
function printPDF() {
    window.print();
}
const currentDate = document.querySelector('.current-date');

const d = new Date();
let time = d.getDate() + " / " + d.getMonth()+ " / " +d.getFullYear();
console.log(time);
currentDate.innerHTML=time;



function BtnAdd()
{
    /*Add Button*/
   let v = $("#TRow").clone().appendTo("#TBody") ;
    $(v).find("input").val('');
    $(v).removeClass("d-none");
    $(v).find("th").first().html($('#TBody tr').length - 1);
}

function BtnDel(v)
{
    /*Delete Button*/
       $(v).parent().parent().remove(); 
       GetTotal();

        $("#TBody").find("tr").each(
        function(index)
        {
           $(this).find("th").first().html(index);
        }

       );
}

function Calc(v)
{
    /*Detail Calculation Each Row*/
    let index = $(v).parent().parent().index();
    
    let qty = document.getElementsByName("qty")[index].value;
    let rate = document.getElementsByName("rate")[index].value;

    let amt = qty * rate;
    document.getElementsByName("amt")[index].value = amt;

    GetTotal();
}

function GetTotal()
{
    /*Footer Calculation*/   

    let sum=0;
    let amts =  document.getElementsByName("amt");

    for (let index = 0; index < amts.length; index++)
    {
        var amt = amts[index].value;
        sum = +(sum) +  +(amt) ; 
    }

    document.getElementById("FTotal").value = sum;

    var gst =  document.getElementById("FGST").value;
    var net = +(sum) + +(gst);
    document.getElementById("FNet").value = net;

}