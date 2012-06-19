var currentDBVersion = "1.0";
var newDBVersion = "1.0";
var db;

dbsCrypt = {};

function loadData(){
	var articles = new Array();
	articles[0] = "Anna";
	articles[1] = "Betty";
	articles[2] = "Christine";
	console.log(articles.length);

	db.transaction(function(tx) {
			for (var index = 0; index < articles.length; index++) {
				var article = articles[index];
				console.log(article);
				tx.executeSql("INSERT INTO articles (article) VALUES (:article);", [article],	null);
			}
		}, null, function() { 
			loadPage(db); 
		});
}

function loadPage(contentId){
	console.log("loading page");
	db.readTransaction(function(tx) {
		// Enumerate the entire table.
		tx.executeSql("SELECT * FROM articles WHERE articleId = :contentId", function(tx, results) {
			var rows = results.rows;
			console.log(rows);
			var target = document.querySelector("#content");
			for (var index = 0; index < rows.length; index++) {
			  var item = rows.item(index);
			  var element = document.createElement("div");
			  element.textContent = item.name;
			  target.appendChild(element);
			}
		});
	});
}

function initDB(){
	console.log("loading db");
	db = window.openDatabase("contentDB", "1.0.0", "My content database", 1024);
	/**if (db.version != currentDBVersion) {*/
	  //db.changeVersion(db.version, newDBVersion, function(tx) {
		// User's first visit.  Initialize database.
		var tables = [
		  { name: "links", columns: ["linkId INTEGER PRIMARY KEY","url TEXT"]},
		  { name: "articles", columns: ["articleId INTEGER PRIMARY KEY","content TEXT"]},
		  { name: "images", columns: ["imageId INTEGER PRIMARY KEY","articleId INTEGER","filename TEXT"]}
		];
	
		for (var index = 0; index < tables.length; index++) {
		  var table = tables[index];
		  tx.executeSql("CREATE TABLE " + table.name + "(" +
						table.columns.join(", ") + ");");
		}
	  //}, null, function() { loadData(db); });
	/**}	else {
	  // User has been here before, no initialization required.
	  loadPage(db);
	}*/
}