document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio loaded successfully");


    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });


    /* Close menu after clicking link */

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

        });

    });


    /* =========================
       PROJECT MODAL
    ========================= */

    const projectButtons =
        document.querySelectorAll(".project-btn");

    const projectModal =
        document.getElementById("projectModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalContent =
        document.getElementById("modalContent");


    const projects = {

        farmer: {

            title: "Farmer Portal",

            description:
                "A Python Django based web application developed during full stack training.",

            technologies: [
                "Python",
                "Django",
                "HTML",
                "CSS",
                "SQL"
            ],

            features: [
                "Frontend and backend integration",
                "Django views and templates",
                "Database integration",
                "CRUD operations",
                "User-friendly web interface"
            ]

        },


        food: {

            title: "Food Web Application",

            description:
                "A frontend web application created using React and JavaScript to practice component-based UI development.",

            technologies: [
                "React",
                "JavaScript",
                "HTML",
                "CSS"
            ],

            features: [
                "React components",
                "Interactive user interface",
                "Reusable frontend components",
                "Responsive layout",
                "JavaScript based interactions"
            ]

        },


        student: {

            title: "Student Management System",

            description:
                "A Django based student management application for creating, updating, searching and deleting student records.",

            technologies: [
                "Python",
                "Django",
                "SQL",
                "HTML",
                "CSS",
                "JavaScript"
            ],

            features: [
                "Create student records",
                "Update student records",
                "Delete student records",
                "Search and filtering",
                "Database integration",
                "Responsive dashboard"
            ]

        }

    };


    projectButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const projectName =
                button.getAttribute("data-project");

            const project =
                projects[projectName];


            if (!project) {
                return;
            }


            let technologyHTML = "";

            project.technologies.forEach(function (technology) {

                technologyHTML +=
                    `<span class="technology-tag">
                        ${technology}
                    </span>`;

            });


            let featureHTML = "";

            project.features.forEach(function (feature) {

                featureHTML +=
                    `<li>${feature}</li>`;

            });


            modalContent.innerHTML = `

                <h2>${project.title}</h2>

                <p>
                    ${project.description}
                </p>

                <h3 style="margin-top:20px;">
                    Technologies
                </h3>

                <div class="technology-list">
                    ${technologyHTML}
                </div>

                <h3 style="margin-top:20px;">
                    Key Features
                </h3>

                <ul>
                    ${featureHTML}
                </ul>

            `;


            projectModal.classList.add("active");

        });

    });


    /* Close Modal */

    modalClose.addEventListener("click", function () {

        projectModal.classList.remove("active");

    });


    /* Close modal when clicking outside */

    projectModal.addEventListener("click", function (event) {

        if (event.target === projectModal) {

            projectModal.classList.remove("active");

        }

    });


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !subject || !message) {

            formMessage.textContent =
                "Please fill all the fields.";

            return;

        }


        formMessage.textContent =
            "Thank you! Your message has been prepared.";


        /*
            For a real website, this form should be
            connected to Django backend or an email service.

            Example future flow:

            HTML Form
                 ↓
            JavaScript
                 ↓
            Django POST request
                 ↓
            Contact Model
                 ↓
            Database
                 ↓
            HR / Admin Email
        */


        console.log({
            name: name,
            email: email,
            subject: subject,
            message: message
        });


        contactForm.reset();

    });


});