// Shameless copy from http://james.padolsey.com/javascript/sorting-elements-with-jquery/
jQuery.fn.sortElements = (function(){
    var sort = [].sort;
    return function(comparator, getSortable) {
        getSortable = getSortable || function(){return this;};
        var placements = this.map(function(){
            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );
            return function() {
                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }
                parentNode.insertBefore(this, nextSibling);
                parentNode.removeChild(nextSibling);
            };
        });
        return sort.call(this, comparator).each(function(i){
            placements[i].call(getSortable.call(this));
        });
    };
})();

jQuery.fn.realColIndex = function() {
    if(!$(this).is('td') && !$(this).is('th'))
        return -1;

    var cells = this.parent('tr').children();
    var midx = cells.index(this);
    var col = 0;
    cells.each(function(idx,cell) {
        if(idx === midx) return false;
        var colspan = $(cell).prop('colspan');
        col += colspan;
    });
    return col;
};

function Sortable(list, k, dir) {

    var default_dir = false;

    function sort_list(domlist, elem, asc, datatype)
    {
        var factor = 1;
        if(asc === true) factor = -1;
        var body = $('tbody', domlist).clone();
        var elems = $('tr', body);
        elems.each(function(idx,e) {
            var $e = $(e);
            var data = $($("td", $e)[elem]).text();
            switch(datatype) {
                case 'ip':
                    var ip = data.split(".");
                    ip = ip.map(function(x) { return (("000" + x).slice(-3)); });
                    data = ip.join(".");
                    break;
            }
            $e.get(0).setAttribute('data-sort-key', data);
        });
        elems.sortElements(function(a, b) {
            var alem = $(a).get(0).getAttribute('data-sort-key');
            var blem = $(b).get(0).getAttribute('data-sort-key');
            switch(datatype) {
                case 'integer':
                    alem = parseInt(alem, 10);
                    blem = parseInt(blem, 10);
                    break;
                case 'double':
                    alem = parseFloat(alem, 10);
                    blem = parseFloat(blem, 10);
                    break;
            }
            return factor * (alem > blem ? 1 : -1);
        });
        $('tbody', domlist).empty();
        $(elems).appendTo($('tbody', domlist));
    }

    function sort_click(domlist, elem, col, datatype, order) {
        // Check if we already have the glyph, in which case we toggle
        var curg = $('i', elem).first().attr('class');
        if(order === undefined && curg == 'icon-chevron-up') {
            order = false;
        } else if(order === undefined && curg == 'icon-chevron-down') {
            order = true;
        }
        if(order === undefined) {
            order = default_dir;
        }

        $('thead i', domlist).remove();

        // Insert glyph
        var glyphclass = 'icon-chevron-' + (order ? 'up' : 'down');
        $(elem).append(' <i class="' + glyphclass + '">');

        // Do the sort
        sort_list(domlist, col, order, datatype);
    }

    function setup_list(list, k, dir)
    {
        if(k === undefined) k = 0;
        if(dir === undefined) dir = false;
        default_dir = dir;

        var domlist = $(list);
        var col = 0;
        $('thead th', domlist).each(function(idx,elem) {
            var datatype = $(elem).attr('data-sortable');
            var colspan = $(elem).prop('colspan');
            var thiscol = col;
            if(datatype !== undefined) {
                $(elem).bind('sortclick', function(evt, dir) {
                    sort_click(domlist, elem, thiscol, datatype, dir);
                });
                $(elem).click(function() {
                    $(elem).trigger('sortclick');
                });
            }
            col += colspan;
        });
        // Initial sort
        $($('thead th[data-sortable]', domlist)[k]).trigger('sortclick', dir);
    }

    setup_list(list, k, dir);
};

$('table').each(function(idx,table) {
    var sorton = $(table).attr('data-sorton');
    var sortdir = $(table).attr('data-sortdir');
    sortdir = (sortdir === "asc") ? true : false;
    if(sorton !== undefined) {
        Sortable($(table), sorton, sortdir);
    }
});
