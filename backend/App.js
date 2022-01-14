const express = require('express');      
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();     
app.use(cors());        
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const router = express.Router();

//meta data
const NFTmetadata = {
    "title": "NFT Metadata",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "value": "LCA Tejas",
        },
        "origin": {
            "type": "string",
            "value": "India",
        },
        "image": {
            "type": "string",
            "link": "https://gumlet.assettype.com/swarajya%2F2020-07%2F26eb5a32-9843-4d48-bca1-75746dbc212b%2Fy7g653zz2wh41.jpg?q=75&auto=format%2Ccompress&w=1200",
        }
    }
};

//routes
app.use(express.static(__dirname+'/'));

//route to nft meta data
router.get('/nft', function(req, res) {
    console.log(NFTmetadata);
    res.send(NFTmetadata);
});

app.use('/', router);
app.listen(port);
console.log('listening on port ' + port);