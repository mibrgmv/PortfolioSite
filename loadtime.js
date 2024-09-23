window.onload = () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
    document.getElementById("loadTime").textContent = loadTime + 'ms';
};