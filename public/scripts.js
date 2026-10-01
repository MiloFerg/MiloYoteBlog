// gif reload on refresh
// Wait for the DOM to be ready
window.addEventListener('DOMContentLoaded', () => {
    const gifElement = document.getElementById('name-art');
    const originalSrc = gifElement.src;
    
    //  Append a unique timestamp to force a reload from scratch
    gifElement.src = originalSrc + '?t=' + new Date().getTime();
});

// how i did this: https://www.youtube.com/watch?v=AiQqip_pVbA
// custom header 

class CustomHeader extends HTMLElement {
    connectedCallback() {
         this.innerHTML = `
            <link rel="stylesheet" href="styles.css">
            <div class="section" id="header">
                <div id="name-header">
                <img src="site-images/nametag_full.gif" id="name-art"></img>
                </div>
            </div>
            
            <div id="header-menu" class="section">
                <ul>
                <li id="home-button"><img src="site-images/flower-btn1.png" class="header-img-btn"><a href="index.html" class="header-link">home</a></img></li>
                <li id="anim-button"><img src="site-images/flower-btn2.png" class="header-img-btn"><a href="animation.html" class="header-link">animation</a></img></li>
                <li id="bg-button"><img src="site-images/flower-btn3.png" class="header-img-btn"><a href="backgrounds.html" class="header-link">backgrounds</a></img></li>
                <li id="blog-button"><img src="site-images/flower-btn4.png" class="header-img-btn"><a href="blog.html" class="header-link">blog</a></img></li>
                </ul> 
            </div>
         `
    }
}

// custom footer 

class CustomFooter extends HTMLElement {
    connectedCallback() {
         this.innerHTML = `
            <link rel="stylesheet" href="styles.css">
            <div class="section" id="footer">
                <ul>
                <li><a href="https://x.com/miloyote">twitter</a></li>
                <li><a href="https://www.instagram.com/miloyote/">instagram</a></li>
                <li><a href="https://www.youtube.com/@MiloYote">youtube</a></li>
                </ul>
            </div>
         `
    }
}

//define all custom html elements
customElements.define('custom-header', CustomHeader)
customElements.define('custom-footer', CustomFooter)