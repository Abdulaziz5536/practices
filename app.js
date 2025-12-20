let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at several points along the way to take photos, but I never stopped riding. The scenery was absolutely beautiful, the trail was very well maintained, and the people I met along the way were extremely friendly. I went to a really cool cafe in Nyack, where I had a really delicious bagel. I loved the whole experience, and I will definitely be doing this again next weekend!';

let storyWords = story.split(' ');



console.log(storyWords.length);



storyWords = storyWords.filter(words => words !== 'literally')

storyWords = storyWords.map(words => {
  if(words==='beautifull'){
    return 'beautiful'
  }
  return words;
})

const overUsedWords = ['really', 'very', 'basically'];

storyWords = storyWords.filter(words => overUsedWords.includes(words));


console.log(storyWords);




