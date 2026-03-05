const express = require("express");

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

let notes = []; // In-memory storage for notes

app.get('/notes',(req,res)=>{
    res.send(notes);
});

// Create a Api notes -> {title,content}

app.post('/notes',(req,res)=>{
    // const {title,content} = req.body;
    console.log(req.body);
    notes.push(req.body);
    res.json({message:'Note added successfully'});
});

// Delete a note by index

app.delete('/notes/:index',(req,res)=>{
    const index = parseInt(req.params.index);
    // if(index >= 0 && index < notes.length){
    //     notes.splice(index,1);
    //     res.json({message:'Note deleted successfully'});
    // }else{
    //     res.status(404).json({message:'Note not found'});
    // }

    delete notes[index];
    res.json({message:'Note deleted successfully'});
});


// Update a note by index use Patch/notes/:index => {title,content}

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const {title} = req.body;

    notes[index].title = title;
    res.json({message:'Note updated successfully'});
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
