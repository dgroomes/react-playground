# raw-html

Incorporate raw HTML into a React app.


## Overview

This is a working example that showcases how you might incorporate raw HTML into a React app at runtime. This is a use-case
when your app has a source of raw HTML that it needs to incorporate into the web page. For example, you might have a
Markdown document that you send to the GitHub "markdown-to-HTML" API and now you want to splice the HTML into the page.

I posted this code as an [answer to a StackOverflow question](https://stackoverflow.com/a/73006713).


## Instructions

Follow these instructions to build and serve the program:

1. Install the dependencies
    * ```shell
      npm install
      ```
2. Serve the content (and build continuously)
    * ```shell
      npm start
      ```
3. Open the browser
    * Open <http://[::1]:8000>
    * Verify the UI and iterate!


## Reference

* [StackOverflow question: *Rendering raw html with reactjs*](https://stackoverflow.com/q/27934238)
* [StackOverflow answer about rendering raw HTML into a web page](https://stackoverflow.com/a/35385518)
