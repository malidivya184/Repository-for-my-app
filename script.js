function searchProfile() {
    fetch("https://7yjksjxgbk.execute-api.ap-south-1.amazonaws.com/new")
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error(error);
        });
}
