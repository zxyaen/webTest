var arrPrice = new Array();
        var price = 0.0;
        // var sum = function (a) {
        //     price = price + a;
        //     return price
        //     // console.log("sum")
        // }
        $("#addArry").click(function () {
            arrPrice.push(parseFloat($("#bookPrice").val()))
            // console.log(arrPrice)

            var $li = "<li>" + parseFloat($("#bookPrice").val()) + "元</li>"
            $("ul").append($li)

        })
        $("#sumBtn").click(function () {
            var sum = 0;
            for (var i = 0; i < arrPrice.length; i++) {
                sum += arrPrice[i]
            }
            var $sum = "<span>总价是：" + sum + "元<span>"
            $("#allPrice").append($sum)
        })
        $("#hight").click(function () {
            var hightNum = Math.max.apply(Math, arrPrice)
            var $hightNum = "<span>最高价格是：" + hightNum + "元<span>"
            $("#hightNum").append($hightNum)
        })
        $("#low").click(function () {
            var lowNum = Math.min.apply(Math, arrPrice)
            var $lowNum = "<span>最低价格是：" + lowNum + "元<span>"
            $("#lowNum").append($lowNum)
        })
        $("#ave").click(function () {
            var sum =0;
            for (var i = 0; i < arrPrice.length; i++) {
                sum += arrPrice[i]
            }
            var aveNum = sum/arrPrice.length;
            console.log(aveNum)
            // var aveNum =
            var $aveNum = "<span>平均价格是：" + aveNum + "元<span>"
            $("#aveNum").append($aveNum)
        })

