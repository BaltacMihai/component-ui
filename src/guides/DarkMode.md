---
title: Dark vs Light Mode
guide: darkVsLightMode
excerpt: You probably have at least one application set with dark mode. But how do we make an application with dark mode and light mode?
icon: lightDarkMode.svg
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

  const ids = ["what", "debate", "pureColors", "convertColors"]

  document.addEventListener('scroll', function () {
    ids.forEach(one => show(one))

  }, {
    passive: true
  });
</script>

<div class="aside">
  <h2> Lesson Contents: </h2>
  <a href="#what" id="nav_what">What's the difference? </a>
  <a href="#debate" id="nav_debate"> The Debate</a>
  <a href="#pureColors" id="nav_pureColors"> Pure Colors </a>
  <a href="#convertColors" id="nav_convertColors"> Covert Colors </a>

</div>

<p> I recommend studying this guide after going through the
  <a href="https://baltacmihai.github.io/componentui/colorPalette/" class="link"> "Color Palette" guide </a> .
</p>

<br>
<section id="what">

  <h2>What's the difference?</h2>

  <p>The light-on-dark color scheme is a color scheme that employs light-colored text, icons, and graphical user
    interface components on a dark background. It is also known as dark mode, dark theme, or night mode.</p>
  <br>
  <p>Light mode (also known as day mode) is a color scheme that employs dark text, icons, and graphical user interface
    components on a light backdrop.</p>
  <img src="/componentui/darkVsLightMode/darkVsLightExample.png" width=500;
    style="border: 1px solid #c9caef; padding: 1rem; background: #ccc" />
</section>

<section id="debate">

  <h2>The Debate</h2>

  <p>There are several disagreements over people's tastes; some like light mode, while others prefer dark mode.
    There are strong supporters on both sides, and every position is supported by facts and research. Let's look at some
    of the most often debated subjects.</p>
  <p><i>I'm not going to start an argument here, but I will provide an example </i></p>
  <br>

  <h3>What are the characteristics of regular people?</h3>
  <br>
  <p>Because we are interested in how people were taught, we want to find out how they were used to see the content.</p>

  <br>
  <p>
    We have been surrounded by black writing on light backgrounds for many years, even before computers, in the form of
    newspapers and books.
    Instead, computers used to have a default dark mode, which had white text on a black background, to make the energy
    consumed by the PC more efficient. This became less of an issue with time.</p>

  <br>

  <p>Because the amount of hours spent in front of a screen has risen in recent years, several studies have been
    conducted to identify their impacts. According to the American Optometric Association's (AOA) American Eye-Q® study,
    58 percent of individuals have suffered from digital eye strain or vision issues as a direct result. This is
    provided by "blue" light, which is not present in nature. Another research found that using darkmode helps to reduce
    the intensity of this artificial light.</p>
  <br>
  <b> How can we reduce these problems? </b>

  <p> We provide the user the freedom to make his own decisions. Therefore, if it is possible, we must build for both
    dark and light modes. </p>

  <br>
  <b>However, there's a catch...</b>
</section>
<section id="pureColors">
  <br>
  <h2>Pure colors</h2>

  <p>A pure color is one that has the highest saturation in each hue. Colors are classified into two types: achromatic
    colors like white, grey, and black, and chromatic colors like red, green, and blue.</p>
  <br>
  <br>

  <p>Try to image the RGB ( Red Green Blue ) </p>
  <br>

  <table>
    <thead>
      <tr>
        <th>Color Name</th>
        <th>RGB</th>
        <th>Red</th>
        <th>Green</th>
        <th>Blue</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>White</td>
        <td> RGB( 255 255 255 )</td>
        <td>255</td>
        <td>255</td>
        <td>255</td>
      </tr>
      <tr>
        <td>Black</td>
        <td> RGB( 0 0 0 )</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Red</td>
        <td> RGB( 255 0 0 )</td>
        <td>255</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Green</td>
        <td> RGB( 0 255 0 )</td>
        <td>0</td>
        <td>255</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Blue</td>
        <td> RGB( 0 0 255 )</td>
        <td>0</td>
        <td>0</td>
        <td>255</td>
      </tr>
    </tbody>
  </table>
  <br>

  <p>For reading, a high color contrast is beneficial.</p><br>
  <p>
    However, reading pure color text against a pure color background can be eye-straining when done for long periods of
    time.
  </p>
  <img src="/componentui/darkVsLightMode/pureColors.svg" width=500; style="border: 1px solid #c9caef; padding: 1rem;" />
  <br>
  <br>
  <p>Black has 0% color brightness compared to 100% for white, which results in high light levels that overstimulate the
    eyes. </p>
  <br>

<img src="/componentui/darkVsLightMode/blackWhiteColors.svg" width=500;
    style="border: 1px solid #c9caef; padding: 1rem; background: #ccc" />
<br>
<br>

<b>So, what can we do?</b>
<br>

  <p>Just avoid using pure colors is everything you need to do. Instead of using pure colors, try to employ shades of
    white or black.</p>
  <img src="/componentui/darkVsLightMode/blackWhiteTransform.svg" width=500;
    style="border: 1px solid #c9caef; padding: 1rem; background: #ccc" />
  <br>

  <p>The colors appear extremely similar, if not identical, at first glance, but over time as our user browses the
    website, his eyes will grow tired more slowly.</p>
  <br>
  <p> Okay, but our design also includes colors in addition to different tones of black and white. We don't have to
    utilize pure colors, as we saw above. What should we do with the remaining hues in the color scheme?</p>
</section>

<section id="convertColors">

  <h2>Convert Colors</h2>

  <p>At first look, we might assume that we can leave our colors in their current state if they aren't pure hues.</p>
  <img src="/componentui/darkVsLightMode/neonColors.svg" width=500;
    style="border: 1px solid #c9caef; padding: 1rem; background: #ccc" />

  <p>Consider making the color in the circle above the dominant color, as it will be seen frequently. Even though this
    works perfectly in white mode, it does not address the issue of tired eyes in dark mode.</p>

<b>So, what we do?</b>

  <p>
    We will convert our colors to dark mode, it's that easy.</p>
  <b>
    ...
  </b>
  <br>
  <b>
    Ok, now how do we do that?
  </b>
  <br>
  <p>
    There are many ways to do this on the Internet. In principle, you take your color and give it opacity . 55 or .6,
    but many problems can appear, because if that color is on a different shade than the background (dark mode), it will
    change, giving a different color.
  </p>
  <p>
    For this problem, there is a solution,
    <a href="https://baltacmihai.github.io/componentui/resources/colorcalculator/" class="link"> the color calculator.
    </a>
    This is an application that the community asked us for and we offer it. More details about how it works can be found
    on its page.
  </p>
  <img src="/componentui/darkVsLightMode/neonColorsTransformed.svg" width=500;
    style="border: 1px solid #c9caef; padding: 1rem; background: #ccc" />
  <p>The concept is the same as with the black and white tone; it might not even be noticeable, but these values tire on
    the eye more slowly.</p>
</section>

<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ded7fb;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #ded7fb;
  }

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
