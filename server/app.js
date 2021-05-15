const express = require( "express");

const morgan = require("morgan");
var cors = require('cors')
const userRouter = require( "./api/routes/users");
const boardRouter = require ("./api/routes/boards");
const columnRouter = require( "./api/routes/columns");
const cardRouter = require( "./api/routes/cards");

require('dotenv').config();

const app = express();
/* const corsOptions ={
    origin:'https://lucid-hawking-687caa.netlify.app/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
 */
app.use(cors())
app.use(morgan('dev'));
app.use(express.json({ extended: false }));



app.use('/api/users',userRouter);
app.use('/api/boards',boardRouter);
app.use('/api/columns',columnRouter);
app.use('/api/cards',cardRouter);
app.get("/", (req, res) => res.send("API RUNNING..."));
app.use((req,res,next)=>{
   const error = new Error('no route found ');
   error.status=404;
   next(error);
});

app.use((error,req,res,next)=>{
   res
       .status(error.status || 500)
       .json({
           error:{
               message:error.message
           }})
}); 


module.exports =app;




