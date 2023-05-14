/**
 * BoardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    find: function (req, res) {
        Board.find().exec((err, boards) => {
            if (err) {
                return res.serverError(err);
            }
            return res.ok(boards);
        });
    },
    findOne: function (req, res) {
        Board.findOne({ id: req.params.id }).exec((err, board) => {
            if (err) {
                return res.serverError(err);
            }
            if (!board) {
                return res.notFound('Board not found.');
            }
            return res.ok(board);
        });
    },
    create: function (req, res) {
        Board.create(req.body).fetch().exec((err, board) => {
            console.log(board, err)
            if (err) {
                return res.serverError(err);
            }
            return res.json(board);
        });
    },
    update: function (req, res) {
        Board.update({ id: req.params.id }, req.body).exec((err, board) => {
            if (err) {
                return res.serverError(err);
            }
            if (!board[0]) {
                return res.notFound('Board not found.');
            }
            return res.ok(board[0]);
        });
    },
    delete: function (req, res) {
        Board.destroy({ id: req.params.id }).exec((err) => {
            if (err) {
                return res.serverError(err);
            }
            return res.ok();
        });
    },
};

