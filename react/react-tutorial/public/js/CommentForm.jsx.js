var CommentForm = React.createClass({
    submitComment: function(event){
        console.log("submit comment");
        event.preventDefault();

        var author = React.findDOMNode(this.refs.author).value.trim();
        var comment = React.findDOMNode(this.refs.comment).value.trim();
        if (!comment || !author) {
            return;
        }

        this.props.onCommetSubmit(author, comment).then(function(){
            React.findDOMNode(this.refs.author).value = '';
            React.findDOMNode(this.refs.comment).value = '';
        }.bind(this), function(err){
            console.log(err);
        }.bind(this));

    },
    render: function(){
        var textareaStyle = {
            resize: 'none'
        };
        var userNameStyle = {
            width: "150px",
            margin: "0 10px 0 0"
        };

        return (
            <div>
                <form onSubmit={this.submitComment}>
                    <div className="form-group">
                        <textarea className="form-control" style={textareaStyle} ref="comment" required></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-default pull-right">Post</button>
                        <input type="text" className="form-control pull-right" placeholder="Your Name" style={userNameStyle} ref="author" required/>
                    </div>
                </form>
            </div>
        );
    }
});