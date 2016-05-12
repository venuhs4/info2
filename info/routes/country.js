exports.list = function (req, res) {
    var data = [
        { Name: 'India', Code: 91 }, { Name: 'Singapore', Code: 65 }
    ];
    res.send(data);
};