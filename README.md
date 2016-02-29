README FOR UDACITY NANODEGREE PROJECT 4 - WEBSITE OPTIMIZATION

##Objective##

This project is divided into 2 parts. 

**Part 1** covers optimization of the **index.html** file to a point that Google PageSpeed Insights gives the page a score of at least 90 on both mobile and desktop devices.

**Part 2** covers optimization of the **pizza.html** file by making the necessary changes to **main.js**. The end goal is to achieve **60fps** (frames per second).

The project is also meant to emphasize the use of build tools, which are an incredibly useful way to automate certain tasks and achieve more efficient optimizations for a developer. This project utilized **Gulp**.

###Optimizations for Part 1###
For Part 1, the following optimizations were made:

1) Google Web Fonts was removed from the project since it was significantly affecting the PageSpeed and requires one less resource to be requested.

2) The CSS from **style.css** has been transferred to within the **index.html** file since less resources have to be accessed and the PageSpeed score went up. The `<link>` tag for **style.css** has been commented out so it is not requested. Furthermore, the CSS for the `print` media query has now been moved to its own **print.css** stylesheet and the `<link>` tag has the added attribute of `media="print"` so it is only requested when printing.

3) **CompressJPG** and **Gulp** were used to optimize the images. The **pizzeria.jpg** file in particular was massive and there was no need for such a large image to be served to the web page. This drastically increased the PageSpeed score.

4) `async` attribute was added to the script tags for **perfmatters.js** and **http://www.google-analytics.com/analytics.js**
 

###Optimizations for Part 2###
For Part 2, the following optimizations were made:

1) Removed **determineDx** function since it is unnecessary. Moved the code from the **sizeSwitcher** function into **changePizzaSizes** which uses switch statements to return the **newWidth** as a percentage. This way, there is no need to calculate the **dx** value and it removes the problem of forced synchronous layout since.

2) Use **getElementsByClassName** instead of **QuerySelectorAll** since it is faster and more efficient.

3) Reduced the number of sliding background pizzas being created to **35** instead of **200**.

4) Moved **items** array outside the updatePosition function since it does not need to be re-assigned again and again.


##Installation of Gulp and Build Process##

Note: Please ensure that you have installed **Node.js**. If not, please go to http://www.nodejs.org and install the application. It comes with **npm** which stands for *Node Package Manager* and will be used extensively in the steps below.
1) In a command-line program, navigate to the project directory where you want to install Gulp. 

2) Initialize the **package.json** file in your project directory by running the command: `npm init`. You will be asked a few questions. Once answered, the **package.json** file will be created in the project directory. This .json file contains information about the project and helps manage the dependencies you will use.

3) In a command-line program, type: `sudo npm install -g gulp`.

4) To verify installation, enter the following command to check the version of **Gulp** installed: `gulp -v`

5) Now we need to install **Gulp** locally. To do this, run the command: `npm install --save-dev gulp`. This command will also instruct npm to add the dependency to a list called **devDependencies** in the **package.json** file that was created in **Step 2** above. 

6) Now that gulp is installed, the next step is setting up the gulpfile. This **gulpfile.js** will consist of all the tasks we need performed. For this project, the tasks used are: *gulp-uglify*,*gulp-minify-CSS* and *gulp-image-optimization*. In order to run these tasks, the respective plugins need to be installed and added to the **package.json** file. To install plugins, run the command: `npm install [name of plugin] --save-dev`

7) Now that the plugins have been installed and saved to the **package.json** file, create a new file in the root directory of the project and save it as **gulpfile.js** and paste the following code inside:

```javascript
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imageop = require('gulp-image-optimization');


gulp.task('uglify', function () {
return gulp.src(['app/views/js/*.js','app/js/*.js'])
.pipe(uglify())
.pipe(gulp.dest('dist/views/js/'));
});

gulp.task('minifyPortfolio', function () {
return gulp.src('app/css/*.css')
.pipe(minifyCss())
.pipe(gulp.dest('dist/css/'));
});

gulp.task('minifyPizzeria', function () {
return gulp.src('app/views/css/*.css')
.pipe(minifyCss())
.pipe(gulp.dest('dist/views/css'));
});

gulp.task('imageopPortfolio', function () {
return gulp.src(['app/img/*.jpg','app/img/*.png'])
.pipe(imageop())
.pipe(gulp.dest('dist/img/'));
});

gulp.task('imageopPizzeria', function () {
return gulp.src(['app/views/images/*.jpg', 'app/views/images/*.png'])
.pipe(imageop())
.pipe(gulp.dest('dist/views/images/'));
});

gulp.task('default', ['uglify', 'minifyPortfolio', 'minifyPizzeria', 'imageopPortfolio','imageopPizzeria']);




```


8) The final step is to run **Gulp** itself which is done by simply entering the following command: `gulp`. Since the `default` task has all the required tasks as an array parameter, we do not need to run each task individually.  



