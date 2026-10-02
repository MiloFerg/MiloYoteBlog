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
            
            <div class="section">
                <ul id="header-menu">
                    <li>
                        <a href="index.html">
                            <img src="site-images/flower-btn1.png" class="header-img-btn">
                        </a>
                    </li>
                    <li>
                        <a href="animation.html">
                            <img src="site-images/flower-btn2.png" class="header-img-btn">
                        </a>
                    </li>
                    <li>
                        <a href="backgrounds.html">
                            <img src="site-images/flower-btn3.png" class="header-img-btn">
                        </a>
                    </li>
                    <li>
                        <a href="blog.html">
                            <img src="site-images/flower-btn4.png" class="header-img-btn">
                        </a>
                    </li>
                    <li>
                        <a href="#.html">
                            <img src="site-images/flower-btn5.png" class="header-img-btn">
                        </a>
                    </li>
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