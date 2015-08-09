var Comment = React.createClass({
    render: function(){
        var rawMarkup = marked(this.props.comment.toString(), {sanitize: true});
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.author}</h3>
                </div>
                <div className="panel-body" dangerouslySetInnerHTML={{__html: rawMarkup}}>
                </div>
            </div>
        );
    }
});