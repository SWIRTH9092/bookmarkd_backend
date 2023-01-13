require('dotenv').config()
const mongoose = require('./connection')
const Bookmark = require('./bookmark')

//  ran seeds with terminal command: node models/seed.js
mongoose.connection.on('open', () => {

    // define data we want to put in the database
    const startingBookmark =  [
        { title: "General Assembly Bookmarkd Assignment",
          url: "https://turmeric.seircohort.com/react-fundamentals/week-17/day-2/lab"  },
        { title: "Bookmark backend GitHub code",
          url: "https://github.com/SWIRTH9092/bookmarkd_Lab"  },
      ]
      
      // Delete all Bookmark Items
      Menu.deleteMany({}, (err, data) => {
        // Create new Menu Item once old Menu Items are deleted
        Menu.create(startingBookmark, (err, data) =>{
            mongoose.connection.close();
        })
    })    
})