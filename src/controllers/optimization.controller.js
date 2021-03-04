function isPrimeNumber(req,res){
    var number = Number(req.params.number);
    var isPNumber = true;
    try {
        if(Number.isNaN(number)) return res.status(500).send({message:"Param 'number' must be a Number."});
        if(number === 0 || number === 1){
            isPNumber = false;
        }else{
            for(var i = 2;i<number;i++){
                if(number%i==0) isPNumber = false;
            }            
        }
        if(isPNumber){
            return res.status(200).send({message: 'The number: '+number+' is prime.'});
        }else{
            return res.status(200).send({message: 'The number: '+number+' is not prime.'});
        } 
    } catch (error) {
        return res.status(500).send({messsage:'Error in the request.'});
    }

}

function consecutiveSum(req,res){
    var n = req.params.n;
        try {
            //Gauss sum
            var sum = ((((Number(n)+1))*n)/2);
            if(Number.isNaN(sum)) return res.status(500).send({messsage:"Param 'n' must be a Number."});
            return res.status(200).send({message:'The sum of the consecutive numbers of '+n +' is: '+ sum});
        } catch (error) {
            return res.status(500).send({messsage:'Error in the request.'});
        }
}

module.exports ={
    isPrimeNumber,
    consecutiveSum
};