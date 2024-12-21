import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database.js';
import dotenv from 'dotenv';
import task from './models/task.js';
import taskRouter from './routes/taskRoutes.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/api/v1/tasks', taskRouter);

sequelize.authenticate().then(()=>{
    console.log("database connected");
    // task.sync({alter:true});
    sequelize.sync().then(()=>{
        app.listen(8000,()=>{console.log('server is running at http://localhost:8000');
        });
    }).catch(err=>console.error('Failed to sync model:',err));
}).catch(err=> console.error('unable to connect to the database:',err));