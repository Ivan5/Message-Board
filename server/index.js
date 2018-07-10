const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.json({
    message: 'Full stack meesage Board'
  });
});

const port = process.env.PORT || 3000;

app.listen(prot,()=>{
  console.log(`Server is running in port ${port}`);
});