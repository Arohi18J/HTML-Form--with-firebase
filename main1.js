

//the db connectivity code(will differ for different mail accounts in firebase )
const firebaseConfig = {
    apiKey: "AIzaSyDftPNGlIp54KztTzbCYhGUxjyxCG09fkk",
    authDomain: "contactform-6eda2.firebaseapp.com",
    databaseURL: "https://contactform-6eda2-default-rtdb.firebaseio.com",
    projectId: "contactform-6e22e2",
    storageBucket: "contactform-6e34w.appspot.com",
    messagingSenderId: "778931176127",
    appId: "1:4701931176127:web:d8dc8aa8be4ed667990c0a",
    measurementId: "G-PMH12TGHT"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var phone = getElementVal("phone");
    var emailid = getElementVal("emailid");
    var pass = getElementVal("pass");
    var gen1 = getElementVal("gen1");
    var gen2 = getElementVal("gen2");
  
  
    saveMessages(name, phone, emailid, pass, gen1, gen2);
  
  }
    //   reset the form
    document.getElementById("contactForm").reset();
  
  
  const saveMessages = (name, phone, emailid, pass, gen1, gen2) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
        name: name,
        phone: phone,
        emailid: emailid,
        pass: pass,
        gen1: gen1,
        gen2: gen2,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };