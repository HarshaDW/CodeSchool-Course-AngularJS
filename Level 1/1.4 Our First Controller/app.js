/**
 * Created by Tran Hoang Quoc on 3/21/2015.
 */
(function(){
    var gem = { name: 'Azurite', price: 2.95 };
    var app = angular.module('gemStore', []);
    app.controller('StoreController', function(){
        this.product = gem;
    });
})();
