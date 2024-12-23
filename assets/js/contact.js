const fromNameInput = document.getElementById("from_name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

function resetForm(fields) {
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.value = "";
        }
    });
}

function handleValidation(fieldName) {
    const field = document.getElementById(fieldName);
    const errorMessageSpan = document.getElementById(`${fieldName}-error`);
    
    if (field && field.value.trim() === '') {
        errorMessageSpan.removeAttribute("hidden");
        return false;
    } else {
        errorMessageSpan.setAttribute("hidden", "true");
        return true;
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const templateParams = {
        from_name: fromNameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
    };

    if (handleValidation("from_name") && handleValidation("email") && handleValidation("subject") && handleValidation("message")) {
        emailjs.send('service_8m8ewot', 'template_2s4hh7t', templateParams).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                swal({
                    title: "Email Sent!",
                    text: "Our team will get back soon",
                    icon: "success",
                    button: "OK",
                });
                resetForm(["from_name", "subject", "message", "email"]);
            },
            (error) => {
                console.log('FAILED...', error);
                swal({
                    title: "Failed!",
                    text: "Something Went Wrong, try again later",
                    icon: "error",
                    button: "OK",
                });
            },
        );
    }
}


// document.getElementById("main-contect-form").addEventListener("submit", () => {
//     alert("clicked")
// })