function searchProfile() {
    fetch("https://abc123.execute-api.ap-south-1.amazonaws.com")
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error(error);
        });
}
