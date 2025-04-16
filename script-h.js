<!-- Your other content -->

<!-- This goes at the bottom of the file -->
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
      window.open(targetPage, '_blank'); // Opens in a new tab
    });
  }
});

</script>

