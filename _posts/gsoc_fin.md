---
title: 'Google Summer of Code 2023: Matplotlib'
subtitle: 'Google Summer of Code 2023: Final Report'
excerpt: 'This project focuses on improving mathtext by examining the
          known/reported issues within the existing framework, expanding
          support for new Math-LaTeX-based features, and incorporating
          robust testing to track down unobserved issues.' 
coverImage: '/assets/blog/gsoc_fin/cover.png'
date: '2023-08-24T12:35:23.768Z' 
author:
  name: Ratnabali Dutta
  picture: '/assets/blog/authors/myAvatar.png'
ogImage:
  url: '/assets/blog/gsoc_fin/cover.png'
---

This project focuses on improving the mathematical text support in the Matplotlib
library, which is popularly used for data visualization in multiple academic and
industrial projects. Matplotlib supports mathematical typesetting through the
mathtext module. The mathtext module is derived from LaTeX and is one of the
most popular typesetting tools today.  We examined the known/reported issues
within the existing framework and expanded support for new Math-LaTeX-based
features. We also tested and triaged new issues in the mathtext module. The
overarching goal of this project was to improve the functionality and usability
of mathext for a wide spectrum of use cases.

### Mentors:

* Kyle Sunden <a href="https://github.com/ksunden" target="_blank" style="color: #E85A4F">@ksunden</a>
* Elliott Sales de Andrade <a href="https://github.com/QuLogic" target="_blank" style="color: #E85A4F">@QuLogic</a>


### Improvements to MathTeXt support:

Matplotlib’s mathtext is a powerful tool for including mathematical expressions
in your plots. The module utilizing a subset of LaTeX functionalities that enables
mathematical symbols, math fonts, and font encodings to fine-tune the usability
of math texts inside a data plot. This project fixed existing bugs from the
GitHub issue tracker and added some needed font features like bold italics into
the mathtext module. Below we discuss some of the changes added to the
matplotlib and their respective pull requests (PRs) to get an overview of the
project outcomes.

### Current state: The things that were added 

Some of the **New Features** added: 

* **Bold**-_Italic_ fonts

  <div>Issue: <a style="text-decoration: underline;" href="https://github.com/matplotlib/matplotlib/issues/19393">
    https://github.com/matplotlib/matplotlib/issues/19393</a></div>
  <div>PR: <a style="text-decoration: underline;" href="https://github.com/matplotlib/matplotlib/pull/25359">
    https://github.com/matplotlib/matplotlib/pull/25359</a></div>
  <br />
  
  Mathtext provides the `\mathbf` and `\mathit` commands to format texts or
  glyphs typed in math mode into bold and italic subsequently. Occasionally, we
  require changing typefaces to emphasize certain symbols to be consistent with
  the rest of the document where the plot is added. However, nesting the commands
  for bold and italics doesn’t work as intuitively as LaTeX prioritizes the
  innermost command and makes using nested commands illegal in math mode.
  The LaTeX extension package, `amsmath`, provides the command, `\mathbfit`, to
  achieve bold italic glyphs. This PR adds the support for the `\mathbfit` command
  needed to get bold italics in matplotlib.

* _**Boldsymbol**_

  <div>Issue: <a style="text-decoration: underline;" href="https://github.com/matplotlib/matplotlib/issues/1366">
    https://github.com/matplotlib/matplotlib/issues/1366</a></div>
  <div>PR: <a style="text-decoration: underline;" href="https://github.com/matplotlib/matplotlib/pull/25661">
    https://github.com/matplotlib/matplotlib/pull/25661</a></div>
  <br />

  The `\boldsymbol` command allows the users to apply boldface to nearly any
  symbols. The command, however comes with some confusingly interrelated parts,
  like Latin alphabets and lowercase Greek alphabets use the bold and
  italicized versions, unlike digits, uppercase Greek alphabets, and other
  glyphs which derive the upright bold version from the selected font
  wherever applicable.

* Substack

  <div>Issue: <a style="text-decoration: underline;" href="https://github.com/matplotlib/matplotlib/issues/14247">
    https://github.com/matplotlib/matplotlib/issues/14247</a></div>
  <div>PR: <a style="text-decoration: underline;" href="https://github.com/matplotlib/matplotlib/pull/26151">
    https://github.com/matplotlib/matplotlib/pull/26151</a></div>
  <br />

  The `\substack` command is also provided by the `amsmath` LaTeX extension
  package, to produce multiline subscripts or superscripts. Implementing this
  feature turned out to be challenging because of syntax discrepancies. In LaTeX,
  the `\\` is utilized as the next-line command, which is essential to provide a
  multiline subformula. However, when parsing the `\\` symbol, `Python` views it
  as an escape character. Hence, maintaining consistency with the LaTeX command
  syntax proved to be trickier. To address this incompatibility, we used
  [Pyparsing’s](https://pyparsing-docs.readthedocs.io/en/latest/pyparsing.html)
  `nested_expr` feature.

* Middle | Delimiters

  <div>Issue: <a style="text-decoration: underline;" href="https://github.com/matplotlib/matplotlib/issues/23212">
    https://github.com/matplotlib/matplotlib/issues/23212</a></div>
  <div>PR: <a style="text-decoration: underline;" href="https://github.com/matplotlib/matplotlib/pull/26333">
    https://github.com/matplotlib/matplotlib/pull/26333</a></div>
  <br />

  Delimiters used in formulas should be big enough to fit the equation it wraps.
  Mathtext offers `\left` and `\right` delimiters to obtain such stretchable
  delimiters. To maintain the aesthetic feel of the equation, LaTeX uses middle
  delimiters resizes according to the equation. The `\middle` command is used
  with strictly with the `\left` and `\right` commands.

### Future work: The things that are left to do 

Integrating a subset of LaTeX functionalities into mathtext requires a
detail-attentive eye, which sometimes becomes challenging due to a load of
subtleties. Mathtext still requires a lot of improvements, however, a few among
many long-term enhancements that would be beneficial are:

* Integrating mathtext to use Latin Modern Fonts since LM fonts use Unicode
  codepoints and provides a more comprehensive list of glyphs required in
  mathematical typesetting.
  <br/>
  Draft PR: <a style="text-decoration: underline;" href="https://github.com/matplotlib/matplotlib/pull/26240">
    https://github.com/matplotlib/matplotlib/pull/26240</a>

* Refining the baseline, and alignment:
  <br />
  Draft PR: <a style="text-decoration: underline;" href="https://github.com/matplotlib/matplotlib/pull/26337">
    https://github.com/matplotlib/matplotlib/pull/26337</a>
    * Better positioning of math formulas in generalized fractions, subscripts,
      and superscripts.
    * Better conversion for Vector and Raster output.

### Link(s) to code(s): 

- The list of my contributions to Mathtext: pull requests that got
  <a href="https://github.com/matplotlib/matplotlib/pulls?q=is%3Apr+author%3AdevRD+is%3Aclosed" target="_blank" style="color: #E85A4F">merged</a>.

- A list of 
  <a href="https://github.com/matplotlib/matplotlib/pulls/devRD" target="_blank" style="color: #E85A4F">open or draft</a>
pull requests that are scheduled long-term or currently work in progress.

- A list of
  <a href="https://github.com/matplotlib/matplotlib/issues?page=1&q=is%3Aopen+is%3Aissue+label%3A%22topic%3A+text%2Fmathtext%22" target="_blank" style="color: #E85A4F">reported issues</a>
  for Mathtext in the GitHub repository that include stylistic modification,
  feature requests, and performance improvements.

- Multiple new features were incorporated into the mathtext module in the new
  release of Matplotlib _(v3.8.0)_. The list of features can be found in the
  <a href="https://matplotlib.org/devdocs/users/next_whats_new.html" target="_blank" style="color: #E85A4F">devdocs</a>
  link currently.

**Note: Weekly Progress and meeting updates can be found in this doc:** <a href="https://hackmd.io/@matplotlib/Sk0Uo0NP3" target="_blank" style="color: #E85A4F; font-weight: bold">Hackmd</a> 

### Miscellaneous links and references

- Project <a href="https://matplotlib.org/stable/tutorials/text/mathtext.html" target="_blank" style="color: #E85A4F">Documentation</a>
- AMS-LaTeX <a href="http://www.ams.org/arc/tex/amsmath/amsldoc.pdf" target="_blank" style="color: #E85A4F">Documentation</a>
- The Latin Modern Fonts <a href="https://www.gust.org.pl/projects/e-foundry/latin-modern" target="_blank" style="color: #E85A4F">Project</a>
