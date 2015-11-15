(function () {

    window.Components.Products = React.createClass({
        displayName: "Products",
        render: function () {
            return (
                <div>
                    <Components.FilterProducts></Components.FilterProducts>
                    <Components.Hello></Components.Hello>
                </div>
            );
        }
    });

})();
