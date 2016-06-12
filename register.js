window.addEventListener('load',function(){
    var username=document.getElementById('username');
    var valid_username=document.getElementById('valid_username');
    var check=document.getElementById('check');
    var check_username=document.getElementById('check_username');
    var username=document.getElementById('username');
    var password=document.getElementById('password');
    var valid_password=document.getElementById('valid_password');
    var repassword=document.getElementById('repassword');
    var valid_repassword=document.getElementById('valid_repassword');
    var register=document.getElementById('register');
    var status_register=document.getElementById('status_register');
    var input_confirmpassword_register=document.getElementById('input_confirmpassword_register');
    repassword.onpaste=function(){
		valid_repassword.value='You should confirm your password instead of pasting it.'
        return false;
    }
	check.onclick=function(){
		check_username.style.color='red'
		check_username.innerHTML='Back-end program not detected.'
	}
	register.onclick=function(){
		status_register.style.color='red'
		status_register.innerHTML='Back-end program not detected.'
	}
    username_valid();
    password_valid();
    confirmpassword_valid();
    function username_valid(){
        username.addEventListener('input',function(){
            var value=username.value;
            var span=document.getElementById('valid_username');
            if(valid_length()===1){
                span.style.color='red';
                span.innerHTML=value.length+' characters, too long';
                if(valid_component()){
                    span.innerHTML+='.';
                    return false;
                }
                span.innerHTML+=', and the username you assigned includes illegal characters.';
                return false;
            }
            if(valid_length()===-1){
                span.style.color='red';
                span.innerHTML=value.length+' characters, too short';
                if(valid_component()){
                    span.innerHTML+='.';
                    return false;
                }
                span.innerHTML+=', and the username you assigned includes illegal characters.';
                return false;
            }
            if(!valid_component()){
                span.style.color='red';
                span.innerHTML='The username you assigned includes illegal characters.';
                return false;
            }
            span.style.color='green';
            span.innerHTML=value.length+' characters, valid.';

            function valid_length(){
                if(value.match(/^.{0,4}$/)){
                    return -1;
                }
                if(value.match(/^.{17,}$/)){
                    return 1;
                }
                return 0;
            }
            function valid_component(){
                if(value.match(/[^a-z\d]+/)){
                    return false;
                }
                return true;
            }
        })
    }
    function password_valid(){
        password.addEventListener('input',function(){
            var value=password.value;
            var span=document.getElementById('valid_password');
            if(value.match(/^.{4,}$/)){
                span.style.color='green';
                span.innerHTML=value.length+' characters, valid.';
                return true;
            }
            else{
                span.style.color='red';
                span.innerHTML=value.length+' characters, invalid.';
                return false;
            }
        })
    }
    function confirmpassword_valid(){
        repassword.addEventListener('input',function(){
            var span=document.getElementById('valid_repassword');
            if(repassword.value===password.value){
                span.style.color='green';
                span.innerHTML='Password confirmed.'
				if(password.value===''){
					span.innerHTML=''
				}
            }
            else{
                span.style.color='red';
                span.innerHTML='Password unconfirmed.'
            }
        });
        password.addEventListener('input',function(){
            var span=document.getElementById('valid_repassword');
            if(repassword.value===password.value){
                span.style.color='green';
                span.innerHTML='Password confirmed.'
				if(password.value===''){
					span.innerHTML=''
				}
            }
            else{
                span.style.color='red';
                span.innerHTML='Password unconfirmed.'
            }
        })

    }
});
