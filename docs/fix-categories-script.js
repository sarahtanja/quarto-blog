// Fix for category click handlers when data-category attributes are not Base64 encoded
// This is a workaround for Quarto versions that generate unencoded data-category attributes
// Instead of trying to fix the categories before quarto-listing.js runs, we'll fix them at the right moment

(function() {
  // This function will be called when DOM is ready, and it will fix categories  
  // just before Quarto's listing code tries to process them
  function fixCategoriesNow() {
    const categoryEls = document.querySelectorAll(
      ".quarto-listing-category .category"
    );
    
    // If there are no category elements, nothing to do
    if (categoryEls.length === 0) {
      return false;
    }
    
    // Check if the first non-empty category is already Base64 encoded
    let needsFix = false;
    for (const categoryEl of categoryEls) {
      const dataCategoryAttr = categoryEl.getAttribute("data-category");
      if (dataCategoryAttr && dataCategoryAttr !== "") {
        // Try to decode it - if it fails, it's not Base64 encoded
        try {
          atob(dataCategoryAttr);
        } catch (e) {
          // Not Base64 encoded, needs fix
          needsFix = true;
        }
        break;
      }
    }
    
    if (!needsFix) {
      return false; // Categories are already properly encoded
    }
    
    // Fix the data-category attributes by Base64 encoding them
    for (const categoryEl of categoryEls) {
      const dataCategoryAttr = categoryEl.getAttribute("data-category");
      if (dataCategoryAttr !== null) {
        // Encode the category name
        const encoded = btoa(encodeURIComponent(dataCategoryAttr));
        categoryEl.setAttribute("data-category", encoded);
      }
    }
    
    return true; // We fixed the categories
  }
  
  // Intercept DOMContentLoaded to fix categories before quarto-listing.js processes them
  // We use capture phase to run before quarto-listing.js's handler
  document.addEventListener('DOMContentLoaded', function() {
    fixCategoriesNow();
  }, true); // true = capture phase, runs before bubble phase handlers
})();

