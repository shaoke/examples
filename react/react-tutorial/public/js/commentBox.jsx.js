var CommentBox = React.createClass({
    render:function(){
        return (
            <div className="container">
                    <div className="page-header">
                        <h1>Comments
                            <small> based on <a href="http://facebook.github.io/react/">React</a></small>
                        </h1>
                    </div>
                    <CommentList comments={this.props.comments}/>
                    <CommentForm />
            </div>
        );
    }
});
