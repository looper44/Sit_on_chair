document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".checkbox_contact"),t=document.querySelector(".main_menu").children[0],n=document.querySelector(".dropdown_menu"),r=document.getElementsByClassName("photo1"),i=document.getElementsByClassName("photo2"),l=document.querySelectorAll(".description"),o=document.querySelectorAll(".arrow")[0],c=document.querySelectorAll(".arrow")[1],s=document.querySelector(".gallery"),d=document.querySelectorAll(".list_arrow"),a=document.querySelectorAll(".list_panel"),u=a[0].querySelectorAll("li"),m=a[1].querySelectorAll("li"),h=a[2].querySelectorAll("li"),p=document.querySelector(".panel_left").querySelector(".title"),g=document.querySelector(".panel_left").querySelector(".color"),S=document.querySelector(".panel_left").querySelector(".pattern"),y=document.querySelector(".panel_left").querySelector(".transport"),v=document.querySelector(".panel_right").querySelector(".title"),q=document.querySelector(".panel_right").querySelector(".color"),E=document.querySelector(".panel_right").querySelector(".pattern"),L=document.querySelector(".panel_right").querySelector(".transport"),x=document.querySelector("#transport"),T=document.querySelector(".sum"),f=0,_=0,b=0,k=0,A=0,N=0,w=0;console.log(p);var C=["images/black_chair.png","images/red.png","images/orange.png"];o.addEventListener("click",function(){f<=0?(f=C.length-1,s.src=C[f]):(f--,s.src=C[f])}),c.addEventListener("click",function(){f>=C.length-1?(f=0,s.src=C[f]):(f++,s.src=C[f])}),e.addEventListener("click",function(){this.classList.toggle("activated")}),t.addEventListener("mouseover",function(){console.log(n),n.classList.remove("hidden")}),t.addEventListener("mouseout",function(){n.classList.add("hidden"),console.log(n)}),r[0].addEventListener("mouseover",function(){l[0].classList.add("hidden")}),r[0].addEventListener("mouseout",function(){l[0].classList.remove("hidden")}),i[0].addEventListener("mouseover",function(){l[1].classList.add("hidden")}),i[0].addEventListener("mouseout",function(){l[1].classList.remove("hidden")});for(B=0;B<d.length;B++)d[B].addEventListener("click",function(){this.nextElementSibling.classList.toggle("hidden")});for(B=0;B<u.length;B++)u[B].addEventListener("click",function(){p.innerText=this.innerText,v.innerText=this.dataset.price,k=Number(this.dataset.price),this.parentElement.classList.toggle("hidden"),this.parentElement.previousElementSibling.previousElementSibling.innerText=this.innerText,b=k+A+N+w,T.innerText=b});for(B=0;B<m.length;B++)m[B].addEventListener("click",function(){g.innerText=this.innerText,q.innerText=this.dataset.price,A=Number(this.dataset.price),this.parentElement.classList.toggle("hidden"),this.parentElement.previousElementSibling.previousElementSibling.innerText=this.innerText,b=k+A+N+w,T.innerText=b});for(var B=0;B<h.length;B++)h[B].addEventListener("click",function(){S.innerText=this.innerText,E.innerText=this.dataset.price,N=Number(this.dataset.price),this.parentElement.classList.toggle("hidden"),this.parentElement.previousElementSibling.previousElementSibling.innerText=this.innerText,b=k+A+N+w,T.innerText=b});x.addEventListener("click",function(){0==_?(y.innerText="Transport",L.innerText=this.dataset.price,w=Number(this.dataset.price),b=k+A+N+w,T.innerText=b,_++,console.log(this.dataset.transport)):(y.innerText="",L.innerText="",_=0,b=k+A+N+(w=0),T.innerText=b)})});