document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["Kelime 1", "Kelime 2", "Kelime 3", "Kelime 4", "Kelime 5"]; // Değiştirilecek kelimelerin dizisi
    let currentIndex = 0;
    const textElement = document.getElementById("changing-text");
  
    // Belirli bir aralıkta kelime değiştirme işlevi
    setInterval(function() {
      textElement.textContent = textArray[currentIndex];
      currentIndex = (currentIndex + 1) % textArray.length;
    }, 2000); // 2 saniye aralıklarla kelime değiştir
  });
  