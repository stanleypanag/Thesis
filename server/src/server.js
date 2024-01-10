const express = require('express');
const fs = require('fs');   // filesystem node library
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { createClient } = require('@supabase/supabase-js');

//envs variables
require('dotenv').config();
const PORT = process.env.PORT;
const supabaseKey = process.env.SERVICE_KEY;
const supabaseUrl = process.env.PROJECT_URL;

const app = express();

//middleware
app.use(morgan('combined'));
app.use(cors({credentials:true, origin:`http://localhost:${PORT}`}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const supabase = createClient(supabaseUrl, supabaseKey);

app.get("/testroute", (req, res) =>{
    res.json(
        { "testdata": ["data1","data2","data3"] }
    )
});

app.get('/fetchData', async (req, res) => {
    try {
      const { data, error } = await supabase
        .from('user')
        .select('*'); 
  
      if (error) {
        throw error;
      }
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/insert', async (req, res) => {
    try {
      const { data, error } = await supabase
        .from('user')
        .insert([
          { email: 'test@email.com', password: '1234', role: 'user' },
        ]);
  
      if (error) {
        throw error;
      }
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
app.get('/', (req, res) => {
    res.send("Hello I am working my friend Supabase <3");
});

app.listen(PORT, ()=> {
    console.log(`Server Started on ${PORT}`)
});

