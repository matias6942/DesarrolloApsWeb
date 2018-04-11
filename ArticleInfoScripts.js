
function showCommentForm() {
    document.forms["AddCommentForm"]["commenter-name"].style.display='block';
    document.forms["AddCommentForm"]["comment"].style.display='block';
    document.forms["AddCommentForm"]["AddCommentButton"].style.display='block';
    document.forms["AddCommentForm"]["CancelCommentButton"].style.display='block';
    document.getElementById("pNombre").style.display='block';
    document.getElementById("pComentario").style.display='block';
}

function hideCommentForm() {
    document.forms["AddCommentForm"]["commenter-name"].style.display='none';
    document.forms["AddCommentForm"]["comment"].style.display='none';
    document.forms["AddCommentForm"]["AddCommentButton"].style.display='none';
    document.forms["AddCommentForm"]["CancelCommentButton"].style.display='none';
    document.getElementById("pNombre").style.display='none';
    document.getElementById("pComentario").style.display='none';
}

function addNewComment() {
    alert("Comentario agregado!");
    hideCommentForm();
}

function cancelComment() {
    alert("Comentario cancelado!");
    hideCommentForm();
}

/**
 *
 * @param Photo
 *
 * Cambia la resolucion de una foto desde 120x120 a 800x600 (pixeles)
 * y luego llama a name(Photo) para que agregue el nombre del articulo
 * y la descripcion.
 */

function resize(Photo) {
    var newSize = "800";
    var aux = Photo.src;
    var aux = aux.replace("120", newSize);
    Photo.src = aux;

    var newWidth = "800px";
    var newHeigth = "600px";
    Photo.style.width = newWidth;
    Photo.style.height = newHeigth;

    var index = Photo.id.indexOf("_");
    var namePhoto = Photo.id.slice(0, index);
    name(namePhoto);
}


function name(MouseX) {
    document.getElementById(MouseX).innerHTML = "Mouse Inalámbrico <br> Mouse Logitech con 2 años de uso, funcionando sin detalles. Se entrega con PadMouse.<br><br>";
}


