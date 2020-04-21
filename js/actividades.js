
    var rootRef = firebase.database().ref().child("uploads");

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
            <img class="card-img-top" alt="Bootstrap Thumbnail First" style="max-height : 150px" src="${url}" />
            <div class="card-block" style="word-break : break-all;">
                <h4>${name.replace(/\n/g, "<br />")}</h4>
            </div>
        </div>
    </div>    
    `);
    });

    


/*
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" alt="Bootstrap Thumbnail First" src="https://www.layoutit.com/img/people-q-c-600-200-1.jpg" />
                            <div class="card-block">
                                <h5 class="card-title">
                                    Card title
                                </h5>
                                <p class="card-text">
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    */


