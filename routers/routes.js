import express from "express"
import napoli from "../Napoli.js"

const router = express.Router();

//ora andremo a creare le nostre rotte CRUD

//index
router.get(`/`, (req, res) => {
    const risultato = {
        count : napoli.length,
        valore: napoli
    }
    res.json(risultato)
})

//show
router.get (`/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    const post = napoli.find(p => p.id === id)
    
    if (post) {
        res.json(post)
    }else {
        res.json({ message: `il post con id ${id} non è stato trovato`}) //message per restiture l'errore in formato json
    }
})
//store


//update

//modify

//destroy

export default router