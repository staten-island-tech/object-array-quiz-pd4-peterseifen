const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const democratic = presidents.filter((president) => president.party === "D");

console.log(democratic);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const republican = presidents.filter(function (president) {
  if (president.party === "R" && president.terms === 1) {
    return true;
  }
});
console.log(republican);

//3) return only the last three presidents
console.log(presidents.slice(9));

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const twoTermsDem = presidents
  .filter((president) => president.terms === 2)
  .filter((president) => president.party === "D")
  .slice(0);

console.log(twoTermsDem);
//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
for (let index = 0; index < presidents.length; index++) {
  const element = presidents[index];
  if (element.name === "Lyndon Johnson")
    if (element.terms === 2) {
      console.log("LBJ served two terms");
    } else {
      console.log("LBJ was one and done");
    }
}
