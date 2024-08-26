"use strict";

/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

// Define the getRandomUpTo function outside the event listener
function getRandomUpTo(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        await registerSW(); // Assuming registerSW is defined elsewhere
    } catch (err) {
        error.textContent = "Failed to register service worker.";
        errorCode.textContent = err.toString();
        return; // Return to avoid executing further code
    }

    const url = search(address.value, searchEngine.value);
    
    if (!url) {
        error.textContent = "Invalid URL or search query.";
        return; // Return if the URL is invalid
    }

    const url2 = '//dont-sue-me-topvaz.topvazgeo.online/launch.html?domain=' + url;
    const iframe = document.createElement('iframe');
    
    // Apply styles to the iframe
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.bottom = '0';
    iframe.style.right = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.margin = '0';
    iframe.style.padding = '0';
    iframe.style.overflow = 'hidden';
    iframe.style.zIndex = '999999';
    
    iframe.src = url2;
    document.body.appendChild(iframe);
});

/**
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string|null} Fully qualified URL or null if invalid
 */
function search(input, template) {
    try {
        // Input is a valid URL
        return new URL(input).toString();
    } catch (err) {
        // Input was not a valid URL
    }

    try {
        // Input is a valid URL when http:// is added to the start
        const url = new URL(`http://${input}`);
        if (url.hostname.includes(".")) return url.toString();
    } catch (err) {
        // Input was not valid URL
    }

    // Input may have been a valid URL, however the hostname was invalid

    // Attempts to convert the input to a fully qualified URL have failed
    // Treat the input as a search query
    return template.replace("%s", encodeURIComponent(input));
}
