const db = require("../db");

class ZooController{
    async createZoo(req, res) {
        const {name, location, area, capacity} = req.body;
        const newZoo = await db.query(
            `INSERT INTO zoo (name, location, area, capacity) VALUES
            ($1, $2, $3, $4)`, [name, location, area, capacity]

        );
        const responce = await db.query(`SELECT * FROM zoo`);
        res.json(responce.rows)
    }
    // async getAllZoo(req, res) {
    //     const allZoos = await db.query(`SELECT * FROM zoo`);
    //     res.json(allZoos.rows);
    // }
    async getAllZoo(req, res) {
      try {
          const { minArea, maxArea, sortBy, searchInput } = req.query;
          let query = "SELECT * FROM zoo WHERE";
  
          if (minArea !== "") {
              query += ` area >= ${parseFloat(minArea)}`;
          } else {
              query += " area >= 0";
          }
  
          query += " AND";
  
          if (maxArea !== "") {
              query += ` area <= ${parseFloat(maxArea)}`;
          } else {
              query += ` area <= ${Number.MAX_SAFE_INTEGER}`;
          }
  
          if (searchInput !== "") {
              query += ` AND LOWER(name) LIKE LOWER('%${searchInput}%')`;
          }
  
          if (sortBy !== "") {
              query += ` ORDER BY ${sortBy}`;
          }
  
          const filteredAndSortedZoos = await db.query(query);
          res.status(200).json(filteredAndSortedZoos.rows);
      } catch (error) {
          console.error("Помилка при отриманні зоопарків:", error);
          res.status(500).json({ error: "Помилка при отриманні зоопарків" });
      }
  }
  

    async getOneZoo(req, res){
        const id = req.params.id;
        const oneZoo = await db.query(
            `SELECT * FROM zoo WHERE zoo.id=$1`,
            [id]
        );
        res.json(oneZoo.rows[0]);
    }
    async getAllTypesOfZoo(req, res) {
      const typesOfZoo = await db.query(`SELECT * FROM zooTypes`);
      res.json(typesOfZoo.rows);
    }
    async getSortedZoo(req, res){
        const sortedZoos = await db.query(
            `SELECT * FROM zoo ORDER BY area `
        );
        res.json(sortedZoos.rows)
    }

    async updateZoo(req, res){
        const {id,name, location, area, capacity} = req.body;
        const updateZoo = await db.query(
            `UPDATE zoo SET name = $1, location = $2, area = $3, capacity = $4 WHERE id= $5 RETURNING *`,
            [name, location, area, capacity, id]
        );
        res.json(updateZoo.rows[0]);
    }
    async deleteZoo(req, res){
        const id = req.params.id;
        const deleteZoo = await db.query(
            `DELETE FROM zoo WHERE zoo.id = $1`,
            [id]
        );
        res.json(deleteZoo.rows[0]);
    }
}

module.exports = new ZooController();    