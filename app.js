$.ajax({
    url: 'https://api.darksky.net/forecast/7904ca6798c5fccd2358835e727861eb/37.8267,-122.4233',
    method: 'GET'
}).then(function(data) {
    console.log(data);
});