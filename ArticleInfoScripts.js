
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

