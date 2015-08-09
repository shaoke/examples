var data = {
        data: [
            {
                author: "Seabreeze",
                comment: "Depends on the woman, I suppose. Some can pull it off with style, others just look dowdy. Accessories are often what makes the difference, and it sounds like you have a flair for accessorizing."
            }
            ,
            {
                author: "I-RIGHT-I",
                comment: "** Others just look dowdy.** That's a great way to put it! Models look good in a suit of clothes, normal women not so much. The only reason dowdy men get away with wearing a suit is because....Male Privilege that's why! lol Oh, and tradition, don't forget that."
            }
        ]
    };

React.render(
    <CommentBox url="comments.json"/>,
    document.getElementById('content')
);