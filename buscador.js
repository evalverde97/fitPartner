let data = $('#buscador_input');
$.get('https://platform.fatsecret.com/js?key=83d1d52748aa4df5a1dd2a69c16cc610', (res) => {
    console.log(res);
})

fatsecret.setContainer("my_container");
fatsecret.setCanvas("home");