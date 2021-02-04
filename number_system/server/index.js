const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const convert = require('./convert')
const body_parser = require('body-parser')


app.use(cors())
app.use(express.static('../public'))
app.use(express.urlencoded({extended:true}))
app.use(body_parser.json())

//Number's Base

const base2 = 2,base8 = 8, base16 = 16

//1. Binary to All

app.get('/B2ALL/:binary',(req,res,next)=>{
  let binary = req.params.binary
   if(binary){
     res.send({
       resultB2D: convert.BinaryToDecimal(binary,base2),
       resultB2O: convert.BinaryToOctal(binary, base2),
       resultB2HD : convert.DecimalToBinary_Octal_hexaDecimal(convert.BinaryToDecimal(binary,base2),base16)
     })
   }else{
     next(new Error('Invalid Binary Number'))
   }
})

//2. Decimal to All

app.get('/D2ALL/:decimal',(req,res,next)=>{
  let decimal = req.params.decimal
   if(decimal){
     res.send({
       resultD2B: convert.DecimalToBinary_Octal_hexaDecimal(decimal, base2),
       resultD2O: convert.DecimalToBinary_Octal_hexaDecimal(decimal, base8),
       resultD2HD : convert.DecimalToBinary_Octal_hexaDecimal(decimal, base16)
     })
   }else{
     next(new Error('Invalid Decimal Number'))
   }
})

//3 Octal to All

app.get('/O2ALL/:octal',(req,res,next)=>{
  let octal = req.params.octal
   if(octal){
     res.send({
       resultO2B: convert.DecimalToBinary_Octal_hexaDecimal(convert.BinaryToDecimal(octal, base8), base2),
       resultO2D: convert.BinaryToDecimal(octal,base8),
       resultO2HD : convert.DecimalToBinary_Octal_hexaDecimal(convert.BinaryToDecimal(octal, base8), base16)
     })
   }else{
     next(new Error('Invalid Octal Number'))
   }
})

//4 HexaDecimal to All

app.get('/HD2ALL/:hexadecimal',(req,res,next)=>{
  let hexadecimal = req.params.hexadecimal
   if(hexadecimal){
     res.send({
       resultHD2B: convert.DecimalToBinary_Octal_hexaDecimal(convert.hexadecimalToBinary(hexadecimal,base16), base2),
       resultHD2D: convert.hexadecimalToBinary(hexadecimal,base16),
       resultHD2O : convert.DecimalToBinary_Octal_hexaDecimal(convert.hexadecimalToBinary(hexadecimal,base16), base8)
     })
   }else{
     next(new Error('Invalid HexaDecimal Number'))
   }
})


module.exports = app