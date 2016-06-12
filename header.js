window.addEventListener('load',function(){
	document.head.appendChild(cssDiv('header.css'))
	document.head.appendChild(cssDiv('https://fonts.googleapis.com/icon?family=Material+Icons'))
	var header=document.getElementById('header')
	var home=document.createElement('a')
	home.className='material-icons'
	home.innerHTML='homeHOME'
	home.href='home.html'
	var top=document.createElement('a')
	top.className='material-icons'
	top.innerHTML='publishTOP'
	top.href='javascript:window.scrollTo(0,0)'
	var about=document.createElement('a')
	about.className='material-icons'
	about.innerHTML='infoABOUT'
	about.href='about.html'
	var album=document.createElement('a')
	album.className='material-icons'
	album.innerHTML='view_quiltALBUM'
	album.href='album.html'
	var register=document.createElement('a')
	register.className='material-icons'
	register.innerHTML='person_addREGISTER'
	register.href='register.html'
	var login=document.createElement('a')
	login.className='material-icons'
	login.innerHTML='exit_to_appLOGIN'
	login.href='login.html'
	header.appendChild(home)
	header.appendChild(top)
	header.appendChild(about)
	header.appendChild(album)
	header.appendChild(register)
	header.appendChild(login)
})
function cssDiv(href){
	var css=document.createElement('link')
	css.rel='stylesheet'
	css.type='text/css'
	css.href=href
	return css
}
