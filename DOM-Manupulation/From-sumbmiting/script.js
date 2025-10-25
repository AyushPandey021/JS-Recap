 let form = document.querySelector("form");
    let inputs = document.querySelectorAll("input");
    let main = document.querySelector(".main");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get values
      let name = inputs[0].value;
      let age = inputs[1].value;
      let email = inputs[2].value;
      let profileUrl = inputs[3].value || "https://via.placeholder.com/100";

      // Create card
      let card = document.createElement("div");
      card.classList.add("card");

      let profile = document.createElement("div");
      profile.classList.add("profile");

      let img = document.createElement("img");
      img.src = profileUrl;

      let h1 = document.createElement("h1");
      h1.textContent = name || "No Name";

      let h2 = document.createElement("h2");
      h2.textContent = age ? `Age: ${age}` : "Age: Unknown";

      let h3 = document.createElement("h3");
      h3.textContent = email || "No Email Provided";

      profile.appendChild(img);
      card.appendChild(profile);
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(h3);

      main.appendChild(card);
      form.reset();
    });