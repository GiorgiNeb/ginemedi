"use strict";

const closeImage = document.querySelector("#closeImage");
const zoomed = document.querySelector(".zoomed");
const imageZoomed = document.querySelector(".imageZoomed");
const image = document.querySelectorAll(".galleryImage");
const leftB = document.querySelector("#leftB");
const rightB = document.querySelector("#rightB");
let nextImg = 5;
const imageArray = [];
let headerelement = document.getElementById("header");
let footerelement = document.getElementById("footer");
let messenger = document.getElementById("messenger");

headerelement.innerHTML = `<h1 id="logo"></h1>
<ul id="headerUl">
  <li>
    <a href="index.html"><i class="fa-solid fa-house"></i>მთავარი</a>
  </li>
  <li>
    <a href="#"><i class="fa-solid fa-user-doctor"></i> ექიმები</a>
  </li>
  <li>
    <a href="#"><i class="fa-solid fa-circle-info"></i> ჩვენ შესახებ</a>
  </li>
  <li>
    <a href="services.html"
      ><i class="fa-solid fa-stethoscope"></i>სერვისები</a
    >
    <div class="subList">
      <ul>
        <li><a href="#">გინეკოლოგია</a></li>
        <li><a href="#">ექოსკოპია</a></li>
        <li><a href="#">ლაბორატორია</a></li>
      </ul>
    </div>
  </li>
  <li>
    <a href="gallery.html"><i class="fa-regular fa-images"></i>გალერეა</a>
  </li>
  <li>
    <a href="contact.html"><i class="fa-solid fa-phone"></i>კონტაქტი</a>
  </li>
</ul>`;

footerelement.innerHTML = `<iframe
class="map"
frameborder="0"
scrolling="no"
marginheight="0"
marginwidth="0"
src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=10/1%20%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%96%20%E1%83%AE%E1%83%A3%E1%83%93%E1%83%90%E1%83%93%E1%83%9D%E1%83%95%E1%83%98%E1%83%A1%20%E1%83%A5%E1%83%A3%E1%83%A9%E1%83%90+(%E1%83%99%E1%83%9A%E1%83%98%E1%83%9C%E1%83%98%E1%83%99%E1%83%90%20%E1%83%92%E1%83%98%E1%83%9C%E1%83%94%E1%83%9B%E1%83%94%E1%83%93%E1%83%98)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
><a href="https://www.maps.ie/distance-area-calculator.html"
  >distance maps</a
></iframe
>
<div class="footerContacts">
<h1>
  <a
    target="_blank"
    href="https://www.google.ge/maps/place/10%2F1+%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%96+%E1%83%AE%E1%83%A3%E1%83%93%E1%83%90%E1%83%93%E1%83%9D%E1%83%95%E1%83%98%E1%83%A1+%E1%83%A5%E1%83%A3%E1%83%A9%E1%83%90,+T'bilisi/@41.7244451,44.8013741,17z/data=!4m6!3m5!1s0x404472cb223e1127:0x7a16447700b41830!8m2!3d41.7249162!4d44.8010486!16s%2Fg%2F11b6gl_5m_?hl=en-GB"
    ><i class="fa-solid fa-location-dot"></i> ნიკოლოზ ხუდადოვის N10</a
  >
</h1>
<h1>
  <a target="_blank" href="https://www.facebook.com/ginemedi"
    ><i class="fa-brands fa-facebook"></i>შემოგვიერთდით</a
  >
</h1>
<h1>
  <a href="tel:+995322941447"
    ><i class="fa-solid fa-phone-volume"></i>+995 32 2 94 14 47</a
  >
  <a href="tel:+995599451551"
    ><i class="fa-solid fa-mobile"></i>+995 599 45 15 51</a
  >
</h1>
<h1>
  <a target="_blank" href="mailto:ginemedi@yahoo.com"
    ><i class="fa-solid fa-envelope"></i>მოგვწერეთ მეილი</a
  >
</h1>
<hr />
</div>`;

messenger.innerHTML = `
<!-- Messenger Chat plugin Code -->
<div id="fb-root"></div>

<!-- Your Chat plugin code -->
<div id="fb-customer-chat" class="fb-customerchat"></div>

<script>
  var chatbox = document.getElementById("fb-customer-chat");
  chatbox.setAttribute("page_id", "225325919427623");
  chatbox.setAttribute("attribution", "biz_inbox");
</script>

<!-- Your SDK code -->
<script>
  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: "v15.0",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
</script>`;

// Start of gallery section
closeImage.addEventListener("click", function () {
  zoomed.style.display = "none";
});

image.forEach(function (element) {
  imageArray.push(element.src);
  element.addEventListener("click", function () {
    zoomed.style.display = "block";
    imageZoomed.src = element.src;
    nextImg = imageArray.indexOf(element.src);
    console.log(nextImg);
  });
});

leftB.addEventListener("click", function () {
  if (nextImg === 0) {
    nextImg = image.length;
  }
  if (nextImg > 0) {
    nextImg--;
    imageZoomed.src = image[nextImg].src;
  }
  console.log(nextImg);
});

rightB.addEventListener("click", function () {
  if (nextImg === image.length - 1) {
    nextImg = -1;
  }
  if (nextImg < image.length - 1) {
    nextImg++;
    imageZoomed.src = image[nextImg].src;
  }
  console.log(nextImg);
});

// End of gallery section
