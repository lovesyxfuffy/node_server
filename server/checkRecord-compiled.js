module.exports = function (app) {
    // app.use("/cat/getAboutText", (req, res)=> {
    //     res.json(require('./json/aboutText.json'))
    // })
    app.use("/manage/order/getStatistic", (req, res) => {
        res.json(require('./json/orderStatistic.json'));
    });

    app.use("/manage/order/searchOrderList", (req, res) => {
        res.json(require('./json/orderList.json'));
    });

    app.use("/manage/order/confirm", (req, res) => {
        res.json({
            "data": {},
            "status": 1
        });
    });

    app.use("/manage/order/getFieldEnum", (req, res) => {
        res.json(require('./json/classList.json'));
    });

    app.use("/manage/order/getClassEnum", (req, res) => {
        res.json(require('./json/classList.json'));
    });

    app.use("/manage/student/getStudentList", (req, res) => {
        res.json(require('./json/studentList.json'));
    });
};

//# sourceMappingURL=checkRecord-compiled.js.map