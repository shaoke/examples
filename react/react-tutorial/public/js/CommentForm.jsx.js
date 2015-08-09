var CommentForm = React.createClass({
    render: function(){
        var textareaStyle = {
            resize: 'none'
        };
        return (
            <div>
                <form>
                    <div className="form-group">
                        <textarea className="form-control" style={textareaStyle}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-default pull-right">Post</button>
                    </div>
                </form>
            </div>
        );
    }
});