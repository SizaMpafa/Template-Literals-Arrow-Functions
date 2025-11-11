const aboutMe = `
Hello! 👋
My name is Siza.
I am a singer-songwriter, my psudonym is SIZA M.
Additionally, I am an aspiring Software Developer
`;

console.log("*******************************");
console.log(aboutMe);


function cardHolder(name, age, role, talent) {
  return `
    <div class="card-details">
      <h2>${name}</h2>
      <p>Age: ${age}</p>
      <p>Role: ${role}</p>
      <p>Role: ${talent}</p>
    </div>
  `;
}

console.log("*******************************");
console.log(cardHolder("Siza Mpafa", 21, "Software Developer", "Singer"));


function greet(name) {
  return `Hello, ${name}!`;
}

const greetArrow = name => `Hello, ${name}!`;

console.log("*******************************");
console.log(greetArrow("SIZA M"));


const mySongs = ["staysem", "I ain't jokin'", "Andinamali", "stranger", "Oyhini Bhabha", "Soft Life", "Yatshintsha", "Musical Notes Intro"];
console.log("*******************************");
console.log(`There's ${mySongs.length} here`)
console.log("*******************************");
for(let i = mySongs.length - 1; i >= 0; i--){
                                console.log(mySongs[i])
                             }
console.log("**************OR************");               
const reversedList = mySongs
                      .slice()
                      .reverse()
                      .map(song => `<li>${song}</li>\n`)
                      .join("");
console.log(`<ul>\n${reversedList}</ul>`);
                             
const songsWithSAndM = mySongs.filter(song => song.toLowerCase().includes("s", "m"));
const reversedSongs = mySongs.map(song => song.split('').reverse().join(''));

console.log("*******************************");
console.log("******Original:******\n", mySongs);
console.log("*****My songs in Desecending Order:*******\n", reversedList);
console.log("*******Songs With S & M:*****\n", songsWithSAndM);
console.log("******Reversed Song Name:*******\n", reversedSongs);