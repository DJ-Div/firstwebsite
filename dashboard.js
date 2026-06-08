const info = document.querySelector("#test");
const def = document.querySelector("#default");
const replaced = document.querySelector("#fs");
const services = document.querySelector("#dataTransfer");
const icons = document.querySelector("#iconSet");
const products = document.querySelector("#productsOrder");
const back = document.querySelector(".back");
const test1 = document.querySelector("#transferData")
const test2 = document.querySelector("#aiAgent")
const test3 = document.querySelector("#trackOrders")
const upload = document.querySelector("#uploadSection");
const id = document.querySelector("#imgHolder")
const back2 = document.querySelector(".back2")
const file = document.querySelector("#fileId")

const headerItems = document.querySelectorAll(
    "#head, #img"
);

const form = document.querySelector("form");

const progressBar =
    document.querySelector("#progress-bar");

const progressText =
    document.querySelector("#progress-text");

// ---------------- FIELD CONFIG ----------------

const fieldIds = [
    "fn",
    "e",
    "p",
    "l",
    "scb",
    "gs"
];

const editableFields = [
    "fn",
    "l",
    "scb",
    "gs"
];

// ---------------- GLOBAL USER STATE ----------------

let parsedEmail = null;
let detailsKey = "";

// ---------------- PAGE LOAD ----------------

document.addEventListener(
    "DOMContentLoaded",
    () => {

        // ---------- LOAD CURRENT USER ----------

        const storedEmail =
            localStorage.getItem("email");

        if (!storedEmail) {
            console.error(
                "No logged-in user found"
            );
            return;
        }

        parsedEmail =
            JSON.parse(storedEmail);

        detailsKey =
            `details_${parsedEmail.email}`;

        // ---------- FORM REFERENCES ----------

        const fnField =
            form.querySelector("#fn");

        const emailField =
            form.querySelector("#e");

        const passwordField =
            form.querySelector("#p");

        // ---------- LOAD ACCOUNT DATA ----------

        fnField.value =
            parsedEmail.name || "";

        emailField.value =
            parsedEmail.email || "";

        passwordField.value =
            parsedEmail.password || "";

        // ---------- LOCK ACCOUNT FIELDS ----------

        emailField.readOnly = true;
        passwordField.readOnly = true;

        // ---------- LOAD PROFILE DATA ----------

        const storedDetails =
            localStorage.getItem(detailsKey);

        if (storedDetails) {

            const parsedDetails =
                JSON.parse(storedDetails);

            editableFields.forEach((id) => {

                const field =
                    form.querySelector(`#${id}`);

                if (
                    field &&
                    parsedDetails[id] !== undefined
                ) {
                    field.value =
                        parsedDetails[id];
                }

            });

        }

        updateProgress();

    }
);

// ---------------- PROGRESS SYSTEM ----------------

function updateProgress() {

    let completed = 0;

    fieldIds.forEach((id) => {

        const field =
            form.querySelector(`#${id}`);

        if (
            field &&
            field.value.trim() !== ""
        ) {
            completed++;
        }

    });

    const percent = Math.floor(
        (completed / fieldIds.length) * 100
    );

    progressBar.style.width =
        `${percent}%`;

    progressText.textContent =
        `${percent}% Complete`;

}

// ---------------- LIVE INPUT TRACKING ----------------

editableFields.forEach((id) => {

    const field =
        form.querySelector(`#${id}`);

    if (!field) return;

    field.addEventListener(
        "input",
        updateProgress
    );

});

// ---------------- OPEN FORM ----------------

info.addEventListener(
    "click",
    (e) => {

        e.preventDefault();
        e.stopPropagation();

        // Hide default section
        def.style.opacity = "0";

        setTimeout(() => {
            def.style.display = "none";
        }, 200);

        // Animate trigger
        info.style.transform =
            "translate(38vw, 15vh) scale(1.8)";

        // Hide headers/images
        test1.style.opacity = "0";
        test2.style.opacity = "0";
        test3.style.opacity = "0";
        services.style.opacity = "0";
        headerItems.forEach((item) => {
            item.style.opacity = "0";
        });

        // Show form
        setTimeout(() => {
            form.style.display = "block";
        }, 1000);

        setTimeout(() => {
            form.style.opacity = "1";
            services.style.display = "none"
            test1.style.display = "none"
            test2.style.display = "none"
            test3.style.display = "none"
        }, 1200);

    }
);

// ---------------- SUBMIT FORM ----------------

replaced.addEventListener(
    "click",
    (e) => {

        e.preventDefault();
        e.stopPropagation();

        // ---------- CREATE DETAILS OBJECT ----------

        const details = {};

        fieldIds.forEach((id) => {

            const field =
                form.querySelector(`#${id}`);

            if (!field) return;

            details[id] =
                field.value.trim();

        });

        // ---------- STATUS SYSTEM ----------

        fieldIds.forEach((id) => {

            const field =
                form.querySelector(`#${id}`);

            const statusField =
                def.querySelector(`h4#${id}`);

            if (!field || !statusField)
                return;

            const value =
                field.value.trim();

            if (value === "") {

                statusField.innerHTML =
                    `Incomplete <i class="fa-regular fa-circle-xmark"></i>`;

                statusField.style.color =
                    "red";

            } else {

                statusField.innerHTML =
                    `Complete <i class="fa-regular fa-circle-check"></i>`;

                statusField.style.color =
                    "lime";

            }

        });

        // ---------- SAVE USER-SPECIFIC DATA ----------

        localStorage.setItem(
            detailsKey,
            JSON.stringify(details)
        );

        // ---------- CLOSE FORM ----------

        form.style.opacity = "0";

        setTimeout(() => {
            form.style.display = "none";
            services.style.display = "block"
            test1.style.display = "block"
            test2.style.display = "block"
            test3.style.display = "block"
            def.style.display = "flex";
        }, 200);

        info.style.transform =
            "translate(0vw, 0vh) scale(1)";
        // Restore default section

        // Restore headers/images
        setTimeout(() => {
            services.style.opacity = "1"
            test1.style.opacity = "1"
            test2.style.opacity = "1"
            test3.style.opacity = "1"
        }, 400);
        headerItems.forEach((item) => {
            item.style.opacity = "1";
        });
        setTimeout(() => {
            def.style.opacity = "1"
        }, 1000);
    }
);

services.addEventListener("click", (e)=>{
    e.preventDefault();
    e.stopPropagation();

    // Hide default section
    icons.style.opacity = "0";

    setTimeout(() => {
        icons.style.display = "none";
    }, 200);

    // Animate trigger
    services.style.transform =
        "translate(0vw, 20vh) scale(1.8)";

    // Hide headers/images
    info.style.opacity = "0"
    test1.style.opacity = "0"
    test2.style.opacity = "0"
    test3.style.opacity = "0"
    headerItems.forEach((item) => {
        item.style.opacity = "0";
    });

    //Show form
    setTimeout(() => {
        products.style.display = "flex";
    }, 1000);

    setTimeout(() => {
        products.style.opacity = "1";
        info.style.display = "none"
        test1.style.display = "none"
        test2.style.display = "none"
        test3.style.display = "none"
    }, 1200);

}
);

back.addEventListener("click", (e)=>{
    e.preventDefault()
    e.stopPropagation()

    products.style.opacity = "0";

    setTimeout(() => {
        products.style.display = "none";
        info.style.display = "block"
        test1.style.display = "block"
        test2.style.display = "block"
        test3.style.display = "block"
        icons.style.display = "flex";
    }, 1000);

    services.style.transform =
        "translate(0vw, 0vh) scale(1)";

    // Restore headers/images
    setTimeout(() => {
        info.style.opacity = "1"
        test1.style.opacity = "1"
        test2.style.opacity = "1"
        test3.style.opacity = "1"
        icons.style.opacity = "1";
    }, 1200);
    headerItems.forEach((item) => {
        item.style.opacity = "1";
    });
});

products.addEventListener("wheel", (e) => {
    e.preventDefault();

    products.scrollLeft += e.deltaY;
});

test1.addEventListener("click", (e)=>{
    e.stopPropagation();

    // Hide default section
    id.style.opacity = "0";

    setTimeout(() => {
        id.style.display = "none";
    }, 1000);

    // Animate trigger
    test1.style.transform =
        "translate(0vw, -5vh) scale(1.8)";

    // Hide headers/images
    info.style.opacity = "0"
    services.style.opacity = "0"
    test2.style.opacity = "0"
    test3.style.opacity = "0"
    headerItems.forEach((item) => {
        item.style.opacity = "0";
    });

    //Show form
    setTimeout(() => {
        upload.style.display = "flex";
    }, 1000);

    setTimeout(() => {
        upload.style.opacity = "1";
        info.style.display = "none"
        services.style.display = "none"
        test2.style.display = "none"
        test3.style.display = "none"
    }, 1200);
}
);

back2.addEventListener("click", (e)=>{
    e.preventDefault()
    e.stopPropagation()

    upload.style.opacity = "0";

    setTimeout(() => {
        upload.style.display = "none";
        services.style.display = "block"
        info.style.display = "block"
        test1.style.display = "block"
        test2.style.display = "block"
        test3.style.display = "block"
    }, 200);

    test1.style.transform =
        "translate(0vw, 0vh) scale(1)";

    // Restore headers/images
    setTimeout(() => {
        info.style.opacity = "1"
        services.style.opacity = "1"
        test1.style.opacity = "1"
        test2.style.opacity = "1"
        test3.style.opacity = "1"
    }, 400);
    headerItems.forEach((item) => {
        item.style.opacity = "1";
    });

    // Restore default section
    setTimeout(() => {
        id.style.display = "flex";
    }, 1000);

    setTimeout(() => {
        id.style.opacity = "1";
    }, 1200);
});

const allowedTypes = [

    "application/pdf",

    "text/plain",

    "image/png",

    "image/jpeg",

    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

];

const displayData = document.querySelector("#fileName")
file.addEventListener("change", ()=>{
    const selectedFile =
    file.files[0];
    if(!localStorage.getItem("File")){
        localStorage.setItem("File", JSON.stringify(selectedFile.name))
        console.log(`${selectedFile.name} led to the creation of 'File'`)
    }
    else{
        const get = Array(JSON.parse(localStorage.getItem("File")))
        get.push(selectedFile.name)
        console.log(`${selectedFile.name} was pushed`)
        localStorage.setItem("File", JSON.stringify(get))
    }
});

for(let i of JSON.parse(localStorage.getItem("File"))){
    displayData.innerHTML += `● ${i} <button class="deleteButton">❌</button> <br>`
}

const del = document.querySelectorAll(".deleteButton")

del.forEach(e => {
    e.style.backgroundColor = "transparent"
    e.style.border = "none"
})