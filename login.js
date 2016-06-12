window.addEventListener('load',function(event){
    var username=document.getElementById('username')
    var password=document.getElementById('password')
    var register=document.getElementById('register')
    var status_login=document.getElementById('status_login')
    login.addEventListener('click',function(event){
		status_login.style.color='red'
		status_login.innerHTML='Back-end program not detected.<br>'
    })
})
