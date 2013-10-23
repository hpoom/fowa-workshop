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

Context switching between tools is as much of an issue as context switching between projects/work.

With compile libraries like Sass, Less, Coffeecript etc, use watch to live reload when files change.

The number one reason, according to HTTP Archive, that pages have slowed down is because of images.

##### Grunt Intro

**npm install -g grunt-cli**

Has yet to find a task that he can't script with Grunt. Has automated all his daily dev workflow with Grunt.

Maybe get everybody in my team to code one grunt task in a future project lounge?

Create multi size images with _srcN_.

Image optermisation with _image-optim_. This grunt task is awsome, does all the image compression on the fly.

_concurrent_ will run undependent grunt tasks async. _newer_ will only run stuff that needs to run. Lots of people don't know about these two tools, so they are not being efficent with thier automation tools.

##### Bower Intro

**npm install -g bower**

Bower by default only installs the latest stable version. So you might not get the newest version as the latest build is not stable.

Bower can even do your script tags for the libraries it fetches.

##### Yo Intro

**npm install yo -g**

Yo is great for if you don't have time to learn Grunt or Bower inside out, you want the advantages of them today, but you can't learn it all. Yo gets you up a running faster. It also scaffolds out all the boilerplate.

Yo will use Grunt and Bower. You don't need to use Yo, but you can learn Yo fast and then get that to deal with Grunt and Bower for you.

Yo has generators for new projects. You can start a new backbone project with one command line :)

	yo webapp // Starts a new web app



### Scaffold, Build & Manage

Scaffold, write less with Yo

Build, preview and test with Grunt

Manage dependencies with Bower


## Tools

* CodeKit
* Hammer
* Mixture (Chat to Peter Nelson from Mixture at next codeHarbour)
* Scout
* Prepros
* Koala

