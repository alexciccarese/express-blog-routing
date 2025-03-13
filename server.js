const express = require('express')
const app = express()
const port = 3002

//Configuriamo gli assets statici per visualizzare le immagini di ogni post
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
})

app.get('/', (req, res) => {
  
  res.send('Server del mio blog')
})

const posts = [
  {
    id: 1,
    title: 'Ciambellone',
    content: 'Soft anf fluffy cake',
    image: './images/ciambellone.jpeg',
    tags: ['easy-recipe', 'homemade', 'fluffy', 'breakfast', 'snack']
  },
  {
    id: 2,
    title: 'Cracker barbabietola',
    content: 'Crispy and flavorful cracker',
    image: './images/cracker_barbabietola.jpeg',
    tags: ['healthy-snack', 'homemade', 'crispy', 'vegan', 'gluten-free']
  },
  {
    id: 3,
    title: 'Pane fritto dolce',
    content: 'Golden and crispy sweet fried bread',
    image: './images/pane_fritto_dolce.jpeg',
    tags: ['sweet-treat', 'crispy', 'homemade', 'breakfast', 'dessert']
  },
  {
    id: 4,
    title: 'Pasta barbabietola',
    content: 'Vibrant and delicious beetroot pasta',
    image: './images/pasta_barbabietola.jpeg',
    tags: ['homemade', 'colorful', 'healthy', 'vegetarian', 'dinner']
  },
  {
    id: 5,
    title: 'Torta paesana',
    content: 'A rich and rustic bread pudding cake',
    image: './images/torta_paesana.jpeg',
    tags: ['traditional', 'italian-dessert', 'rustic', 'chocolate', 'homemade']
  },
]


// root bacheca
app.get('/api/v1/bacheca', (req, res) => {

  res.json(posts)
})
