let urlParams = new URLSearchParams(window.location.search);
let myParam = urlParams.get('id');
const routes = [
    { path: "", action: "index"},
    { path: "/", action: "index"},
    { path: "/productos", action: "productos"},
    { path: "/quienes-somos", action: "quienes-somos"}
]

const router = () =>{
    //Elimino el # y me queda el path que se encuentra dentro de mis rutas
    let currentPath = location.hash.slice(1);
    //uso la funcion 'find' para capturar los datos dentro de mi route
    let pathToGo = routes.find((p) => p.path == currentPath)|| undefined;
    pathToGo === undefined && (pathToGo = 404);

    //gracias al action sabemos que vamos a renderizar en el div #app
    switch(pathToGo.action){
        case routes[0].action: //index
            // $("#app").html("welcome to index");
            $.get("./views/index.html", function (data) {
                $("#app").html(data);
            });
            break;
        case routes[1].action: //index
            // $("#app").html("welcome to index");
            $.get("./views/index.html", function (data) {
                $("#app").html(data);
            });
            break;    
        case routes[2].action: //productos
            // $("#app").html("welcome to productos");
            $.get("./views/productos.html", function (data) {
                $("#app").html(data);
            });
            break;
        case routes[3].action: //quienes-somos
            // $("#app").html("welcome to quienes-somos");
            $.get("./views/quienes-somos.html", function (data) {
                $("#app").html(data);
            });
            break;
        default:
            $.get("./views/404.html", function (data) {
                $("#app").html(data);
            });
        break;
    }
}