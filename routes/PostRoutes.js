import express from "express";
import { TambahData, getArticle, getArticleById, updateArticle, deleteArticle } from "../controllers/PostController.js";

const router = express.Router();

// Endpoint
router.post('/tambah_article', TambahData);
router.get('/article', getArticle);
router.get('/article/:id', getArticleById);
router.put('/update_data/:id', updateArticle);
router.delete('/hapus_article/:id', deleteArticle);

export default router;