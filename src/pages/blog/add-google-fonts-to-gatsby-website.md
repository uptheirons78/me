---
path: /blog/add-google-fonts-to-gatsby-website
title: How to Add Google Fonts to a Gatsby Website
date: 2020-02-27
thumbnail: "../../images/thumbnails/Gatsby__GoogleFonts.png"
tags: ["gatsby", "javascript", "beginners", "webdev", "jamstack"]
author: Mauro Bono
---
I've been learning how to build websites with Gatsby for more than 3 months now and what that I can say is that I don't like it, I really LOVE it 💖!

Gatsby is a powerful React-based framework that makes building static websites and apps super easy. It's simple to use, fast and reliable. So I decided to spread the words, follow the hype on it and write down some blog posts on how to solve those little "problems" I ran into building my personal projects.

One of the first thing I always do when it comes to start a new project from scratch is to find a good font to display text. Usually the first place I visit is the fantastic and useful [Google Fonts](https://fonts.google.com/) website.

If you want to use Google Fonts inside a simple HTML5 and CSS3 project you just need to add your chosen font link, **Open Sans** for example, in the <head> tag of your HTML file and you're done. Example:

```html
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>My Awesom Website</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap" rel="stylesheet">
  </head>
  <body>

  </body>
  </html>
```

When it comes to Gatsby, things are a little bit different ...

There are at least three different ways to import a **Google Font** inside your Gatsby project. I'm going to show you two all of them.

# 1. Gatsby Plugin Prefetch Google Fonts

Any Gatsby project can leverage all the different plugins available inside the Plugin Section of their [website](https://www.gatsbyjs.org/plugins/). Now it counts 1719 plugins, and the number is growing faster and faster.

The plugin you need is called **gatsby-plugin-prefetch-google-fonts**. Once installed and configured properly it prefetches and download for you the Google Font you want, instead of loading it from Google's external stylesheet.

To include it in your project you must install the plugin:

```bash
  npm i --save gatsby-plugin-prefetch-google-fonts
```

Then open your `gatsby-config.js`, the hearth of any Gatsby project, and include the plugin with the webfonts you want to use:

```js
  module.exports = {
  siteMetadata: {
    title: `My fantastic Gatsby website`,
    description: `Gatsby is so cool I felt in love with it and want to build all the web with this tool`,
    author: `@UpTheIrons1978`,
  },
  plugins: [
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Nunito`,
              variants: [`400`, `700`],
              subsets: [`latin`],
            },
            {
              family: `Open Sans`,
              variants: [`400`, `700`, `800`],
            },
            {
              family: `Acme`,
              variants: [`400`],
            },
          ],
        },
      }
    ]
  }
```

As you can see it is possible to specify different things: **family** for the font you want, **variants** for the weight and also **subsets** for latin, cyrillic, greek or others (note that not all fonts are available in all subsets).

If you want to deep dive inside all the parameters you can use, take a look at the [README](https://github.com/SirPole/google-fonts-plugin) file of this plugin.

# 2. Gatsby Plugin Google Fonts

A similar way to add Google Fonts to your Gatsby website is by installing another plugin called **gatsby-plugin-google-fonts**. It's an old plugin, but always useful.

First you need to install it:

```bash
  npm i --save gatsby-plugin-google-fonts
```

Then you must add it to your `gatsby-config.js`:

```js
  module.exports = {
  siteMetadata: {
    title: `My fantastic Gatsby website`,
    description: `Gatsby is so cool I felt in love with it and want to build all the web with this tool`,
    author: `@UpTheIrons1978`,
  },
  plugins: [
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            fonts: [
            `nunito`,
            `open sans\:400,400i,700`
            ],
            display: 'swap'
          ],
        },
      }
    ]
  }
```

And you're done! You can use now the font you needed.

# 3. Self-hosting Google Fonts with Typefaces.js

Last, but not the least, the way to add Google Fonts I like the most and always use in my projects, because I think it is the fastest and more elegant way to do it: [Typefaces.js](https://github.com/KyleAMathews/typefaces).

It is a package created by the man behind Gatsby: **Kyle Mathews**. And it is really easy to use.

Find the font you want to use inside [NPM](https://www.npmjs.com/) website looking for **"typeface"** (you can find almost all Google Fonts available on the Google website).

Let's say you want to use **"Oswald"** font in your project. Once inside `npm` website search `typeface-oswald` and you'll surely find it here: [Oswald](https://www.npmjs.com/package/typeface-oswald).

Once you'll be sure the typeface for `Oswald` exists, install it with `npm` or `yarn`:

```bash
  npm i --save typeface-oswald
```

Then open (or create) your `gatsby-browser.js` and import the font you downloaded from `npm`:

```bash
  import "typeface-oswald";
```

Now you can use it on your project. All weights and styles are available. It will take you less than 1 minute and I highly recommend it.

Next time I'm going to show you how to add a custom font to your Gatsby website, meanwhile: Have fun and enjoy your day!

See you ✋ and remember ... **Code Long and Prosper**!
