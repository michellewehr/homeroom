var sel = document.getElementById("filterBySubj");
var selection= sel.options[sel.selectedIndex].value;



sel.addEventListener('change', () => {
    console.log(selection);
});

document.querySelector('.selectSubjFilter').addEventListener('click', () => {
    console.log(selection);
})

