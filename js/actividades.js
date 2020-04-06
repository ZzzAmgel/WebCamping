
    var rootRef = firebase.database().ref().child("uploads");

    rootRef.on("child_added", snap => {
        var name = snap.child("mName").val();
        var url = snap.child("mImageUrl").val();
        console.log("marica");

        $("#table_body").append("<tr><td><h1>Hola</h1>"+name+"</td><td>"+url+"</td></tr>");
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