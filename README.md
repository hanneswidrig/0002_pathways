# Pathways

#### A choose-your-own adventure style React based game

This is currently a work in progress game, basic functionality to traverse stories is implemented via buttons or left/right arrow keys.

![Screenshot of Pathways](https://i.imgur.com/8O3j1fP.png)

## Running Pathways

_VSCode is my editor of choice, so the instructions below are intended to explain how to easily run Pathways locally._

### VSCode Instructions

1. Clone the repository
2. Install dependencies for Express back-end.
```bash
cd 0002_pathways/pathways/
npm install
```
3. Install dependencies for React front-end
```bash
cd 0002_pathways/pathways/client/
npm install
```

4. Run the `run server` task in VSCode. -If you are not using VSCode, please use the instructions below.-

### Alternative Instructions

4a. Start Express.js server back-end. Stories will be stored from this server instance.
```bash
node 0002_pathways/pathways/bin/www
```
4b. Start React front-end web application. This allows you to actually use the website.
```bash
cd 0002_pathways/pathways/client/
npm start
```

## TODO

_Stars indicates highest priority_

- [ ] :star: Switch to Redux
- [ ] More in-depth single storyline
- [ ] Chapters relate to actual chapters of story
- [ ] Proper record keeping of player decisions
- [ ] Encode current progress into story and decisions made
- [ ] Abstraction to supporting many stories

## Future Work / Investigations

_Might be implemented or just something I thought was a good idea._ :open_hands:

- [ ] TypeScript => JavaScript
- [ ] Login/Registration to keep track of results
- [ ] Ability to write your own storylines
- [ ] Proper database for recording storylines
- [ ] Testing
- [ ] Git Flow
- [ ] Better application name?
- [ ] Dockerize application
