$(function () {
    var dataPanel = $("#panel-data");
    var dataButton = $("#btn-data");
    var top10Panel = $("#panel-top");
    var top10Button = $("#btn-top");
    var aboutPanel = $("#panel-about");
    var aboutButton = $("#btn-about");


    dataButton.click(function () {
        buttonClick($(this), dataPanel)
    });
    top10Button.click(function () {
        buttonClick($(this), top10Panel)
    });

    aboutButton.click(function () {
        buttonClick($(this), aboutPanel)
    });
});

var isAnimating = false;
function buttonClick(button, panel) {
    if (!isAnimating) {
        if (!panel.hasClass("current")) {
            isAnimating = true;
            panel.siblings().removeAttr("style");
            button.siblings().removeClass("active");
            button.addClass("active");
            panel.css('z-index', '10');
            panel.addClass("current");
            setTimeout(function () {
                panel.siblings().removeClass("current");
                isAnimating = false;
            }, 350);
        }
    }
};