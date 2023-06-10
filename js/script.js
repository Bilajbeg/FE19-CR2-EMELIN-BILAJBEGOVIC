let tasks = [
{
    name: "Waking up morning<br>",
    notiz: "Washing face and teeth!!!",
    time: "06:00am",
    picture: "/img/waking_up_in_the_morning.jpg",
    importance: 0,
	duration: 15,
},{
    name: "Morning run 30min.",
    notiz: "Running around the park",
    time: "06:15am",
    picture: "/img/running.jpg",
    importance: 0,
	duration: 30,
},{
    name: "Taking breakfast",
    notiz: "Muesli with fruit",
    time: "07:00am",
    picture: "/img/breakfast.jpg",
    importance: 0,
	duration: 30,
}, {
    name: "Going to work",
    notiz: "Buy cup of coffee",
    time: "07:30am",
    picture: "/img/going_work.jpg",
    importance: 0,
	duration: 45,
}, {
    name: "Businness meeting",
    notiz: "New stakeholder",
    time: "14:30am",
    picture: "/img/meeting.jpg",
    importance: 0,
	duration: 60,
},{
    name: "After work - Fitness",
    notiz: "Cardio training 1hour",
    time: "17:00am",
    picture: "/img/firness.jpg",
    importance: 0,
	duration: 60,
}, {
    name: "Shopping",
    notiz: "Avenue Mall",
    time: "18:15am",
    picture: "/img/shopping.jpg",
    importance: 0,
	duration: 45,
}, {
    name: "Dinner with family",
    notiz: "Indian restaurant",
    time: "19:30am",
    picture: "/img/dinner.jpg",
    importance: 0,
	duration: 60,
}, {
    name: "Reading a book",
    notiz: "Before sleep read something",
    time: "21:30am",
    picture: "/img/reading_bed_book.jpg",
    importance: 0,
	duration: 30,
}
];

// Here is the function to sort the importance
function sortByImportancedown() {
	tasks.sort((a, b) => a.importance - b.importance);
	updateTaskDisplay();
}

function sortByImportanceup() {
	tasks.sort((c, d) => d.importance - c.importance);
	updateTaskDisplay();
}

function updateTaskDisplay() {
	const resultElement = document.getElementById("result");
    //  Now the result will be cleared
	resultElement.innerHTML = ""; 

	for (let i = 0; i < tasks.length; i++) {
		const task = tasks[i];

		
	const taskElement = document.createElement("div");
	taskElement.className = "card";
	taskElement.innerHTML = `
	<div class="card-header">
	  <h5 class="title">TASK</h5>
	  <div class="right">
		<i class="fa-regular fa-bookmark"></i>
		<i class="fa-solid fa-ellipsis-vertical"></i>
	  </div>
	</div>

	<img src="${task.picture}" class="card-img-top" alt="no image loaded!" />
	<div class="card-body">
	  <h5 class="card-title">${task.name}</h5>
	  <p class="card-description">${task.notiz}</p>
	  <hr class="line"/>
	  <p class="card-importance importanceBtn">
		<i class="fa-solid fa-triangle-exclamation"></i>
		Priority level:
		<button type="button" class="btn btn-success important-btn">
		  ${task.importance}
		</button>
	  </p>
	  <p class="card-deadline">
		<i class="fa-sharp fa-solid fa-calendar-days"></i> Deadline: 27.01.2022
	  </p>
	  <p class="card-duration">
		<i class="fa-sharp fa-regular fa-clock"></i> Duration: ${task.duration} min
	  </p>
	  <hr class="line" />
	  <button type="button" class="btn btn-danger">
		<i class="fa-solid fa-trash-can"></i> Delete
	  </button>
	  <button type="button" class="btn btn-success">
		<i class="fa-regular fa-circle-check"></i> Done
	  </button>
	</div>
	`;

		// --- add card to the result
		resultElement.appendChild(taskElement);

		// --- add importancce button listener
		const btnSuccess = taskElement.querySelector(".important-btn");
		btnSuccess.addEventListener("click", function () {
			if (task.importance < 5) {
				task.importance++;
				btnSuccess.innerHTML = task.importance;
				changeBackgroundColor(task.importance, i);
			}
		});

		// --- update backgroundcolor by importance
		changeBackgroundColor(task.importance, i);

		const deleteButton = document.getElementsByClassName("btn-danger");
		console.log(deleteButton);
		for (let i = 0; i < deleteButton.length; i++) {
			let button = deleteButton[i];
			button.addEventListener("click", function (event) {
				let buttonClicked = event.target;
				buttonClicked.parentElement.parentElement.remove();
			});
		}
	}
}

// change the background color based on importance
function changeBackgroundColor(importance, index) {
	const btn = document.getElementsByClassName("important-btn")[index];
	if (importance >= 0 && importance <= 1) {
		btn.style.backgroundColor = "green";
		btn.style.color = "white";
	} else if (importance >= 2 && importance <= 3) {
		btn.style.backgroundColor = "yellow";
		btn.style.color = "black";
	} else {
		btn.style.backgroundColor = "red";
		btn.style.color = "white";
	}
}

// event listener to the sort button down
const sortButtondown = document.getElementById("sort-buttondown");
sortButtondown.addEventListener("click", sortByImportancedown);

// event listener to the sort button up
const sortButtonup = document.getElementById("sort-buttonup");
sortButtonup.addEventListener("click", sortByImportanceup);

// update the display of tasks
updateTaskDisplay();

//----------------------------------------
// so much to do --- so many notifications

const numberElement = document.getElementById("badge");

let number = 0;

function incrementNumber() {
	number++;
	numberElement.textContent = number;
}

function getRandomInterval() {
	return Math.floor(Math.random() * 4000) + 1000;
}

setInterval(incrementNumber, getRandomInterval());


/* for (let task of tasks) {
    document.getElementById("result").innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${task.picture}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${task.name}</h5>
      <h6 class="card-title">${task.notiz}</h6>
      <p class="card-text myLikes">${task.likes}</p>
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
        tasks[i].likes++;
        document.getElementsByClassName("myLikes")[i].innerHTML = tasks[i].likes;
    })
}

let detailsBtns = document.getElementsByClassName("detailsBtn");

for (let i = 0; i < btns.length; i++) {
    detailsBtns[i].addEventListener("click", function() {
        document.getElementById("details").innerHTML = `
        <div class="card" style="width: 100%;">
        <img src="${tasks[i].picture}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${tasks[i].name}</h5>
          <h6 class="card-title">${tasks[i].notiz}</h6>
          <p class="card-text myLikes">${tasks[i].likes}</p>
        </div>
      </div>
        `;
    })
} */