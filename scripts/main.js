let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/peter-and-ruth.jpg') {
      myImage.setAttribute('src','images/Rory-Top30.jpg');
    } else {
      myImage.setAttribute('src','images/peter-and-ruth.jpg');
    }
    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');
    function setUserName() {
        let myName = prompt('Please enter your name.');
        if(!myName) {
          setUserName();
        } else {
          localStorage.setItem('name', myName);
          myHeading.innerHTML = 'Mozilla is cool, ' + myName;
        }
      }
    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Welcome to Golf Buddies, ' + storedName;
    }
    myButton.onclick = function() {
        setUserName();
    }
}