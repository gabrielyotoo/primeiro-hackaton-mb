import app from './App';

app.disable('etag');
app.listen(3030, () => console.log('listening 3030'));
