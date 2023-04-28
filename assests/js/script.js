$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

// document.addEventListener("visibilitychange", function () {
//   if (document.visibilityState === "visible") {
//     document.title = "Portfolio | Pradeep Tiwari";
//     $("#favicon").attr("href", "assests/images/myPhoto.jpeg");
//   } else {
//     document.title = "Come Back To Portfolio";
//     $("#favicon").attr("href", "assests/images/favhand.png");
//   }
// });

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["Full stack developer", "Software Engineer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->
async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects/projects.json"));
  const data = await response.json();
  return data;
}

// tools start




// tools end //

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

fetchData().then((data) => {
  showSkills(data);
});
// <!-- tilt js effect starts -->
//   VanillaTilt.init(document.querySelectorAll(".tilt"), {
//     max: 15,
//   });
// <!-- tilt js effect ends -->

// pre loader start
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 500);
}
 window.onload = fadeOut;
 //  window.onload = fadeOut;
// pre loader end

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});


/* SCROLL HOME */
srtop.reveal(".home .content h3", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });

srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .twitter", { interval: 1000 });
srtop.reveal(".home .email", { interval: 600 });
// srtop.reveal('.home .instagram',{interval: 600});
srtop.reveal(".home .dev", { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal("#about", { interval: 100 });
 srtop.reveal("#about", { delay: 100 });
 srtop.reveal(".about .content .tag", { delay: 100 });
 srtop.reveal(".about .content p", { delay: 200 });
 srtop.reveal(".about .content .box-container", { delay: 200 });
 srtop.reveal(".about .content .resumebtn", { delay: 150 });

/* SCROLL SKILLS */
 srtop.reveal("#skills", { interval: 100 });
 srtop.reveal(".skills .heading .container", { interval: 200 });
 srtop.reveal('.skills .container .bar',{delay: 300});
const targetElement = document.querySelector('#home');
const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

// Stop the scroll before the target position
window.scrollTo({
  top: targetPosition,
  behavior: 'smooth'
});
/* SCROLL EDUCATION */
// srtop.reveal('.education .box',{interval: 200});

/* SCROLL PROJECTS */
// srtop.reveal(".work .box", { interval: 100 });

/* SCROLL EXPERIENCE */
// srtop.reveal('.experience .timeline',{delay: 400});
// srtop.reveal('.experience .timeline .container',{interval: 400});

/* SCROLL CONTACT */
// srtop.reveal('.contact .container',{delay: 50});
// srtop.reveal('.contact .container .form-group',{delay: 400});

//document.querySelector("#resumebtn").addEventListener("click",resumefn())

function resumefn(){
   window.open("https://drive.google.com/file/d/1Xq8dz9FMH0sgQvKIVV77-PSGmh11yios/view?usp=share_link")
 

 
}