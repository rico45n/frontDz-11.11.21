document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems);
});

