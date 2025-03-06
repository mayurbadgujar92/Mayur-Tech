
  function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
  }


  document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if(name === ""){
      alert("Please enter your name.");
      return;
    }


    if(email === "")
    {
      alert("Place enter your email.");
      return;
    }

    //email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if(message === "") {
      alert("Please Enter your Message.");
      return;
    }

    alert(`Thank you, ${name} ! Your message has been Sent.`);
  })