const path = require('path');
const multer = require('multer');



const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, path.join(__dirname, "./assets/images"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/png" ||
            file.mimetype == "image/jpg") {
            cb(null, true);
        } else {
            console.log('only jpg & png image supported!');
            cb(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});


module.exports = upload;