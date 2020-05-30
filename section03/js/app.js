var app = angular.module('universidadApp', [])

app.controller('profesorCtrl', function($scope) {
    $scope.profesor = profesorData
    $scope.editando = {}
    $scope.editarDesactivado = true

    $scope.editarProfesor = function() {
        angular.copy( $scope.profesor, $scope.editando )
        $scope.editarDesactivado = false
    }

    $scope.guardarProfesor = function() {
        angular.copy( $scope.editando, $scope.profesor )
        reset()
    }

    $scope.cancelar = reset

    function reset() {
        $scope.editando = {}
        $scope.editarDesactivado = true
    }

});

var profesorData = {
    nombre: `Oscar Flores`,
    bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    edad: 47, 
    foto: `https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/12249913_1089497417750871_1761707784525161377_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_eui2=AeH38UkA9F634ZBCpbDTSke-LLDdAXxu6PYssN0BfG7o9oGpeXWm4rFXTUd4U6Mxig4kftw1LNJt9Pneny-6pEhB&_nc_ohc=mdbnHF_rWi0AX8VTzId&_nc_ht=scontent-qro1-1.xx&oh=1ecd0eb6ed9b6f69c738cc5307b203f2&oe=5EF71F02`
}