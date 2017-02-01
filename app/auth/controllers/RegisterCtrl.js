'use strict';

angular.module('app.auth').controller('RegisterCtrl', function ($scope) {

    var vm = this;
    vm.submitForm = function(isValid) {

        // verifica se o formulário é válido
        if (isValid) {
            alert('Formulário OK');
        }else{
            alert(90);
        }

    };
});