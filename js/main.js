let allLinks = document.getElementsByTagName('a');
for(let i = 0; i < allLinks.length; i++){
	allLinks[i].addEventListener('click', preventDefault);
	function preventDefault(e){		
		e.preventDefault();
	}
}

//Portfolio Img-Section Add

let portBtn = document.getElementById('portfolio-btn');
portBtn.addEventListener('click', function(){
	let imgSections = document.getElementById('amazingImg').querySelectorAll('.portfolio-img-section.noactive');
		for(let i = 0; i < imgSections.length; i++){
			imgSections[0].classList.remove('noactive');
		}

		if(imgSections.length == 1){
			portBtn.classList.add('noactive');
		}		
});



//ImgFilter

let portfolioTabsLinks = document.getElementsByClassName('portfolio-link');
let portfolioTabs = document.getElementsByClassName('portfolio-item');

for(i = 0; i < portfolioTabsLinks.length; i ++){	
	portfolioTabs[i].addEventListener('click', function(){
	let portImgCont = document.getElementsByClassName('portfolio-img-section');					
 		imgFilter_v1(this); 
	});
}	

function imgFilter_v1 (des){

let description = des.children[0].innerHTML; 

let imgSections = document.getElementById('amazingImg').querySelectorAll('.portfolio-img-section');
imgSections = Array.prototype.slice.call(imgSections);
imgSections.forEach(function(item){
	let images = item.children;

	  		if(description == "All"){
 				for(i = 0; i < images.length; i++){
 				images[i].classList.add('display-none');
 				images[i].classList.remove('display-none');				
 			}
 		}else if (description == "Graphic Design"){				
 			for(i = 0; i < images.length; i++){
 				images[i].classList.add('display-none');			
 			}
 			let graphicDesign = document.getElementsByClassName('graphic-design display-none');
 			graphicDesign = Array.prototype.slice.call(graphicDesign);			
 			graphicDesign.forEach(function(item){
 				item.classList.remove('display-none');
 			});
			
 		}else if (description == "Web Design"){
 			for(i = 0; i < images.length; i++){
 				images[i].classList.add('display-none');			
 			}
 			let webDesign = document.getElementsByClassName('web-design display-none');
 			webDesign = Array.prototype.slice.call(webDesign);
 			webDesign.forEach(function(item){
 				item.classList.remove('display-none');
 			});
 			
 		}else if (description == "Landing Pages"){
 			for(i = 0; i < images.length; i++){
 				images[i].classList.add('display-none');			
 			}
 			let landingPages = document.getElementsByClassName('landing-page display-none');
 			landingPages = Array.prototype.slice.call(landingPages);
 			landingPages.forEach(function(item){
 				item.classList.remove('display-none');
 			}); 			
 		}else if (description == "Wordpress"){
 			for(i = 0; i < images.length; i++){
 				images[i].classList.add('display-none');			
 			}
 			let wordpress = document.getElementsByClassName('wordpress display-none');
 			wordpress = Array.prototype.slice.call(wordpress);
 			wordpress.forEach(function(item){
 				item.classList.remove('display-none');
 			});
 		}

	});

}

//TABS

let servicesLinks = document.querySelectorAll('.services-nav .services-link');
for (let i = 0; i < servicesLinks.length; i++) {
    servicesLinks[i].addEventListener('click', function() {
        showServiceContent(this);        
    });
}

function showServiceContent(element) {	
   	let elems = element.parentElement.parentElement.querySelectorAll('.services-link');   		
   	elems = Array.prototype.slice.call(elems);   	
   	const index = elems.indexOf(element);

   	let content = document.querySelectorAll('.services-content');   	 	
   	for(let i = 0; i < content.length; i++){   		
   		if(index == i){
   			content[i].style.display = 'flex';
   		}else{
   			content[i].style.display = 'none';
   		}
   	}
   	
}



//Gallery

let galleryBtn = document.getElementById('galleryBtn');

	galleryBtn.addEventListener('click', function(){		
	let noactiveSections = this.parentElement.querySelectorAll('.noactive')
		noactiveSections = Array.prototype.slice.call(noactiveSections);
		noactiveSections.forEach(function(item){
			item.classList.remove('noactive');	
		});

		galleryBtn.classList.add('noactive');
});

//_________________________________________________________________________________
