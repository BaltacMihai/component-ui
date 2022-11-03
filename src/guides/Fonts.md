---
title: Typography
guide: typography
excerpt: Typography is sometimes underestimated, although it is an important part of user interface design.
icon: typography.svg
iconWidth: 100px;
---

<script >
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}
function show(theId){
  const element = document.querySelector('#nav_'+theId);
  const section = document.querySelector('#'+theId);
 
  if(section && element)

isInViewport(section) ?
       element.classList.add("active") :
       element.classList.remove("active");
}

const ids = ["why","what_are_colors","three_colors","The_60_30_10_rule","iterate_your_colors","contrast","use_colors_consistently"]

document.addEventListener('scroll', function () {
ids.forEach(one => show(one))

        
  

}, {
    passive: true
});
  </script>

<div class="aside">
  <h2> Lesson Contents: </h2>
  <a href="#why" id="nav_why"> Why? </a>
  <a href="#what_are_colors" id="nav_what_are_colors"> What are colors? </a>
  <a href="#three_colors" id="nav_three_colors"> Limit your palette to three colors </a>
   <a href="#The_60_30_10_rule" id="nav_The_60_30_10_rule"> The 60 - 30 -10 rule </a>
  <a href="#iterate_your_colors" id="nav_iterate_your_colors"> Apply then iterate your colors</a>
  <a href="#contrast" id="nav_contrast"> Contrast</a>
  <a href="#use_colors_consistently" id="nav_use_colors_consistently"> Use colors consistently in your interface</a>

</div>
<section id="why">
  <h2>Why?</h2>

  <p>Typography is more than just selecting attractive fonts: it is an essential component of user interface design.
  <br>  <br>
</p>
  <p>Good typography will create a strong visual hierarchy, bring aesthetic balance to the website, and define the overall tone for the product. Typography should guide and enlighten your users, improve readability and accessibility, and provide a positive user experience.
</p>
  <br>  <br>
  <p>
Let's take a closer look at why typography is so crucial.
</p>

</section>

<section id="what_are_colors">

  <h2 > What is typography?</h2>
  <br>
  <p>
    Let's start with the basics: what exactly is typography?

The skill of arranging letters and text in such a way that the content is legible, clear, and visually appealing to the reader is known as typography.

  </p>
  <p>But what exactly is typography? Simply stated, typography is the look or style of text. It may also apply to the art of working with words, which you very certainly do on a regular basis whether you write documents or other projects for work, school, or yourself.
  </p>
  
<br>

  <h3> Ok... But why? </h3>
</section>

<section id="readersType">
  <h2 > Readers are captivated by typography.</h2>
 <p>Good typography may mean the difference between someone spending one minute or half an hour on your website.</p>
 <p>It's critical that your website be aesthetically appealing and memorable, and typography plays a big part in that.</p>
 <br>

 <img src="/componentui/typeography/captivatedType.svg"  style="width: 750px;border: 1px solid #ccc;padding: 1rem"/>
<br>
<br>

</section>
<section id="decisions">
<h2>Decisions are influenced by typography.</h2>

<p>The way that consumers understand and interpret the information contained in the text is significantly influenced by the typography.</p>
 <br>

<p>Strong fonts that support the text's theme are far more persuasive than weaker type.</p>
</section>

<style>
  section{
      margin-bottom: 5rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 1.7777778;
    margin: 0.5rem 0;
  }

img{
max-width: 90%;
}
.aside {
position: fixed;
right: 5%;
display: flex;
flex-direction: column;
top: 15%;
}

.aside h2 {
margin-bottom: 2rem
}

.aside a {
padding-left: 1rem;
border-left: 3px solid #ccc;
padding: 0.5rem 1rem;
color: #999;
}

.aside a:hover, .aside a.active{
border-color: #5d60ef;
color: #5d60ef;
background-color: #ded7fb47;
padding: 0.5rem 1rem;
font-weight: bold
}

@media (max-width: 1262px) {
.aside {
display: none;
}
}
</style>
