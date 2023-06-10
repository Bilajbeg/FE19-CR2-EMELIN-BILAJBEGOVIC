let users = [
{
    name: "Waking up morning<br>",
    age: "Washing face and teeth!!!",
    likes: 3,
    picture: "/img/img_2_tasks.jpg"
},{
    name: "Morning run 30min.",
    age: "Running around the park",
    likes: 3,
    picture: "/img/img_2_tasks.jpg"
},{
    name: "Making breakfast",
    age: "Muesli with fruit",
    likes: 3,
    picture: "/img/img_2_tasks.jpg"
}, {
    name: "Going to work",
    age: "Buy cup of coffee",
    likes: 3,
    picture: "/img/img_2_tasks.jpg"
}, {
    name: "After work - Fitness",
    age: "Cardio training 1hour",
    likes: 5,
    picture: "/img/img_2_tasks.jpg"
}, {
    name: "Shopping",
    age: "Avenue Mall",
    likes: 10,
    picture: "/img/img_2_tasks.jpg"
}, {
    name: "Dinner with family",
    age: "Indian restaurant",
    likes: 10,
    picture: "/img/img_2_tasks.jpg"
}, {
    name: "Reading a book",
    age: "Before sleep read something",
    likes: 10,
    picture: "/img/img_2_tasks.jpg"
}
];

for (let user of users) {
    document.getElementById("result").innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${user.picture}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.name}</h5>
      <h6 class="card-title">${user.age}</h6>
      <p class="card-text myLikes">${user.likes}</p>
      <a class="btn btn-primary myBtn">Like</a>
      <a class="btn btn-success detailsBtn">Details</a>
    </div>
  </div>
    `;
}

let btns = document.getElementsByClassName("myBtn");


for (let i in Array.from(btns)) {
    console.log(i)
    btns[i].addEventListener("click", function() {
        users[i].likes++;
        document.getElementsByClassName("myLikes")[i].innerHTML = users[i].likes;
    })
}

let detailsBtns = document.getElementsByClassName("detailsBtn");

for (let i = 0; i < btns.length; i++) {
    detailsBtns[i].addEventListener("click", function() {
        document.getElementById("details").innerHTML = `
        <div class="card" style="width: 100%;">
        <img src="${users[i].picture}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${users[i].name}</h5>
          <h6 class="card-title">${users[i].age}</h6>
          <p class="card-text myLikes">${users[i].likes}</p>
        </div>
      </div>
        `;
    })
}