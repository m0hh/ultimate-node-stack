import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));

app.get('/', (req,res) => {
    debugger; // eslint-disable-line no-debugger
    res.json({hello:'momosssoso'});
})

const port = Number(process.env.PORT ?? 8080);
app.listen(port,'0.0.0.0', () =>{
    console.log(`server started at localhost:${port}`)
})