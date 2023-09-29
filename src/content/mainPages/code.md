---
title: Code
---

Take a look at some of my work! While my focus recently has been on professional work I can't share, here are a few places to see some of my code and thought process.

## Advent of Code

While this isn't a _project_, per se, I like putting this up top because I come back to it often, and always learn something new when I add to it, or refactor old solutions. Recently, I've been moving my solutions from all years and languages to a single repository to reflect, refactor, and explore new languages.

[Check out my typescript, python, and rust solutions here (WIP)](https://github.com/blingusblongus/aoc-collected).

![Advent of Code Picture](https://community.alteryx.com/t5/image/serverpage/image-id/269381iE1288FAEB30E4EDA?v=v2)

## This Very Site

Well, you're already here. This site was built using Astro, starting with nothing but the basic template.

It's actually been fascinating to learn the features of <a href="https://astro.build/" target="_blank">Astro 3.0</a> through building this site - if you're viewing this in Chrome, you might be surprised to learn that this is actually a multi-page app built to leverage the new View Transitions API, to seamlessly navigate to completely different, statically served pages. Personally, I'm really hoping this comes to other browsers soon, as it makes it incredibly easy to create fluid, friendly interfaces, with minimal bundle sizes (and effort).

The markup is largely Astro and React components (precompiled to reduce bundle size), but with the dynamic content driven by simple Markdown files - updating the site to include this section was as easy as editing an `.md` file and triggering a new deployment.

Additionally, it's been exciting to design a with an eye on performance - using SSR or building an SPA is opt-in, per page, so I've elected to use SSG and partial hydration as much as possible, given the requirements of this site. The result is a performant, low-overhead site that (for now, at least), is served by a cdn, costs nothing, requires no maintainance, and is easy to update, all while offering the full expression of building in React or any other framework.

Check out this site's code [here](https://github.com/blingusblongus/blingusblongus.github.io).

## Cribbage Trainer

<div class="md:flex gap-5">
    <div>
My solo project from Prime Academy was a Cribbage Training App, with two modes:

1. A training mode that interactively teaches the different types of scoring combinations of cribbage.
2. A challenge mode that consists of a series of rounds, in which the user chooses to discard 2 cards from a random set of 6, with the goal of maximizing in-hand points. The app then finds the statistically best choice, and shows data comparing the user's choice and the optimal choice.

While it's no longer hosted on heroku (RIP free tier), [the source code is available here](https://github.com/blingusblongus/cribbage-trainer).

</div>

<img src="https://github.com/blingusblongus/cribbage-trainer/raw/master/images/golf_demo.gif" class="w-auto sm:max-h-[400px] m-auto sm:m-0" alt="Cribbage Golf Gif" />

</div>

## Now Experience Component Articles

One of my interesting projects early on was to research a new framework for the company I was working for at the time, evaluate opportunities for using it in future projects, and share my findings with the team and the community. The framework was designed to integrate with a specific SaaS product, and was very early in adoption. Though the code demos I wrote were handed over when I got my next job, a couple of the articles I wrote are still available:

-   [Now Experience Custom Components, Part One](https://creator-dna.com/blog/custom-components-in-the-now-experience-ui-framework-part-1-creating-a-stateful-web-component)
-   [Now Experience Custom Components, Part Two](https://creator-dna.com/blog/custom-components-in-the-now-experience-ui-framework-part-2-actions-and-action-handlers)

![Custom Component Article Thumbnail](https://images.squarespace-cdn.com/content/v1/5f35c4fce727994a06c391f5/1654724216198-T9V21GDIN7GUBZJZI6Q5/Action_Handlers_1.png)

## SC Language Map

A group project from Prime Academy, the SC Language Map was an MVP built with React and Node.js. It used the Mapbox API to interactively map and display information about endangered languages in South Carolina, and the locations where they're spoken.

![Sample Language Map Screenshot](https://github.com/South-Carolina-Language-Map/South-Carolina-Language-Map/blob/development/documentation/images/search_view.png?raw=true)
