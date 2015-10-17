(function () {

    window.Components.Products = React.createClass({
        displayName: "Products",
        render: function () {
            return (
                <Components.FilterProducts></Components.FilterProducts>
            );
        }
    });

})();
