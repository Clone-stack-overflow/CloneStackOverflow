
document.addEventListener('DOMContentLoaded', function () {
  const firstParagraph = document.getElementById('firstParagraph');
  const secondParagraph = document.getElementById('secondParagraph');
  const words = ['developer', 'data scientist', 'system admin', 'mobile developer', 'game developer'];
  let currentWordIndex = 0;

  function changeWord() {
      firstParagraph.innerHTML = `Every <span style="color: rgb(230,112,13)">${words[currentWordIndex]}</span> has a`;
      secondParagraph.textContent = 'tab open to Stack Overflow';
      currentWordIndex = (currentWordIndex + 1) % words.length;
  }

  changeWord(); // İlk kelimeleri değiştir
  setInterval(changeWord, 2000); // Her 2 saniyede bir kelime değiştir
});




document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".anim-element");
  let index = 0;

  function showElement() {
      elements[index].classList.add("active");
      index++;
      if (index < elements.length) {
          setTimeout(showElement, 1000);
      }
  }

  showElement();

  window.onbeforeunload = function () {
      index = 0;
      elements.forEach((element) => {
          element.classList.remove("active");
      });
  };
});

                

document.getElementById('devops-card').addEventListener('click', function() {
    var cardContent = this.querySelector('.card-content');
    var rocketIcon = this.querySelector('#rocket-icon');
    
    if (cardContent.textContent === 'DevOps engineers') {
        cardContent.innerHTML = 'Shipping new products and features<br>requires teamwork and<br>coordination. Forget checklists and<br>long docs no one ever reads.';
        rocketIcon.style.color = '#007bff'; // Deniz mavisi
    } else {
        cardContent.textContent = 'DevOps engineers';
        rocketIcon.style.color = 'white'; // Beyaz
    }
});

document.getElementById('data-card').addEventListener('click', function() {
    var cardContent = this.querySelector('.card-content-1');
    var rocketIcon = this.querySelector('#data-icon');
    
    if (cardContent.textContent === 'Data scientists') {
        cardContent.innerHTML = 'Business decisions are better when<br>backed by data. Give visibility to the<br>data that support your strategies.';
        rocketIcon.style.color = '#007bff'; // Deniz mavisi
    } else {
        cardContent.textContent = 'Data scientists';
        rocketIcon.style.color = 'white'; // Beyaz
    }
});

document.getElementById('software-card').addEventListener('click', function() {
    var cardContent = this.querySelector('.card-content-2');
    var rocketIcon = this.querySelector('#software-icon');
    
    if (cardContent.textContent === 'Software engineers') {
        cardContent.innerHTML = 'Help engineers be more efficient and<br>streamline knowledge sharing using a<br>tool they already love and trust.';
        rocketIcon.style.color = '#007bff'; // Deniz mavisi
    } else {
        cardContent.textContent = 'Software engineers';
        rocketIcon.style.color = 'white'; // Beyaz
    }
});

document.getElementById('support-card').addEventListener('click', function() {
    var cardContent = this.querySelector('.card-content-3');
    var rocketIcon = this.querySelector('#support-icon');
    
    if (cardContent.textContent === 'Support teams') {
        cardContent.innerHTML = 'Level up your support by providing<br>information to your customers using<br>a natural interface: questions and <br>answers.';
        rocketIcon.style.color = '#007bff'; // Deniz mavisi
    } else {
        cardContent.textContent = 'Support teams';
        rocketIcon.style.color = 'white'; // Beyaz
    }
});

document.getElementById('engineering-card').addEventListener('click', function() {
    var cardContent = this.querySelector('.card-content-4');
    var rocketIcon = this.querySelector('#engineering-icon');
    
    if (cardContent.textContent === 'Engineering leaders') {
        cardContent.innerHTML = 'Level up your support by providing<br>information to your customers using<br>a natural interface: questions and <br>answers.';
        rocketIcon.style.color = '#007bff'; // Deniz mavisi
    } else {
        cardContent.textContent = 'Engineering leaders';
        rocketIcon.style.color = 'white'; // Beyaz
    }
});



