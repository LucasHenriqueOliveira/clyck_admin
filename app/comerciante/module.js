"use strict";


angular.module('app.comerciante', ['ui.router'])


angular.module('app.comerciante').config(function ($stateProvider) {

    $stateProvider
        .state('app.comerciante', {
            abstract: true,
            data: {
                title: 'Comerciante'
            }
        })

        .state('app.comerciante.dados', {
            url: '/comerciante/dados',
            data: {
                title: 'Dados Cadastrais'
            },
            views: {
                "content@app": {
                    controller: 'ComercianteDadosCtrl',
                    templateUrl: 'app/comerciante/views/dados-cadastrais.html'
                }
            }
        })

        .state('app.comerciante.eventos', {
            url: '/comerciante/eventos',
            data: {
                title: 'Eventos'
            },
            views: {
                "content@app": {
                    controller: 'ComercianteEventosCtrl',
                    templateUrl: 'app/comerciante/views/eventos.html'
                }
            }
        })


});