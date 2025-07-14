 //navbar//
  const burger = document.getElementById('hamburger');
    const mobile = document.getElementById('mobile-menu');
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobile.classList.toggle('open');
    });
 //navbar//
 //about section//
      function changeContent(panel) {
        const contentdiv = document.getElementById("content");
        const highlightdiv = document.getElementsByClassName(".highlight");

        let image;

        if (panel === "Vision") {
          contentdiv.innerHTML = `
         <div class="highlight" id="highlight"></div>
        <h2>Our Mission and Vision</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore
          cum animi similique dolorem, libero quam repellendus reiciendis,
          repellat tenetur corporis numquam sint commodi aspernatur dolor
          architecto provident molestias laborum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi natus
          nostrum labore! Velit nobis officia animi.
        </p>
        `;
          image = "./images/mision and vision background.jfif";
        } else if (panel === "Careers") {
          contentdiv.innerHTML = `
          <div class="highlight" id="highlight"></div>
        <h2>Why choose Careers</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi natus
          nostrum labore! Velit nobis officia animi.
        </p>
        `;
          image = "./images/background-modified.jfif";
        } else if (panel === "Skills") {
          contentdiv.innerHTML = `
          <div class="highlight" id="highlight"></div>
        <h2>Develop and learn skills</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi natus
          nostrum labore! Velit nobis officia animi.
        </p>
        `;
          image = "./images/background-modified.jfif";
        }

        //add animation on change//
        contentdiv.style.animation = "none";
        setTimeout(() => {
          contentdiv.style.animation = "";
        }, 10);
      }