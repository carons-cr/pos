/**
 * Created by cr on 7/10/17.
 */
function getPerSum(inputArray){    //得到小计，计算用8分钟，实际用8分钟
    var perSum=new Array();
    for(var i=0;i<inputArray.length;i++){
        perSum[i]=(inputArray[i].price)*(inputArray[i].count);
    }
    return perSum;
}
function getSum(perSum){     //得到总计，计算用5分钟，实际用3分钟
    var Sum=0;  //如果不赋初值会报错
    for(var i=0;i<perSum.length;i++){
        Sum+=perSum[i];
    }
    Sum=Sum;
    return Sum;
}
function printReceipt(inputArray){    //得到结果，计算用8分钟，实际用10分钟
    var result;
    var str1="***<没钱赚商店>收据***\n";
    var str2="";
    for(var i=0;i<inputArray.length;i++){
        str2+="名称："+inputArray[i].name+"，数量："+inputArray[i].count+inputArray[i].unit
            +"，单价："+inputArray[i].price+"(元)，小计："+getPerSum(inputArray)[i]+"(元)\n"
    }
    var str3="----------------------\n"+"总计："+getSum(getPerSum(inputArray))+"(元)\n"
        +"**********************";
    result=str1+str2+str3;
    return result;
}

