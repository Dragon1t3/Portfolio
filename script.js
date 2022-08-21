console.log("It's working")

let theme = localStorage.getItem('theme')

if(theme == null){
  setTheme('light')
}else{
  setTheme(theme)
}


let themeDots = document.getElementsByClassName("theme-dot")

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
  if(mode == 'light'){
    document.getElementById('theme-style').href = 'default.css'
  }
  if(mode == 'blue'){
    document.getElementById('theme-style').href = 'blue.css'
  }
  if(mode == 'green'){
    document.getElementById('theme-style').href = 'green.css'
  }
  if(mode == 'purple'){
    document.getElementById('theme-style').href = 'purple.css'
  }

  localStorage.setItem('theme', mode)
}




/* hide #back-top first */
$("#back-top").hide();

/* fade in #back-top */
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('#back-top').fadeIn();
	} else {
		$('#back-top').fadeOut();
	}
});

/* scroll body to 0px on click */
$('#back-top a').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 500);

});
