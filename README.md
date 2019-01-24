# Intro to Node/Express Workshop: Recipe Management With the Scallion API

## Summary
* This is a server-only API designed to teach the beginnings of node, express, RESTful APIs, and HTTP Transactions
* There is no front end here: just a server and a .JSON file for data storage

## Setup -- 2 Options

### Tools: 
- *Node*: Make sure you have node installed on your system. Go to the command line/prompt and enter `node -v` to confirm its presence and version
  - If you don't have node, go here: https://nodejs.org/en/ and download the LTS version
- *Postman*: Download the desktop client from here: https://www.getpostman.com/
- A *text editor*: Just choose one. Here are some ideas: `['Atom', 'SublimeText', 'Vim', 'VSCode']` 

### Set up your project: 
1. If you'd like to download a ZIP file 
    - Change current branch from `master` to `start-workshop`
    - unzip contents and move to your code directory
2. *Recommended*: clone the repo via git cli 
  - `cd <YOUR CODE DIRECTORY>`
  - `git clone https://github.com/tr00gle/scallion-recipe-management.git`
3. `cd` to the scallion project direcotry 
4. `npm install`
5. Open directory in code editor of your choice 
6. If you took option 2, checkout the `start-workshop` branch

## Agenda
1. Get setup 
2. Write your "Hello, Scallions!" application
3. Write your `GET /recipes` route, and use your first middleware
4. Write your first `POST /recipes` route, and now experience the power of using a middleware *chain*
5. Complete the CRUD quad-fecta!
6. Tinker away! Start by expanding on editing an existing recipe!