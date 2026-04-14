function searchProfile() {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;

    if (name === "" && gender === "") {
        alert("Please enter search details!");
    } else {
        alert("Searching for " + (name || gender) + " profiles...");
    }
}
