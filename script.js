<script>

document.querySelectorAll('img[data-hover]').forEach((img, index) => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');

    img.addEventListener('mouseover', () => {
      img.src = hoverSrc;
    });

    img.addEventListener('mouseout', () => {
      img.src = originalSrc;
    });

    img.addEventListener('click', () => {
      const parent = img.parentElement;

      // Reset alignment for all images
      parent.style.justifyContent = "flex-start";

      if (index === 0) {
        parent.style.justifyContent = "flex-start"; // Left align
      } else if (index === 1) {
        parent.style.justifyContent = "center";     // Center align
      } else if (index === 2) {
        parent.style.justifyContent = "flex-end";   // Right align
      }
    });
});

<div id="footer-placeholder">
</div>
let current = 0;
const texts = document.querySelectorAll('.slide-text');

function switchText() {
  texts[current].classList.remove('active');
  current = (current + 1) % texts.length;
  texts[current].classList.add('active');
}

// Initially show the first text
texts[current].classList.add('active');

// Switch every 3 seconds
setInterval(switchText, 3000);


  document.addEventListener('DOMContentLoaded', () => {
    const pageMap = {
      "Home": "index.html",
      "Project": "index-p.html",
      "Resume": "index-r.html"};

    document.querySelectorAll('img').forEach(img => {
      const targetPage = pageMap[img.alt];
      if (targetPage) {
        img.addEventListener('click', () => {
          window.open(targetPage, '_blank'); // open in new tab
        });
      }
    });

document.addEventListener('DOMContentLoaded', () => {
    // 🔁 Page mapping for SVG clicks
    const pageMap = {
      "Home": "index.html",
      "Project": "index-p.html",
      "Resume": "index-r.html"
    };

 <script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log("JS is running!");

    const pageMap = {
      "Home": "index.html",
      "Project": "index-p.html",
      "Resume": "index-r.html"
    };

    document.querySelectorAll('img').forEach(img => {
      const targetPage = pageMap[img.alt];
      if (targetPage) {
        img.addEventListener('click', () => {
          console.log(`Clicked: ${img.alt}, opening: ${targetPage}`);
          window.location.href = targetPage;
        });
      }
    });
  });

</script>

