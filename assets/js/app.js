/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){

  function price_sum(){

  }

  var checkbox = document.querySelector(".checkbox_contact");
  var menu = document.querySelector(".main_menu").children[0];
  var subMenu = document.querySelector(".dropdown_menu");
  var firstPhoto = document.getElementsByClassName("photo1");
  var secondPhoto = document.getElementsByClassName("photo2");
  var description = document.querySelectorAll(".description");
  var leftArrow = document.querySelectorAll(".arrow")[0];
  var rightArrow = document.querySelectorAll(".arrow")[1];
  var gallery = document.querySelector(".gallery");
  var list_arrow = document.querySelectorAll(".list_arrow");
  var panels = document.querySelectorAll(".list_panel");
  var firstPanelList = panels[0].querySelectorAll("li");
  var secondPanelList = panels[1].querySelectorAll("li");
  var thirdPanelList = panels[2].querySelectorAll("li");
  var panel_left_title = document.querySelector(".panel_left").querySelector(".title");
  var panel_left_color = document.querySelector(".panel_left").querySelector(".color");
  var panel_left_pattern = document.querySelector(".panel_left").querySelector(".pattern");
  var panel_left_transport= document.querySelector(".panel_left").querySelector(".transport");
  var panel_right_title = document.querySelector(".panel_right").querySelector(".title")
  var panel_right_color = document.querySelector(".panel_right").querySelector(".color")
  var panel_right_pattern = document.querySelector(".panel_right").querySelector(".pattern")
  var panel_right_transport = document.querySelector(".panel_right").querySelector(".transport")
  var transport = document.querySelector("#transport")
  var panel_right_sum = document.querySelector(".sum")
  var counter = 0;
  var transport_counter = 0;
  var sum = 0;
  var title_price = 0;
  var color_price = 0;
  var pattern_price = 0;
  var transport_price = 0;

  console.log(panel_left_title);

  var chairs = ["images/black_chair.png","images/red.png","images/orange.png"];


  leftArrow.addEventListener("click", function(){
    if(counter <= 0){
      counter = (chairs.length-1);
      gallery.src = chairs[counter];
    }else{
      counter--;
      gallery.src = chairs[counter];
    }

  });

  rightArrow.addEventListener("click", function(){
    if(counter >= (chairs.length-1)){
      counter = 0;
      gallery.src = chairs[counter];
    }else{
      counter++;
      gallery.src = chairs[counter];
    }

  });

  checkbox.addEventListener("click", function(){
    this.classList.toggle("activated");
  });


    menu.addEventListener("mouseover", function(){
      console.log(subMenu);
      subMenu.classList.remove("hidden");
    });
    menu.addEventListener("mouseout", function(){
      subMenu.classList.add("hidden");
      console.log(subMenu);
    });


  firstPhoto[0].addEventListener("mouseover", function(){
    description[0].classList.add("hidden");
  });

  firstPhoto[0].addEventListener("mouseout", function(){
    description[0].classList.remove("hidden");
  });

  secondPhoto[0].addEventListener("mouseover", function(){
    description[1].classList.add("hidden");
  });

  secondPhoto[0].addEventListener("mouseout", function(){
    description[1].classList.remove("hidden");
  });

  for (var i = 0; i < list_arrow.length; i++) {
    list_arrow[i].addEventListener("click", function(){
      this.nextElementSibling.classList.toggle("hidden");
    })
  }
  for (var i = 0; i < firstPanelList.length; i++) {
    firstPanelList[i].addEventListener("click", function(){
      panel_left_title.innerText = this.innerText;
      panel_right_title.innerText = this.dataset.price;
      title_price = Number(this.dataset.price);
      this.parentElement.classList.toggle("hidden");
      this.parentElement.previousElementSibling.previousElementSibling.innerText = this.innerText;
      sum = title_price + color_price + pattern_price + transport_price;
      panel_right_sum.innerText = sum;
    })
  }
  for (var i = 0; i < secondPanelList.length; i++) {
    secondPanelList[i].addEventListener("click", function(){
      panel_left_color.innerText = this.innerText;
      panel_right_color.innerText = this.dataset.price;
      color_price = Number(this.dataset.price);
      this.parentElement.classList.toggle("hidden");
      this.parentElement.previousElementSibling.previousElementSibling.innerText = this.innerText;
      sum = title_price + color_price + pattern_price + transport_price;
      panel_right_sum.innerText = sum;
    })
  }
  for (var i = 0; i < thirdPanelList.length; i++) {
    thirdPanelList[i].addEventListener("click", function(){
      panel_left_pattern.innerText = this.innerText;
      panel_right_pattern.innerText = this.dataset.price;
      pattern_price = Number(this.dataset.price);
      this.parentElement.classList.toggle("hidden");
      this.parentElement.previousElementSibling.previousElementSibling.innerText = this.innerText;
      sum = title_price + color_price + pattern_price + transport_price;
      panel_right_sum.innerText = sum;
    })
  }
  transport.addEventListener("click", function(){
    if(transport_counter == 0){
      panel_left_transport.innerText = "Transport";
      panel_right_transport.innerText = this.dataset.price;
      transport_price = Number(this.dataset.price);
      sum = title_price + color_price + pattern_price + transport_price;
      panel_right_sum.innerText = sum;
      transport_counter++;
      console.log(this.dataset.transport);
    }else{
      panel_left_transport.innerText = "";
      panel_right_transport.innerText = "";
      transport_counter = 0;
      transport_price = 0;
      sum = title_price + color_price + pattern_price + transport_price;
      panel_right_sum.innerText = sum;
    }
  })


});
