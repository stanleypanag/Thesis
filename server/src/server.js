require('dotenv').config();
const express = require('express');
const fs = require('fs');   // filesystem node library
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { createClient } = require('@supabase/supabase-js');

//envs variables
const PORT = process.env.PORT;
const supabaseKey = process.env.SERVICE_KEY;
const supabaseUrl = process.env.PROJECT_URL;

const app = express();

//middleware
app.use(morgan('dev'));
app.use(cors({credentials:true, origin:`http://localhost:${PORT}`}));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(express.json());

const supabase = createClient(supabaseUrl, supabaseKey);

app.listen(PORT, ()=> {
    console.log(`Server Started on ${PORT}`)
});

app.get('/api/v1/users', async (req, res) => {
    try{
        const { data, error } = await supabase.from('user').select('*'); 
        res.json({
            status: "success",
            results: data.length,
            data: {
                users: data
            }
        })
    }catch(error){
        res.status(404).then(res.json({
            status: "ERR",
            message: error
        }));
    }    
});

app.get('/api/v1/users/:user_id', async (req, res) => {
    try{
        const { data, error } = await supabase.from('user').select().eq('user_id', req.params.user_id); 
        res.json({
            status: "success",
            results: data.length,   
            data: {
                user: data
            }
        })
    }catch (error){
        console.log(error)
    }    
});

app.post('/api/v1/user/register', async (req, res) => {
        try{
            const { data, error } = await supabase
            .from('user')
            .insert([
            { email: req.body.email, password:req.body.password, role: req.body.role, first_name: req.body.first_name, last_name: req.body.last_name}
            ]).select();
            res.json({
                status: "success", 
                data: {
                    user: data
                }
            })
        } catch (error){
            res.send(console.log(error))
        }
});



