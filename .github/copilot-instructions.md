# GitHub Copilot Instructions for Sarah Tanja's Open Lab Notebook

## Repository Overview

This is a Quarto-based website serving as an open lab notebook for marine biology research. It documents research on plastic pollution, climate impacts on coastal primary producers, and multiple stressor effects on marine organisms.

**Live Site:** https://sarahtanja.github.io/quarto-blog/

## Tech Stack

- **Framework:** [Quarto](https://quarto.org/) - An open-source scientific and technical publishing system
- **Language:** Primarily Quarto Markdown (.qmd files), R, and YAML
- **Styling:** Custom CSS themes (light-theme.css, dark-theme.css)
- **Bibliography:** BibTeX format (references.bib, about.bib)
- **Deployment:** GitHub Pages

## Project Structure

```
.
├── _quarto.yml          # Main configuration file
├── home.qmd             # Homepage
├── about.qmd            # About page with research background
├── contact.qmd          # Contact information
├── posts.qmd            # Blog posts listing
├── projects.qmd         # Research projects listing
├── posts/               # Individual blog posts and research notes
├── images/              # Image assets
├── video-clips/         # Video content
├── docs/                # Documentation
├── _site/               # Generated site output (not tracked)
└── _freeze/             # Quarto's compute cache
```

## Coding Conventions

### Quarto Markdown Files (.qmd)

- Use proper YAML frontmatter with title, description, author, and date
- Follow Quarto's chunk syntax for R code: `{r}` blocks
- Include appropriate figure captions and alt text for accessibility
- Use relative paths for internal links

### YAML Configuration

- Maintain consistent indentation (2 spaces)
- Keep _quarto.yml organized by sections (project, website, format)
- Document any custom configurations with comments

### Citations and References

- Use BibTeX format for bibliography entries
- Reference citations using [@key] syntax
- Keep references.bib and about.bib organized alphabetically

### Style Guidelines

- Write in clear, scientific language appropriate for an open lab notebook
- Include proper metadata for research reproducibility
- Use meaningful file names that reflect content
- Keep posts organized by topic/project in subdirectories

## Research Focus Areas

When working with content, be aware of these research themes:
- Marine biology and ecology
- Plastic pollution (microplastic-associated impacts)
- Climate change and heat stress
- Photosynthetic efficiency
- Coral and sea anemone biology
- Microbiome research
- Multiple stressor interactions

Central research question: **"Does pollution undermine climate resilience?"**

## Building and Testing

```bash
# Preview the site locally
quarto preview

# Render the entire site
quarto render

# Render a specific file
quarto render path/to/file.qmd
```

## Best Practices

1. **Content Creation:**
   - When adding new posts, create them in the `posts/` directory
   - Include proper YAML frontmatter
   - Add to the appropriate category/project folder

2. **Bibliography Management:**
   - Add new references to references.bib
   - Use consistent BibTeX formatting
   - Include DOIs when available

3. **Image Handling:**
   - Store images in `images/` directory or within post folders
   - Use descriptive filenames
   - Always include alt text for accessibility

4. **Code Blocks:**
   - Use appropriate language identifiers (r, python, bash, etc.)
   - Include comments for complex analysis steps
   - Ensure code is reproducible

5. **Version Control:**
   - Commit frequently with descriptive messages
   - Don't commit generated files from `_site/`
   - Keep `_freeze/` in version control for computational reproducibility

## Common Tasks

- **Adding a new blog post:** Create a new .qmd file in `posts/[category]/` with proper frontmatter
- **Updating navigation:** Edit the navbar section in `_quarto.yml`
- **Modifying themes:** Edit `light-theme.css` or `dark-theme.css`
- **Adding references:** Update `references.bib` with new BibTeX entries
- **Updating about page:** Edit `about.qmd` and `about.bib`

## Notes for AI Assistance

- This is an active research repository, treat content with scientific rigor
- Preserve existing formatting and citation styles
- When suggesting changes to research content, be conservative
- Respect the academic and scientific nature of the content
- Be mindful of reproducibility requirements in scientific computing
