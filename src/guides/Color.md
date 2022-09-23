---
title: Color
guide: color
excerpt: Colors, why we use them, how we should utilize them, and what we should do with them.
icon: color.svg
---

<div class="aside">
  <h2> Lesson Contents: </h2>
  <a href="#s1"> What are colors? </a>
  <a href="#s2"> Choose a color harmony </a>
  <a href="#s3"> Limit your palette to three colors </a>
  <a href="#s4"> The 60 - 30 -10 rule </a>
  <a href="#s5"> Apply then iterate your colors</a>
  <a href="#s6"> Use colors consistently in your interface</a>

</div>

<section id="s1">

  <h2> What are colors?</h2>
  <br>
  <p>
    Color is one of the most powerful tools we have as designers, whether we are UI desingers or not. And it has the ability to perform a variety of things for us. It may establish the tone for a brand and attract people' attention. However, finding the appropriate color combination and then applying those colors to your design might be difficult.
  </p>
  <p>
  </p>
  <p>
  So, how can you include color into your design?
  </p>
  <p>
   The selection of a color palette and its application to a design are not coincidental. Iteration and careful application are required to fully benefit from and take use of a color in a UI. Color may improve brand impression, capture attention and stimulate interactions, influence user emotions, and increase usability.
  </p>
</section>
<br>
<br>

<section id="s2">
  <h2> Choose a color harmony </h2>
  <br>
  <p>
   Color harmonies can be viewed as the foundational elements or basic design of a color palette. Typical color harmonies include:
  </p>
  <p>
    <b>Analogous = </b> colors that are next to each other on the color wheel (This color harmony creates low color
    contrast)
  </p>
  <img src="/componentui/color/analogous.svg" />
  <p>
    <b>Complementary = </b> colors that are opposite on the color wheel, which produce higj color contrast.
  </p>
  <img src="/componentui/color/complementary.svg" />
  <p>
    <b> Split-complementary = </b> a color combined with others from either side of its complementary color.

  </p>

  <img src="/componentui/color/Split-complementary.svg" />
  <p>
    <b>Tridic = </b> three equidistant colors ( 120 degrees apart) on the color wheel.

  </p>

  <img src="/componentui/color/Tridic.svg" />
  <p>
    <b>Monochromatic = </b> tones and shades of a single hue

  </p>

  <img src="/componentui/color/Monochromatic.svg" />

</section>
<br><br>
<section id="s3">
  <h2> Limit your palette to three colors</h2>
  <p>
   Because there are fewer colors to ponder and be distracted by, fewer colors enhance visual hierarchy and contrast.
  </p>

  <p>
   Have you ever struggled to locate a particular cereal in the cereal aisle, for instance? That is as a result of the abundance of colors! Every color is fighting for your attention.
  </p>
     <img src="/componentui/color/market.jpg"  style="width: 500px;"/>
  <p>
    The same is true for your designs.</p>
  <p>
    <b>Less is more.</b>
  </p>

</section>
<br><br>
<section id="s4">
  <h2> The 60 - 30 -10 rule</h2>
  <p>
   According to this rule, color should be used 60%, 30%, and 10% of the time. Use 60% for the dominant color, 30% for the secondary color, and 10% for the accent color, in other words.
  </p>
    <img src="/componentui/color/img-60-30-10.svg"  style="width: 750px;"/>
  <p>
  This is more like a style of thinking because it's impossible to quantify the amount of color you utilize.
  </p>
</section>
<br><br>
<section id="s5">
  <h2> Apply then iterate your colors</h2>
  <p>
  After applying the 60-30-10 guideline, you'll need to step back and assess what's working and what isn't before making adjustments to your color scheme. Do your color choices help establish the proper visual hierarchy, for example?

  </p>
  <p>
   In other words, is your attention pulled to the design components you wish to emphasize? Do the colors you've chosen help your design have harmony and contrast?
  </p>
    <img src="/componentui/color/iterateColors.svg"  style="width: 1000px;"/>
  <p>
    Look for contrast!
  </p>
</section>
<br><br>
<section id="s6">
  <h2> Use colors consistently in your interface</h2>
  <p>
    If your calls to action on one screen are bright pink, you should use the same color for calls to action everywhere, unless you have an absurdly excellent reason to stray from it.
 <img src="/componentui/color/colors_consistently.svg"  style="width: 1000px;"/>
  </p>
</section>

<style>
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
    color: #ccc;
  }

  .aside a:hover {
    border-color: #5d60ef;
    color: #5d60ef;
    background-color: #ded7fb75;
    padding: 0.5rem 1rem;
    font-weight: bold
  }

   @media (max-width: 1262px) {
  .aside {
    display: none;
    }
  }
</style>
