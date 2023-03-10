---
title: Alignment
guide: alignment
excerpt: Alignment is a fundamental principle in design that refers to the positioning and arrangement of elements in a visually pleasing and organized way.
icon: alignment.svg
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
  <a href="#never" id="nav_never"> Never align text to center? </a>

</div>
<section id="never">
  <h2>Never align text to center.</h2>
  <p> Centered type might be tempting to use, because it’s symmetrical. But the left-aligned type is much easier to read. Hence why all books and blogs are like this. </p>
   <br>
   <div style="
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
">
 
  <img src="/componentui/alignment/Align-center-rag-example.svg"  style="width: 450px;"/>
<br>

  <img src="/componentui/alignment/Align-left-rag-example.svg"  style="width: 300px;"/>
<br>

  <img src="/componentui/alignment/Align-vs-Other-Objects.svg"  style="width: 300px;"/>
  </div>
   <div style="
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
">

  <img src="/componentui/alignment/Align-center-desav.svg"  style="width: 450px;"/>
  <img src="/componentui/alignment/Align-left-av.svg"  style="width: 450px;"/>
   </div>
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
