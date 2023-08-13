---
title: 'About LaTeX, Modes, and Mathtext'
excerpt: 'This blog is a textual reference to help document what I learned about LaTeX and the mechanics of its implementation.'
coverImage: 'http://localhost:3000/website/assets/blog/latex_1/cover.png'
date: '2023-08-12T15:21:32.163Z'
author:
  name: devrd
  picture: '/assets/blog/authors/myAvatar.png'
ogImage:
  url: 'http://localhost:3000/website/assets/blog/latex_1/cover.png'
---

## **LaTeX: Yes, the one used in _typesetting_ [Part - I]**

A significant usage of LaTeX is its ability to handle complex mathematical expressions and keep user-friendliness in mind, primarily combining the simplest of formulas to build a more intricate one. We will discuss how LaTeX typesets math formulas and mathematical fonts. 

TeX can tap into 6 modes: the Vertical Mode, Internal Vertical Mode, Horizontal Mode, Restricted Horizontal Mode, Math Mode, and Display Math Mode. We will come across this along the way of discussing math

In math mode, (fun fact $$ is used as math brackets because typesetting math is supposedly expensive) TeX creates math lists that are composed of the following types of things:
* An atom 
* A horizontal or a vertical material (check) (\hbox, \vadjust{kern1pt})
* A glob of Glue (\hskip, \mskip)
* Kern (\kern)
* A style change (\displaystyle, \scriptstyle)
* Generalized fraction (\above, \over)
* Boundary (\left, \right)
* A four-way choice (\mathchoice)


The most important items are called atoms, and they have three parts: a nucleus, a
superscript, and a subscript. In TeX, atoms can be one of 13 different types, Ord (ordinary like ‘x’), Op (large operator like summation in the figure below), Bin (binary operator ‘+’), Rel (relational operator ‘=’), Open ‘(’, Close ‘)’, Punctuation, Inner (12), Over (a), Under (a), Accented (à), Radical (√2), \Vcent (Vbox to be centered).


#### **Boxes, dimensions, and glue** 

<div style="display: flex;">
  <p>
   Boxes are two-dimensional rectangles with mainly 3 associated measurements, height, width, and depth. Basically, everything gets constructed nimbly by gluing these rectangles together. The TeX boxes come with a baseline which is also the reference point in aligning the characters used in the text. These dimensions vary across different fonts. Some of the symbols, however, extend beyond these measurements in special cases like using an italic font or a big operator. We can also use black boxes (◼) in TeX which are used to create horizontal or vertical lines, notably known as ‘\hrule’ or ‘\vrule’.

  </p>
  <img src="http://localhost:3000/website/assets/blog/latex_1/baseline.png" width="250" height="250"/>
</div>

<div style="display: flex;">
  <img src="http://localhost:3000/website/assets/blog/latex_1/baseline_eg.png" width="300" height="250"/>
  <p>
------ Placeholder text:------The TeX boxes come with a baseline which is also the reference point in aligning the characters used in the text. These dimensions vary across different fonts. Some of the symbols, however, extend beyond these measurements in special cases like using an italic font or a big operator. We can also use black boxes (◼) in TeX which are used to create horizontal or vertical lines, notably known as ‘\hrule’ or ‘\vrule’.
  </p>
</div>

When typesetting any formula, we wrap the appropriate characters in a box derived from its font dimensions using the ‘\hbox’ command, and eventually the individual horizontal boxes are wrapped in a ‘\vbox’ command to create a vertical box. In TeX’s view, two lines of text would look like this:

<div style="text-align: center">
  <img src="http://localhost:3000/website/assets/blog/latex_1/boxes.png" width="750" height="250"/>
</div>

Like every crafting project, TeX also uses glue to paste these boxes together. In simpler terms, words and lines are glued together to maintain cleanliness and alignment. Glue also comes with its own attributes which are construed as its own space, the ability to stretch, and the ability to shrink. To determine the thickness of the glue, TeX has its own formula to set the stretchability and shrinkability. (Commands used to set glue: \vskip, \hskip, \vfill, \hfill)
