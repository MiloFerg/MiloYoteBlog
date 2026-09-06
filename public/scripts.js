// 2. Wait for the DOM to be ready
window.addEventListener('DOMContentLoaded', () => {
    const gifElement = document.getElementById('name-art');
    const originalSrc = gifElement.src;
    
    // 3. Append a unique timestamp to force a reload from scratch
    gifElement.src = originalSrc + '?t=' + new Date().getTime();
});