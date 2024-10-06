const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors')
const authRoute = require('./routes/authRoutes');  

// Routes Here  
const app = express();  
app.use(bodyParser.json());  
app.use(cors());  

// endpoint here  
app.get('/', function(req, res) {  
    res.send("Karl Vincent C. Suayan");  
});  

app.use('/api/user', authRoute);  

const PORT = 5003;  

app.listen(PORT, () => {  
    console.log(`Server is running on port ${PORT}`);  
});