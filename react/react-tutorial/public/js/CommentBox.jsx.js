var CommentBox = React.createClass({
    // get comments from server
    requestComments: function(){
        var deferred = Q.defer();
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log("Get data from %s success, data: %o", this.props.url, data);
                //this.setState(data);
                deferred.resolve(data);
            }.bind(this),
            error: function (err) {
                console.log("Get data from %s error, error: %o", this.props.url, err);
                deferred.reject(err);
            }.bind(this)
        });
        return deferred.promise;
    },
    submitComment: function(author, comment){
        console.log("submit comment");
        var deferred = Q.defer();

        var param = {
            author: author,
            comment: comment,
            date: new Date().getTime()
        };

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            method: 'POST',
            data: param,
            success: function(data){
                var newComment = this.state.data;
                newComment.push(param);
                this.setState({data:newComment});

                deferred.resolve(data);
            }.bind(this),
            error: function(err){
                deferred.reject(err);
            }.bind(this)
        });

        return deferred.promise;
    },
    // Just excute
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        this.requestComments().then(function(data){
            this.setState({data:data});
        }.bind(this), function(err){

        }.bind(this));
    },
    render: function () {
        return (
            <div className="container">
                <div className="page-header">
                    <h1>Comments
                        <small> based on <a href="http://facebook.github.io/react/">React</a></small>
                    </h1>
                </div>
                <CommentList comments={this.state.data}/>
                <CommentForm onCommetSubmit={this.submitComment} />
            </div>
        );
    }
});
