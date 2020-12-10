const mongoose = require('mongoose');

const Product = mongoose.model("Product");

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        //listando produtos
        const products = await Product.paginate({}, { page: page, limit: 10 });
        return res.json(products);
    },
    async show(req, res) {
        //listando produtos
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    async store(req, res) {
        //criando produtos
        const product = await Product.create(req.body);
        return res.json(product);
    },
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product); 
    },
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
         
        return res.status(200).send();
    }
}