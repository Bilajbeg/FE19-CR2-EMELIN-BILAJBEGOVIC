let users = [
{
    name: "John",
    age: 20,
    likes: 3,
    picture: "/img/img_2_tasks.jpg"
},{
    name: "John",
    age: 20,
    likes: 3,
    picture: "/img/img_2_tasks.jpg"
},{
    name: "John",
    age: 20,
    likes: 3,
    picture: "/img/img_2_tasks.jpg"
}, {
    name: "John",
    age: 20,
    likes: 3,
    picture: "/img/img_2_tasks.jpg"
},{
    name: "John",
    age: 20,
    likes: 3,
    picture: "/img/img_2_tasks.jpg"
}, {
    name: "Mary",
    age: 21,
    likes: 5,
    picture: "/img/img_2_tasks.jpg"
}, {
    name: "Mark",
    age: 30,
    likes: 10,
    picture: "/img/img_2_tasks.jpg"
}, {
    name: "Mark",
    age: 30,
    likes: 10,
    picture: "/img/img_2_tasks.jpg"
}, {
    name: "Mark",
    age: 30,
    likes: 10,
    picture: "/img/img_2_tasks.jpg"
}
];

for (let user of users) {
    document.getElementById("result").innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${user.picture}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.name}, ${user.age}</h5>
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
          <h5 class="card-title">${users[i].name}, ${users[i].age}</h5>
          <p class="card-text myLikes">${users[i].likes}</p>
        </div>
      </div>
        `;
    })
}