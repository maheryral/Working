var fichem=document.getElementById('fichem');
var listfiche=document.getElementsByClassName('sousfiche')
var imgmenu=document.getElementById('imgmenu')
var menugauche=document.getElementById('menugauche')
fichem.addEventListener('click',function() {
    for (let i = 0; i < listfiche.length; i++) {
        if (listfiche[i].style.display!="none") {   
            listfiche[i].style.display="none"
        }
        else{
            listfiche[i].style.display="block"
        }
        

    }
})
imgmenu.addEventListener('click',function() {
})

var plus= document.getElementById('plus')
var rfiche= document.getElementById('rfiche')
plus.addEventListener('click',function() {
    if (rfiche.style.display!="none") {   
        rfiche.style.display="none"
    }
    else{
        rfiche.style.display="block"
    }
})
