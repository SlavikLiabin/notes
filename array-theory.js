const names = ["Борислав", "Владимир", "Владислав", "Игорь"];

const letters = ["g", "a", "c", "d", "t", "A"];

// console.log("Sort: ", letters);

console.log(
  letters.sort(function (a, b) {
    return b.charCodeAt(0) - a.charCodeAt(0);
  })
);
