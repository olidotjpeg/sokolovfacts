const facts = [
  'Anton Sokolov made this lock',
  'How many lovely sokolov locks would a sucky sokolov lock if a sucky sokolov locked lovely sokolov locks?',
  'THE MAN, THE MYTH, THE LEGEND',
  'The best locksmith known to man kind',
  '"I had a flask in my studio. Had I known I\'d be leaving I would have grabbed it." - Anton Sokolov',
  'An immigrant from the nation of Tyvia',
  'Sokolov is obsessed with the Outsider, so much so that he attempts rituals and sacrifices in order to summon him',
  'Sokolov took on Delilah, as his apprentice in 1828, so that he may pass on his knowledge of locks before his time comes to an end',
  'Sokolov maintained a longer-lasting relationship with Jessamine Kaldwin',
  'In his spare time, Sokolov is a drunkard and womanizer, as well as a wishful practitioner of locks',
  'Lock me up, lock me up inside!'
]

var factLength = facts.length;

var result = facts[Math.floor(Math.random() * factLength)]

function anton() {
		document.getElementById('facts').innerHTML = result;
	}

anton();