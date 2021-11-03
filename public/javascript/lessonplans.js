const userSubjSelection = document.getElementById("filterBySubj");

//user filter lesson plans by subject 
userSubjSelection.addEventListener('change', () => {
    var userSelection = sel.options[sel.selectedIndex].dataset.subjid;
    document.location.replace('/lesson-plans/filterSub/' + userSelection);
});