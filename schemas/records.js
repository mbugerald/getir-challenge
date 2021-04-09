const mongoose = require('mongoose');

// Mongoose schema reflect of the exact database structure.
//     Purpose is to retrieve and bind existing database results
//      to the given built custom mongoose schema.
const RecordsSchema = mongoose.Schema({
    driver: mongoose.ObjectId,
    counts: {
        type: Array,
        required: true,
        integer: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Records', RecordsSchema);
