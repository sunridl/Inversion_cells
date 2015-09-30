var game = {
    scene: null,
    field_size: 3,
    steps: 0,

    initialize: function () {
        this.scene = new Array(this.field_size);
        this.steps = 0;
        for (var i = 0; i < this.field_size; ++i) {
            this.scene[i] = new Array(this.field_size);
            for (var j = 0; j < this.field_size; ++j) {
                this.scene[i][j] = 1;
            }
        }
    },

    change_cell: function (row, column) {
        this.scene[row][column] += 1;
        this.scene[row][column] %= 2;            
    },

    is_in_field: function (row, column) {
        if (row >= 0 && column >= 0 && row < this.field_size && column < this.field_size) return 1;
    },

    change_cell_with_check: function (row, column) {
        if (this.is_in_field(row, column)) this.change_cell(row, column);
    },

    make_step: function (row, column) {
        this.change_cell_with_check(row, column);
        this.change_cell_with_check(row - 1, column);
        this.change_cell_with_check(row + 1, column);
        this.change_cell_with_check(row, column - 1);
        this.change_cell_with_check(row, column + 1);
        this.steps += 1;
        gui.game_render(this);
    },

    invert_field: function () {
        for (var i = 0; i < this.field_size; ++i) {
            this.scene[i] = new Array(this.field_size);
            for (var j = 0; j < this.field_size; ++j) {
                change_cell(i, j);
            }
        }
    },

    restart: function () {
        this.scene = new Array(this.field_size);
        this.steps = 0;
        for (var i = 0; i < this.field_size; ++i) {
            this.scene[i] = new Array(this.field_size);
            for (var j = 0; j < this.field_size; ++j) {
                this.scene[i][j] = 1;
            }
        }
        gui.reinitialize(this);
    }
};
