if (window.location.search.length) {
    const urlParams = new URLSearchParams(window.location.search);

    for (const entry of urlParams.entries()) {
        if (entry[0] === "errors") {
            processErrors(entry[1]);
        } else if (entry[0] === "gdpr1") {
            const elem = document.getElementById(entry[0]);
            elem.setAttribute('checked', entry[1]);
        } else {
            const elem = document.getElementById(entry[0]);
            elem.setAttribute('value', entry[1]);
        }
    }
}

function processErrors(errorsString) {
    const errors = errorsString.split('_');
    errors.forEach(error => {
        const elem = document.getElementById(error);
        elem.style.display = 'block';
        if (error === 'e9') { // error for the checkbox
            elem.style.display = 'inline';
        }
    })

}