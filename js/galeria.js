var rootRef = firebase.database().ref().child("galery");

function htmlEscape(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

rootRef.on("child_added", snap => {

    var name = snap.child("mName").val();
    var url = snap.child("mImageUrl").val();
    console.log("test");



    $("#table_body").append(`
        
        <div class="col-md-3">
        <div class="card">
            <img class="card-img-top" alt="Bootstrap Thumbnail First" style="object-fit: cover; max-height : 150px" src="${url}" />
            <div class="card-block" style="word-break : break-all;">
                <h4>${name.replace(/\n/g, "<br />")}</h4>
            </div>
        </div>
    </div>    
    `);
});