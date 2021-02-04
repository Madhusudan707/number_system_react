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


//1. Binary to Decimal
app.get('/B2D/:binary', (req,res,next) => {
   let binary = req.params.binary
   let base2 = 2
    if(binary){
      res.send({
        resultB2D: convert.BinaryToDecimal(binary,base2)
      })
    }else{
      next(new Error('Invalid Binary Number'))
    }
  })

//2. Binary to Octal
app.get('/B2O/:binary',(req,res,next)=>{
  let binary = req.params.binary
  let base2 = 2
  if(binary){
    res.send({
      resultB2O: convert.BinaryToOctal(binary, base2)
    })
  }else{
    next(new Error('Invalid Binary Number'))
  }
})

//3. Binary to HexaDecimal
app.get('/B2HD/:binary',(req,res,next)=>{
  let binary = req.params.binary
  let base2 = 2
  let base16 = 16
  if(binary){
    res.send({
      resultB2HD : convert.DecimalToBinary_Octal_hexaDecimal(convert.BinaryToDecimal(binary,base2),base16)
    })
  }else{
    next(new Error('Invalid Binary Number'))
  }
})

//4. Decimal to Binary

app.get('/D2B/:decimal',(req,res,next)=>{
  let decimal = req.params.decimal
  let base2 = 2
  if(decimal){
    res.send({
      resultD2B: convert.DecimalToBinary_Octal_hexaDecimal(decimal, base2)
    })
  }else{
    next(new Error('Invalid decimal Number'))
  }
})

//5. Decimal to Octal
app.get('/D2O/:decimal',(req,res,next)=>{
  let decimal = req.params.decimal
  let base8 = 8
  if(decimal){
    res.send({
      resultD2O : convert.DecimalToBinary_Octal_hexaDecimal(decimal, base8)
    })
  }else{
    next(new Error('Invalid decimal Number'))
  }
})

//6. Decimal to HexaDecimal
app.get('/D2HD/:decimal',(req,res,next)=>{
  let decimal = req.params.decimal
  let base16 = 16
  if(decimal){
    res.send({
      resultD2HD : convert.DecimalToBinary_Octal_hexaDecimal(decimal, base16)
    })
  }else{
    next(new Error('Invalid decimal Number'))
  }
})

//7. Octal to Binary

app.get('/O2B/:octal',(req,res,next)=>{
  let octal = req.params.octal
  let base8 = 8
  let base2 = 2
  if(octal){
    res.send({
      resultO2B : convert.DecimalToBinary_Octal_hexaDecimal(convert.BinaryToDecimal(octal, base8), base2)
    })
  }else{
    next(new Error('Invalid octal Number'))
  }
})

//8. Octal to Decimal

app.get('/O2D/:octal',(req,res,next)=>{
  let octal = req.params.octal
  let base8 = 8
  if(octal){
    res.send({
      resultO2D:convert.BinaryToDecimal(octal,base8)
    })
  }else{
    next(new Error('Invalid octal Number'))
  }
})

//9. Octal to HexaDecimal

app.get('/O2HD/:octal',(req,res,next)=>{
  let octal = req.params.octal
  let base8 = 8
  let base16 = 16
  if(octal){
    res.send({
      resultO2B : convert.DecimalToBinary_Octal_hexaDecimal(convert.BinaryToDecimal(octal, base8), base16)
    })
  }else{
    next(new Error('Invalid octal Number'))
  }
})

//10 Hexadecimal to Binary

app.get('/HD2B/:hexadecimal',(req,res,next)=>{
  let hexadecimal = req.params.hexadecimal
  let base16 = 16
  let base2 = 2
  if(hexadecimal){
    res.send({
      resultHD2B : convert.DecimalToBinary_Octal_hexaDecimal(convert.hexadecimalToBinary(hexadecimal,base16), base2)
    })
  }else{
    next(new Error('Invalid HexaDecimal Number'))
  }
})

//11. Hexadecimal to Decimal
app.get('/HD2D/:hexadecimal',(req,res,next)=>{
  let hexadecimal = req.params.hexadecimal
  let base16 = 16
  if(hexadecimal){
    res.send({
      resultHD2B : convert.hexadecimalToBinary(hexadecimal,base16)
    })
  }else{
    next(new Error('Invalid HexaDecimal Number'))
  }
})

//12. Hexadecimal to Octal
app.get('/HD2O/:hexadecimal',(req,res,next)=>{
  let hexadecimal = req.params.hexadecimal
  let base16 = 16
  let base8 = 8
  if(hexadecimal){
    res.send({
      resultHD2B : convert.DecimalToBinary_Octal_hexaDecimal(convert.hexadecimalToBinary(hexadecimal,base16), base8)
    })
  }else{
    next(new Error('Invalid HexaDecimal Number'))
  }
})

//13. Binary to All

app.get('/B2ALL/:binary',(req,res,next)=>{
  let binary = req.params.binary
  let base2 = 2
  let base16 = 16
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

//14. Decimal to All
app.get('/D2ALL/:decimal',(req,res,next)=>{
  let decimal = req.params.decimal
  let base2 = 2
  let base8 = 8
  let base16 = 16
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

//15 Octal to All

app.get('/O2ALL/:octal',(req,res,next)=>{
  let octal = req.params.octal
  let base2 = 2
  let base8 = 8
  let base16 = 16
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

//16 HexaDecimal to All

app.get('/HD2ALL/:hexadecimal',(req,res,next)=>{
  let hexadecimal = req.params.hexadecimal
  let base2 = 2
  let base8 = 8
  let base16 = 16
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