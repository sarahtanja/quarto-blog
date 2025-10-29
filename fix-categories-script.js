// Fix for category click handlers when data-category attributes are not Base64 encoded
// This is a workaround for Quarto 1.4.549 bug

window.document.addEventListener("DOMContentLoaded", function (_event) {
  // Check if categories are already properly encoded
  const categoryEls = window.document.querySelectorAll(
    ".quarto-listing-category .category"
  );
  
  // If there are no category elements, exit early
  if (categoryEls.length === 0) {
    return;
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
    return; // Categories are already properly encoded
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
  
  // After fixing the attributes, manually trigger the category click handler setup
  // This code is similar to what's in quarto-listing.js
  for (const categoryEl of categoryEls) {
    const category = decodeURIComponent(
      atob(categoryEl.getAttribute("data-category"))
    );
    categoryEl.onclick = () => {
      // Call the existing Quarto function if available
      if (typeof window.quartoListingCategory === 'function') {
        window.quartoListingCategory(btoa(encodeURIComponent(category)));
      } else {
        // Fallback: directly filter
        activateCategory(category);
        setCategoryHash(category);
      }
    };
    // Make it clear these are clickable
    categoryEl.style.cursor = 'pointer';
  }
  
  // Helper functions (copied from quarto-listing.js in case they're not available globally)
  function setCategoryHash(category) {
    if (typeof setHash === 'function') {
      setHash({ category });
    } else {
      window.location.hash = `category=${encodeURIComponent(category)}`;
    }
  }
  
  function activateCategory(category) {
    // Deactivate existing categories
    const activeEls = window.document.querySelectorAll(
      ".quarto-listing-category .category.active"
    );
    for (const activeEl of activeEls) {
      activeEl.classList.remove("active");
    }
  
    // Activate this category
    const categoryEl = window.document.querySelector(
      `.quarto-listing-category .category[data-category='${btoa(
        encodeURIComponent(category)
      )}']`
    );
    if (categoryEl) {
      categoryEl.classList.add("active");
    }
  
    // Filter the listings to this category
    filterListingCategory(category);
  }
  
  function filterListingCategory(category) {
    const listingIds = Object.keys(window["quarto-listings"] || {});
    for (const listingId of listingIds) {
      const list = window["quarto-listings"][listingId];
      if (list) {
        if (category === "") {
          // resets the filter
          list.filter();
        } else {
          // filter to this category
          list.filter(function (item) {
            const itemValues = item.values();
            if (itemValues.categories !== null) {
              const categories = decodeURIComponent(
                atob(itemValues.categories)
              ).split(",");
              return categories.includes(category);
            } else {
              return false;
            }
          });
        }
      }
    }
  }
});
