const router = require('express').Router();

const Razorpay = require('razorpay');
//let Transaction = require('./transaction.model.js');

require('dotenv').config();
const keyid= process.env.RAZORPAY_ID_KEY;
const keysecret = process.env.RAZORPAY_SECRET_KEY;

//const crypto = require('crypto')


router.route('/order').post(function(req,res){
  var instance = new Razorpay({
    key_id: keyid,
    key_secret: keysecret
  })
var options = {
  amount: req.body.amount,  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11",
  
};
instance.orders.create(options, function(err, order) {

  if(err){
    return res.send(err)}
  else{
    console.log(order)
   return res.json(order)}
});
});

router.route('/payment').post(function(req,res) {
  console.log(req.body)
  res.send('Ok')
//   if ( generated_signature.digest('hex') === req.body.razorpay_signature){
//           const transaction = new Transaction({
//             transactionid:req.body.transactionid,
//             transactionamount:req.body.transactionamount,
//         });
//         transaction.save(function(err, savedtransac){
//           if(err){
//               console.log(err);
//               return res.status(500).send("Some Problem Occured");
//           }
//           res.send({transaction: savedtransac});

//       });
//     // return res.send('success');
//   }
//   else{
//     return res.send('failed');
//   }
});

module.exports = router;