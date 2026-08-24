const form = document.getElementById("profileForm");
const cardContainer = document.getElementById("cardContainer");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const image = document.getElementById("image").value;
    const course = document.getElementById("course").value;

    const card = document.createElement("div");
    card.classList.add("card");

    const profileImage = document.createElement("img");
    profileImage.src = image;
    profileImage.alt = name;

    const cardName = document.createElement("h2");
    cardName.textContent = name;

    const cardEmail = document.createElement("p");
    cardEmail.textContent = "Email: " + email;

    const cardPhone = document.createElement("p");
    cardPhone.textContent = "Phone: " + phone;

    const cardCourse = document.createElement("p");
    cardCourse.textContent = "Course/Designation: " + course;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function () {
        card.remove();
    });

    card.appendChild(profileImage);
    card.appendChild(cardName);
    card.appendChild(cardEmail);
    card.appendChild(cardPhone);
    card.appendChild(cardCourse);
    card.appendChild(deleteButton);

    cardContainer.appendChild(card);
    form.reset();
});
