const express = require(`express`);
const hbs = require(`hbs`);
const multer = require(`multer`);
const path = require(`path`);
const bodyParser = require(`body-parser`);

const upload = multer({ dest: './public/images' });

const app = express();

app.set(`view engine`,`hbs`);
app.use(express.static(path.join(__dirname,'/public')));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());


app.get(`/`,(req,res)=>{
  res.render(`index`);
})
app.post(`/`,upload.single(`uploadedFile`),(req,res)=>{
  console.log(req.body);
  console.log(req.file);
})

app.listen(3000,()=>{
  console.log('listen on port 3000!');
})
