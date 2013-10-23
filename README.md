# fowa-workshop

## The Front-End Warrior Workshop at FOWA 2013

##### Presented by Addy Osmani

- Grunt
- ?
- ? Bower
- ? Yeoman (now called Yo)
- Lunch
- Hands-on exercises
- Prizes

## Notes

### Part One

Context switching between tools is as much of an issue as context switching between projects/work.

With compile libraries like Sass, Less, Coffeecript etc, use watch to live reload when files change.

The number one reason, according to HTTP Archive, that pages have slowed down is because of images.

##### Grunt Intro

	npm install -g grunt-cli

Has yet to find a task that he can't script with Grunt. Has automated all his daily dev workflow with Grunt.

Maybe get everybody in my team to code one grunt task in a future project lounge?

Create multi size images with _srcN_.

Image optermisation with _image-optim_. This grunt task is awsome, does all the image compression on the fly.

_concurrent_ will run undependent grunt tasks async. _newer_ will only run stuff that needs to run. Lots of people don't know about these two tools, so they are not being efficent with thier automation tools.

##### Bower Intro

	npm install -g bower

Bower by default only installs the latest stable version. So you might not get the newest version as the latest build is not stable.

Bower can even do your script tags for the libraries it fetches.

You can setup a private bower if you company wants to package stuff but not expose it outside your buisness.

##### Yo Intro

	npm install yo -g

**npm install generator-backbone**

Yo is great for if you don't have time to learn Grunt or Bower inside out, you want the advantages of them today, but you can't learn it all. Yo gets you up a running faster. It also scaffolds out all the boilerplate.

Yo will use Grunt and Bower. You don't need to use Yo, but you can learn Yo fast and then get that to deal with Grunt and Bower for you.

Yo has generators for new projects. You can start a new backbone project with one command line :)

	npm search yeoman-generator

	npm install generator-webapp // Might be global -g. I missed that bit
	yo webapp // Starts a new web app

	npm install generator-backbone // Might be global -g. I missed that bit
	yo backbone
	// Get some questions about what you would like

	yo backbone:view // Creates new view etc

	// Lots more, you can start a new wordpress or mobile app in 2 lines of code!!!
	npm install generator-mobile
	yo mobile

**Must do unit testing with Mocha.** Every conf I go to I come back wanted to do unit testing with our JS. We need to make this happen ASAP!

Make alias to common. So you can in one line do something very powerful. Addy aliased _clone_ to checkout to current path a project from his github, get all dependencys and then open it in his code editor. WOW!

Use history once in a while to see what repetative tasks you have in your day. Then work on automating them.

Likes alfred a lot, suggested https://github.com/zenorocha/alfred-workflows

If you use sublime you can use the build tool to run your grunt tasks. Sublime Linter and LintJS.

Chrome has workspaces in Chrome latest build. It allows you to use Chrome as an editor for you project. Great for debugging. _This must be what brackets does when you debug a brackets extension._
You can even create new files in Chrome. Chrome now has framework debugging support. You can turn off the debugger dropping into frameworks. It is in the _experiments_ section of Chrome.

Talked about remote debugging between sublime and chrome. I have seen this recently with brackets and chrome. Allows you to use your own editor of choice over chrome, but still breakpoint your code.

Coming to chrome soon, is a real termianl in chrome dev tools. Not out yet, but soon will be able to npm from inside chrome dev tools.

### Part Two





### Scaffold, Build & Manage

Scaffold, write less with Yo

Build, preview and test with Grunt

Manage dependencies with Bower


## Tools

* Automators
	* CodeKit
	* Hammer
	* Mixture (Chat to Peter Nelson from Mixture at next codeHarbour)
	* Scout
	* Prepros
	* Koala
* Editor or IDEs
	* WebStorm - A great Javascript IDE for coding large scale JS apps with all the benifits and IDE has over a text editor.
	* Sublime
	* Brackets
	* Tailor - This is brackets on ChromeOS. You can now code on a ChromeBook!!! GAME CHANGER!!!
* Other

