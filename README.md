# skills-getting-started-with-github-copilot
Exercise: Get started using GitHub Copilot

## Word Checker Function

This repository contains a function to check if a specific word exists in a comment.

### Usage

```javascript
const checkWordInComment = require('./checkWordInComment');

// Check if the word "their" is in the comment
const result = checkWordInComment("Is their word in this comment?", "their");
console.log(result); // true
```

### Features

- Case-insensitive word matching
- Matches whole words only (uses word boundaries)
- Simple and easy to use

### Running the tests

```bash
node checkWordInComment.js
```
