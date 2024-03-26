import Post from "../models/PostModels.js";

const TambahData = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);

    return res.status(201).json({
      status: "Success",
      data: newPost
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.errors
    })
  }
}

const getArticle = async(req, res) => {
  try {
    const getData = await Post.find();
    return res.status(200).json({
      status: "Success",
      data: getData
    })
  } catch (error) {
    res.status(404).json({
      status: "data tidak ditemukan",
      message: error.message
    })
  }
}

const getArticleById = async(req, res) => {
  try {
    const getDataById = await Post.findById(req.params.id);
    return res.status(200).json({
      status: "Success",
      data: getDataById
    })
  } catch (error) {
    res.status(404).json({
      status: "data tidak ditemukan",
      message: error.message
    })
  }
}

const updateArticle = async (req, res) => {
  try {
    const updateData = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    return res.status(200).json({
      status: 400,
      message: "Success update data",
      data: updateData
    })
  } catch (error) {
    res.status(400).json({
      status: "gagal update data",
      message: error.message
    })
  }
}

const deleteArticle = async (req, res) => {
 try {
  await Post.findByIdAndDelete(req.params.id)

  return res.status(200).json({
    status: 200,
    message: "Hapus data berhasil",
  })
 } catch (error) {
   res.status(400).json({
      status: "gagal hapus article",
      message: error.message
    })
 }
}

export {
  TambahData,
  getArticle,
  getArticleById,
  updateArticle,
  deleteArticle
}