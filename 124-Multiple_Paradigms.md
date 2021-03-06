
# Multiple Paradigms

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can write programs and tests using Node.js and npm
- Can write and format documents using Markdown
- Can read and write HTML
- Can do file I/O with Node.js
- Are familiar with parsing
- Are familiar with the concept of programming paradigms
- Are interested in object-oriented programming
- Are interested in functional programming
- Are interested in comparing/contrasting programming styles

## Description

Implement a Markdown parser using three different programming paradigms: **object-oriented**, **functional**, and **imperative**.

Fork the [multiple-paradigms][multiple-paradigms] repository and use the fork as your project artifact.

The repository includes a skeleton script at `bin/parse` where you need to load and execute your Markdown parsers for each programming paradigm.

To parse a file, use the `npm run parse:<paradigm> <file.md>` command, where `<paradigm>` is one of either `oo` (object-oriented), `functional`, or `imperative` and `<file.md>` is a path to a Markdown-formatted file.

For example, say we have a file `hello.md` with the contents:

```shell-session
$ cat hello.md
_Hello_.

- My name is **Inigo Montoya**.
- You killed my father.
- Prepare to die.
```

...then the command `npm run parse:oo hello.md` (or `parse:functional`, or `parse:imperative`) should print the following:

```shell-session
$ npm run parse:oo hello.md
<p><em>Hello</em>.</p>
<ul>
<li>My name is <strong>Inigo Montoya</strong>.</li>
<li>You killed my father.</li>
<li>Prepare to die.</li>
</ul>
```

## Context

Knowing how, when, and where to apply a particular _programming paradigms_ to a a piece of code is a key skill of any self-respecting software developer.

Being fluent in different paradigms will help you to think about and understand software architecture, and to make better design choices. It is also a crucial tool for communicating effectively with other developers.

## Specifications

- [ ] Artifact produced is a fork of the [multiple-paradigms][multiple-paradigms] repo.
- [ ] Can run all tests with `npm test`.
- [ ] All tests are passing.
- [ ] Can parse Markdown syntax ([reference](https://help.github.com/articles/basic-writing-and-formatting-syntax/)) and render correct HTML for...
  - [ ] Paragraphs
  - [X] Headings
  - [X] Italicized text
  - [X] Bold text
  - [ ] Links
  - [ ] Images
  - [ ] Unordered lists
  - [ ] Ordered lists
  - [ ] Blockquotes
  - [ ] Horizontal rules
  - [ ] Inline codes
  - [ ] Code blocks
- [ ] Object-oriented implementation employs key characteristics of the object-oriented style
  - [ ] Encapsulation
  - [ ] Message passing with objects
  - [ ] Composition, inheritance, and delegation
  - [ ] Polymorphism
- [ ] Functional implementation employs key characteristics of the functional style
  - [ ] Higher-order functions
  - [ ] Pure functions
  - [ ] Recursion
  - [ ] Referential transparency
- [ ] Imperative implementation employs key characteristics of the imperative style
  - [ ] Subroutines
  - [ ] Linear control flow
  - [ ] Sequential state modifications
  - [ ] Looping and branching statements
- [ ] Repository includes a README file with basic installation and setup instructions.
- [ ] All dependencies are properly declared in `package.json`.
- [ ] All major features are added via pull requests with a clear description and concise commit messages.
- [ ] Code uses a linter and there are no linting errors.
- [ ] Variables, functions, files, etc. have appropriate and meaningful names.
- [ ] Functions are small and serve a single purpose.
- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

### Stretch

For each programming paradigm, write a Markdown parser using a language that _specializes in that paradigm_.

- [ ] Object-oriented-style Markdown parser is written in either [Java](https://www.java.com/en/) or [Ruby](https://www.ruby-lang.org/)
- [ ] Functional-style Markdown parser is written in either [Clojure](https://clojure.org/) or [Haskell](https://www.haskell.org/)
- [ ] Imperative-style Markdown parser is written in either [C](https://en.wikipedia.org/wiki/C_(programming_language)) or [Go](https://golang.org/)\*

_\*It is a bit blasphemous to say that Go specializes in imperative programming, as it is a highly sophisticated language. That being said, it works just fine when using an imperative style._

[mit-license]: https://opensource.org/licenses/MIT
[multiple-paradigms]: https://github.com/GuildCrafts/multiple-paradigms
