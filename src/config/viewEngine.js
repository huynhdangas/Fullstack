import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); // dung if else
    app.set("views", "./src/views");
};

module.exports = configViewEngine;
