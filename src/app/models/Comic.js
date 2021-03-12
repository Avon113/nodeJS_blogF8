const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Comic = new Schema({
    name: { type: String, require: true, maxLength: 255 },
    descriptions: { type: String },
    image: { type: String },
    videoId: { type: String, require: true },
    slug: {type: String, slug: 'name', unique: true },
}, { 
    timestamps: true,
});

module.exports = mongoose.model('Comic', Comic);
