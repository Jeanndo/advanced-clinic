const { Supplier } = require("./../models");

const createSupplier = async (req, res, next) => {
  const { supplier_company, phone, email, address } = req.body;
  try {
    const newSupplier = await Supplier.create({
      supplier_company,
      phone,
      email,
      address,
    });
    res.status(201).json({
      status: "success",
      message: "Added successfully!👍🏾",
      data: {
        supplier: newSupplier,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong  please try again!!!",
      error: error.stack,
    });
  }
};

const getAllSuplliers = async (req, res, next) => {
  try {
    const suppliers = await Supplier.findAll();

    res.status(200).json({
      status: "success",
      result: suppliers.length,
      data: {
        suppliers,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "something went wrong",
      error: error.stack,
    });
  }
};

const getSupplier = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;

    const supplier = await Supplier.findOne({
      where: { uuid },
    });

    if (!supplier) {
      return res.status(404).json({ message: "No user found with that ID" });
    }

    res.status(200).json({
      status: "success",
      data: {
        suppliers: supplier,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Error while getting a User",
    });
  }
};

const updateSupplier = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const { supplierCompany, phone, email, address } = req.body;

    const supplier = await Supplier.findOne({
      where: { uuid },
    });
    if (!supplier) {
      return res
        .status(404)
        .json({ message: "No supplier found with that ID" });
    }
    supplier.supplierCompany = supplierCompany;
    supplier.phone = phone;
    supplier.email = email;
    supplier.address = address;

    if (!supplier) {
      return res
        .status(404)
        .json({ message: "No Supplier found with that ID" });
    }

    res.status(200).json({
      status: "success",
      message: "Supplier Updated Successfully!!👍🏾",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Error while Updating a Supplier",
    });
  }
};

const deleteSupplier = async (req, res, next) => {
  try {
    const uuid = req.params.uuid;

    const supplier = await Supplier.findOne({
      where: { uuid: uuid },
    });

    if (!supplier) {
      return res
        .status(404)
        .json({ message: "No supplier found with that ID" });
    }

    res.status(200).json({
      status: "success",
      message: "Supplier Deleted Successfully !!👍🏾",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Error while deleting a Supplier",
    });
  }
};

module.exports = {
  createSupplier,
  getSupplier,
  getAllSuplliers,
  updateSupplier,
  deleteSupplier,
};
