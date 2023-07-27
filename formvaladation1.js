function validation(){
    let password =document.getElementById('password')
    let passwordname = password.value 
    let emailid=document.getElementById('emailid').value
    let confirmpassword =document.getElementById('confirmpassword').value
    let username =document.getElementById('username')
    let msg= document.getElementById('msg')
    let name = username.value
    let reg=/^[A-Z][a-z]/g
    let regu=/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/

    if(! name){
        // msg.style.display="block"
        window.alert('user name is required')
        return false
    }else if(name.length<6){
        // msg.style.display="block"
        window.alert('user name shoud contain mare than 5 character')
        return false
    }else if(! reg.test(name)){
        // msg.style.diplay="block"
        window.alert('starting letter must be uppercase alphabet')
        return false

    }else if(passwordname.lenght>10){
        // msg.style.display="block"
        window.alert('password shoud contian more than 5 character')
        return false

    }else if(emailid.lenght<15){
        // msg.style.display="block"
        window.alert('email id is required')
        return  false
    }else if(!regu.test(emailid)){
        // msg.style.diplay="block"
        window.alert('email should contain one special character')
        return false

    }else if(confirmpassword<6) {
        // msg.style.display="block"
        window.alert('password shoud contian more than 5 character')
        return false
    }

    
}