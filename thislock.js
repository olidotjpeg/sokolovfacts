var facts = [
  "Anton Sokolov made this lock",
  "How many lovely sokolov locks would a sucky sokolov lock if a sucky sokolov locked lovely sokolov locks?"
]

var factLength = facts.length;

var result = facts[Math.floor(Math.random() * factLength)]

function anton() {
		document.getElementById('facts').innerHTML = result;
	}

anton();