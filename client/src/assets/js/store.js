$(".js-select2").each(function () {
    $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next('.dropDownSelect2')
    });


    $(".js-select2").each(function () {
        $(this).on('select2:close', function (e) {
            if ($(this).val() == "Please chooses") {
                $('.js-show-service').slideUp();
            }
            else {
                $('.js-show-service').slideUp();
                $('.js-show-service').slideDown();
            }
        });
    });
})

function toggle ( element ){

	if ( this.checked ) {
		element.setAttribute('disabled', true);
	} else {
		element.removeAttribute('disabled');
	}
}


/*  jQuery(document).ready(function ($) {
    var filterBar = document.getElementById('filter-bar');
    //origins = filterBar.getElementsByClassName('noUi-origin');
    checkbox1 = document.getElementById('checkbox1'),
    checkbox2 = document.getElementById('checkbox2'),


    /*noUiSlider.create(filterBar, {
        start: [0, 250],
        range: {
            'min': 0,
            'max': 250
        }
    });

    checkbox2.addEventListener('click', function(){
        //toggle.call(this, origins[0]);
    });

    checkbox2.addEventListener('click', function(){
       // toggle.call(this, origins[1]);
    });

*/
