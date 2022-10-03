---
title: Color Palette
guide: colorPalette
excerpt: The color palette is a critical component for identifying a brand and defining color standards.
icon: colorPallete.svg
iconWidth: 140px;
---

<script>
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
  }
  function show(theId) {
    const element = document.querySelector('#nav_' + theId);
    const section = document.querySelector('#' + theId);

    if (section && element)

      isInViewport(section) ?
        element.classList.add("active") :
        element.classList.remove("active");
  }

  const ids = ["what", "Inspiration_from_other_applications", "Inspiration_from_nature", "color_harmony"]

  document.addEventListener('scroll', function () {
    ids.forEach(one => show(one))




  }, {
    passive: true
  });
</script>

<div class="aside">
  <h2> Lesson Contents: </h2>
  <a href="#what" id="nav_what">What is a color palette? </a>
  <a href="#Inspiration_from_other_applications" id="nav_Inspiration_from_other_applications"> Inspiration from other
    applications</a>
  <a href="#Inspiration_from_nature" id="nav_Inspiration_from_nature"> Inspiration from nature </a>
  <a href="#color_harmony" id="nav_color_harmony"> Color harmony </a>

</div>

<p> I recommend studying this guide after going through the
  <a href="https://baltacmihai.github.io/componentui/color/" class="link"> "color" guide </a> .
</p>

<br>
<section id="what">
  <h2>What is a color palette?</h2>
  <p>A color palette is the combination of colors used in many creative and design situations.</p>
  <p> This offers guidance on how to use a brand's particular colors when it comes to graphic design.</p>
  <br>
  <b> Why?</b>
  <p>Because consistent color use throughout all graphic assets, including posters and websites, makes a brand easier to
    recognize.</p>

  <p>We discovered from the "color" guide that we must restrict our use of color, leading to the creation of the
    <a href="https://baltacmihai.github.io/componentui/color/#The_60_30_10_rule" class="link"> 60/30/10 guideline </a>.
    A color palette is created by these values.
  </p>

  <br>
  <h3> How do we create a good color palette? </h3>

  <p>We may construct a solid palette in a variety of ways, therefore I'll break it down into three categories:</p>
</section>

<section id="Inspiration_from_other_applications">

  <h2>Inspiration from other applications </h2>

  <p>Making fresh connections between previously established ideas or concepts is one definition of creativity.
    Therefore, we can "copy" components from various parts to create our final product.
    This approach is recommended in terms of user experience. Because the user will mentally associate our color scheme
    with familiarity if they have previously used an application with a similar color scheme.
    <br>
    <br>
    Social media platforms like Facebook and LinkedIn are an example.

  </p>
  <img src="/componentui/colorPallete/FacebookVsLinkedIn.svg" width=500;
    style="border: 1px solid #c9caef; padding: 1rem" />
  <br>
  <p>or Pinterest and YouTube</p>
  <br>
  <img src="/componentui/colorPallete/YoutubeVsPinterest.svg" width=500;
    style="border: 1px solid #c9caef; padding: 1rem" />

  <p>
    It is clear that they don't exactly have the same color scheme, yet they are pretty close nonetheless.</p>
  <br>

  <p> Color palette samples may be found on the <a
      href="https://baltacmihai.github.io/componentui/resources/colorpalettes/" class="link"> resources page</a>. We
    selected to present four colors each, the first for "white space" and the final for text color.
  </p>
</section>

<section id="Inspiration_from_nature">
  <h2> Inspiration from nature </h2>

  <p>This approach to developing effective color palettes is by far the most challenging and exciting. I do not advise
    beginners to use this technique.</p>

  <br>
  <img src="/componentui/colorPallete/InspiredByNature.svg" width=1000; />

  <p>An image can be used to create an infinite number of palettes.</p>

</section>

<section id="color_harmony">
  <h2> Category 3: Color harmony </h2>
  <br>
  <p>
    Color harmonies can be viewed as the foundational elements or basic design of a color palette. Typical color
    harmonies include:
  </p>
  <p>
    <b>Analogous = </b> colors that are next to each other on the color wheel (This color harmony creates low color
    contrast)
  </p>
  <img src="/componentui/colorPallete/analogous.svg" />
  <p>
    <b>Complementary = </b> colors that are opposite on the color wheel, which produce high color contrast.
  </p>
  <img src="/componentui/colorPallete/complementary.svg" />
  <p>
    <b> Split-complementary = </b> a color combined with others from either side of its complementary color.

  </p>

  <img src="/componentui/colorPallete/Split-complementary.svg" />
  <p>
    <b>Tridic = </b> three equidistant colors ( 120 degrees apart) on the color wheel.

  </p>

  <img src="/componentui/colorPallete/Tridic.svg" />
  <p>
    <b>Monochromatic = </b> tones and shades of a single hue

  </p>

  <img src="/componentui/colorPallete/Monochromatic.svg" />

</section>

<style>
  a.link {
    color: #5d60ef;
    padding-bottom: 0.5px;
    border-bottom: 2px solid #5d60ef;
  }

  section {
    margin-bottom: 5rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7777778;
    margin: 0.5rem 0;
  }

  img {
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

  .aside a:hover,
  .aside a.active {
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
