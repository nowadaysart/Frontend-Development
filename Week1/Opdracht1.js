var stage;
var project;
var buttonStage;
var buttonProject;

buttonStage = document.querySelector('fieldset:nth-child(2) label:nth-of-type(2) input');
buttonProject = document.querySelector('fieldset:nth-child(2) label:nth-of-type(1) input');
stage = document.querySelector('#stage');
project = document.querySelector('#project');



if ('classList' in buttonStage) {
    stage.classList.add('hide');
    project.classList.add('hide');

    buttonStage.onclick = function () {
        toon();
    }
    buttonProject.onclick = function () {
        toon();
    }

        function toon() {
        if (buttonStage.checked) {
         stage.classList.remove('hide');
        project.classList.add('hide');
        }
        else if (buttonProject.checked){
            stage.classList.add('hide');
            project.classList.remove('hide');
        }
    }
}




