const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
  index(req, res) {
    return res.render("index");
  },
  async orphanage(req, res) {
    const id = req.query.id;
    try {
      const db = await Database;
      const orphanage = await db.get(
        `SELECT * FROM orphanages WHERE id = ${id}`
      );
      if (orphanage === undefined) {
        return res.redirect("/orphanages");
      }
      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];
      orphanage.open_on_weekends = orphanage.open_on_weekends != "0";
      return res.render("orphanage", { orphanage });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados.");
    }
  },
  async orphanages(req, res) {
    try {
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages");
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },
  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },
  async saveOrphanage(req, res) {
    const fields = req.body
    // verifying if the all camps are typed
    if(!Object.values(fields).includes('')) {
      try {
        const db = await Database
        await saveOrphanage(db, {
          lat: fields.lat,
          lng: fields.lng,
          name: fields.name,
          about: fields.about,
          whatsapp: fields.whatsapp,
          images: fields.images,
          instructions: fields.instructions,
          opening_hours: fields.opening_hours,
          open_on_weekends: fields.open_on_weekends,
        })
        return res.redirect('/orphanages')
      } catch (error) {
        console.log(error)
        return res.send('Ocorreu um erro com o banco de dados')
      }
    } else {
      res.send('Todos os campos devem ser preenchidos!')
    }
  }
};
