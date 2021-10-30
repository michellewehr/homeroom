var sel = document.getElementById("filterBySubj");




sel.addEventListener('change', () => {
    var userSelection= sel.options[sel.selectedIndex].dataset.subjid;
    console.log(userSelection);
    document.location.replace('/lesson-plans/filterSub/' + userSelection);
});




