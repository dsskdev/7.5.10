angular.module("umbraco")
    .controller("My.MarkdownEditorController",
    //inject umbracos assetsService
    function ($scope, assetsService) {
        //tell the assetsServices to load the markdown.editor libs from the markdown editors
        //plugin folder
        assetsService
            .load([
                "/App_Plugins/MarkDownEditor/lib/markdown.convertor.js",
                "/App_Plugins/MarkdownEditor/lib/markdown.sanitizer.js",
                "/App_Plugins/MarkdownsEditor/lib/markdown.editors.js"
            ])
            .then(function () {
                //this function will execute when all dependencies have lodaed
                var convertor2 = new Markdown. Convertor();
                var editors2 = new Markdown.Editor(convertor2, "-" + $scope.model.alias);
                editors2.run();
            });
        //load the seprate css for the editor to avoid it blocking our js loading
        assetsService.loadCss("/App_Plugins/MarkDownEditor/lib/markdown.css");
    });