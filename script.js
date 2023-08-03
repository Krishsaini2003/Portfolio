function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function sendEmail()
{
  Email.send({
    Host : "smtp.gmail.com",
    Username : "brokenstorm003@gmail.com",
    Password : "9868996536",
    To : 'krishsaini0214@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New contact form Enquiry",
    Body : "Name :"+ document.getElementById("name").value
          + " <br> Email: "+ document.getElementById("email").value
          + " <br> subject: "+ document.getElementById("subject").value
          + " <br> message: "+ document.getElementById("message").value
}).then(
  message => alert("message send succesfully")
);
}
