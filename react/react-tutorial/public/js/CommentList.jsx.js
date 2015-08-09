//'use strict';

//(function(){
var CommentList = React.createClass({
    render: function () {
        console.log(this.props.comments);
        var commentsHTML = this.props.comments.map(function(data, index){
            return <Comment author={data.author} comment={data.comment} />
        });

        return (
            <div className="comment-list">
                {commentsHTML}
            </div>
        );
    }
});
//})();
