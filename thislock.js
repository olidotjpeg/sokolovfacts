const facts = [
  'Anton Sokolov made this lock',
  'How many lovely sokolov locks would a sucky sokolov lock if a sucky sokolov locked lovely sokolov locks?',
  'THE MAN, THE MYTH, THE LEGEND',
  'The best locksmith known to man kind',
  '"I had a flask in my studio. Had I known I\'d be leaving I would have grabbed it." - Anton Sokolov',
  'An immigrant from the nation of Tyvia'
]

var factLength = facts.length;

var result = facts[Math.floor(Math.random() * factLength)]

function anton() {
		document.getElementById('facts').innerHTML = result;
	}

anton();