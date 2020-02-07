---
path: /blog/gatsby-installation-git-tower-clone-01
title: Gatsby installation and cleanup
date: 2020-02-06
thumbnail: "../../images/thumbnails/git-tower-clone-01.jpg"
tags: ["gatsby", "javascript", "beginners", "webdev"]
author: Mauro Bono
---

I've been using Gatsby for 3 months now and I really like it. It is a fantastic tool based on React and powered by GraphQL to build static website. As the world of tools like Gatsby is growing faster and stronger I think it's a very good time to start learning how to use it.

So, without waiting any more, let's learn how to use it together. As I always thought that the best way to learn something is by doing it and build something, we are going to create a clone of a website I like very much called **Git Tower Blog**. You can find the original website here: [git-tower](https://www.git-tower.com/blog/).

I created a repo for this project: [git-tower-clone](https://github.com/uptheirons78/git-tower-clone.git).

I also created a step-by-step solution for any tutorials so it's easy to follow along and check your code. You can find result from this lesson here: [git-tower-clone-step-01](https://github.com/uptheirons78/git-tower-clone/tree/step-01).


## How to create a skeleton website with Gatsby.

Use `npx` to create a new Gatsby site. Without specifying any theme Gatsby will use the **default theme** to generate the new website.

```shell
npx gatsby new git-tower-clone
```

Gatsby gives us the possibility to also use a specific **'starter theme'**. You can find all starter themes here: [gatsby-starters](https://www.gatsbyjs.org/starters/?v=2).

If you want to use a starter theme different from the default one you just need to specify it this way:

```shell
npx gatsby new git-tower-clone https://github.com/gatsbyjs/gatsby-starter-blog
```

It will create a Gatsby website called **git-tower-clone** using the **'gatsby-starter-blog'** template. If, like me, you are from the Wordpress world it is very similar to WP Themes.


## **What's inside our basic project ?**

Inside a Gatsby default theme you will find all these files.

```bash
.
├── node_modules
├── src
├── .gitignore
├── .prettierrc
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## **Clean it up and change some files.**

It is time to open your terminal and start coding now!
Open `package.json` and change your project name, description and author.
I really dislike missing semicolons 😎 so open up `.prettierrc` file and change **"semi"** to **true**:

```json
{
  "endOfLine": "lf",
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

Now let's dive into the core of any Gatsby project: `/src` folder.
You find three main folders: `/components`, `/images` and `/pages`.
Gatsby is built with React so `/components` folder contains all project components, while `/images` folder stores all of our images.

One of the main Gatsby **"super power"** is the `/pages` folder. Any components created inside it will be rendered automatically as a page with their path based on their file name: `index.js` will be `/`, `about.js` will be `/about` and so on.

Let's remove the useless `page-2.js` and edit `index.js`.

As you can see inside `index.js` file it is a normal React component. Remove all the code and create a component like this one:

```javascript
import React from "react";

const IndexPage = () => (
  <div>
    <h1>Git Tower Blog Clone</h1>
    <p>
      We are going to learn Gatsby together{" "}
      <span aria-label="emoji" role="img">
        😉
      </span>
    </p>
  </div>
);

export default IndexPage;
```

Let's leave `404.js` file. Open it and change this way:

```javascript
import React from "react";

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
```

Remove all the images included inside `/images` folder. We do not need them now. Inside this folder add the **git-tower** logo (you can find it inside my github repo ... star it up, I'll be glad. Anyone want to be famous, so am I 😉😁) or just use another logo you want. Now we can use it as **favicon**.

Open `gatsby-config.js`. Site configuration options are stored inside this file. Probably the most important one inside any Gatsby project. We need to update `Site Metadata` and `favicon` for now. Later we are going to have a deeper look of this important file.

To change favicon on the default Gatsby theme you just need to update `gatsby-plugin-manifest` section inside `gatsby-config.js`. Your file must look like this:

```javascript
module.exports = {
  siteMetadata: {
    title: `Git Tower Blog Clone`,
    description: `A Git Tower Blog clone to learn how to use and work with Gatsby and Netlify CMS to build a great JAMStack Experience`,
    author: `@UpTheIrons1978`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `git-tower-clone`,
        short_name: `git-tower-clone`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tower-icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
```

Finally let's remove some useless components. Open up `components` folder and delete these files: `header.js`, `image.js`, `layout.css`, `layout.js`.
Leave the only `seo.js` file beacause we are going to use it later for SEO purposes.

## **Finally run your Gatsby site.**

It is time to start the project. Run this command on your terminal

```shell
# you can use also: npm start or yarn start
gatsby develop
```

In less then a minute your site is running at [http://localhost:8000](http://localhost:8000). You can edit your `index.js` file as you want. Change the title, add a component or edit text and you'll see a live update. Same thing it happens with a React project built with `create-react-app` as you ever used it.

Take a look at your terminal and you'll see another link: [http://localhost:8000/__graphql](http://localhost:8000/__graphql). This is where you can enter Gatsby GraphQL interface where you can try to run your graphql queries (or mutations). We are going to talk about it next lessons.

Now open your browser and check your project so far. Nothing really fancy, but we are on a good starting point. My project looks like this one in the picture now.

![git-tower-clone-step-one](https://res.cloudinary.com/dtjbkl94x/image/upload/v1581090791/Blogging/step-01-result-screenshot_iquyrr.png)

Next time we are talking about **how to style your Gatsby website**.
See you ✋ and remember ... **Code Long and Prosper**!
