# Quarto Categories Click Issue

## Problem
On the posts page (`posts.qmd`), the category filters displayed in the sidebar are not clickable. When you click on a category like "anemones" or "code", nothing happens - the posts are not filtered.

## Root Cause
This is a bug in Quarto versions 1.4.x through at least 1.5.57. The issue is:

1. Quarto renders categories with plain-text `data-category` attributes (e.g., `data-category="anemones"`)
2. But Quarto's JavaScript (`site_libs/quarto-listing/quarto-listing.js`) expects these to be Base64-encoded (e.g., `data-category="YW5lbW9uZXM="`)
3. When the JavaScript tries to decode the plain-text values, it fails with an error: `InvalidCharacterError: Failed to execute 'atob' on 'Window'`
4. This prevents the click handlers from being attached to the category elements

## Workaround Attempted
A JavaScript fix has been added in `fix-categories-script.js` that:
- Detects if categories need Base64 encoding
- Encodes them before Quarto's code processes them
- Uses event capture phase to run early

However, due to script loading order, the fix has timing issues and needs refinement.

## Recommended Solutions

### Option 1: Wait for Quarto Fix (Recommended)
This appears to be a framework bug that should be fixed in a future Quarto release. Monitor:
- [Quarto GitHub Issues](https://github.com/quarto-dev/quarto-cli/issues)
- Check if this has been reported or fixed in newer versions

### Option 2: Refine the JavaScript Workaround
The `fix-categories-script.js` needs to be loaded earlier or use a different approach to intercept and fix the categories before Quarto's code runs.

### Option 3: Use a Different Listing Configuration
Try alternative listing configurations in `posts.qmd`:
- `type: grid` instead of `type: default`
- Different category display options

## Testing
To test if categories work:
1. Render the site: `quarto render posts.qmd`
2. Open `docs/posts.html` in a browser
3. Click on a category in the sidebar (e.g., "anemones")
4. Check if the posts filter to show only that category
5. Check browser console for JavaScript errors

## Files Involved
- `posts.qmd` - Posts page configuration with `categories: true`
- `_quarto.yml` - Site configuration with JavaScript include
- `fix-categories-script.js` - Workaround script (needs refinement)
- `fix-categories.html` - HTML wrapper for the script
- `docs/site_libs/quarto-listing/quarto-listing.js` - Quarto's listing JavaScript (part of framework)

## Status
- [x] Issue identified and documented
- [x] Root cause analyzed (Quarto bug)
- [x] JavaScript workaround created
- [ ] Workaround timing refined
- [ ] Categories fully functional
