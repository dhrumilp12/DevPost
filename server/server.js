const require = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const route = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
    
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
      
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    
    db.once('open', () => {
        app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        })
    })
    };