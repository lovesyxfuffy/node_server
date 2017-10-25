module.exports = function (app) {
    // app.use("/cat/getAboutText", (req, res)=> {
    //     res.json(require('./json/aboutText.json'))
    // })
    app.use("/manage/order/getStatistic", (req, res)=> {
        res.json(require('./json/orderStatistic.json'))
    });

    app.use("/manage/order/searchOrderList", (req, res)=> {
        res.json(require('./json/orderList.json'))
    });

    app.use("/manage/order/confirm", (req, res)=> {
        res.json({
            "data": {},
            "status": 1
        })
    });

    app.use("/manage/order/getFieldEnum", (req, res)=> {
        res.json(require('./json/classList.json'))

    });

    app.use("/manage/order/getClassEnum", (req, res)=> {
        res.json(require('./json/classList.json'))

    });

    app.use("/manage/student/getStudentList", (req, res)=> {
        res.json(require('./json/studentList.json'))
    });

    app.use("/manage/student/getInfo/:id", (req, res)=> {
        res.json(require('./json/studentInfo.json'))
    })

    app.use("/manage/student/create", (req, res)=> {
        res.json({
            "data": {},
            "status": 1
        })
    })

    app.use("/manage/student/changeStudentStatus", (req, res)=> {
        res.json({
            "data": {},
            "status": 1
        })
    })


    app.use("/manage/order/getTypeEnum", (req, res)=> {
        res.json({
            "data": [
                {
                    "name": "C2"
                },
                {
                    "name": "C3"
                },
                {
                    "name": "C4"
                }
            ],
            "status": 1
        })
    })

    app.use("/manage/student/getStatusEnum", (req, res)=> {
        res.json(
            {
                "data":[
                    {
                        "id":2,
                        "name":"已通知科目一考试"
                    },
                    {
                        "id":3,
                        "name":"已通知科目二考试"
                    },
                    {
                        "id":4,
                        "name":"已通知科目三考试"
                    }
                ],
                "status":1
            }
        )
    })
};