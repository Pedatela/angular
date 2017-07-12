"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 1, nome: 'Fulano', email: 'email', telefone: 'telefone' },
            { id: 2, nome: 'Seu Madruga', email: 'madrugaseu@email.com', telefone: '33135050' },
            { id: 3, nome: 'Bob Esponja', email: 'bob@email.com', telefone: '45612378' },
        ];
        return { contatos: contatos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map