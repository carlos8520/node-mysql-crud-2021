const controller = {};

// this method will get all entries
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer", (err, customers) => {
      if (err) {
        res.json(err);
      } else {
        res.render("customers", {
          data: customers,
        });
      }
    });
  });
};

// this method will save a new entry in the database
controller.save = (req, res) => {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query("INSERT INTO customer set ?", [data], (err, customer) => {
      console.log(customer);
      res.redirect("/");
    });
  });
};

// this method will help to retrieve all info of one entry that will be modified
controller.edit = (req, res) => {
  const { id } = req.params;

  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, customer) => {
      res.render("customerUpdate", {
        data: customer[0],
      });
    });
  });
};

// this method will modifie a selected entry
controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE customer set ? WHERE id = ?",
      [newCustomer, id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

// this method will delete the selected entry
controller.delete = (req, res) => {
  const { id } = req.params;

  req.getConnection((err, conn) => {
    conn.query("DELETE FROM customer WHERE id = ?", [id], (err, rows) => {
      res.redirect("/");
    });
  });
};

module.exports = controller;
