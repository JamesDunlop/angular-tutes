Angular Tutorials WNG
=====================

Steps to install
===================
- Install Node on your machine (download from http://nodejs.org/)
- Install Ruby (http://rubyinstaller.org/)
- Start Ruby command line 
- Install the Ruby Bundler <code>gem install bundler</code>
- Install compass <code>gem install compass</code>
- Clone latest code from GitHub, git clone https://github.com/JamesDunlop/angular-tutes.git
- Change to the local GitHub directory for this cloned 
- Open ruby command line and run command <code>bundle install</code>
- Open windows command line and install global node packages with command <code>npm -g install grunt-cli bower</code>
- Install local node packages by then running this from the command line <code>npm install</code>
- Start up Grunt by issuing command 'grunt' or 'grunt default' at the command line
- Open browser and navigate to http://localhost:9000/<page>.html

Notes
==================
- HTML pages should have this on the last line before closing body tag

    <script src="http://localhost:35729/livereload.js"></script>

- We are using Autoprefixer to post process the CSS so prefixes are turned off with Compass by adding this:

$experimental-support-for-mozilla : false !default;
$experimental-support-for-webkit : false !default;
$support-for-original-webkit-gradients : false !default;
$experimental-support-for-opera : false !default;
$experimental-support-for-microsoft : false !default;
$experimental-support-for-khtml : false !default;


Angular links
=============

On providers, services etc
- Fiddle  http://jsfiddle.net/pkozlowski_opensource/PxdSP/14/
