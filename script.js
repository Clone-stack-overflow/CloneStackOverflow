
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
