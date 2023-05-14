/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    find: function (req, res) {
        Todo.find().exec((err, todos) => {
            if (err) {
                return res.serverError(err);
            }
            return res.ok(todos);
        });
    },
    findMany: function (req, res) {
        const filters = req.body || { completed: true };
        console.log(filters)
        Todo.find(filters)
            .sort({ updated_at: -1 })
            .exec((err, todos) => {
                if (err) {
                    return res.serverError(err);
                }
                if (!todos) {
                    return res.notFound('No todos found with the specified filters.');
                }
                return res.ok(todos);
            });
    },
    findOne: function (req, res) {
        Todo.findOne({ id: req.params.id }).exec((err, todo) => {
            if (err) {
                return res.serverError(err);
            }
            if (!todo) {
                return res.notFound('Todo not found.');
            }
            return res.ok(todo);
        });
    },
    create: function (req, res) {
        Todo.create(req.body).fetch().exec((err, todo) => {
            console.log(todo, err)
            if (err) {
                return res.serverError(err);
            }
            return res.json(todo);
        });
    },
    update: function (req, res) {
        console.log(req.params, req.body)
        Todo.update({ id: req.params.id }, req.body).exec((err, todo) => {
            if (err) {
                return res.serverError(err);
            }
            return res.ok();
        });
    },
    delete: function (req, res) {
        Todo.destroy({ id: req.params.id }).exec((err) => {
            console.log(err)
            if (err) {
                return res.serverError(err);
            }
            return res.status(204).send();
        });
    },
};

