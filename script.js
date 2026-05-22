const slides = document.querySelectorAll('.slide');
          let currentSlide = 0;
          
          function showSlide(n) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (n + slides.length) % slides.length;   
          
            slides[currentSlide].classList.add('active');   
          
          }
          
          // Mostrar o próximo slide a cada 3 segundos (ajuste o tempo conforme necessário)
          setInterval(() => {
            showSlide(currentSlide + 1);
          }, 3000);
