jareth.github.io
================

Jekyll + Tailwind setup is mostly based on [this blog post by Frank de Jonge][1] and the [example jekyll setup from Tailwindcss][2].

[1]: https://blog.frankdejonge.nl/setting-up-docs-with-tailwind-css-and-github-pages/ "Setting up docs with Tailwind CSS & GitHub Pages"
[2]: https://github.com/tailwindcss/setup-examples/tree/master/examples/jekyll "Jekyll with Tailwind"

Local Development
-----------------

Requires Ruby and Yarn. Setup tools:

    bundle install
    yarn install
    
 For local development you can run both webpack watch and jekyll serve:
 
    yarn run watch & bundle exec jekyll serve && fg
    
For production we use purgecss to remove unneeded rules but this requires the final html to be present in jeykyll's 
build folder (`_site`). So first build jekyll in production mode:

    JEKYLL_ENV=production bundle exec jekyll build

Then build webpack in production mode:

    yarn run prod
     
If you are copying the result `_site` folder to a web server, you will need to run the jekyll build again, to copy the 
result of the webpack build into the folder. For pushing to github pages, just commit the files in `dist`.