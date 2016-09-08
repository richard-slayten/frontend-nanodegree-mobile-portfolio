## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

Here are the optimizations made to the index.html and web site.  I received a pagespeed score of 92 for mobile and 91 for desktop:
* On the Link tag for the print.css stylesheet, I added the media="print" argument so that the page  knows to not wait for loading the print.css.
* Added the async argument to the jscript tag for loading the google analytics.js.  There is no need to wait on this for the page to load.
* The link tag was changed that loads the google font to now load the webfont java script instead.  The font gets loaded asynchronously from a script tag at the bottom of the page.  This improves the loading of the font.
* The style.css file got removed and moved all the css code inline on the HTML page.
* The the Java script ( perfmaters.js) got minified by using grunt ( uglify).  it is now referenced as perfmatters.min.js in js folder.
* The Html file (index.html) also got minified by using grunt (htmlmin).  The source is now in a src directory.
* Resized the pizzeria.jpg image with ImageMagick to create a smaller image.

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

Here are the optimizations made to the views/js/main.js file to render with a consistent frame-rte at 60 fps when scrolling:
* Change the scroll event listener to call the anicateCheck function that uses requestAutomationFrame.  The running update variable is also used in this setup to track when to run the updatePositions again.
* Changed the 200 pizza creation to a max of 5 cols and 5 rows. The variables will adjust for the different size screens and evenly space the pizzas.  This creates a max of 25 pizzas.
* Changed pizza image to a smaller size file using ImageMagick.
* Change the sytle of basicleft to just left on pizzas
* Created a moverItems array variable to hold all the pizzas and a length variable to store the number of pizzas and used the function getElementsByClassName to get them
* Created a resize function (domload) to reset the background pizzas when the screen is resized.  This had nothing to do with the fps, but was fun to add to the web page.
* Added css to mover class 
  * will-change: transform; 
  * transform: translateZ(0);
  * backface-visibility: hidden; 
* refactored updatePosistions
  * Moved all calculations outside of the for loop
  * Changed the repositioning to a transform style instead of a left in the for loop.
  * Created a separate variable to hold the 5 phase values and assigned it in it's own for loop.
  * The wing adjustment is added to the calculation to account for the bigger/smaller widths.

Here are the optimizations made to the views/js/main.js file to improve the resize of the pizzas to less than 5ms: ( I got about 2 ms)
* Moved the functions changeSliderLabel and changePizzaSizes out of the resizePizzas function.
* Moved the sizeSwitcher out into its own function.
* Changed the querySelector function to use getElementById instead for functions changeSliderLabel and determineDx.
* Refactored changePizzaSizes for loop
  * Created an array for the items that has a class of randomPizzaContainer and put it outside of the function as a global variable
  * Used the function getElementsByClassName instead of querySelectorAll.
  * Put the call to determineDX outside the loop and only need to call it once (first object in array) since all the objects should be the same size.
  * Calculated the new width outside the loop into a new variable as a global variable.
  * Created an arraylength variable to hold the number of items in the array for the loop.
* Decreased size of image by resizing the pizza image to 136x176 px ( medium). The width had to be set to 100% to keep the same original pizza size.  Used grunt to minify the image.  
* Refactored the changePizzaSizes for loop even more a second time
  * got rid of the determineDx and sizeSwitcher functions.
  * added new variable to keep track of the window width and the new pizza container size.
  * updated the variables. window width in the main code and container size in the changeSliderLabel function.  Calculated the new width from those 2 new variables.
  * added a randomn feature for the back ground pizzas.  used a min cols/rows variables and set the phase to not have the same cycle as the number of columns ( -1).  This creates the random effect so the the rows wont ever sync together.

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
