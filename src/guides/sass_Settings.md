---
title: Settings
guide: settings
excerpt: This module provides the steps you must do before beginning to work with and compile Sass, as well as the output of sass files.
icon: sass-settings.svg
---

<script >
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check if the top or bottom edge of the element is within the viewport
  const topVisible = rect.top >= 0 && rect.top <= windowHeight;
  const bottomVisible = rect.bottom >= 0 && rect.bottom <= windowHeight;

  // Check if the left or right edge of the element is within the viewport
  const leftVisible = rect.left >= 0 && rect.left <= windowWidth;
  const rightVisible = rect.right >= 0 && rect.right <= windowWidth;

  return (topVisible || bottomVisible) && (leftVisible || rightVisible);
}


function show(theId) {
  const element = document.querySelector('#nav_' + theId);
  const section = document.querySelector('#' + theId);

  if (section && element) {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
    observer.observe(section);
  }
}

const ids = ["install","compile","cssfiles"]

document.addEventListener('scroll', function () {
ids.forEach(one => show(one))

        
  

}, {
    passive: true
});
  </script>

<div class="aside">
  <h2> Lesson Contents: </h2>
  <a href="#install" id="nav_install"> Install the module</a>
  <a href="#compile" id="nav_compile"> Compile the sass files</a>
  <a href="#cssfiles" id="nav_cssfiles"> Types of css files</a>

</div>
<section id="install">
  <h2>Install the module</h2>
  <p>
  To build a sass file, follow these two steps. The first step is to install the Sass module, followed by compiling the Sass files into CSS. There are several approaches you may use depending on your frontend framework of choice, because some frameworks will automatically compile your sass while others will not.
  </p> <br/><br/>

<h3>The first step is to install the Sass module.</h3>
<br/>
<p>
You will need a package manager to install the sass module ( like npm or yarn) and also Node.js . You may run the following scripts to see if you have these packages installed:

```bash
node -v;
```

<br />

```bash
npm -v;
```

  </p> <br/><p>
If you don't already have them, you may get them here:  <a href="https://treehouse.github.io/installation-guides/windows/node-windows.html" class="link">Install Node.js and Npm</a>
 </p>

<br/><p>
In most circumstances, you must install the Sass module in the project as follows:

  </p>
<br/>

```scss
npm i sass;
```

<br />

  <i>
  <b>Note: </b>
The only disadvantage of using this method is that certain frameworks can compile your Sass files in their own way, so you must install it in a particular manner ( ex. <a href="https://vue-loader.vuejs.org/guide/pre-processors.html#sass" class="link">Vue - Using Pre-Processors</a>).

  </i>

</section>

<section id="compile">
  <h2>Compile the sass files</h2>

  <br/>
  <p>There are two techniques for compiling the files. The first is to compile the sass files into CSS, and the second is to compile the sass files using the chosen framework.</p><br><p>
<b>1.</b> The first way (compiling the sass files manually into CSS) may be used wherever. To build a file, enter the following code in the terminal:</p>

```scss
sass source/stylesheets/index.scss build/stylesheets/index.css;
```

<br/>

 <i>
  <b>Note: </b>
If we run this command and don't already have an index.css file, the file will be created for us without further action from us. If you execute this command and we have the file, the compiled code from the scss will take the place of the css. Any CSS modifications that are only in the css files and not the scss files should be saved in a temporary file.
  </i>

<br/>
<br/>

<h3>Explication: </h3>

  <br/>
<p> Assuming this is how the project looks, we want to convert <b>index.scss</b> into <b>index.css</b>.</p>
<br/>
  <br/>
<img src="/componentui/sass-settings/complie-folder.svg"/>

  <br/>
  <br/>
  <br/>

<p>As a result, we have the instruction below. Because "sass" is the name of the command, it starts with that word. The other 2 arguments specify where we get the sass file and where we want to compile it .</p>
  <br/>
  <br/>

<img src="/componentui/sass-settings/compile-command.svg"/>

<br/>
<br/>
<br/>

 <p>
<b>2.</b> The second approach is having the framework automatically compile the sass files. To ensure that it functions in your framework, you must check for this.
</p><br><p>

Hence, in order to compile, import the Sass file similarly to how you imported the CSS file, and the framework will take care of the rest.</p>

<br/>

 <p>

Using the --watch flag, you can additionally watch certain files or folders. The watch flag instructs Sass to monitor your source files for modifications and re-compile CSS after each Sass save. You would simply add the watch flag to your command, like in the following example, if you wanted to monitor (rather than manually build) your input.scss file:

</p>
<br/>

```scss
sass --watch source/stylesheets/index.scss build/stylesheets/index.css;
```

</section>

<section id="cssfiles">
  <h2>Types of css files</h2>

  <p>
Sass has the ability to produce three different kinds of files.  </p>
<br/>
<br/>
<b>
[file-name].css
</b>

<br/>
<br/>

<p>

Is the file with all the compiled code, together with the comments, spaces, and order.

  </p>
<br/>
<br/>

  <b>
  [file-name].css.map
  </b>

  <br/>
<br/>
  <p>
  By default, a file with the ".map" extension is created when you compile a Sass file into CSS. A CSS source map is a file that links the CSS code that has been produced with its original Sass source code.
  </p>
<br/>

  <p>

The name, line numbers, and column positions of the original Sass file are all included in a file known as a CSS source map. When employing browser developer tools, it is utilized by web developers and designers to troubleshoot their Sass and CSS code.

  </p>

<br/>
<br/>

  <b>
  [file-name].min.css
  </b>
  <br/>
<br/>
  <p>
With the —style option with the value set to compressed, Sass can produce CSS files that have been compressed. A minified version of the original Sass file, free of any extraneous whitespace and comments, will be produced as the final CSS file.
  </p>
<br/>

  <p>
For instance, you can run the following command in the terminal to convert a Sass file named styles.scss into a minified CSS file named styles.min.css:
  </p>
<br/>

```scss
sass [file-name].scss [file-name].min.css --style compressed

```

<br/>

  <p>
By doing this, a minified CSS file called styles.min.css will be created, which can be used in production settings to minimize file size and speed up the loading of web pages.
  </p>
<br/>

 <i>
  <b>Note: </b>
It should be noted that while minifying CSS code can aid in performance improvement, it can also make the code more difficult to comprehend and maintain. For development and debugging purposes, it is frequently advised to preserve a non-minified version of the CSS code.
  </i>

</section>

<style>
      a.link {
    color: #5d60ef;
    padding-bottom: 0.5px;
    border-bottom: 2px solid #5d60ef;
  }
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

  .astro-code{
    padding: 1rem;
    border-radius: 5px;
  }
</style>
