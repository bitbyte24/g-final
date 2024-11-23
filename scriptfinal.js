function menu(){
    var menu=document.getElementById('sideMenu');
    menu.style.width='max-Content';
}
function quit(){
    var menu=document.getElementById('sideMenu');
    menu.style.width='0';
}
function products(){
    var product=confirm('you are opening a product store.\nclick Ok to continue')
    if(product==true){
        document.write('<h1 style="color:blue;">giltous exclusive product store.\n\n<p style="color:green;">product store is empty,you will get a notification when an item is added.\n\n\nthank you for visiting our stores')
    }else{
        return false;
    }
}
function services(){
    alert('Sorry,the services here are under review.you will be notified when any service is ready\n\nthank you for visiting our service center\n\n\n.......Giltous Exclusive........')
}
function contact(){
    var meet=confirm('you are attempting to ')
}
function msg(){
    setTimeout(() => {
        inform()
    }, 2000);function inform(){
        var sms=document.getElementById('help-message');
        var bed=document.getElementById('bed-info')
        sms.style.width='max-Content';
        bed.style.width='max-Content';
    }
    setTimeout(() => {
        Inform()
    }, 9000);function Inform(){
        var sms=document.getElementById('help-message');
        var bed=document.getElementById('bed-info');
        sms.style.width='0';
        bed.style.width='0'
    }
}
msg();