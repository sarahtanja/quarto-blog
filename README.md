# Sarah Tanja's Open Lab Notebook

This is a Quarto-based website serving as an open lab notebook for research on marine biology, plastic pollution, and climate impacts on coastal primary producers.

## Overview

This repository contains the source code for [Sarah Tanja's Open Lab Notebook](https://sarahtanja.github.io/quarto-blog/), built with [Quarto](https://quarto.org/).

## Repository Structure

```mermaid
flowchart TB
    A[Quarto Blog Repository] --> B[Website Content]
    A --> C[Research Projects]
    A --> D[Blog Posts]
    A --> E[Configuration]
    
    B --> B1[index.qmd - About/Landing page]
    B --> B2[contact.qmd]
    
    C --> C1[Coral Embryo Leachate]
    C --> C2[Coral Photophysiology]
    C --> C3[Anemone Photophysiology]
    C --> C4[Coral Microbiome]
    
    D --> D1[Protocols]
    D --> D2[Research Notes]
    D --> D3[Analysis Workflows]
    
    E --> E1[_quarto.yml]
    E --> E2[Custom Themes]
    E --> E3[Bibliography]
    
    style A fill:#993399,stroke:#333,stroke-width:3px,color:#fff
    style B fill:#87CEEB,stroke:#333,stroke-width:2px
    style C fill:#90EE90,stroke:#333,stroke-width:2px
    style D fill:#FFD700,stroke:#333,stroke-width:2px
    style E fill:#FFA07A,stroke:#333,stroke-width:2px
```

## Research Focus

The research documented in this lab notebook explores:

- 🌊 Multiple stressor impacts of microplastic-associated pollution and heat stress on coastal primary producers
- 🪸 Effects on scleractinian corals, sea anemones, kelps, and seaweeds
- 🧬 Microbiome alterations and gene expression changes
- 🔬 Photosynthetic efficiency in marine organisms

**Central Question:** *"Does pollution undermine climate resilience?"*

## Building the Site

This is a Quarto website. To build it locally:

1. Install [Quarto](https://quarto.org/docs/get-started/)
2. Clone this repository
3. Run `quarto preview` to preview locally
4. Run `quarto render` to build the site

## Links

- 🌐 **Live Site:** https://sarahtanja.github.io/quarto-blog/
- 💼 **LinkedIn:** [Sarah Tanja](https://www.linkedin.com/in/sarah-tanja-595722146/)
- 🐙 **GitHub:** [@sarahtanja](https://github.com/sarahtanja)

## License

This work is shared as part of an open lab notebook approach to transparent research communication.
