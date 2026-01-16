import express from "express";

export const signup = async (req, res) => {
  res.json({
    data: "You Hit signup",
  });
};

export const login = async (req, res) => {
  res.json({
    data: "You Hit login",
  });
};

export const logout = async (req, res) => {
  res.json({
    data: "You Hit logout",
  });
};
