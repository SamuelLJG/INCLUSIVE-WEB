function myFunction(){var e=document.getElementById("myLinks"),t=document.getElementById("menu");"block"===e.style.display?(e.style.display="none",t.style.display="block",ex.style.display="none",document.getElementById("bhh").style="transform: rotate(0deg);",document.getElementById("bbg").style.display="none"):(e.style.display="block",t.style.display="none",ex.style.display="block")}
function indice(){
    var p1 = document.getElementById('ppr')
    var p2 = document.getElementById('ppr2')
    var ul = document.getElementById('ullll')
    if (p2.style.display==='inline-block'){
        p2.style.display='none'
        p1.style.display='inline-block'
        ul.style.display='block'
    }else{
        p1.style.display='none'
        ul.style.display='none'
        p2.style.display='inline-block'
    }
}