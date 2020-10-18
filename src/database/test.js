const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
//   inserting a orphanage on table
  await saveOrphanage(db, {
    id: 1,
    lat: "-5.0937358",
    lng: "-42.8511182",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou invulnerabilidade social.",
    whatsapp: "86988403538",
    images: [
      "https://images.unsplash.com/photo-1576024267263-70f1caffd6fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1573261524302-6f1dc1458378?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1567974062356-dc24af997614?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1600720685534-34b48dc60ad2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0"
  });

  // get all orphanages from table
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

//   // get one orphanage from id
  const orphanage = await db.get('SELECT * FROM orphanages WHERE id = "5"');
  console.log(orphanage);

//   delete a date from id
  await db.run(`DELETE FROM orphanages WHERE id = '5'`)
});