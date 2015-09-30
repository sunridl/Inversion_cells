var cell_click_handler = function(e) {
    e.preventDefault();
    var that = $(this);

    var row = that.data('row');
    var col = that.data('col');
    
    game.make_step(row, col);

    //}
};

var invert_cell_click_handler = function(e) {
    e.preventDefault();
    var that = $(this);

    game.invert_field();

    //}
};

var setcell_cell_click_handler = function(e) {
    e.preventDefault();
    var that = $(this);

    if ($('#setcell').hasClass('cell-selected')) {
        $('#setcell').removeClass('cell-selected');
        game.gamemode = 'play';
    }
    else {
        $('#setcell').addClass('cell-selected');   
        game.gamemode = 'set';
    }
    //console.log("setcell");
};

var restart_cell_click_handler = function(e) {
    e.preventDefault();
    var that = $(this);
    //console.log("menu");
    game.restart();
};

