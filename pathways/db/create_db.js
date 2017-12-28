const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('story.db', dropPath );

function dropPath() {
	console.log('Dropping Tables...');
	db.run( "DROP TABLE IF EXISTS path;", dropStory );
}

function dropStory() {
	db.run( "DROP TABLE IF EXISTS story;", dropStoryVariation );
}

function dropStoryVariation() {
	db.run( "DROP TABLE IF EXISTS story_variation;", createPath );
}

function createPath() {
	console.log('Creating Tables...');
	db.run( "CREATE TABLE path (path_id integer PRIMARY KEY, path_description text);", createStory);
}

function createStory() {
	db.run( "CREATE TABLE story (story_id integer PRIMARY KEY, story_entry text, description text, path_id integer,"+
	"FOREIGN KEY (path_id) REFERENCES path (path_id) ON DELETE CASCADE ON UPDATE NO ACTION);", 
	createStoryVariation );
}

function createStoryVariation() {
	db.run(
		"CREATE TABLE story_variation (variation_id integer, story_id integer, var_story_entry text, description text,"+
		"PRIMARY KEY (variation_id, story_id),"+ 
		"FOREIGN KEY (story_id) REFERENCES story (variation_id) ON DELETE CASCADE ON UPDATE NO ACTION);"
	);
	console.log('Successful DB created');
	db.close();
}