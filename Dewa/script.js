// JavaScript for smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});

const GoHome = ()=> {
    // Replace 'https://example.com' with the URL you want to open
    const url = '../TellyTwin/index.html';

    // Open the website link in a new tab or window
    window.open(url, '_blank');
}

const openLink = (ulr_) => {
    window.open(ulr_)
}
