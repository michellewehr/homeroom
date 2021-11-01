var sel = document.getElementById("filterBySubj");



//user filter lesson plans by subjet 
sel.addEventListener('change', () => {
    var userSelection= sel.options[sel.selectedIndex].dataset.subjid;
    console.log(userSelection);
    document.location.replace('/lesson-plans/filterSub/' + userSelection);
});




