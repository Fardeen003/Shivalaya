// Function to load and insert component HTML into a target element
function loadComponent(componentPath, targetElementId) {
    fetch(componentPath)
      .then(response => response.text())  // Get HTML content of the component
      .then(html => {document.getElementById(targetElementId).innerHTML = html;  // Inject into target
      });
  }

  function loadPage(pageName){
      // Load header and footer dynamically into their respective divs
  loadComponent('./src/layout/header.html', 'header');
  loadComponent('./src/layout/footer.html', 'footer');
  
  fetch(`./src/pages/${pageName}.html`)
  .then(res=>res.text())
  .then(pageContent=>{document.getElementById('content').innerHTML=pageContent});

  }

  window.onload = ()=>loadPage('home');

  //reports menu

  const reportsMenu = document.getElementById('reportsMenu');
