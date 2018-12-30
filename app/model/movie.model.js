System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Movie;
    return {
        setters:[],
        execute: function() {
            Movie = (function () {
                function Movie(id, title, year, poster) {
                    this.id = id;
                    this.title = title;
                    this.year = year;
                    this.poster = poster;
                }
                return Movie;
            }());
            exports_1("Movie", Movie);
        }
    }
});
//# sourceMappingURL=movie.model.js.map