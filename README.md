# Interactive Resume

__Today__:<br>
* A collection of Markdown JSX files ([mdx](https://mdxjs.com/)) go in, and a static website bundle comes out.

__WIP / "Tomorrow"__:<br>
* A collection of Markdown JSX files ([mdx](https://mdxjs.com/)) go in, and a static website bundle _✨ powered by content-aware conversational artificial intelligence ✨_ comes out.

## How does it work?

The Markdown JSX files support a novel sub-page format like so:

>### entrypoint.mdx
```md
# Welcome to my page!

I like <FlowersLink />!
```

>### flowers.mdx
```md
# Flowers

I sure do like flowers. My favorites are roses and tulips :)
```

The `<FlowersLink />` JSX element will automatically be generated by the "framework"; it goes by filename and appends `Link`. The `<FlowersLink />` appears as `flowers` and when clicked causes the webpage to navigate to a sub-page using [React Router](https://reactrouter.com/en/main)

## Wiki

There's a [wiki](https://github.com/austinrafter/interactive-resume/wiki)! Additionally, Joe is cataloguing additional AI research material [here](https://github.com/candyapplecorn/speech-to-slideshow/wiki).

Here's a [cool page](https://github.com/candyapplecorn/speech-to-slideshow/wiki/Upserting-LLM-Generated-document-embeddings-in-a-storage-service-and-a-vector-database) from the wiki showing the control flow diagram for updating the knowledge base for the large language model, as well as keeping parity with existing documents across the vector database and storage solution.

## Packages

* Vite - https://vitejs.dev/ - An alternative to webpack; provides a development environment with hot module reloading, and bundles all html/javascript/css/assets into a static web bundle. 
* MDX - https://mdxjs.com/ - A cool abstraction that wraps markdown with JSX component support.
* [React](http://reactjs.org/), [React Router](https://reactrouter.com/en/main)

## Work in Progress

We are working on integrating large language model support for the documents, so that a user of the client may ask the document questions about itself. For more information, see:

* [AI research bucket](https://github.com/candyapplecorn/speech-to-slideshow/wiki)
* [This document's wiki](https://github.com/candyapplecorn/speech-to-slideshow/wiki)

## Authors

* Austin Rafter -- [austin.rafter14@gmail.com](austin.rafter14@gmail.com)
* Joseph Burger -- [candyapplecorn@gmail.com](candyapplecorn@gmail.com)
