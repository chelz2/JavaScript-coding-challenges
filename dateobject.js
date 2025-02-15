let x;

let d = new Date();

console.log(d);

x = d.toDateString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getDay();
x = d.getDate();
x = d.getMonth();
x = d.getHours();

x = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

// modern way to retrieve & represent date object data
x = Intl.DateTimeFormat("en-US").format();
x = Intl.DateTimeFormat("default", { month: "long" }).format();
// or :-
x = d.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

console.log(x);
