const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const deptRoutes = require('./routes/deptRoutes');
const crsRoutes = require('./routes/crsRoutes');
const stdRoutes = require('./routes/stdRoutes');

const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.get('/', function(req, res) {
    res.send('Karl Vincent C. Suayan, Girl Codrrr');
});

// Endpoint Here
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/dept', deptRoutes);
app.use('/api/crs', crsRoutes);
app.use('/api/std', stdRoutes);

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
