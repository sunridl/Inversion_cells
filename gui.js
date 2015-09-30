var gui = {
    viewport: null,
    table: null,

    make_panel : function(game) {
        var code = '<table">\n';
        code += "  <tr>\n";
        code += '    <td id="steps" class="game-steps">Сделано шагов: '+ game.steps +'</td>\n';
        code += "  </tr>\n";
        code += "</table>";
        code += "<br>";
        code += "<br>";
        return code;
    },

    make_game_field : function(game) {
        var code = '<table class="game-field text-center">\n';
        for (var i = 0; i < game.field_size; ++i) {
            code += "  <tr>\n";
            for (var j = 0; j < game.field_size; ++j) {
                code += '    <td class="game-cell cell-'+ game.scene[i][j] +'" data-row="' + i + '" data-col="' + j + '"></td>\n';
            }
            code += "  </tr>\n";
        }
        code += "</table>";
        return code;
    },

    make_viewport : function(game) {
        return this.make_panel(game) + this.make_game_field(game);
    },

    attach_handlers : function() {
        $('.game-cell').click(cell_click_handler);
        $('.restart-cell').click(restart_cell_click_handler);
        $('.setcell-cell').click(setcell_cell_click_handler);
        $('.invert-cell').click(invert_cell_click_handler);
    },

    initialize : function(game) {
        $('#viewport').html($(this.make_viewport(game)));
        this.set_table(game);
        this.game_render(game);
        this.attach_handlers();
    },

    reinitialize : function(game, leaderboard) {
        this.set_table(game);
        this.game_render(game);
    },

    set_table : function(game) {
        var table = new Array(game.field_size);
        for (var i = 0; i < game.field_size; ++i) {
            table[i] = new Array(game.field_size);
            for (var j = 0; j < game.field_size; ++j) {
                table[i][j] = $('.game-cell[data-row="' + i +  '"][data-col="' + j + '"]')[0];
            }
        }

        this.table = table;
    },

    game_render : function(game) {
        console.log(game.steps);
        $("#steps").text('Steps: ' + game.steps);

        for (var i = 0; i < game.field_size; ++i) {
            for (var j = 0; j < game.field_size; ++j) {
                $(this.table[i][j]).attr('class', 'game-cell cell-' + game.scene[i][j]);
            }
        }
    }
};